// @ts-check

import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://portfolio.clairtyx.com",
  output: "static",
  build: {
    inlineStylesheets: "always",
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: "lightningcss",
      minify: "terser",
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            // Séparer les vendors pour meilleur caching
            if (id.includes("node_modules")) {
              if (id.includes("react") || id.includes("react-dom")) {
                return "react-vendor";
              }
              if (id.includes("framer-motion") || id.includes("motion")) {
                return "motion-vendor";
              }
              if (id.includes("@radix-ui")) {
                return "radix-vendor";
              }
              if (id.includes("lucide-react")) {
                return "icons-vendor";
              }
              if (id.includes("shiki")) {
                return "shiki-vendor";
              }
              return "vendor";
            }
          },
        },
      },
      chunkSizeWarningLimit: 1000,
    },
  },

  integrations: [react(), mdx()],
});
