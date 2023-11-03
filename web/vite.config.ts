import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@admin': resolve(__dirname, './src/admin'),
      '@shared': resolve(__dirname, './src/shared')
    }
  },
});
