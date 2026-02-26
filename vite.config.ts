import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ command }) => {
  return {
    plugins: [react()],

    // 🔥 Resolve alias @
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },

    // 🔥 Resolve GitHub Pages
    base: command === "build" ? "/sitehendrytech/" : "/",

    build: {
      outDir: "dist",
    },
  };
});