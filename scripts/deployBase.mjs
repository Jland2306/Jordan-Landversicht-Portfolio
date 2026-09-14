// Single source of truth for the GitHub Pages base path. vite.config.ts and
// scripts/prerender.mjs both need it, and previously duplicated the same
// ternary in two places — they drifted out of sync the first time the repo
// got renamed. Both now import this instead.
export const GH_PAGES_REPO_NAME = 'Portfolio'

export function resolveBase() {
  return process.env.DEPLOY_TARGET === 'gh-pages' ? `/${GH_PAGES_REPO_NAME}/` : '/'
}
