import { Link, Navigate, useParams } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import Seo from '../components/Seo'
import Placeholder from '../components/Placeholder'
import { getProjectBySlug } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams()
  const prefersReducedMotion = useReducedMotion()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  const gallery = [1, 2, 3, 4].map((n) => `/images/projects/${project.slug}-0${n}.png`)

  return (
    <motion.aside
      aria-label={`${project.title} details`}
      className="shadow-hard-paper fixed inset-y-0 right-0 z-30 w-full overflow-y-auto border-l-2 border-paper bg-jet px-6 py-16 sm:px-10 md:w-[60vw] md:px-12 lg:w-[55vw]"
      initial={prefersReducedMotion ? { opacity: 0 } : { x: '100%' }}
      animate={prefersReducedMotion ? { opacity: 1 } : { x: '0%' }}
      exit={prefersReducedMotion ? { opacity: 0 } : { x: '100%' }}
      transition={prefersReducedMotion ? { duration: 0.12 } : { duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
    >
      <Seo title={project.title} description={project.hook} />

      <Link
        to="/projects"
        className="nav-tab inline-flex items-center gap-2 border-2 border-paper bg-jet px-4 py-2 font-display text-xs uppercase tracking-wide text-paper transition-colors duration-150 hover:border-red-hot hover:text-red-hot"
      >
        <span className="nav-tab-content">← Back to Projects</span>
      </Link>

      {project.highlight && (
        <p className="mt-8 font-display text-sm uppercase tracking-wide text-red-hot">{project.highlight}</p>
      )}
      <h2 className="text-display-1 mt-2 font-display text-paper">{project.title}</h2>
      <p className="case-normal mt-2 font-body text-base text-slate">
        {project.dates} · {project.team} · {project.role}
      </p>

      <Placeholder
        src={`/images/projects/${project.slug}-cover.png`}
        width={1280}
        height={720}
        alt={`Screenshot from ${project.title}`}
        className="mt-8"
        loading="eager"
      />

      <div className="mt-10 space-y-8">
        <section>
          <h3 className="font-display text-lg uppercase tracking-wide text-red">The Problem</h3>
          <p className="case-normal mt-2 font-body text-base text-paper">{project.problem}</p>
        </section>
        <section>
          <h3 className="font-display text-lg uppercase tracking-wide text-red">What I Built</h3>
          <p className="case-normal mt-2 font-body text-base text-paper">{project.built}</p>
        </section>
        <section>
          <h3 className="font-display text-lg uppercase tracking-wide text-red">My Contribution</h3>
          <p className="case-normal mt-2 font-body text-base text-paper">{project.contribution}</p>
        </section>

        <section>
          <h3 className="font-display text-lg uppercase tracking-wide text-red">Stack</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <li key={s} className="border border-slate px-2.5 py-1 font-display text-xs uppercase tracking-wide text-paper">
                {s}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="font-display text-lg uppercase tracking-wide text-red">Gallery</h3>
          <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {gallery.map((src, i) => (
              <Placeholder
                key={src}
                src={src}
                width={1600}
                height={900}
                alt={`Additional screenshot ${i + 1} from ${project.title}`}
              />
            ))}
          </div>
        </section>

        {project.repoUrl && (
          <a
            href={project.repoUrl}
            className="nav-tab shadow-hard inline-flex items-center justify-center border-2 border-red bg-red px-6 py-3 font-display text-sm uppercase tracking-wide text-jet transition-colors duration-150 hover:border-red-hot hover:bg-red-hot"
          >
            <span className="nav-tab-content">View on GitHub ↗</span>
          </a>
        )}
      </div>
    </motion.aside>
  )
}
