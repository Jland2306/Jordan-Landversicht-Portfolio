export interface NavRoute {
  path: string
  label: string
  wipeLabel: string
}

export const navRoutes: NavRoute[] = [
  { path: '/', label: 'Title', wipeLabel: 'HOME' },
  { path: '/projects', label: 'Projects', wipeLabel: 'PROJECTS' },
  { path: '/skills', label: 'Skills', wipeLabel: 'SKILLS' },
  { path: '/about', label: 'About', wipeLabel: 'ABOUT' },
  { path: '/experience', label: 'Experience', wipeLabel: 'EXPERIENCE' },
  { path: '/contact', label: 'Contact', wipeLabel: 'CONTACT' },
]

/** The top-level route segment a pathname belongs to, used to decide whether
 * a navigation crosses "screens" (triggers the wipe) or stays within one
 * (e.g. /projects -> /projects/:slug drills into a panel instead). */
export function topSegment(pathname: string): string {
  const seg = pathname.split('/')[1] ?? ''
  return seg === '' ? '/' : `/${seg}`
}

export function wipeLabelFor(pathname: string): string {
  const seg = topSegment(pathname)
  return navRoutes.find((r) => r.path === seg)?.wipeLabel ?? 'JORDAN'
}
