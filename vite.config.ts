import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  publicDir: "src/public",
  build: {
    outDir: "package/aui",
    lib: {
      entry: resolve(__dirname, "src/aui-frontend.ts"),
      formats: ["es"],
    },
  },
});
