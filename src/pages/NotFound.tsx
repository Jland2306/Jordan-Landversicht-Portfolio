import { Link } from 'react-router-dom'
import { useWipeNavigate } from '../context/Transition'
import { isPlainLeftClick } from '../lib/clickIntercept'
import Seo from '../components/Seo'

export default function NotFound() {
  const go = useWipeNavigate()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-20 text-center sm:px-10 md:px-14">
      <Seo title="Page Not Found" description="This page doesn't exist." />
      <p className="font-display text-2xl uppercase tracking-wide text-red-hot sm:text-3xl lg:text-4xl">404</p>
      <h1 className="mt-2 text-[clamp(3rem,12vw,9rem)] font-display leading-[0.9] text-paper">Wrong Door</h1>
      <p className="case-normal mt-6 max-w-xl font-body text-lg text-slate-text sm:text-xl lg:text-2xl">
        That page doesn't exist. Head back to the projects or the title screen.
      </p>
      <Link
        to="/"
        onClick={(event) => {
          if (!isPlainLeftClick(event)) return
          event.preventDefault()
          go('/')
        }}
        className="nav-tab shadow-hard mt-10 inline-flex items-center justify-center border-2 border-red bg-red px-8 py-4 font-display text-base uppercase tracking-wide text-paper transition-colors duration-150 hover:border-red-hot hover:bg-red-hot hover:text-jet sm:px-10 sm:py-5 sm:text-lg lg:px-12 lg:py-6 lg:text-xl"
      >
        <span className="nav-tab-content">Back to Title</span>
      </Link>
    </div>
  )
}
