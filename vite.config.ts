import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/** GitHub Pages 项目站：https://youyouErica.github.io/internship-resume/ */
export default defineConfig(({ mode }) => ({
  base: mode === 'ghpages' ? '/internship-resume/' : '/',
  plugins: [react(), tailwindcss()],
}))
