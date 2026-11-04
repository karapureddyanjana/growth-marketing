import growthArrow from '../assets/svg/icon-growth-arrow.svg'
import { STATS } from '../data/content'

export function Stats() {
  return (
    <section className="bg-surface">
      <div className="mx-auto flex w-full max-w-[1440px] justify-center px-6 lg:px-0">
        <div className="my-16 w-full max-w-[1174px] rounded-lg bg-ink px-6 pb-12 pt-12 lg:px-0 lg:pb-[85px] lg:pt-[75px]">
          <h2 className="text-center text-heading font-medium text-white">The proofs is in the numbers</h2>

          <ul className="mt-10 flex flex-col items-center gap-10 sm:flex-row sm:justify-center lg:mt-[64px] lg:gap-8">
            {STATS.map((stat) => (
              <li key={stat.label} className="flex flex-col items-center">
                <div className="flex items-center gap-2">
                  <span className="text-[48px] font-medium leading-[68px] text-white">{stat.value}</span>
                  <img src={growthArrow} alt="" width={64} height={64} className="size-16" aria-hidden="true" />
                </div>
                <span className="mt-1 text-subtitle leading-7 text-white">{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
