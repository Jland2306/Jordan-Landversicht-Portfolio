import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GH Pages serves this repo at /Jordan-Landversicht-Portfolio/, Vercel serves it at /.
// Build with `DEPLOY_TARGET=gh-pages npm run build` for the GitHub Pages base path.
const base = process.env.DEPLOY_TARGET === 'gh-pages' ? '/Portfolio/' : '/'

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
})
