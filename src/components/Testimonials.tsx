import quoteMark from '../assets/svg/quote.svg'
import { TESTIMONIALS } from '../data/content'

export function Testimonials() {
  const testimonial = TESTIMONIALS[0]

  return (
    <section id="reviews" className="overflow-hidden bg-surface">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-16 lg:px-0">
        <div className="text-center">
          <h2 className="text-heading font-medium text-ink">What our client say</h2>
          <p className="mt-4 text-subtitle text-ink">
            We are flexible and cope with multiple tasks to make you a leader in the market.
          </p>
        </div>

        <div className="relative mt-[24px] hidden h-[351px] w-full lg:block">
          {[-25, 480, 985].map((left, index) => {
            const isCenter = index === 1
            return (
              <figure
                key={left}
                className={`absolute top-[48px] w-[481px] rounded-xl bg-surface p-8 ${
                  isCenter ? 'shadow-card' : 'opacity-30'
                }`}
                style={{ left }}
                aria-hidden={!isCenter}
              >
                <img src={quoteMark} alt="" width={86} height={72} className="absolute left-4 top-4" aria-hidden="true" />
                <blockquote className="relative text-body italic text-ink">{testimonial.quote}</blockquote>
                <figcaption className="mt-6 flex items-center gap-2">
                  <span className="block size-8 rounded-full bg-ink" />
                  <span className="flex flex-col">
                    <span className="text-[12px] font-medium leading-tight text-ink">{testimonial.name}</span>
                    <span className="text-[10px] leading-4 text-ink">{testimonial.role}</span>
                  </span>
                </figcaption>
              </figure>
            )
          })}
        </div>

        <figure className="mx-auto mt-10 w-full max-w-[481px] rounded-xl bg-surface p-8 shadow-card lg:hidden">
          <img src={quoteMark} alt="" width={86} height={72} className="absolute left-4 top-4" aria-hidden="true" />
          <blockquote className="relative text-body italic text-ink">{testimonial.quote}</blockquote>
          <figcaption className="mt-6 flex items-center gap-2">
            <span className="block size-8 rounded-full bg-ink" />
            <span className="flex flex-col">
              <span className="text-[12px] font-medium leading-tight text-ink">{testimonial.name}</span>
              <span className="text-[10px] leading-4 text-ink">{testimonial.role}</span>
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
