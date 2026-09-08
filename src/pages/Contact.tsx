import Seo from '../components/Seo'
import { profile } from '../data/profile'

export default function Contact() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-20 sm:px-10 md:px-14">
      <Seo
        title="Contact"
        description="Get in touch with Jordan Landversicht — email, LinkedIn, GitHub, and résumé."
      />

      <div className="w-full max-w-lg">
        <h1 className="sr-only">Contact</h1>

        <div
          className="clip-torn-2 relative border-2 border-red bg-jet p-6 shadow-hard sm:p-10"
          style={{ transform: 'rotate(-1deg)' }}
        >
          <p className="font-display text-xs uppercase tracking-[0.2em] text-red-hot">Calling Card</p>
          <p style={{ fontFamily: 'var(--font-marker)' }} className="mt-3 text-3xl text-paper sm:text-4xl">
            Jordan Landversicht
          </p>
          <p className="case-normal mt-1 font-body text-sm text-slate">{profile.tagline} · RIT</p>

          <dl className="mt-8 space-y-5">
            <div>
              <dt className="font-display text-xs uppercase tracking-wide text-red">Email</dt>
              <dd className="case-normal mt-1">
                <a
                  href={`mailto:${profile.email}`}
                  className="break-words font-body text-lg text-paper underline decoration-slate underline-offset-4 hover:text-red-hot hover:decoration-red-hot"
                >
                  {profile.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-display text-xs uppercase tracking-wide text-red">LinkedIn</dt>
              <dd className="case-normal mt-1">
                <a
                  href={profile.linkedinUrl}
                  className="break-words font-body text-lg text-paper underline decoration-slate underline-offset-4 hover:text-red-hot hover:decoration-red-hot"
                >
                  {profile.linkedin}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-display text-xs uppercase tracking-wide text-red">GitHub</dt>
              <dd className="case-normal mt-1">
                <a
                  href={profile.githubUrl}
                  className="break-words font-body text-lg text-paper underline decoration-slate underline-offset-4 hover:text-red-hot hover:decoration-red-hot"
                >
                  {profile.github}
                </a>
              </dd>
            </div>
          </dl>

          <a
            href={profile.resumePath}
            download
            className="nav-tab shadow-hard-hot mt-10 inline-flex items-center justify-center gap-2 border-2 border-red bg-red px-6 py-3 font-display text-sm uppercase tracking-wide text-jet transition-colors duration-150 hover:border-red-hot hover:bg-red-hot"
          >
            <span className="nav-tab-content">Download Résumé ↓</span>
          </a>
        </div>
      </div>
    </div>
  )
}
