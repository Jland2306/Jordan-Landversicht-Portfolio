import { Link } from 'react-router-dom'
import { useWipeNavigate } from '../context/Transition'
import { isPlainLeftClick } from '../lib/clickIntercept'
import Seo from '../components/Seo'

export default function NotFound() {
  const go = useWipeNavigate()

  return (
    <div className="flex min-h-screen flex-col items-start justify-center px-6 py-20 sm:px-10 md:px-14">
      <Seo title="Page Not Found" description="This page doesn't exist." />
      <p className="font-display text-xl uppercase tracking-wide text-red-hot">404</p>
      <h1 className="text-display-1 mt-1 font-display text-paper">Wrong Door</h1>
      <p className="case-normal mt-4 max-w-md font-body text-base text-slate-text">
        That page doesn't exist. Head back to the projects or the title screen.
      </p>
      <Link
        to="/"
        onClick={(event) => {
          if (!isPlainLeftClick(event)) return
          event.preventDefault()
          go('/')
        }}
        className="nav-tab shadow-hard mt-8 inline-flex items-center justify-center border-2 border-red bg-red px-6 py-3 font-display text-sm uppercase tracking-wide text-paper transition-colors duration-150 hover:border-red-hot hover:bg-red-hot hover:text-jet"
      >
        <span className="nav-tab-content">Back to Title</span>
      </Link>
    </div>
  )
}
