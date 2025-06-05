import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "inject-cmt-comment-and-text",
      transformIndexHtml(html) {
        const cmtComment = `<!-- CMT-Acknowledgment: This site is intended for a CMT-supported conference -->`;
        const cmtParagraph = `<p style="display:none;">The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.</p>`;
        return `${cmtComment}\n${html.replace('<div id="root"></div>', `${cmtParagraph}\n<div id="root"></div>`)}`;
      }
    }
  ],
  base: "/LLM-MI-MICCAI-2025",
});
