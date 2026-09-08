import { useRef } from 'react'
import type { KeyboardEvent } from 'react'
import { NavLink } from 'react-router-dom'
import { navRoutes } from '../lib/routes'

export default function Nav() {
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([])

  function handleKeyDown(event: KeyboardEvent<HTMLUListElement>) {
    const advance = event.key === 'ArrowDown' || event.key === 'ArrowRight'
    const retreat = event.key === 'ArrowUp' || event.key === 'ArrowLeft'
    if (!advance && !retreat) return

    event.preventDefault()
    const current = linkRefs.current.findIndex((el) => el === document.activeElement)
    const count = navRoutes.length
    const nextIndex = advance ? (current + 1 + count) % count : (current - 1 + count) % count
    linkRefs.current[nextIndex]?.focus()
  }

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-0 z-40 border-t-2 border-paper bg-jet md:inset-y-0 md:left-0 md:right-auto md:bottom-auto md:w-44 md:border-t-0 md:border-r-2 lg:w-52"
    >
      <ul
        role="list"
        onKeyDown={handleKeyDown}
        className="flex h-full flex-row justify-around px-1 py-1.5 md:flex-col md:justify-center md:gap-3 md:px-4 md:py-0"
      >
        {navRoutes.map((route, i) => (
          <li key={route.path} className="flex flex-1 items-center justify-center md:flex-none md:py-1">
            <NavLink
              ref={(el) => {
                linkRefs.current[i] = el
              }}
              to={route.path}
              end={route.path === '/'}
              className={({ isActive }) =>
                [
                  'nav-tab h-12 w-full items-center justify-center border-2 text-center font-display text-[0.6rem] uppercase tracking-wide md:h-11 md:text-xs',
                  'transition-colors duration-150',
                  isActive
                    ? 'nav-tab-active border-red bg-red text-jet'
                    : 'border-paper bg-jet text-paper hover:border-red-hot hover:text-red-hot',
                ].join(' ')
              }
            >
              <span className="nav-tab-content flex h-full w-full items-center justify-center">
                {route.label}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
