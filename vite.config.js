// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        team: resolve(__dirname, 'team.html'),
        portfolio: resolve(__dirname, 'portfolio.html'),
        contacts: resolve(__dirname, 'contacts.html'),
        documents: resolve(__dirname, 'strategy.html'),
        // Add more pages here
      },
    },
  },
});
