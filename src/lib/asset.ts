/** Resolve a root-relative path (e.g. "/images/foo.png") against the
 * configured Vite base. GitHub Pages serves this site from a subfolder
 * (/Jordan-Landversicht-Portfolio/), so a hardcoded "/images/..." string
 * would otherwise resolve against the domain root and 404 there. Vite
 * only rewrites base automatically for asset references it can see
 * statically (imports, <img>/<link> tags in index.html) — not runtime
 * template-literal strings like the ones built here per project slug —
 * so those need this explicit resolution instead. */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL // always has a trailing slash, e.g. "/" or "/Jordan-Landversicht-Portfolio/"
  const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `${cleanBase}${cleanPath}`
}
