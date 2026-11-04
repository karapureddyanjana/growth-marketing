import strategyPhoto from '../assets/images/strategy.jpg'

export function Strategy() {
  return (
    <section className="bg-ink">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col-reverse items-start justify-between gap-12 px-6 py-16 lg:flex-row lg:items-center lg:gap-[105px] lg:px-[130px] lg:py-[98px]">
        <div className="h-[304px] w-full max-w-[680px] overflow-hidden rounded-lg">
          <img
            src={strategyPhoto}
            alt="Team reviewing a growth strategy on paper"
            width={1360}
            height={608}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="max-w-[395px]">
          <h2 className="text-heading font-medium text-white">Our Proven Strategy for Growing Your Sales</h2>
          <p className="mt-4 text-subtitle text-surface-muted">
            We are carrying your business based on the adapted business plan with the main market trends. Be always
            relevant and competitive.
          </p>
        </div>
      </div>
    </section>
  )
}
