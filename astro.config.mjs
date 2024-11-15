import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import remarkToc from "remark-toc";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

import icon from "astro-icon";

import playformInline from "@playform/inline";

import robotsTxt from "astro-robots-txt";

import sitemap from "astro-sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://craigrich.io",
  integrations: [tailwind(), react(), mdx(), icon(), playformInline(), robotsTxt(), sitemap()],
  image: {
    domains: ["https://github.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.github.com",
      },
    ],
  },
  markdown: {
    rehypePlugins: [rehypeHeadingIds, rehypeAccessibleEmojis, rehypeKatex],
    remarkPlugins: [remarkToc, remarkMath],
  },
});