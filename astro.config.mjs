// @ts-check
import react from '@astrojs/react';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://0372hoanghoccode.github.io',
  base: '/portfolio',
  integrations: [react()],
});
