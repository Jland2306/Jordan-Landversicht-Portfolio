import { depthLabel, type Skill } from '../data/skills'

const SEGMENTS = 4
const filledSegments: Record<Skill['depth'], number> = {
  shipped: 4,
  coursework: 2,
}

export default function StatMeter({ name, depth }: Skill) {
  const filled = filledSegments[depth]

  return (
    <div className="py-2.5">
      <div className="flex items-baseline justify-between gap-4">
        <span className="font-display text-sm uppercase tracking-wide text-paper sm:text-base">{name}</span>
        <span className="case-normal shrink-0 font-body text-xs text-slate-text sm:text-sm">{depthLabel[depth]}</span>
      </div>
      <div
        role="img"
        aria-label={`${name}: ${depthLabel[depth]}`}
        className="mt-2 flex gap-1"
      >
        {Array.from({ length: SEGMENTS }, (_, i) => (
          <span
            key={i}
            aria-hidden="true"
            className={`h-2.5 flex-1 ${i < filled ? 'bg-red' : 'bg-slate/30'}`}
          />
        ))}
      </div>
    </div>
  )
}
