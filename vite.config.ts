import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  publicDir: "src/assets",
  build: {
    outDir: "aui",
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      formats: ["es"],
    },
  },
});
