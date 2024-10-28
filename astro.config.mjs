// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { transformerMetaHighlight } from '@shikijs/transformers'
import cloudflareRedirects from 'astro-cloudflare-redirects';

import expressiveCode from 'astro-expressive-code';

// https://astro.build/config
export default defineConfig({
  experimental: {
    clientPrerender: true,
  },

  integrations: [
    expressiveCode({
      defaultProps: { wrap: true },
      themes: ['catppuccin-mocha'],
    }),
    mdx(),
    react(),
    sitemap(),
    tailwind({
      applyBaseStyles: false,
    }),
    cloudflareRedirects({
      redirectsFile: './src/_redirects',
    })
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
