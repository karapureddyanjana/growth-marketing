import designComposite from '../assets/composites/design.webp'
import googleAdsComposite from '../assets/composites/google-ads.webp'
import seoComposite from '../assets/composites/seo.webp'
import socialComposite from '../assets/composites/social.webp'
import { SERVICE_BLOCKS } from '../data/content'
import { CheckIcon } from './ui'

const VISUALS = [
  { image: designComposite, widthClass: 'lg:w-[404px]' },
  { image: googleAdsComposite, widthClass: 'lg:w-[458px]' },
  { image: seoComposite, widthClass: 'lg:w-[431px]' },
  { image: socialComposite, widthClass: 'lg:w-[432px]' },
]

const HIGHLIGHTED: Record<number, number[]> = {
  0: [1, 3],
  1: [1, 3],
  2: [2, 3],
  3: [1, 3],
}

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="bg-surface">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-16 lg:px-0">
        <div className="text-center">
          <h2 className="text-heading font-medium text-ink">What We Do</h2>
          <p className="mt-4 text-subtitle text-ink">
            We are flexible and cope with multiple tasks to make you a leader in the market.
          </p>
        </div>

        <div className="mx-auto mt-16 flex w-full max-w-[1206px] flex-col gap-32">
          {SERVICE_BLOCKS.map((block, index) => {
            const visualFirst = block.align === 'left'
            const visual = VISUALS[index]

            return (
              <div
                key={block.title}
                className={`flex w-full flex-col gap-10 lg:gap-[69px] ${
                  visualFirst ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {visualFirst ? (
                  <img
                    src={visual.image}
                    alt=""
                    width={458}
                    height={582}
                    className={`mx-auto w-full max-w-[458px] shrink-0 self-start lg:mx-0 lg:max-w-none ${visual.widthClass}`}
                    aria-hidden="true"
                  />
                ) : null}

                <div className="w-full lg:w-[679px] lg:shrink-0">
                  <h3 className="text-heading font-medium text-ink">{block.title}</h3>
                  <div className="mt-6 grid w-full grid-cols-1 gap-x-[39px] gap-y-8 sm:grid-cols-2">
                    {block.features.map((feature, featureIndex) => (
                      <div
                        key={feature.title}
                        className={`flex min-h-[217px] flex-col rounded-lg p-6 ${
                          HIGHLIGHTED[index].includes(featureIndex) ? 'bg-surface shadow-card' : ''
                        }`}
                      >
                        <div className="flex items-center gap-6">
                          <span className="flex size-[45px] shrink-0 items-center justify-center rounded-lg bg-surface-alt">
                            <CheckIcon className="size-6 text-accent" />
                          </span>
                          <h4 className="text-subtitle font-medium leading-[26px] text-ink">{feature.title}</h4>
                        </div>
                        <p className="mt-4 text-body text-ink">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {!visualFirst ? (
                  <img
                    src={visual.image}
                    alt=""
                    width={458}
                    height={582}
                    className={`mx-auto w-full max-w-[458px] shrink-0 self-start lg:mx-0 lg:max-w-none ${visual.widthClass}`}
                    aria-hidden="true"
                  />
                ) : null}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
