import { motion, useReducedMotion } from 'motion/react'
import { Link } from 'react-router-dom'
import { useWipeNavigate } from '../context/Transition'
import { isPlainLeftClick } from '../lib/clickIntercept'
import Seo from '../components/Seo'
import { profile } from '../data/profile'

function AssembledWord({ word, delayStart }: { word: string; delayStart: number }) {
  const prefersReducedMotion = useReducedMotion()
  const letters = word.split('')

  return (
    <span className="inline-block whitespace-nowrap">
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={
            prefersReducedMotion
              ? { opacity: 1 }
              : { opacity: 0, x: i % 2 === 0 ? -40 : 40, y: -24, rotate: i % 2 === 0 ? -8 : 8 }
          }
          animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: 0.5, delay: delayStart + i * 0.035, ease: [0.16, 1, 0.3, 1] }
          }
        >
          {letter}
        </motion.span>
      ))}
    </span>
  )
}

export default function Title() {
  const prefersReducedMotion = useReducedMotion()
  const go = useWipeNavigate()

  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 py-24 sm:px-10 md:px-16">
      <Seo
        title="Jordan Landversicht"
        description="Jordan Landversicht — Game Design & Development student at RIT seeking a Summer 2027 co-op or internship."
      />

      <div aria-hidden="true" className="halftone pointer-events-none absolute inset-0 opacity-60" />

      <motion.div
        aria-hidden="true"
        className="clip-shard pointer-events-none absolute -left-10 top-1/4 h-64 w-72 bg-red opacity-90 sm:h-80 sm:w-96"
        initial={prefersReducedMotion ? { opacity: 0.9 } : { opacity: 0, x: -60 }}
        animate={{ opacity: 0.9, x: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.div
        aria-hidden="true"
        className="clip-shard pointer-events-none absolute -right-16 bottom-10 h-48 w-56 rotate-180 bg-red-hot opacity-70 sm:h-64 sm:w-72"
        initial={prefersReducedMotion ? { opacity: 0.7 } : { opacity: 0, x: 60 }}
        animate={{ opacity: 0.7, x: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      />

      <div className="relative z-10">
        <h1 className="text-hero font-display leading-[0.85] text-paper">
          <AssembledWord word={profile.firstName} delayStart={0.1} />
          <br />
          <span className="text-red-hot">
            <AssembledWord word={profile.lastName} delayStart={0.1 + profile.firstName.length * 0.035 + 0.15} />
          </span>
        </h1>

        <motion.p
          className="case-normal mt-8 max-w-4xl text-xl text-paper sm:text-2xl lg:text-3xl"
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          {profile.tagline} at RIT. {profile.seeking}.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center gap-6"
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.25 }}
        >
          <Link
            to="/projects"
            onClick={(event) => {
              if (!isPlainLeftClick(event)) return
              event.preventDefault()
              go('/projects')
            }}
            className="nav-tab shadow-hard inline-flex items-center justify-center border-2 border-red bg-red px-10 py-5 font-display text-lg uppercase tracking-wide text-paper transition-colors duration-150 hover:border-red-hot hover:bg-red-hot hover:text-jet sm:px-14 sm:py-6 sm:text-2xl"
          >
            <span className="nav-tab-content">Enter Projects</span>
          </Link>
        </motion.div>

        <motion.ul
          className="mt-16 flex flex-wrap gap-x-10 gap-y-3"
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <li>
            <a href={profile.githubUrl} className="case-normal font-body text-base text-slate-text underline decoration-slate underline-offset-4 hover:text-red-hot hover:decoration-red-hot sm:text-lg">
              GitHub ↗
            </a>
          </li>
          <li>
            <a href={profile.linkedinUrl} className="case-normal font-body text-base text-slate-text underline decoration-slate underline-offset-4 hover:text-red-hot hover:decoration-red-hot sm:text-lg">
              LinkedIn ↗
            </a>
          </li>
          <li>
            <a href={profile.resumePath} className="case-normal font-body text-base text-slate-text underline decoration-slate underline-offset-4 hover:text-red-hot hover:decoration-red-hot sm:text-lg">
              Résumé ↓
            </a>
          </li>
        </motion.ul>
      </div>
    </div>
  )
}
