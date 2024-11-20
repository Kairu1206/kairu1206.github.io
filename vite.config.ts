import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  publicDir: 'public',
  server: {
    fs: {
      allow: ['..'],
      strict: false
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        emulator: './src/emulatorjs_gba/index.html'
      }
    }
  }
});
