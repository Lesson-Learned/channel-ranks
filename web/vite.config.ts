import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@admin': resolve(__dirname, './src/admin'),
      '@api': resolve(__dirname, './src/api'),
      '@components': resolve(__dirname, './src/components'),
      '@shared': resolve(__dirname, './src/shared'),
      '@show': resolve(__dirname, './src/show')
    }
  },
});
