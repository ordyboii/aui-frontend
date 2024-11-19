import { defineConfig } from "vite";
import { resolve } from "path";
import { copyFile } from "fs/promises";

export default defineConfig({
  plugins: [
    {
      name: "Copy plugin files for npm",
      async closeBundle() {
        await copyFile(
          resolve(__dirname, "package.json"),
          resolve(__dirname, "dist/package.json")
        );
        await copyFile(
          resolve(__dirname, "LICENSE"),
          resolve(__dirname, "dist/LICENSE")
        );
        await copyFile(
          resolve(__dirname, "README.md"),
          resolve(__dirname, "dist/README.md")
        );
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
