import { useEffect, useRef, useState } from 'react'
import { SERVICES } from '../data/content'
import { ChevronDown } from './ui'

function Logo({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
  return (
    <a href="#top" className="relative block h-[33px] w-[64px]" aria-label="Greendy home">
      <span className="absolute left-0 top-0 block h-[33px] w-[52px] rounded-[2px] bg-accent" />
      <span
        className={`absolute left-[26px] top-[10px] text-[11.8px] font-medium leading-none ${
          tone === 'dark' ? 'text-ink' : 'text-white'
        }`}
      >
        LOGO
      </span>
    </a>
  )
}

function MenuLink({ label, href, onNavigate }: { label: string; href: string; onNavigate?: () => void }) {
  return (
    <a
      href={href}
      onClick={onNavigate}
      className="text-body font-medium leading-none text-ink transition-colors hover:text-accent"
    >
      {label}
    </a>
  )
}

export function Header() {
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!servicesOpen) return

    function onPointerDown(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setServicesOpen(false)
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setServicesOpen(false)
    }

    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [servicesOpen])

  return (
    <header className="relative z-40 bg-surface">
      <div className="mx-auto flex h-20 w-full max-w-[1440px] items-center justify-between px-6 lg:px-[126px]">
        <Logo />

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
          <MenuLink label="Who we are" href="#who-we-are" />
          <div
            ref={menuRef}
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() => setServicesOpen((open) => !open)}
              className="flex items-center text-body font-medium leading-none text-ink transition-colors hover:text-accent"
            >
              What we do
              <ChevronDown className="ml-0 size-6" />
            </button>
            {servicesOpen ? (
              <div className="absolute left-1/2 top-full w-[418px] -translate-x-[38%] rounded-lg bg-surface p-3 shadow-[0_6px_24px_4px_rgba(47,223,132,0.15)]">
                <ul className="space-y-1">
                  {SERVICES.map((service) => (
                    <li key={service.title}>
                      <a
                        href="#what-we-do"
                        onClick={() => setServicesOpen(false)}
                        className="group flex items-center gap-4 rounded-lg px-3 py-3 transition-colors hover:bg-surface-alt"
                      >
                        <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-surface-alt">
                          <span className="block size-6 rounded-sm border-2 border-accent" />
                        </span>
                        <span className="flex-1">
                          <span className="block text-body font-medium leading-tight text-ink">{service.title}</span>
                          <span className="block text-[14px] leading-tight text-ink/70">{service.description}</span>
                        </span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="text-ink">
                          <path d="M4 10h11m0 0-4.5-4.5M15 10l-4.5 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
          <MenuLink label="Reviews" href="#reviews" />
          <MenuLink label="Blog" href="#blog" />
        </nav>

        <a
          href="#free-review"
          className="hidden items-center gap-4 rounded-[4px] bg-accent px-8 py-3.5 text-small font-medium leading-none text-surface-alt transition-opacity hover:opacity-90 lg:inline-flex"
        >
          Get you free website review
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 12h15m0 0-5.5-5.5M19 12l-5.5 5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>

        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="flex size-8 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
        >
          <span className="block h-0.5 w-6 bg-accent" />
          <span className="block h-0.5 w-6 bg-accent" />
        </button>
      </div>

      {mobileOpen ? (
        <div className="fixed inset-0 z-50 flex flex-col bg-accent px-6 py-5 lg:hidden">
          <div className="flex items-center justify-between">
            <Logo tone="light" />
            <button type="button" onClick={() => setMobileOpen(false)} className="p-2" aria-label="Close menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="m6 6 12 12M18 6 6 18" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <nav className="mt-8 flex flex-col gap-6" aria-label="Mobile">
            <a href="#who-we-are" onClick={() => setMobileOpen(false)} className="text-[24px] font-medium leading-none text-white">Who we are</a>
            <a href="#what-we-do" onClick={() => setMobileOpen(false)} className="flex items-center text-[24px] font-medium leading-none text-white">
              What we do
              <ChevronDown className="size-7" />
            </a>
            <a href="#reviews" onClick={() => setMobileOpen(false)} className="text-[24px] font-medium leading-none text-white">Reviews</a>
            <a href="#blog" onClick={() => setMobileOpen(false)} className="text-[24px] font-medium leading-none text-white">Blog</a>
          </nav>
          <a
            href="#free-review"
            onClick={() => setMobileOpen(false)}
            className="mt-auto flex items-center justify-center gap-4 rounded-[4px] bg-[#37c584] px-8 py-4 text-small font-medium text-white"
          >
            Get you free website review
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 12h15m0 0-5.5-5.5M19 12l-5.5 5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      ) : null}
    </header>
  )
}
