import { defineConfig, envField } from 'astro/config';

import react from '@astrojs/react';
import sitemap from "@astrojs/sitemap";

import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel/serverless';

import partytown from "@astrojs/partytown";

export default defineConfig({
  site: 'https://descompilado.dev/',

  env: {
    schema: {
      RESEND_API_KEY: envField.string({ context: "server", access: "secret" }),
      RESEND_AUDIENCE_ID: envField.string({ context: "server", access: "public" })
    }
  },

  integrations: [react(), sitemap(), partytown({ config: { forward: ['dataLayer.push'] } })],

  vite: {
    plugins: [tailwindcss()]
  },

  output: 'server',
  
  adapter: vercel({
    imageService: true
  }),

  build: {
    inlineStylesheets: "always"
  }
});