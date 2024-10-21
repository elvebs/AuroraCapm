// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/AuroraCapm/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        strategy: resolve(__dirname, 'strategy.html'),
        portfolio: resolve(__dirname, 'portfolio.html'),
        contacts: resolve(__dirname, 'contacts.html'),
        team: resolve(__dirname, 'team.html'),
      },
    },
  },
});
