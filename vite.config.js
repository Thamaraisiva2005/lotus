import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/lotus/', // 👈 use your GitHub repo name
  plugins: [react()],
})
