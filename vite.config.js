import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// GitHub Project Pages: https://<user>.github.io/<repo>/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === "production" ? "/kuhn-personal-website/" : "/",
}));
