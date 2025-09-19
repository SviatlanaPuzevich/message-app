import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    watch: mode === "development"
        ? {
          usePolling: true,
          interval: 100,
        }
        : {},
  },
}))
