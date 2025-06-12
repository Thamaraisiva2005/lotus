import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/lotusport/', // 👈 use your GitHub repo name
  plugins: [react()],
})
