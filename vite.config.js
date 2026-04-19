import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 배포 준비 (Vite 설정) 26.03.24(화)
  base: '/react-apple-store/'
})
