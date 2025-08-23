
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // IMPORTANT: for GitHub Pages use a trailing slash
  // e.g., https://<user>.github.io/LLM-MI-MICCAI-2025/
  base: "/LLM-MI-MICCAI-2025/",
  plugins: [
    react(),
    {
      name: "inject-cmt-comment-and-text",
      transformIndexHtml(html) {
        // Add any HTML injection here if needed
        return html; // no-op for now
      },
    },
  ],
});


