import Seo from '../components/Seo'
import Placeholder from '../components/Placeholder'
import DiagonalBand from '../components/DiagonalBand'
import { profile } from '../data/profile'

export default function About() {
  return (
    <div className="relative isolate min-h-screen px-6 py-16 sm:px-10 md:px-14 lg:px-16 xl:px-20">
      <DiagonalBand position="left-2/3" />
      <Seo
        title="About"
        description="About Jordan Landversicht — Game Design & Development student at RIT, what I'm building, and what I'm looking for."
      />

      <h1 className="text-[clamp(3rem,11vw,8rem)] font-display leading-[0.9] text-paper">About</h1>

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(280px,32%)_1fr] lg:gap-16 xl:gap-20">
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
          <div className="space-y-6">
            {profile.bio.map((paragraph, i) => (
              <p key={i} className="case-normal max-w-[70ch] font-body text-lg text-paper sm:text-xl lg:text-2xl">
                {paragraph}
              </p>
            ))}
          </div>

          <section className="mt-12 border-l-4 border-red pl-6 lg:mt-16 lg:pl-8">
            <h2 className="font-display text-xl uppercase tracking-wide text-red-hot lg:text-2xl">Education</h2>
            <p className="case-normal mt-3 font-display text-2xl uppercase text-paper lg:text-3xl">
              {profile.education.school}
            </p>
            <p className="case-normal font-body text-lg text-paper lg:text-xl">{profile.education.degree}</p>
            <p className="case-normal font-body text-base text-slate-text lg:text-lg">
              {profile.education.expected} · {profile.education.gpa}
            </p>
            <ul className="mt-3 space-y-1.5">
              {profile.education.honors.map((honor) => (
                <li key={honor} className="case-normal font-body text-base text-paper lg:text-lg">
                  {honor}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12 border-l-4 border-red pl-6 lg:mt-16 lg:pl-8">
            <h2 className="font-display text-xl uppercase tracking-wide text-red-hot lg:text-2xl">
              What I'm Looking For
            </h2>
            <p className="case-normal mt-3 max-w-[65ch] font-body text-lg text-paper sm:text-xl lg:text-2xl">
              {profile.seeking}.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
