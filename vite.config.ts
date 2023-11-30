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
      "@assets": resolve(__dirname, "./src/assets"),
      "@router": resolve(__dirname, "./src/router"),
      "@components": resolve(__dirname, "./src/components"),
      "@layouts": resolve(__dirname, "./src/layouts"),
      "@shared": resolve(__dirname, "./src/ui"),
      "@store": resolve(__dirname, "./src/store"),
      "@pages": resolve(__dirname, "./src/pages"),
      "@styles": resolve(__dirname, "./src/styles"),
    },
  },
}));
