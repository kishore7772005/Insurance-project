import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [
    react({
      fastRefresh: mode === 'development',  // Enable only in dev
    }),
  ],
  server: {
    port: 5000,
    host: '0.0.0.0',
    allowedHosts: ['insurance-project-admin.onrender.com'],
  },
}))
