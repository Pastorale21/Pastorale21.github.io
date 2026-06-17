import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import pagefind from "astro-pagefind";
import tailwindcss from "@tailwindcss/vite";
import remarkBreaks from "remark-breaks";

// https://astro.build/config
export default defineConfig({
  site: "https://pastorale21.github.io",
  integrations: [sitemap(), mdx(), pagefind()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    remarkPlugins: [remarkBreaks],
    shikiConfig: {
      theme: "css-variables",
    },
  },
});
