import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react({ fastRefresh: false })],
  server: {
    port: 5000,
    host: '0.0.0.0',
    allowedHosts: ['insurance-project-admin.onrender.com']
  }
})
