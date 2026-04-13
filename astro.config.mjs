import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://samuelcosta.me',
  integrations: [mdx(), icon()],

  // Cloudflare Pages optimized
  output: 'static',

  vite: {
    optimizeDeps: {
      exclude: ['astro/zod', 'astro/virtual-modules/transitions.js'],
    },
  },

  adapter: cloudflare()
});