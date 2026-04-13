import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://samuelcosta.me',
  integrations: [tailwind(), mdx(), icon()],

  // Cloudflare Pages optimized
  output: 'static',

  adapter: cloudflare()
});