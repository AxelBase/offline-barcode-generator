// vite.config.ts
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],

  build: {
    chunkSizeWarningLimit: 1000,

    rollupOptions: {
      output: {
        // Only split libraries that are actually used in client bundle
        manualChunks(id) {
          if (id.includes('node_modules/jszip') || id.includes('node_modules/file-saver')) {
            return 'zip-utils';
          }
          if (id.includes('node_modules/bootstrap')) {
            return 'bootstrap';
          }
          // DO NOT pre-split bwip-js — it's dynamically imported, so Vite handles it perfectly
        }
      }
    }
  },

  // Critical fix: Let bwip-js be external in SSR (it's never used there)
  ssr: {
    // Remove bwip-js from noExternal → allows empty chunk to disappear
    noExternal: ['jszip', 'file-saver'] // only these are used in +page.svelte (via dynamic import)
    // bwip-js is safely dynamic-imported only in browser → no need to bundle in SSR
  }
});