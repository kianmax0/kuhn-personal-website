import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** Copy dist/index.html to dist/404.html for GitHub Pages SPA client routes on refresh */
function spaFallback404() {
  return {
    name: "spa-fallback-404",
    closeBundle() {
      const distDir = path.resolve(__dirname, "dist");
      const indexHtml = path.join(distDir, "index.html");
      const notFoundHtml = path.join(distDir, "404.html");
      if (fs.existsSync(indexHtml)) {
        fs.copyFileSync(indexHtml, notFoundHtml);
      }
    },
  };
}

// GitHub Project Pages: https://<user>.github.io/<repo>/
export default defineConfig(({ mode }) => ({
  plugins: [react(), spaFallback404()],
  base: mode === "production" ? "/kuhn-personal-website/" : "/",
}));
