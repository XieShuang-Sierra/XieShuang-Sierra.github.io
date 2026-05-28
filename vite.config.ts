import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { pagesBase } from './pages.base'

export default defineConfig(({ command }) => ({
  // 本地 dev 用根路径；发布构建用 GitHub Pages 路径
  base: command === 'build' ? pagesBase : '/',
  plugins: [react(), tailwindcss()],
}))
