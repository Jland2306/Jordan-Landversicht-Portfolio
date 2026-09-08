import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

// The prerender build step (scripts/prerender.mjs) bakes real markup into
// each route's index.html so first paint doesn't wait on JS — that's a
// genuine FCP/LCP win since it's captured before JS even runs. It's a
// plain snapshot, not real SSR, so it isn't hydration-safe: framer-motion
// components render their `initial` (pre-animation) state on this fresh
// client pass, which never matches the settled state baked into the
// snapshot. Rather than fight that per-component, just do a normal client
// render — React replaces the snapshot outright instead of reconciling
// against it, so there's no hydration-mismatch warning either way.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
