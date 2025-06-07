import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/LLM-MI-MICCAI-2025",
  plugins: [
    react(),
    {
      name: "inject-cmt-comment-and-text",
      transformIndexHtml(html) {
        // your injection logic…
        return html;
      }           // ← closes transformIndexHtml
    },          // ← closes the plugin object
  ],            // ← closes the plugins array
});             // ← closes the defineConfig call
