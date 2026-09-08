interface DiagonalBandProps {
  /** Horizontal position of the band as a Tailwind left-offset class, e.g. "left-1/4". */
  position?: string
  color?: 'red' | 'red-hot'
}

export default function DiagonalBand({ position = 'left-1/3', color = 'red' }: DiagonalBandProps) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div
        className={`absolute -inset-y-32 w-1/3 -skew-x-12 opacity-[0.16] ${position} ${
          color === 'red' ? 'bg-red' : 'bg-red-hot'
        }`}
      />
    </div>
  )
}
