import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, "../dist");

function processDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let count = 0;

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      count += processDir(fullPath);
    } else if (entry.isFile() && entry.name.endsWith(".d.ts.map")) {
      const mapContent = JSON.parse(fs.readFileSync(fullPath, "utf8"));
      if (Array.isArray(mapContent.sources)) {
        mapContent.sourcesContent = mapContent.sources.map((relSource) => {
          const resolvedPath = path.resolve(dir, relSource);
          if (fs.existsSync(resolvedPath)) {
            return fs.readFileSync(resolvedPath, "utf8");
          }
          return "";
        });
        fs.writeFileSync(fullPath, JSON.stringify(mapContent));
        count++;
      }
    }
  }

  return count;
}

if (!fs.existsSync(distDir)) {
  console.error("[inline-dts] dist directory not found!");
  process.exit(1);
}

const totalInlined = processDir(distDir);
console.log(`[inline-dts] Successfully embedded sourcesContent in ${totalInlined} declaration map(s).`);
