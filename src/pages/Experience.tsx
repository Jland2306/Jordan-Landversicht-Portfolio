import Seo from '../components/Seo'
import DiagonalBand from '../components/DiagonalBand'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <div className="relative isolate min-h-screen px-6 py-16 sm:px-10 md:px-14 lg:px-16 xl:px-20">
      <DiagonalBand position="left-1/4" color="red-hot" />
      <Seo
        title="Experience"
        description="Jordan Landversicht's work experience — Hack Your Summer, Mavis Discount Tire, and Thunderhart Golf Course."
      />

      <h1 className="text-[clamp(3rem,10vw,7.5rem)] font-display leading-[0.9] text-paper">Experience</h1>

      <ol
        className="relative mt-16 max-w-5xl border-l-4 border-red pl-10 sm:pl-12 lg:mt-20 lg:pl-14"
        style={{ transform: 'skewY(-1deg)' }}
      >
        {experience.map((entry) => (
          <li
            key={`${entry.role}-${entry.org}`}
            className="relative mb-16 last:mb-0 lg:mb-20"
            style={{ transform: 'skewY(1deg)' }}
          >
            <span
              aria-hidden="true"
              className="absolute -left-[3rem] top-1 h-5 w-5 rotate-45 border-2 border-red bg-jet sm:-left-[3.5rem] lg:h-6 lg:w-6"
            />
            <p className="font-display text-base uppercase tracking-wide text-red-hot lg:text-lg">{entry.dates}</p>
            <h2 className="mt-1 text-[clamp(1.75rem,5vw,3.5rem)] font-display leading-[0.95] text-paper">
              {entry.role}
            </h2>
            <p className="case-normal font-body text-lg text-slate-text lg:text-xl">
              {entry.org}
              {entry.location ? ` · ${entry.location}` : ''}
            </p>
            <ul className="mt-4 space-y-2">
              {entry.bullets.map((bullet, i) => (
                <li key={i} className="case-normal max-w-[75ch] font-body text-lg text-paper lg:text-xl">
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
