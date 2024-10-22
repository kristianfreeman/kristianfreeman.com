// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), sitemap(), react(), tailwind()],
  markdown: {
    shikiConfig: {
      theme: 'catppuccin-mocha',
      transformers: [
        {
          pre(node) {
            // add no-prose to node.properties.class, which is a string
            node.properties.class += ' not-prose';
          },
        }
      ],
    },
  },
  site: 'https://kristianfreeman.com',
});
