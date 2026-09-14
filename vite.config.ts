import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { resolveBase } from './scripts/deployBase.mjs'

// GH Pages serves this repo at /<GH_PAGES_REPO_NAME>/ (see scripts/deployBase.mjs),
// Vercel serves it at /. Build with `DEPLOY_TARGET=gh-pages npm run build` for
// the GitHub Pages base path.
export default defineConfig({
  base: resolveBase(),
  plugins: [react(), tailwindcss()],
})
