import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(async () => ({
  plugins: [react()],
  clearScreen: false,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src", "components"),
      "@pages": path.resolve(__dirname, "src", "pages"),
      "@styles": path.resolve(__dirname, "src", "styles"),
      "@img": path.resolve(__dirname, "src", "img"),
      "@monocolor": path.resolve(__dirname, "public", "img", "monocolor"),
      "@contexts": path.resolve(__dirname, "src", "contexts")
    }
  },

  server: {
    port: 1420,
    strictPort: true,
    watch: {
      ignored: ["**/src-tauri/**"],
    },
  },
}));
