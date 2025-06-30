import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/', // ✅ IMPORTANT: fix for Vercel
  assetsInclude: ['**/*.JPG'],
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: { port: 5173 }
})
