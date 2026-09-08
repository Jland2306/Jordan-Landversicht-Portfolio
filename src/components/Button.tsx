import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'outline'

const base =
  'nav-tab inline-flex items-center justify-center gap-2 border-2 px-6 py-3 font-display text-sm uppercase tracking-wide transition-colors duration-150 shadow-hard'

const variants: Record<Variant, string> = {
  primary: 'border-red bg-red text-jet hover:bg-red-hot hover:border-red-hot',
  outline: 'border-paper bg-jet text-paper hover:border-red-hot hover:text-red-hot',
}

interface CommonProps {
  variant?: Variant
  children: ReactNode
  className?: string
}

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>
type LinkButtonProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      <span className="nav-tab-content">{children}</span>
    </button>
  )
}

export function LinkButton({ variant = 'primary', children, className = '', href, ...props }: LinkButtonProps) {
  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`} {...props}>
      <span className="nav-tab-content">{children}</span>
    </a>
  )
}
