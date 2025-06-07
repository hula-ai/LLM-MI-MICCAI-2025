

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/LLM-MI-MICCAI-2025",
  plugins: [
    react(),
    {
      name: "inject-cmt-comment-and-text",
      transformIndexHtml(html) {
        // >> put your injection logic here, e.g.:
        // return html.replace(
        //   "</head>",
        //   `<link rel="stylesheet" href="/custom.css" /></head>`
        // );
        return html;
      },
    },  // ← note the comma here
  ],
});
