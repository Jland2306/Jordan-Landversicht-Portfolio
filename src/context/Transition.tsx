import { createContext, useCallback, useContext, useRef, useState, type ReactNode } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import { topSegment, wipeLabelFor } from '../lib/routes'

type Phase = 'idle' | 'covering' | 'held' | 'revealing'

const HOLD_MS = 420
const REDUCED_HOLD_MS = 60

interface TransitionContextValue {
  go: (to: string) => void
}

const TransitionContext = createContext<TransitionContextValue | null>(null)

/** Navigate to `to`, running the route wipe first (when it crosses a top-level
 * section) so the new page only ever swaps in while fully hidden behind the
 * cover — never visible mid-transition. Same-section links (e.g. into a
 * project detail panel) just navigate immediately, no wipe. */
export function useWipeNavigate() {
  const ctx = useContext(TransitionContext)
  if (!ctx) throw new Error('useWipeNavigate must be used within TransitionProvider')
  return ctx.go
}

export function TransitionProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate()
  const location = useLocation()
  const prefersReducedMotion = useReducedMotion()
  const [phase, setPhase] = useState<Phase>('idle')
  const [label, setLabel] = useState('')
  const pendingTo = useRef<string | null>(null)

  const go = useCallback(
    (to: string) => {
      if (phase !== 'idle') return
      if (topSegment(location.pathname) === topSegment(to)) {
        navigate(to)
        return
      }
      pendingTo.current = to
      setLabel(wipeLabelFor(to))
      setPhase('covering')
    },
    [phase, location.pathname, navigate],
  )

  function commitNavigation() {
    if (pendingTo.current) {
      navigate(pendingTo.current)
      pendingTo.current = null
    }
    setPhase('held')
    window.setTimeout(() => setPhase('revealing'), prefersReducedMotion ? REDUCED_HOLD_MS : HOLD_MS)
  }

  return (
    <TransitionContext.Provider value={{ go }}>
      {children}

      {phase !== 'idle' &&
        (prefersReducedMotion ? (
          <motion.div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-[100] bg-jet"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === 'revealing' ? 0 : 1 }}
            transition={{ duration: 0.12 }}
            onAnimationComplete={() => {
              if (phase === 'covering') commitNavigation()
              else if (phase === 'revealing') setPhase('idle')
            }}
          />
        ) : (
          <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[100] overflow-hidden">
            <motion.div
              className="absolute -top-[15%] -bottom-[15%] left-0 w-[140%]"
              style={{ transform: 'skewX(-12deg)', background: 'var(--color-red)' }}
              initial={{ x: '-110%' }}
              animate={{ x: phase === 'revealing' ? '110%' : '0%' }}
              transition={{ duration: 0.34, ease: [0.76, 0, 0.24, 1] }}
              onAnimationComplete={() => {
                if (phase === 'covering') commitNavigation()
                else if (phase === 'revealing') setPhase('idle')
              }}
            />
            {(phase === 'covering' || phase === 'held') && (
              <motion.span
                className="absolute inset-0 flex items-center justify-center font-display text-[clamp(2.5rem,10vw,6rem)] text-jet"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.15 }}
              >
                {label}
              </motion.span>
            )}
          </div>
        ))}
    </TransitionContext.Provider>
  )
}
