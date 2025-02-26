import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  }, server: {
    headers: {
      "Cross-origin-opener-Policy" : "same-origin-allow-popups",
      "Cross-origin-Embedder-Policy" : "require-core"
    }
  }
})