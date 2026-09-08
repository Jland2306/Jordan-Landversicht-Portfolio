import Seo from '../components/Seo'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <div className="min-h-screen px-6 py-16 sm:px-10 md:px-14">
      <Seo
        title="Experience"
        description="Jordan Landversicht's work experience — Hack Your Summer, Mavis Discount Tire, and Thunderhart Golf Course."
      />

      <h1 className="text-display-1 font-display text-paper">Experience</h1>

      <ol className="relative mt-14 max-w-3xl border-l-4 border-red pl-8 sm:pl-10" style={{ transform: 'skewY(-1deg)' }}>
        {experience.map((entry) => (
          <li key={`${entry.role}-${entry.org}`} className="relative mb-14 last:mb-0" style={{ transform: 'skewY(1deg)' }}>
            <span
              aria-hidden="true"
              className="absolute -left-[2.6rem] top-1 h-4 w-4 rotate-45 border-2 border-red bg-jet sm:-left-[3rem]"
            />
            <p className="font-display text-sm uppercase tracking-wide text-red-hot">{entry.dates}</p>
            <h2 className="text-display-2 mt-1 font-display text-paper">{entry.role}</h2>
            <p className="case-normal font-body text-base text-slate">
              {entry.org}
              {entry.location ? ` · ${entry.location}` : ''}
            </p>
            <ul className="mt-3 space-y-1.5">
              {entry.bullets.map((bullet, i) => (
                <li key={i} className="case-normal max-w-[65ch] font-body text-base text-paper">
                  {bullet}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  )
}
