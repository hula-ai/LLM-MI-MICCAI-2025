import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "inject-cmt-comment-and-text",
      transformIndexHtml(html) {
        

    }
  ],
  base: "/LLM-MI-MICCAI-2025",
});
