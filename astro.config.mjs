// @ts-check
import { defineConfig } from 'astro/config';
import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections'
import { transformerMetaHighlight } from '@shikijs/transformers'

import llmsTxt from "./astro-llms-txt/register.js";
import cloudflareRedirects from 'astro-cloudflare-redirects';
import expressiveCode from 'astro-expressive-code';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from "@tailwindcss/vite";

import { remarkDeruntify } from './config/remark.mjs';

// https://astro.build/config
export default defineConfig({
  experimental: {
    clientPrerender: true,
  },

  integrations: [
    llmsTxt(),
    expressiveCode({
      defaultProps: { wrap: true },
      plugins: [pluginCollapsibleSections()],
      styleOverrides: {
        codeFontFamily: 'var(--font-mono)',
        uiFontFamily: 'var(--font-main)',
      },
      themes: ['vesper', 'github-light'],
    }),
    mdx(),
    react(),
    sitemap({
      filter: (page) => {
        if (page.includes('camera-box')) {
          return false;
        }
        return true;
      }
    }),
    cloudflareRedirects({
      redirectsFile: './src/_redirects',
    })
  ],

  markdown: {
    remarkPlugins: [
      remarkDeruntify,
    ],
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
  vite: {
    plugins: [tailwindcss()],
  },
});
