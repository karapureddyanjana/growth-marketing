import type { ReactNode } from 'react'

type ArrowRightProps = {
  className?: string
}

export function ArrowRight({ className }: ArrowRightProps) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 12h15m0 0-5.5-5.5M19 12l-5.5 5.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

type ChevronDownProps = {
  className?: string
}

export function ChevronDown({ className }: ChevronDownProps) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m6.75 9.5 5.25 5 5.25-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

type CheckIconProps = {
  className?: string
}

export function CheckIcon({ className }: CheckIconProps) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M18.71 7.21a1.13 1.13 0 0 0-1.42-.22l-.1.08-6.74 6.79-3.13-3.2a1.13 1.13 0 0 0-1.6 1.6l3.84 3.84a1.13 1.13 0 0 0 1.6 0l7.45-7.48a1.13 1.13 0 0 0 .1-1.41Z"
        fill="currentColor"
      />
    </svg>
  )
}

type SocialIconProps = {
  name: 'instagram' | 'facebook' | 'twitter'
  className?: string
}

export function SocialIcon({ name, className }: SocialIconProps) {
  if (name === 'instagram') {
    return (
      <svg className={className} width="41" height="41" viewBox="0 0 41 41" fill="none" aria-hidden="true">
        <rect x="3.42" y="3.42" width="34.17" height="34.17" rx="10" stroke="currentColor" strokeWidth="2" />
        <circle cx="20.5" cy="20.5" r="8" stroke="currentColor" strokeWidth="2" />
        <circle cx="30" cy="11" r="2.4" fill="currentColor" />
      </svg>
    )
  }

  if (name === 'facebook') {
    return (
      <svg className={className} width="41" height="41" viewBox="0 0 41 41" fill="none" aria-hidden="true">
        <path
          d="M28.75 6.25h-4.5a7.5 7.5 0 0 0-7.5 7.5v4.13H12.5v5.25h4.25v11.62h5.25V23.13h4.5l.75-5.25H22V13.75a2.25 2.25 0 0 1 2.25-2.25h4.5V6.25Z"
          fill="currentColor"
        />
      </svg>
    )
  }

  return (
    <svg className={className} width="41" height="41" viewBox="0 0 41 41" fill="none" aria-hidden="true">
      <path
        d="M38.83 9.46a15.5 15.5 0 0 1-4.03 1.1 7.06 7.06 0 0 0 3.09-3.89 14.2 14.2 0 0 1-4.47 1.71 7.02 7.02 0 0 0-12.1 4.79c0 .55.06 1.09.18 1.6a19.93 19.93 0 0 1-14.47-7.34 7.04 7.04 0 0 0 2.18 9.37 7 7 0 0 1-3.18-.88v.09a7.03 7.03 0 0 0 5.63 6.89 7.1 7.1 0 0 1-3.17.12 7.03 7.03 0 0 0 6.56 4.88 14.09 14.09 0 0 1-10.4 2.91 19.86 19.86 0 0 0 10.75 3.15c12.9 0 19.95-10.68 19.95-19.94v-.91a14.2 14.2 0 0 0 3.48-3.65Z"
        fill="currentColor"
      />
    </svg>
  )
}

type ButtonProps = {
  children: ReactNode
  href: string
  variant?: 'accent' | 'dark'
  withArrow?: boolean
  className?: string
}

export function Button({ children, href, variant = 'accent', withArrow = false, className }: ButtonProps) {
  const tone = variant === 'dark' ? 'bg-ink text-surface-alt' : 'bg-accent text-surface-alt'

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-4 rounded-[4px] px-8 py-3.5 text-small font-medium leading-none transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${tone} ${className ?? ''}`}
    >
      <span>{children}</span>
      {withArrow ? <ArrowRight className="size-6" /> : null}
    </a>
  )
}
