// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import {
  transformerMetaHighlight
} from '@shikijs/transformers'

// https://astro.build/config
export default defineConfig({
  experimental: {
    clientPrerender: true,
  },

  integrations: [
    mdx(),
    react(),
    sitemap(),
    tailwind(),
  ],

  markdown: {
    shikiConfig: {
      theme: 'catppuccin-mocha',
      transformers: [
        {
          pre(node) {
            node.properties.class += ' not-prose';
          },
        },
        transformerMetaHighlight(),
      ],
      wrap: true,
    }
  },

  output: 'static',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  site: 'https://kristianfreeman.com',
  trailingSlash: 'never',
});
