import react from "@vitejs/plugin-react";

import { resolve } from "node:path";
import { defineConfig } from "vite";
import stylelint from "vite-plugin-stylelint";

// https://vitejs.dev/config/
export default defineConfig(async () => ({
  plugins: [
    react(),
    stylelint({
      fix: true,
      lintInWorker: true,
      cache: false,
    }),
  ],

  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  //
  // 1. prevent vite from obscuring rust errors
  clearScreen: false,
  // 2. tauri expects a fixed port, fail if that port is not available
  server: {
    port: 1420,
    strictPort: true,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@components": resolve(__dirname, "./src/components"),
      "@assets": resolve(__dirname, "./src/assets"),
      "@layouts": resolve(__dirname, "./src/layouts"),
      "@store": resolve(__dirname, "./src/store"),
      "@pages": resolve(__dirname, "./src/pages"),
      "@router": resolve(__dirname, "./src/router"),
      "@styles": resolve(__dirname, "./src/styles"),
      "@ui": resolve(__dirname, "./src/ui"),
      "@types": resolve(__dirname, "./src/types"),
      "@constants": resolve(__dirname, "./src/constants"),
    },
  },
}));
