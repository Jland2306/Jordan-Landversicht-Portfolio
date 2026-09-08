interface FilterTabsProps<T extends string> {
  options: T[]
  active: T | 'All'
  onChange: (value: T | 'All') => void
  label: string
}

export default function FilterTabs<T extends string>({ options, active, onChange, label }: FilterTabsProps<T>) {
  const all: (T | 'All')[] = ['All', ...options]

  return (
    <div role="group" aria-label={label} className="flex flex-wrap gap-2 sm:gap-3">
      {all.map((option) => {
        const isActive = option === active
        return (
          <button
            key={option}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(option)}
            className={[
              'nav-tab border-2 px-4 py-2 font-display text-xs uppercase tracking-wide transition-colors duration-150 sm:text-sm',
              isActive
                ? 'nav-tab-active border-red bg-red text-paper'
                : 'border-paper bg-jet text-paper hover:border-red-hot hover:text-red-hot',
            ].join(' ')}
          >
            <span className="nav-tab-content">{option}</span>
          </button>
        )
      })}
    </div>
  )
}
