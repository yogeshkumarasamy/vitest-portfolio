import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { playwright } from '@vitest/browser-playwright';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

const isCI = process.env.CI === 'true';

export default defineConfig({
  plugins: [tailwindcss(), react()],
  optimizeDeps: {
    include: ['@emotion/react/jsx-dev-runtime'],
  },
  test: {
    // Test execution settings
    globals: true,
    watch: false,
    setupFiles: ['./vitest.browser.setup.ts'],

    // File patterns
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    exclude: ['node_modules', 'dist', '.idea', '.git', '.cache'],
    browser: {
      enabled: true,
      provider: playwright({
        launchOptions: {
          devtools: false, // enable devtools for debugging
        },
      }),
      instances: [
        {
          browser: 'chromium',
        },
      ],
      viewport: { width: 1112, height: 834 },
    },
    // Reporters: basic for CI, default for local
    reporters: isCI ? ['basic'] : ['default'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/components': path.resolve(__dirname, './src/components'),
      '@/pages': path.resolve(__dirname, './src/pages'),
      '@/lib': path.resolve(__dirname, './src/lib'),
      '@/types': path.resolve(__dirname, './src/types'),
    },
  },
});
