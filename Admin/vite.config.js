import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [
    
  ],
  server: {
    port: 5000,
    host: '0.0.0.0',
    allowedHosts: ['insurance-project-u9wk.onrender.com'],
  },
}))
