import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.resolve(__dirname, "../src");
const distDir = path.resolve(__dirname, "../dist");

function getSourceFiles(dir) {
  let results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(getSourceFiles(fullPath));
    } else if (entry.isFile() && (entry.name.endsWith(".ts") || entry.name.endsWith(".tsx"))) {
      results.push(fullPath);
    }
  }
  return results;
}

const sourceFiles = getSourceFiles(srcDir);
const failures = [];
let auditedCount = 0;

for (const srcPath of sourceFiles) {
  const content = fs.readFileSync(srcPath, "utf8");
  const hasClient = content.includes('"use client"') || content.includes("'use client'");
  if (!hasClient) continue;

  auditedCount++;
  const relPath = path.relative(srcDir, srcPath).replace(/\.tsx?$/, ".js");
  const distPath = path.join(distDir, relPath);

  if (!fs.existsSync(distPath)) {
    failures.push({ file: relPath, reason: "Emitted JS file does not exist in dist/" });
    continue;
  }

  const distContent = fs.readFileSync(distPath, "utf8");
  const lines = distContent.split("\n");
  const firstNonEmpty = lines.find((line) => line.trim().length > 0)?.trim();

  if (firstNonEmpty !== '"use client";' && firstNonEmpty !== "'use client';") {
    failures.push({
      file: relPath,
      reason: `Leading directive is missing or misplaced. Found: ${firstNonEmpty ?? "EMPTY_FILE"}`,
    });
  }
}

if (failures.length > 0) {
  console.error(`[error] Client directive verification failed for ${failures.length} module(s):`);
  for (const failure of failures) {
    console.error(`  - ${failure.file}: ${failure.reason}`);
  }
  process.exit(1);
}

console.log(`[directives] Verified all ${auditedCount} interactive client component(s) retain "use client"; at line 1.`);
