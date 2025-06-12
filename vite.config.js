import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/lo/', // 👈 use your GitHub repo name
  plugins: [react()],
})
