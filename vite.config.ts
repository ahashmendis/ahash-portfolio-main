import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Optimize chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor": ["react", "react-dom", "react-router-dom"],
          "three": ["three", "@react-three/fiber", "@react-three/drei"],
          "gsap": ["gsap"],
        },
      },
    },
    // Generate source maps for error tracking (disable in production for privacy)
    sourcemap: false,
    // Set minimum chunk size to avoid too many small chunks
    minify: "terser",
  },
  server: {
    headers: {
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "DENY",
      "X-XSS-Protection": "1; mode=block",
    },
  },
});
