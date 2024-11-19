import { defineConfig } from "vite";
import { resolve } from "path";
import { copyFile } from "fs/promises";

export default defineConfig({
  plugins: [
    {
      name: "Copy plugin config",
      async buildStart() {
        await copyFile(
          resolve("src/govuk-prototype-kit.config.json"),
          resolve("./govuk-prototype-kit.config.json")
        );
      },
    },
  ],
  publicDir: "src/plugin",
  build: {
    outDir: "aui",
    lib: {
      entry: resolve(__dirname, "src/aui-frontend.ts"),
      formats: ["cjs"],
    },
  },
});
