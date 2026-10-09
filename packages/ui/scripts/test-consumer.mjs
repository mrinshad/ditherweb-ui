import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uiPackageDir = path.resolve(__dirname, "..");
const testRootDir = path.join(os.tmpdir(), `ditherweb-consumer-test-${Date.now()}`);

console.log("===============================================================");
console.log("       @ditherweb/ui — Automated Consumer Verification Suite   ");
console.log("===============================================================");
console.log(`Test Environment: ${testRootDir}`);

fs.mkdirSync(testRootDir, { recursive: true });

try {
  // ---------------------------------------------------------------------------
  // STEP 1: Pack @ditherweb/ui into an npm tarball
  // ---------------------------------------------------------------------------
  console.log("\n[Step 1/6] Packing @ditherweb/ui npm tarball...");
  const packOutput = execSync(`npm pack --pack-destination="${testRootDir}"`, {
    cwd: uiPackageDir,
    encoding: "utf8",
  }).trim();

  const tarballName = packOutput.split("\n").pop().trim();
  const tarballPath = path.join(testRootDir, tarballName);

  if (!fs.existsSync(tarballPath)) {
    throw new Error(`Tarball was not created at expected location: ${tarballPath}`);
  }
  console.log(`✓ Created tarball: ${tarballName}`);

  // ---------------------------------------------------------------------------
  // STEP 2: Inspect Tarball Metadata & Source Maps
  // ---------------------------------------------------------------------------
  console.log("\n[Step 2/6] Verifying tarball contents, source maps, and metadata...");
  const inspectDir = path.join(testRootDir, "inspect-tarball");
  fs.mkdirSync(inspectDir, { recursive: true });
  execSync(`tar -xzf "${tarballPath}" -C "${inspectDir}"`, { stdio: "inherit" });

  const pkgDir = path.join(inspectDir, "package");

  // Check required distribution files
  const requiredFiles = [
    "package.json",
    "README.md",
    "LICENSE",
    "dist/index.js",
    "dist/index.d.ts",
    "dist/styles/index.css",
    "dist/styles/tokens.css",
    "dist/styles/primitives.css",
  ];

  for (const relFile of requiredFiles) {
    const fullPath = path.join(pkgDir, relFile);
    if (!fs.existsSync(fullPath)) {
      throw new Error(`Missing required package file in tarball: ${relFile}`);
    }
  }
  console.log("✓ Core distribution files and metadata (README.md, LICENSE) verified.");

  // Check that src/ was not leaked into tarball
  if (fs.existsSync(path.join(pkgDir, "src"))) {
    throw new Error("Source directory 'src/' leaked into npm tarball!");
  }
  console.log("✓ Confirmed src/ directory is excluded from npm tarball.");

  // Verify package metadata in packed artifact
  const tarballPkgJson = JSON.parse(fs.readFileSync(path.join(pkgDir, "package.json"), "utf8"));
  if (tarballPkgJson.name !== "@ditherweb/ui") {
    throw new Error(`Packed package.json has incorrect package name: ${tarballPkgJson.name}`);
  }
  if (tarballPkgJson.publishConfig?.access !== "public") {
    throw new Error("Packed package.json is missing publishConfig.access: 'public' configuration!");
  }
  if (tarballPkgJson.private === true) {
    throw new Error("Packed package.json unexpectedly retains private: true property!");
  }
  if (tarballPkgJson.license !== "MIT") {
    throw new Error(`Packed package.json has incorrect license: ${tarballPkgJson.license}`);
  }
  if (!tarballPkgJson.exports || !tarballPkgJson.exports["."] || !tarballPkgJson.exports["./styles"]) {
    throw new Error("Packed package.json is missing required exports entries!");
  }
  if (!tarballPkgJson.peerDependencies?.react || !tarballPkgJson.peerDependencies?.["react-dom"]) {
    throw new Error("Packed package.json is missing React peerDependencies!");
  }
  console.log("✓ Verified package metadata: public-package invariants, MIT license, exports, and peerDependencies confirmed.");

  // Verify inlined source maps in both .js.map and .d.ts.map
  const buttonJsMap = JSON.parse(
    fs.readFileSync(path.join(pkgDir, "dist/components/button.js.map"), "utf8")
  );
  if (!buttonJsMap.sourcesContent || buttonJsMap.sourcesContent.length === 0) {
    throw new Error("JavaScript map dist/components/button.js.map is missing inlined sourcesContent!");
  }
  const inlinedJsSource = buttonJsMap.sourcesContent[0];
  if (!inlinedJsSource.includes("const Button = forwardRef") && !inlinedJsSource.includes("Button")) {
    throw new Error("Inlined JavaScript source map content does not match button component source!");
  }

  const buttonDtsMap = JSON.parse(
    fs.readFileSync(path.join(pkgDir, "dist/components/button.d.ts.map"), "utf8")
  );
  if (!buttonDtsMap.sourcesContent || buttonDtsMap.sourcesContent.length === 0) {
    throw new Error("Declaration map dist/components/button.d.ts.map is missing inlined sourcesContent!");
  }
  const inlinedDtsSource = buttonDtsMap.sourcesContent[0];
  if (!inlinedDtsSource.includes("Button")) {
    throw new Error("Inlined declaration map content does not match button component source!");
  }
  console.log("✓ Verified both JavaScript (.js.map) and declaration (.d.ts.map) maps contain valid embedded source content.");

  // ---------------------------------------------------------------------------
  // STEP 3: Test Isolated Vite 6 + React 18 Consumer
  // ---------------------------------------------------------------------------
  console.log("\n[Step 3/6] Running isolated Vite 6 + React 18.3 consumer test...");
  const viteReact18Dir = path.join(testRootDir, "vite-react18-consumer-app");
  fs.mkdirSync(path.join(viteReact18Dir, "src"), { recursive: true });

  const viteReact18Pkg = {
    name: "vite-react18-consumer-app",
    version: "1.0.0",
    type: "module",
    dependencies: {
      "@ditherweb/ui": `file:${tarballPath}`,
      react: "18.3.1",
      "react-dom": "18.3.1",
      clsx: "^2.1.1",
      "tailwind-merge": "^3.7.0",
    },
    devDependencies: {
      "@types/react": "18.3.1",
      "@types/react-dom": "18.3.1",
      typescript: "^5.0.0",
      vite: "^6.0.0",
    },
  };
  fs.writeFileSync(path.join(viteReact18Dir, "package.json"), JSON.stringify(viteReact18Pkg, null, 2));

  const viteReact18TsConfig = {
    compilerOptions: {
      target: "ES2022",
      useDefineForClassFields: true,
      lib: ["ES2022", "DOM", "DOM.Iterable"],
      module: "ESNext",
      skipLibCheck: true,
      moduleResolution: "bundler",
      resolveJsonModule: true,
      isolatedModules: true,
      noEmit: true,
      jsx: "react-jsx",
      strict: true,
    },
    include: ["src"],
  };
  fs.writeFileSync(path.join(viteReact18Dir, "tsconfig.json"), JSON.stringify(viteReact18TsConfig, null, 2));

  fs.writeFileSync(
    path.join(viteReact18Dir, "vite.config.ts"),
    `import { defineConfig } from 'vite';
export default defineConfig({
  build: { outDir: 'dist', emptyOutDir: true },
});\n`
  );

  fs.writeFileSync(
    path.join(viteReact18Dir, "index.html"),
    `<!DOCTYPE html>
<html>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>\n`
  );

  fs.writeFileSync(
    path.join(viteReact18Dir, "src/App.tsx"),
    `import React, { useState } from 'react';
import '@ditherweb/ui/styles';
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Badge,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  CRT,
  Dither,
} from '@ditherweb/ui';

export function App() {
  const [open, setOpen] = useState(false);
  return (
    <CRT scanlines flicker glow>
      <Dither pattern="bayer" intensity="medium">
        <Card variant="raised">
          <CardHeader>
            <CardTitle>React 18 Consumer App</CardTitle>
            <Badge variant="retro">React 18.3.1</Badge>
          </CardHeader>
          <CardContent>
            <Button variant="default" onClick={() => setOpen(!open)}>
              Toggle Dialog
            </Button>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button variant="outline">Open Modal</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogTitle>React 18 Modal Content</DialogTitle>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      </Dither>
    </CRT>
  );
}\n`
  );

  fs.writeFileSync(
    path.join(viteReact18Dir, "src/main.tsx"),
    `import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
ReactDOM.createRoot(document.getElementById('root')!).render(<App />);\n`
  );

  execSync("npm install --no-audit --no-fund", { cwd: viteReact18Dir, stdio: "inherit" });
  execSync("npx tsc --noEmit", { cwd: viteReact18Dir, stdio: "inherit" });
  execSync("npx vite build", { cwd: viteReact18Dir, stdio: "inherit" });
  console.log("✓ Vite 6 + React 18 consumer: typecheck and production build passed.");

  // ---------------------------------------------------------------------------
  // STEP 4: Test Isolated Vite 6 + React 19 Consumer
  // ---------------------------------------------------------------------------
  console.log("\n[Step 4/6] Running isolated Vite 6 + React 19 consumer test...");
  const viteAppDir = path.join(testRootDir, "vite-consumer-app");
  fs.mkdirSync(path.join(viteAppDir, "src"), { recursive: true });

  const vitePkg = {
    name: "vite-consumer-app",
    version: "1.0.0",
    type: "module",
    dependencies: {
      "@ditherweb/ui": `file:${tarballPath}`,
      react: "^19.0.0",
      "react-dom": "^19.0.0",
      clsx: "^2.1.1",
      "tailwind-merge": "^3.7.0",
    },
    devDependencies: {
      "@types/react": "^19.0.0",
      "@types/react-dom": "^19.0.0",
      typescript: "^5.0.0",
      vite: "^6.0.0",
    },
  };
  fs.writeFileSync(path.join(viteAppDir, "package.json"), JSON.stringify(vitePkg, null, 2));

  const viteTsConfig = {
    compilerOptions: {
      target: "ES2022",
      useDefineForClassFields: true,
      lib: ["ES2022", "DOM", "DOM.Iterable"],
      module: "ESNext",
      skipLibCheck: true,
      moduleResolution: "bundler",
      resolveJsonModule: true,
      isolatedModules: true,
      noEmit: true,
      jsx: "react-jsx",
      strict: true,
    },
    include: ["src"],
  };
  fs.writeFileSync(path.join(viteAppDir, "tsconfig.json"), JSON.stringify(viteTsConfig, null, 2));

  fs.writeFileSync(
    path.join(viteAppDir, "vite.config.ts"),
    `import { defineConfig } from 'vite';
export default defineConfig({
  build: { outDir: 'dist', emptyOutDir: true },
});\n`
  );

  fs.writeFileSync(
    path.join(viteAppDir, "index.html"),
    `<!DOCTYPE html>
<html>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>\n`
  );

  fs.writeFileSync(
    path.join(viteAppDir, "src/App.tsx"),
    `import React, { useState } from 'react';
import '@ditherweb/ui/styles';
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Badge,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  CRT,
  Dither,
} from '@ditherweb/ui';

export function App() {
  const [open, setOpen] = useState(false);
  return (
    <CRT scanlines flicker glow>
      <Dither pattern="bayer" intensity="medium">
        <Card variant="raised">
          <CardHeader>
            <CardTitle>Vite Consumer App</CardTitle>
            <Badge variant="retro">v1.0</Badge>
          </CardHeader>
          <CardContent>
            <Button variant="default" onClick={() => setOpen(!open)}>
              Toggle Dialog
            </Button>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button variant="outline">Open Modal</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogTitle>Modal Content</DialogTitle>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      </Dither>
    </CRT>
  );
}\n`
  );

  fs.writeFileSync(
    path.join(viteAppDir, "src/main.tsx"),
    `import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
ReactDOM.createRoot(document.getElementById('root')!).render(<App />);\n`
  );

  execSync("npm install --no-audit --no-fund", { cwd: viteAppDir, stdio: "inherit" });
  const installedVitePkg = path.join(viteAppDir, "node_modules/@ditherweb/ui");
  if (fs.lstatSync(installedVitePkg).isSymbolicLink()) {
    throw new Error("Consumer installed @ditherweb/ui as a workspace symlink rather than from the packed tarball!");
  }
  execSync("npx tsc --noEmit", { cwd: viteAppDir, stdio: "inherit" });
  execSync("npx vite build", { cwd: viteAppDir, stdio: "inherit" });

  const viteDistAssets = path.join(viteAppDir, "dist/assets");
  const assetFiles = fs.readdirSync(viteDistAssets);
  const cssAsset = assetFiles.find((f) => f.endsWith(".css"));
  const jsAsset = assetFiles.find((f) => f.endsWith(".js"));

  if (!cssAsset || !jsAsset) {
    throw new Error("Vite production build failed to produce CSS or JS asset bundles!");
  }
  const bundledCss = fs.readFileSync(path.join(viteDistAssets, cssAsset), "utf8");
  if (!bundledCss.includes("oklch")) {
    throw new Error("Vite CSS output bundle is missing Ditherweb theme tokens!");
  }
  console.log("✓ Vite 6 + React 19 consumer: typecheck, bundling, and CSS token inclusion passed.");

  // ---------------------------------------------------------------------------
  // STEP 5: Test Isolated Next.js 16 App Router (RSC) Consumer
  // ---------------------------------------------------------------------------
  console.log("\n[Step 5/6] Running isolated Next.js 16 App Router (RSC) consumer test...");
  const nextAppDir = path.join(testRootDir, "next-consumer-app");
  fs.mkdirSync(path.join(nextAppDir, "app"), { recursive: true });

  const nextPkg = {
    name: "next-consumer-app",
    version: "1.0.0",
    private: true,
    dependencies: {
      "@ditherweb/ui": `file:${tarballPath}`,
      next: "16.4.0",
      react: "19.3.0",
      "react-dom": "19.3.0",
      clsx: "^2.1.1",
      "tailwind-merge": "^3.7.0",
    },
    devDependencies: {
      "@types/node": "^20.0.0",
      "@types/react": "^19.0.0",
      "@types/react-dom": "^19.0.0",
      typescript: "^5.0.0",
    },
  };
  fs.writeFileSync(path.join(nextAppDir, "package.json"), JSON.stringify(nextPkg, null, 2));

  const nextTsConfig = {
    compilerOptions: {
      target: "ES2022",
      lib: ["dom", "dom.iterable", "esnext"],
      allowJs: true,
      skipLibCheck: true,
      strict: true,
      noEmit: true,
      esModuleInterop: true,
      module: "esnext",
      moduleResolution: "bundler",
      resolveJsonModule: true,
      isolatedModules: true,
      jsx: "preserve",
      incremental: true,
    },
    include: ["app/**/*"],
  };
  fs.writeFileSync(path.join(nextAppDir, "tsconfig.json"), JSON.stringify(nextTsConfig, null, 2));

  fs.writeFileSync(
    path.join(nextAppDir, "next.config.ts"),
    `import type { NextConfig } from 'next';
const nextConfig: NextConfig = {
  reactStrictMode: true,
};
export default nextConfig;\n`
  );

  fs.writeFileSync(
    path.join(nextAppDir, "app/layout.tsx"),
    `import '@ditherweb/ui/styles';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}\n`
  );

  fs.writeFileSync(
    path.join(nextAppDir, "app/client-section.tsx"),
    `'use client';
import React, { useState } from 'react';
import { Button, Dialog, DialogTrigger, DialogContent, DialogTitle } from '@ditherweb/ui';

export function ClientSection() {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default">Open Client Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Client Dialog Content</DialogTitle>
      </DialogContent>
    </Dialog>
  );
}\n`
  );

  fs.writeFileSync(
    path.join(nextAppDir, "app/page.tsx"),
    `import React from 'react';
import { Button, Card, CardHeader, CardTitle, CardContent, Badge, Heading, Text, Container } from '@ditherweb/ui';
import { ClientSection } from './client-section';

export default function Page() {
  return (
    <Container size="md">
      <Heading level={1}>RSC Consumer Page</Heading>
      <Text>Server-rendered text</Text>
      <Card variant="raised">
        <CardHeader>
          <CardTitle>Server Card</CardTitle>
          <Badge variant="retro">Server Component</Badge>
        </CardHeader>
        <CardContent>
          <Button variant="outline">Server Button</Button>
        </CardContent>
      </Card>
      <ClientSection />
    </Container>
  );
}\n`
  );

  execSync("npm install --no-audit --no-fund", { cwd: nextAppDir, stdio: "inherit" });
  const installedNextPkg = path.join(nextAppDir, "node_modules/@ditherweb/ui");
  if (fs.lstatSync(installedNextPkg).isSymbolicLink()) {
    throw new Error("Next.js consumer installed @ditherweb/ui as a workspace symlink rather than from the packed tarball!");
  }
  execSync("npx tsc --noEmit", { cwd: nextAppDir, stdio: "inherit" });
  execSync("npx next build", { cwd: nextAppDir, stdio: "inherit" });
  console.log("✓ Next.js 16 App Router consumer: RSC composition and next build passed.");

  // ---------------------------------------------------------------------------
  // STEP 6: Test README Documented Examples Compilation
  // ---------------------------------------------------------------------------
  console.log("\n[Step 6/6] Verifying README documented examples against installed tarball...");
  const readmeTestDir = path.join(testRootDir, "readme-examples-test");
  fs.mkdirSync(path.join(readmeTestDir, "src"), { recursive: true });

  const readmePkg = {
    name: "readme-examples-test",
    version: "1.0.0",
    type: "module",
    dependencies: {
      "@ditherweb/ui": `file:${tarballPath}`,
      react: "^19.0.0",
      "react-dom": "^19.0.0",
      clsx: "^2.1.1",
      "tailwind-merge": "^3.7.0",
    },
    devDependencies: {
      "@types/react": "^19.0.0",
      "@types/react-dom": "^19.0.0",
      typescript: "^5.0.0",
    },
  };
  fs.writeFileSync(path.join(readmeTestDir, "package.json"), JSON.stringify(readmePkg, null, 2));

  fs.writeFileSync(
    path.join(readmeTestDir, "tsconfig.json"),
    JSON.stringify({
      compilerOptions: {
        target: "ES2022",
        module: "ESNext",
        moduleResolution: "bundler",
        jsx: "react-jsx",
        skipLibCheck: true,
        noEmit: true,
        strict: true,
      },
      include: ["src/**/*"],
    }, null, 2)
  );

  // Example 1: Retro Buttons & Badges
  fs.writeFileSync(
    path.join(readmeTestDir, "src/example1.tsx"),
    `import React from "react";
import { Button, Badge } from "@ditherweb/ui";

export function ActionPanel() {
  return (
    <div className="flex items-center gap-3">
      <Button variant="default">Save Document</Button>
      <Button variant="outline">Cancel</Button>
      <Badge variant="retro">v1.0.0</Badge>
    </div>
  );
}\n`
  );

  // Example 2: Desktop Window with Titlebar & Controls
  fs.writeFileSync(
    path.join(readmeTestDir, "src/example2.tsx"),
    `import React from "react";
import { Window, WindowTitleBar, WindowTitle, WindowControls, Well } from "@ditherweb/ui";

export function SystemMonitor() {
  return (
    <Window className="w-96">
      <WindowTitleBar>
        <WindowTitle>SYSTEM.EXE</WindowTitle>
        <WindowControls onMinimize={() => {}} onClose={() => {}} />
      </WindowTitleBar>
      <div className="p-4 space-y-3">
        <Well className="p-3 font-mono text-sm">
          MEM: 640K OK<br />
          CPU: 66 MHz
        </Well>
      </div>
    </Window>
  );
}\n`
  );

  // Example 3: Visual Effects (CRT & Dither)
  fs.writeFileSync(
    path.join(readmeTestDir, "src/example3.tsx"),
    `import React from "react";
import { CRT, Dither } from "@ditherweb/ui";

export function RetroHero() {
  return (
    <CRT scanlines flicker glow phosphor="amber">
      <Dither pattern="bayer" intensity="medium">
        <div className="p-8 text-center">
          <h1 className="text-3xl font-bold">WELCOME TO CYBERSPACE</h1>
        </div>
      </Dither>
    </CRT>
  );
}\n`
  );

  execSync("npm install --no-audit --no-fund", { cwd: readmeTestDir, stdio: "inherit" });
  execSync("npx tsc --noEmit", { cwd: readmeTestDir, stdio: "inherit" });
  console.log("✓ All README documented examples compiled with ZERO TypeScript errors.");

  console.log("\n===============================================================");
  console.log("  ALL CONSUMER VERIFICATION SUITES PASSED WITH ZERO ERRORS!    ");
  console.log("===============================================================");
} finally {
  if (process.env.PRESERVE_TEST_DIR !== "true") {
    fs.rmSync(testRootDir, { recursive: true, force: true });
  }
}
