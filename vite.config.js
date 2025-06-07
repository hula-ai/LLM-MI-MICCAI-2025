import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/LLM-MI-MICCAI-2025",
  plugins: [
    react(),
    {
      name: "inject-cmt-comment-and-text",
      transformIndexHtml(html) {
        // >>> your injection logic here, for example:
        // return html.replace(
        //   "</body>",
        //   `<script src="/your-script.js"></script></body>`
        // );
        
        // for now just return unmodified:
        return html;
      }
    }
  ]
});
