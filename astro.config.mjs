import { defineConfig, envField, passthroughImageService } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: 'https://descompilado.dev/',
  env: {
    schema: {
      RESEND_API_KEY: envField.string({ context: "server", access: "secret" }),
      RESEND_AUDIENCE_ID: envField.string({ context: "server", access: "public" })
    }
  },
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    react(),
    sitemap()
  ],
  adapter: vercel({
    imageService: true
  }),
});