import { defineConfig } from "vite";
import { resolve } from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "package.json",
          dest: "",
        },
        {
          src: "LICENSE",
          dest: "",
        },
        {
          src: "README.md",
          dest: "",
        },
      ],
    }),
  ],
  publicDir: "src/plugin",
  build: {
    outDir: "dist",
    lib: {
      entry: resolve(__dirname, "src/aui-frontend.ts"),
      formats: ["es"],
    },
  },
});
