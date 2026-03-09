// @ts-check
import react from '@astrojs/react';
import { defineConfig } from 'astro/config';

// AWS_APP_ID is injected by Amplify during build
// DEPLOY_TARGET=amplify can also be set manually in Amplify env settings as fallback
const isAmplify = process.env.AWS_APP_ID !== undefined || process.env.DEPLOY_TARGET === 'amplify';

export default defineConfig({
  site: isAmplify
    ? 'https://main.d3jrt4fxw39i03.amplifyapp.com'
    : 'https://0372hoanghoccode.github.io',
  base: isAmplify ? '/' : '/portfolio',
  integrations: [react()],
});
