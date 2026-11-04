import { ChevronDown, SocialIcon } from './ui'

const MENU_LINKS = [
  { label: 'Who we are', href: '#who-we-are' },
  { label: 'What we do', href: '#what-we-do', hasChevron: true },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Blog', href: '#blog' },
]

export function Footer() {
  return (
    <footer className="bg-ink">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-12 lg:px-[130px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-[126px]">
          <div className="w-full max-w-[301px] shrink-0 lg:w-[301px]">
            <div className="relative block h-[33px] w-[64px]" aria-label="Greendy">
              <span className="absolute left-0 top-0 block h-[33px] w-[52px] rounded-[2px] bg-accent" />
              <span className="absolute left-[26px] top-[10px] text-[11.8px] font-medium leading-none text-white">
                LOGO
              </span>
            </div>
            <p className="mt-4 text-small leading-7 text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan, pellentesque aenean sed vel non
              suspendisse.
            </p>
          </div>

          <div className="flex flex-1 flex-col gap-10 sm:flex-row sm:justify-between lg:gap-[110px]">
            <div className="shrink-0">
              <h2 className="text-subtitle font-medium leading-[26px] text-white">Menu</h2>
              <ul className="mt-4 flex flex-col gap-4">
                {MENU_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="flex items-center whitespace-nowrap text-small leading-7 text-white transition-colors hover:text-accent"
                    >
                      {link.label}
                      {link.hasChevron ? <ChevronDown className="ml-1 size-[18px] shrink-0" /> : null}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="shrink-0 lg:w-[219px]">
              <h2 className="text-subtitle font-medium leading-[26px] text-white">Contact</h2>
              <div className="mt-4 flex flex-col gap-4">
                <a href="tel:+1875401027" className="whitespace-nowrap text-subtitle font-medium leading-[26px] text-accent">
                  +1 (875) 40 1027
                </a>
                <a
                  href="mailto:Support@company.com"
                  className="whitespace-nowrap text-subtitle font-medium leading-[26px] text-accent"
                >
                  Support@company.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-[27px]">
              <a href="#instagram" aria-label="Instagram" className="text-accent transition-opacity hover:opacity-80">
                <SocialIcon name="instagram" className="size-[41px]" />
              </a>
              <a href="#facebook" aria-label="Facebook" className="text-accent transition-opacity hover:opacity-80">
                <SocialIcon name="facebook" className="size-[41px]" />
              </a>
              <a href="#twitter" aria-label="Twitter" className="text-accent transition-opacity hover:opacity-80">
                <SocialIcon name="twitter" className="size-[41px]" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-[48px] border-t border-accent pt-[32px]">
          <div className="flex flex-col gap-4 text-body leading-[27px] text-white sm:flex-row sm:items-center sm:justify-between">
            <p>Copyright 2021 Greendy All Right Reserve</p>
            <div className="flex gap-[24px]">
              <a href="#terms" className="transition-colors hover:text-accent">
                Term of use
              </a>
              <a href="#privacy" className="transition-colors hover:text-accent">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
