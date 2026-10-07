import { defineConfig, globalIgnores } from "eslint/config";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextTs,
  globalIgnores(["dist/**", "node_modules/**"]),
]);

export default eslintConfig;
