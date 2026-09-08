import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import { topSegment, wipeLabelFor } from '../lib/routes'

type Phase = 'idle' | 'covering' | 'held' | 'revealing'

const HOLD_MS = 420

export default function RouteWipe() {
  const location = useLocation()
  const prefersReducedMotion = useReducedMotion()
  const prevSegment = useRef(topSegment(location.pathname))
  const isFirstRender = useRef(true)
  const [phase, setPhase] = useState<Phase>('idle')
  const [label, setLabel] = useState('')

  useEffect(() => {
    const nextSegment = topSegment(location.pathname)

    if (isFirstRender.current) {
      isFirstRender.current = false
      prevSegment.current = nextSegment
      return
    }

    if (nextSegment !== prevSegment.current) {
      prevSegment.current = nextSegment
      setLabel(wipeLabelFor(location.pathname))
      setPhase('covering')
    }
  }, [location.pathname])

  useEffect(() => {
    if (phase !== 'held') return
    const timer = window.setTimeout(() => setPhase('revealing'), prefersReducedMotion ? 60 : HOLD_MS)
    return () => window.clearTimeout(timer)
  }, [phase, prefersReducedMotion])

  if (phase === 'idle') return null

  if (prefersReducedMotion) {
    return (
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[100] bg-jet"
        initial={{ opacity: 0 }}
        animate={{ opacity: phase === 'revealing' ? 0 : 1 }}
        transition={{ duration: 0.12 }}
        onAnimationComplete={() => {
          if (phase === 'covering') setPhase('held')
          else if (phase === 'revealing') setPhase('idle')
        }}
      />
    )
  }

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[100] overflow-hidden">
      <motion.div
        className="absolute -top-[15%] -bottom-[15%] left-0 w-[140%]"
        style={{ transform: 'skewX(-12deg)', background: 'var(--color-red)' }}
        initial={{ x: '-110%' }}
        animate={{ x: phase === 'revealing' ? '110%' : '0%' }}
        transition={{ duration: 0.34, ease: [0.76, 0, 0.24, 1] }}
        onAnimationComplete={() => {
          if (phase === 'covering') setPhase('held')
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
  )
}
