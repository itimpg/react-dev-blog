import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/react-dev-blog/',
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
})
