import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uiPackageDir = path.resolve(__dirname, "..");
const repoRootDir = path.resolve(uiPackageDir, "../..");

console.log("===============================================================");
console.log("       @ditherweb/ui — Documentation Usage Snippet Verifier    ");
console.log("===============================================================");

// ---------------------------------------------------------------------------
// STEP 1: Verify dist entry points exist
// ---------------------------------------------------------------------------
const distDtsPath = path.join(uiPackageDir, "dist/index.d.ts");
if (!fs.existsSync(distDtsPath)) {
  console.log("dist/index.d.ts not found. Triggering build first...");
  execSync("npm run build", { cwd: uiPackageDir, stdio: "inherit" });
}

// ---------------------------------------------------------------------------
// STEP 2: Extract snippets from component-docs-registry.ts
// ---------------------------------------------------------------------------
const registryPath = path.join(repoRootDir, "apps/website/lib/component-docs-registry.ts");
if (!fs.existsSync(registryPath)) {
  console.error(`Error: Component docs registry not found at ${registryPath}`);
  process.exit(1);
}

const registryContent = fs.readFileSync(registryPath, "utf8");
const snippetRegex = /slug:\s*"([^"]+)"[\s\S]*?usageSnippet:\s*`([\s\S]*?)`/g;
const snippets = [];
let match;
while ((match = snippetRegex.exec(registryContent)) !== null) {
  snippets.push({
    slug: match[1],
    snippet: match[2],
  });
}

console.log(`\n[Registry] Discovered ${snippets.length} component documentation usage snippets.`);
if (snippets.length === 0) {
  console.error("Error: No usage snippets found in component-docs-registry.ts!");
  process.exit(1);
}

// ---------------------------------------------------------------------------
// STEP 3: Extract snippets from packages/ui/README.md
// ---------------------------------------------------------------------------
const readmePath = path.join(uiPackageDir, "README.md");
const readmeSnippets = [];
if (fs.existsSync(readmePath)) {
  const readmeContent = fs.readFileSync(readmePath, "utf8");
  const codeBlockRegex = /```tsx\n([\s\S]*?)```/g;
  let codeMatch;
  let idx = 1;
  while ((codeMatch = codeBlockRegex.exec(readmeContent)) !== null) {
    readmeSnippets.push({
      slug: `readme-example-${idx}`,
      snippet: codeMatch[1],
    });
    idx++;
  }
  console.log(`[README] Discovered ${readmeSnippets.length} usage code blocks from packages/ui/README.md.`);
}

// ---------------------------------------------------------------------------
// STEP 4: Set up isolated TypeScript compilation sandbox
// ---------------------------------------------------------------------------
const testSandboxDir = path.join(os.tmpdir(), `ditherweb-snippets-verify-${Date.now()}`);
fs.mkdirSync(path.join(testSandboxDir, "src"), { recursive: true });

try {
  // Create tsconfig.json linking @ditherweb/ui to packages/ui/dist/index.d.ts
  const tsconfig = {
    compilerOptions: {
      target: "ES2022",
      lib: ["DOM", "DOM.Iterable", "ES2022"],
      module: "ESNext",
      moduleResolution: "bundler",
      jsx: "react-jsx",
      strict: true,
      skipLibCheck: true,
      noEmit: true,
      paths: {
        "@ditherweb/ui": [distDtsPath],
      },
    },
    include: ["src/**/*"],
  };

  fs.writeFileSync(path.join(testSandboxDir, "tsconfig.json"), JSON.stringify(tsconfig, null, 2));

  // Link node_modules from root workspace so React types resolve cleanly
  const rootNodeModules = path.join(repoRootDir, "node_modules");
  if (fs.existsSync(rootNodeModules)) {
    fs.symlinkSync(rootNodeModules, path.join(testSandboxDir, "node_modules"), "junction");
  } else {
    // Fallback to ui package node_modules
    fs.symlinkSync(path.join(uiPackageDir, "node_modules"), path.join(testSandboxDir, "node_modules"), "junction");
  }

  // Write all registry snippets to src/
  for (const { slug, snippet } of snippets) {
    fs.writeFileSync(path.join(testSandboxDir, "src", `${slug}.tsx`), snippet);
  }

  // Write all readme snippets to src/
  for (const { slug, snippet } of readmeSnippets) {
    fs.writeFileSync(path.join(testSandboxDir, "src", `${slug}.tsx`), snippet);
  }

  const totalSnippets = snippets.length + readmeSnippets.length;
  console.log(`\n[Typecheck] Compiling ${totalSnippets} snippets against @ditherweb/ui declaration definitions...`);

  // Run tsc --noEmit
  execSync("npx tsc --noEmit", { cwd: testSandboxDir, stdio: "inherit" });

  console.log("\n===============================================================");
  console.log(`✓ SUCCESS: All ${totalSnippets} documentation code snippets compiled`);
  console.log("  with ZERO TypeScript errors against @ditherweb/ui distribution!");
  console.log("===============================================================\n");
} catch (error) {
  console.error("\n✖ FAILURE: TypeScript compiler found errors in documentation snippets.");
  console.error(error.message);
  process.exit(1);
} finally {
  if (process.env.PRESERVE_TEST_DIR !== "true") {
    fs.rmSync(testSandboxDir, { recursive: true, force: true });
  }
}
