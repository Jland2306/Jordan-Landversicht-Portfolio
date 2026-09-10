import Seo from '../components/Seo'
import DiagonalBand from '../components/DiagonalBand'
import { profile } from '../data/profile'

export default function Contact() {
  return (
    <div className="relative isolate flex min-h-screen items-center justify-center px-6 py-20 sm:px-10 md:px-14">
      <DiagonalBand position="left-1/4" />
      <Seo
        title="Contact"
        description="Get in touch with Jordan Landversicht — email, LinkedIn, GitHub, and résumé."
      />

      <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
        <h1 className="sr-only">Contact</h1>

        <div
          className="clip-torn-2 relative border-2 border-red bg-jet p-8 shadow-hard sm:p-12 lg:p-16"
          style={{ transform: 'rotate(-1deg)' }}
        >
          <p className="font-display text-sm uppercase tracking-[0.2em] text-red-hot lg:text-base">Calling Card</p>
          <p
            style={{ fontFamily: 'var(--font-marker)' }}
            className="mt-4 text-4xl text-paper sm:text-5xl lg:text-6xl"
          >
            Jordan Landversicht
          </p>
          <p className="case-normal mt-2 font-body text-lg text-slate-text lg:text-xl">{profile.tagline} · RIT</p>

          <dl className="mt-10 space-y-6 lg:mt-12 lg:space-y-8">
            <div>
              <dt className="font-display text-sm uppercase tracking-wide text-red-hot lg:text-base">Email</dt>
              <dd className="case-normal mt-1">
                <a
                  href={`mailto:${profile.email}`}
                  className="break-words font-body text-xl text-paper underline decoration-slate underline-offset-4 hover:text-red-hot hover:decoration-red-hot lg:text-2xl"
                >
                  {profile.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-display text-sm uppercase tracking-wide text-red-hot lg:text-base">LinkedIn</dt>
              <dd className="case-normal mt-1">
                <a
                  href={profile.linkedinUrl}
                  className="break-words font-body text-xl text-paper underline decoration-slate underline-offset-4 hover:text-red-hot hover:decoration-red-hot lg:text-2xl"
                >
                  {profile.linkedin}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-display text-sm uppercase tracking-wide text-red-hot lg:text-base">GitHub</dt>
              <dd className="case-normal mt-1">
                <a
                  href={profile.githubUrl}
                  className="break-words font-body text-xl text-paper underline decoration-slate underline-offset-4 hover:text-red-hot hover:decoration-red-hot lg:text-2xl"
                >
                  {profile.github}
                </a>
              </dd>
            </div>
          </dl>

          <a
            href={profile.resumePath}
            download
            className="nav-tab shadow-hard-hot mt-12 inline-flex items-center justify-center gap-2 border-2 border-red bg-red px-8 py-4 font-display text-base uppercase tracking-wide text-paper transition-colors duration-150 hover:border-red-hot hover:bg-red-hot hover:text-jet lg:px-10 lg:py-5 lg:text-lg"
          >
            <span className="nav-tab-content">Download Résumé ↓</span>
          </a>
        </div>
      </div>
    </div>
  )
}
