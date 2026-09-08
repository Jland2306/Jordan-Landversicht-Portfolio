import Seo from '../components/Seo'
import Placeholder from '../components/Placeholder'
import { profile } from '../data/profile'

export default function About() {
  return (
    <div className="min-h-screen px-6 py-16 sm:px-10 md:px-14">
      <Seo
        title="About"
        description="About Jordan Landversicht — Game Design & Development student at RIT, what I'm building, and what I'm looking for."
      />

      <h1 className="text-display-1 font-display text-paper">About</h1>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[320px_1fr] lg:gap-14">
        <div className="skew-panel clip-torn-1 border-2 border-paper shadow-hard">
          <div className="skew-content">
            <Placeholder
              src="/images/profile/headshot.png"
              width={800}
              height={800}
              alt="Portrait of Jordan Landversicht"
              loading="eager"
            />
          </div>
        </div>

        <div>
          <div className="space-y-5">
            {profile.bio.map((paragraph, i) => (
              <p key={i} className="case-normal max-w-[70ch] font-body text-base text-paper sm:text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          <section className="mt-10 border-l-4 border-red pl-5">
            <h2 className="font-display text-lg uppercase tracking-wide text-red">Education</h2>
            <p className="case-normal mt-2 font-display text-xl uppercase text-paper">{profile.education.school}</p>
            <p className="case-normal font-body text-base text-paper">{profile.education.degree}</p>
            <p className="case-normal font-body text-sm text-slate">
              {profile.education.expected} · {profile.education.gpa}
            </p>
            <ul className="mt-2 space-y-1">
              {profile.education.honors.map((honor) => (
                <li key={honor} className="case-normal font-body text-sm text-paper">
                  {honor}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10 border-l-4 border-red pl-5">
            <h2 className="font-display text-lg uppercase tracking-wide text-red">What I'm Looking For</h2>
            <p className="case-normal mt-2 max-w-[65ch] font-body text-base text-paper">{profile.seeking}.</p>
          </section>
        </div>
      </div>
    </div>
  )
}
