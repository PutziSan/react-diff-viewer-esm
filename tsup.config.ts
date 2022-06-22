import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.tsx"],
  sourcemap: true,
  format: ["esm", "cjs"],
  dts: true,
});
