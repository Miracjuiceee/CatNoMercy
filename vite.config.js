import { resolve } from "path";
import { defineConfig } from "vite";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

export default defineConfig({
  root: "src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        links: resolve(root, "links", "index.html"),
        memeGen: resolve(root, "memeGen", "index.html"),
        story: resolve(root, "story", "index.html"),
        team: resolve(root, "team", "index.html"),
      },
    },
  },
});
