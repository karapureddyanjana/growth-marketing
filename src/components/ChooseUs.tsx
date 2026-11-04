import commerceIcon from '../assets/svg/icon-commerce.svg'
import expertsIcon from '../assets/svg/icon-experts.svg'
import growthIcon from '../assets/svg/icon-growth.svg'
import transparencyIcon from '../assets/svg/icon-transparency.svg'
import chooseUsPhoto from '../assets/images/choose-us.jpg'
import { CLIENTS } from '../data/content'
import { Button } from './ui'

const ICONS = [commerceIcon, growthIcon, transparencyIcon, expertsIcon]

export function ChooseUs() {
  return (
    <section className="bg-surface-alt">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-8 px-6 py-16 lg:px-0 lg:py-24">
        <h2 className="max-w-[499px] text-heading font-medium text-ink lg:ml-[130px]">
          Why top Ecommerce and startup companies choose us :
        </h2>

        <div className="flex w-full flex-col items-start justify-between gap-12 lg:flex-row lg:gap-[94px] lg:pl-[130px] lg:pr-[130px]">
          <div className="grid w-full max-w-[705px] grid-cols-1 gap-x-[65px] gap-y-12 sm:grid-cols-2">
            {CLIENTS.map((item, index) => (
              <div
                key={item.title}
                className={`flex min-h-[233px] flex-col rounded-lg px-6 pb-8 pt-8 ${
                  index === 0 ? 'bg-surface shadow-card' : ''
                }`}
              >
                <img src={ICONS[index]} alt="" width={45} height={45} className="size-[45px]" aria-hidden="true" />
                <div className="mt-8">
                  <h3 className="text-subtitle font-medium leading-[26px] text-ink">{item.title}</h3>
                  <p className="mt-3 text-body text-ink">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="h-[515px] w-full max-w-[388px] shrink-0 overflow-hidden rounded-[24px]">
            <img
              src={chooseUsPhoto}
              alt="Person working on a laptop at a standing desk"
              width={776}
              height={1030}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="lg:pl-[130px]">
          <Button href="#contact" withArrow>
            Let’s Chat
          </Button>
        </div>
      </div>
    </section>
  )
}
