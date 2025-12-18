import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  // Double-check: must match your GitHub Repo name EXACTLY (Case-Sensitive)
  base: '/Portfolio/', 

  plugins: [react()],
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  build: {
    outDir: 'dist', 
    target: 'esnext',
    minify: 'esbuild',
    reportCompressedSize: false,
    rollupOptions: {
      output: {
        // Keeps your vendor chunks organized
        manualChunks: {
          vendor: ['react', 'react-dom', 'framer-motion'],
        },
      },
    },
  },

  server: {
    port: 3000,
    open: true,
    host: true, 
  },
});