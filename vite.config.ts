import { defineConfig } from "vite";
import { resolve } from "path";
import { copyFile } from "fs/promises";

export default defineConfig({
  plugins: [
    {
      name: "Copy package.json",
      async closeBundle() {
        await copyFile(resolve("package.json"), resolve("dist/package.json"));
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
