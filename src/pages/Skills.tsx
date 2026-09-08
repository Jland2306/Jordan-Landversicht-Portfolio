import Seo from '../components/Seo'
import StatMeter from '../components/StatMeter'
import DiagonalBand from '../components/DiagonalBand'
import { skillGroups, practices, platforms } from '../data/skills'

export default function Skills() {
  return (
    <div className="relative isolate min-h-screen px-6 py-16 sm:px-10 md:px-14">
      <DiagonalBand position="left-1/2" />
      <Seo
        title="Skills"
        description="Jordan Landversicht's skills: languages, engines, tools, and practices, honestly labeled by depth of use."
      />

      <h1 className="text-display-1 font-display text-paper">Status</h1>
      <p className="case-normal mt-2 max-w-2xl font-body text-slate">
        Depth is labeled honestly — shipped-project experience versus coursework or self-taught. No invented percentages.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-12 lg:grid-cols-2">
        {skillGroups.map((group, i) => (
          <section
            key={group.title}
            className={`skew-panel border-2 border-paper bg-jet px-10 py-7 shadow-hard sm:px-12 sm:py-8 ${
              i % 2 === 1 ? 'clip-torn-2' : 'clip-torn-1'
            }`}
          >
            <div className="skew-content">
              <h2 className="font-display text-xl uppercase tracking-wide text-red">{group.title}</h2>
              <div className="mt-2 divide-y divide-slate/20">
                {group.skills.map((skill) => (
                  <StatMeter key={skill.name} {...skill} />
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-12 lg:grid-cols-2">
        <section className="skew-panel clip-torn-3 border-2 border-paper bg-jet px-10 py-7 shadow-hard sm:px-12 sm:py-8">
          <div className="skew-content">
            <h2 className="font-display text-xl uppercase tracking-wide text-red">Practices</h2>
            <ul className="mt-4 space-y-2">
              {practices.map((practice) => (
                <li key={practice} className="case-normal flex items-start gap-2 font-body text-paper">
                  <span aria-hidden="true" className="mt-1 text-red">▸</span>
                  {practice}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="skew-panel clip-torn-1 border-2 border-paper bg-jet px-10 py-7 shadow-hard sm:px-12 sm:py-8">
          <div className="skew-content">
            <h2 className="font-display text-xl uppercase tracking-wide text-red">Platforms</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {platforms.map((platform) => (
                <li
                  key={platform}
                  className="border border-slate px-3 py-1.5 font-display text-xs uppercase tracking-wide text-paper"
                >
                  {platform}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}
