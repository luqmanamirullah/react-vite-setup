import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
import istanbul from 'vite-plugin-istanbul';
export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  plugins: [
    react(),
    istanbul({
      cypress: true,
      requireEnv: true,
      extension: ['.ts', '.tsx'],
      exclude: ['**/*.d.ts', '**/*.cy.ts', '**/*.cy.tsx'],
    }),
  ],
  server: {
    host: true,
    port: 3000,
  },
});
