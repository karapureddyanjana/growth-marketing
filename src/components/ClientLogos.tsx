import atlassian from '../assets/svg/logo-1-383.svg'
import audi from '../assets/svg/logo-1-385.svg'
import bitbucket from '../assets/svg/logo-1-389.svg'
import facebook from '../assets/svg/logo-1-381.svg'
import watch from '../assets/svg/logo-1-387.svg'

const LOGOS = [
  { src: bitbucket, alt: 'Bitbucket', className: 'h-[29px] w-[117px]' },
  { src: watch, alt: 'Apple Watch', className: 'h-[24px] w-[117px]' },
  { src: facebook, alt: 'Facebook', className: 'h-[22px] w-[117px]' },
  { src: atlassian, alt: 'Atlassian', className: 'h-[24px] w-[117px]' },
  { src: audi, alt: 'Audi', className: 'h-[29px] w-[117px]' },
]

export function ClientLogos() {
  return (
    <section className="bg-surface-alt" aria-label="Clients">
      <div className="mx-auto flex h-[100px] w-full max-w-[1440px] items-center justify-center px-6">
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 lg:gap-x-[70px]">
          {LOGOS.map((logo) => (
            <li key={logo.alt}>
              <img src={logo.src} alt={logo.alt} className={`${logo.className} opacity-100`} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
