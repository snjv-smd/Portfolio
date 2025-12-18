import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  // Base is required if you are deploying to GitHub Pages (e.g., '/portfolio/')
  // If deploying to Vercel or Netlify, you can usually leave this out or use '/'.
  base: '/', 

  plugins: [react()],
  
  resolve: {
    alias: {
      // This allows you to use '@/' to refer to your src folder in imports
      '@': path.resolve(__dirname, './src'),
    },
  },

  build: {
    // Standard output directory for Vite is 'dist', but 'build' is fine if you prefer it.
    outDir: 'dist', 
    target: 'esnext',
    // Minifies the code and splits chunks for better performance
    minify: 'esbuild',
    reportCompressedSize: false,
    rollupOptions: {
      output: {
        // This helps with browser caching by adding hashes to filenames
        manualChunks: {
          vendor: ['react', 'react-dom', 'framer-motion'],
        },
      },
    },
  },

  server: {
    port: 3000,
    open: true, // Automatically opens the browser on start
    host: true, // Allows access via your network IP (good for mobile testing)
  },
});