import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  publicDir: "src/plugin",
  build: {
    outDir: "aui",
    lib: {
      entry: resolve(__dirname, "src/aui-frontend.ts"),
      formats: ["cjs"],
    },
  },
});
