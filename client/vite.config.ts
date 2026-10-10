import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [tailwindcss()],
  resolve: {
    tsconfigPaths: true,
  },

  server: {
    proxy: {
      "/api": {
        target: process.env.BACKEND_URL ?? "http://127.0.0.1:8000",
        changeOrigin: true,
      },
    },
  },

  build: {
    outDir: "dist",
  },
});
