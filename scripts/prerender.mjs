// Prerenders every route in the built app to static HTML so first paint
// doesn't have to wait on JS (this is what closes most of the FCP/LCP gap
// for a pure client-rendered SPA — see the perf pass discussion). This is
// NOT a hydration mismatch risk: it's a plain browser capture of the same
// client bundle's own output, not server-side React. main.tsx hydrates
// over this when present, or does a normal client render (dev, or any
// build that skipped this script) when #root is empty.
//
// Routes are discovered by crawling <a href> links starting from "/",
// rather than importing the data files, so this never drifts out of sync
// with what's actually linked in the app.
import { chromium } from 'playwright'
import { preview } from 'vite'
import { mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'

const base = process.env.DEPLOY_TARGET === 'gh-pages' ? '/Jordan-Landversicht-Portfolio/' : '/'

// Inline the (small, single) built stylesheet directly into each prerendered
// page's <head>, replacing the <link>. That external stylesheet request is
// otherwise render-blocking — the single biggest lever left on First
// Contentful Paint once JS is off the critical path, since the browser
// won't paint prerendered markup either until CSS is ready. No separate
// fetch is needed afterward either: client-side route changes stay in the
// same document, so the inlined CSSOM already covers every route.
const cssFile = readdirSync('dist/assets').find((f) => f.endsWith('.css'))
const cssContent = readFileSync(join('dist/assets', cssFile), 'utf-8')
const cssLinkPattern = new RegExp(`<link rel="stylesheet"[^>]*href="[^"]*${cssFile}"[^>]*>`)

function inlineCss(html) {
  return html.replace(cssLinkPattern, `<style>${cssContent}</style>`)
}

const server = await preview({ preview: { port: 4310 }, base })
const origin = `http://localhost:4310`
const siteRoot = `${origin}${base}`

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } })

const visited = new Set()
const queue = ['/']
const pages = []

function toDistPath(routePath) {
  const clean = routePath.replace(/^\/+|\/+$/g, '')
  return clean === '' ? 'dist/index.html' : join('dist', clean, 'index.html')
}

while (queue.length > 0) {
  const route = queue.shift()
  if (visited.has(route)) continue
  visited.add(route)

  await page.goto(`${siteRoot}${route.replace(/^\//, '')}`, { waitUntil: 'networkidle' })
  // Let entrance motion (hero assembly, route-adjacent fades) settle so the
  // baked-in inline styles reflect the resting state, not a mid-animation frame.
  await page.waitForTimeout(2200)

  const html = await page.evaluate(() => `<!doctype html>\n${document.documentElement.outerHTML}`)
  pages.push({ route, html })

  const links = await page.evaluate((siteRoot) => {
    return [...document.querySelectorAll('a[href]')]
      .map((a) => a.getAttribute('href'))
      .filter((href) => href && href.startsWith(siteRoot.replace(/^https?:\/\/[^/]+/, '')))
  }, siteRoot)

  // Skip direct file downloads (résumé PDF, etc.) — they're not app routes,
  // and treating one as a route would create a directory at the exact path
  // the real static file needs to live at.
  const isRoute = (href) => !/\.[a-z0-9]+$/i.test(href.split('?')[0].split('#')[0])

  for (const href of links) {
    if (!isRoute(href)) continue
    const withoutBase = base === '/' ? href : href.replace(base.replace(/\/$/, ''), '') || '/'
    if (!visited.has(withoutBase)) queue.push(withoutBase)
  }
}

// The 404 page has no inbound link (nothing on the site should link to a
// dead route) — visit an unmatched path directly so GitHub Pages' 404.html
// convention gets real rendered content too.
await page.goto(`${siteRoot}__prerender_404_probe__`, { waitUntil: 'networkidle' })
await page.waitForTimeout(1200)
const notFoundHtml = await page.evaluate(() => `<!doctype html>\n${document.documentElement.outerHTML}`)

await browser.close()
await server.close()

for (const { route, html } of pages) {
  const outPath = toDistPath(route)
  mkdirSync(dirname(outPath), { recursive: true })
  writeFileSync(outPath, inlineCss(html))
  console.log('prerendered', route, '->', outPath)
}

const notFoundPath = 'dist/404.html'
mkdirSync(dirname(notFoundPath), { recursive: true })
writeFileSync(notFoundPath, inlineCss(notFoundHtml))
console.log('prerendered 404 ->', notFoundPath)

console.log(`\nPrerendered ${pages.length} routes.`)
