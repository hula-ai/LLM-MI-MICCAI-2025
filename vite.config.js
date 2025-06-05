import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "inject-cmt-comment",
      transformIndexHtml(html) {
        return `<!-- CMT-Acknowledgment: This site is intended for a CMT-supported conference -->\n${html}`;
      },
    },
  ],
  base: "/LLM-MI-MICCAI-2025",
});
