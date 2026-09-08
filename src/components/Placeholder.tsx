import { useState } from 'react'

interface PlaceholderProps {
  /** Path under /public the real image should be dropped in at, e.g. "/images/projects/vinsight-cover.png" */
  src: string
  width: number
  height: number
  /** Accessible description of what the image shows (or will show once supplied). */
  alt: string
  className?: string
  loading?: 'lazy' | 'eager'
}

export default function Placeholder({ src, width, height, alt, className = '', loading = 'lazy' }: PlaceholderProps) {
  const [errored, setErrored] = useState(false)
  const filename = src.split('/').pop() ?? src

  if (!errored) {
    return (
      <img
        src={src}
        width={width}
        height={height}
        alt={alt}
        loading={loading}
        onError={() => setErrored(true)}
        className={`block w-full border-2 border-red object-cover ${className}`}
        style={{ aspectRatio: `${width} / ${height}` }}
      />
    )
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={`halftone halftone-red relative flex items-center justify-center overflow-hidden border-2 border-red bg-jet ${className}`}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <div aria-hidden="true" className="relative z-10 px-3 text-center">
        <p className="font-display text-[0.7rem] uppercase tracking-wide text-paper sm:text-sm">{filename}</p>
        <p className="mt-1 font-body text-[0.65rem] text-slate-text sm:text-xs">
          {width}×{height}
        </p>
      </div>
    </div>
  )
}
