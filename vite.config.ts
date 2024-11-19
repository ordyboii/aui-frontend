import { defineConfig } from "vite";
import { resolve } from "path";
import { copyFile } from "fs/promises";

export default defineConfig({
  plugins: [
    {
      name: "Copy plugin files for npm",
      async closeBundle() {
        await copyFile("package.json", "dist/package.json");
        await copyFile("LICENSE", "dist/LICENSE");
        await copyFile("README.md", "dist/README.md");
      },
    },
  ],
  publicDir: "src/plugin",
  build: {
    outDir: "dist",
    lib: {
      entry: resolve(__dirname, "src/aui-frontend.ts"),
      formats: ["cjs"],
    },
  },
});
