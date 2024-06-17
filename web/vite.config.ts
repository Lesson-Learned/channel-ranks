import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@admin': resolve(__dirname, './src/admin'),
      '@api': resolve(__dirname, './src/api'),
      '@assets': resolve(__dirname, './src/assets'),
      '@auth': resolve(__dirname, './src/auth'),
      '@cloud': resolve(__dirname, './src/cloud'),
      '@home': resolve(__dirname, './src/home'),
      '@libraries': resolve(__dirname, './src/libraries'),
      '@shared': resolve(__dirname, './src/shared'),
      '@show': resolve(__dirname, './src/show')
    }
  },
});
