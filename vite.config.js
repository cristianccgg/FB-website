import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Agregamos esta configuración para el manejo de activos
  build: {
    assetsDir: "assets",
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },
  // Configuración para el servidor de desarrollo
  server: {
    fs: {
      strict: false,
    },
  },
  // Asegurarse de que Vite pueda acceder a los archivos públicos
  publicDir: "public",
});
