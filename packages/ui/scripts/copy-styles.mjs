import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcStylesDir = path.resolve(__dirname, "../src/styles");
const distStylesDir = path.resolve(__dirname, "../dist/styles");

if (!fs.existsSync(distStylesDir)) {
  fs.mkdirSync(distStylesDir, { recursive: true });
}

const files = fs.readdirSync(srcStylesDir).filter((file) => file.endsWith(".css"));

for (const file of files) {
  const srcPath = path.join(srcStylesDir, file);
  const distPath = path.join(distStylesDir, file);
  fs.copyFileSync(srcPath, distPath);
}

console.log(`[styles] Successfully copied ${files.length} stylesheet(s) to dist/styles: ${files.join(", ")}`);
