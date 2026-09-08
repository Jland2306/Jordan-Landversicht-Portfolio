import { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import Seo from '../components/Seo'
import Placeholder from '../components/Placeholder'
import FilterTabs from '../components/FilterTabs'
import { projects, projectTags, type ProjectTag } from '../data/projects'

const clipVariants = ['clip-torn-1', 'clip-torn-2', 'clip-torn-3']

export default function Projects() {
  const [tag, setTag] = useState<ProjectTag | 'All'>('All')
  const location = useLocation()
  const isDetailOpen = location.pathname !== '/projects'

  const filtered = tag === 'All' ? projects : projects.filter((p) => p.tags.includes(tag))

  return (
    <div className="relative min-h-screen px-6 py-16 sm:px-10 md:px-14">
      <Seo
        title="Projects"
        description="Games and web apps built by Jordan Landversicht — Unity, Godot, MonoGame, and full-stack projects."
      />

      <motion.div
        animate={{
          x: isDetailOpen ? '-6%' : 0,
          opacity: isDetailOpen ? 0.3 : 1,
        }}
        transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
        inert={isDetailOpen || undefined}
      >
        <h1 className="text-display-1 font-display text-paper">Projects</h1>

        <div className="mt-6">
          <FilterTabs label="Filter projects by tag" options={projectTags} active={tag} onChange={setTag} />
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <li
              key={project.slug}
              className={i % 3 === 1 ? 'sm:mt-8' : i % 3 === 2 ? 'sm:mt-2' : ''}
            >
              <Link
                to={`/projects/${project.slug}`}
                className={`skew-panel group block border-2 border-paper bg-jet ${clipVariants[i % clipVariants.length]} shadow-hard transition-colors duration-150 hover:border-red-hot`}
              >
                <div className="skew-content">
                  <Placeholder
                    src={`/images/projects/${project.slug}-cover.png`}
                    width={1280}
                    height={720}
                    alt={`Screenshot from ${project.title}`}
                  />
                  <div className="p-4">
                    {project.highlight && (
                      <p className="mb-1 font-display text-xs uppercase tracking-wide text-red-hot">
                        {project.highlight}
                      </p>
                    )}
                    <h2 className="text-display-2 font-display text-paper group-hover:text-red-hot">
                      {project.title}
                    </h2>
                    <p className="case-normal mt-1 font-body text-sm text-slate-text">
                      {project.year} · {project.role}
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {project.tags.map((t) => (
                        <li
                          key={t}
                          className="border border-slate px-2 py-0.5 font-display text-[0.6rem] uppercase tracking-wide text-paper"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>

      <AnimatePresence mode="wait">
        <Outlet key={location.pathname} />
      </AnimatePresence>
    </div>
  )
}
