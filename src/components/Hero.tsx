import heroComposite from '../assets/composites/hero.webp'

export function Hero() {
  return (
    <section id="top" className="bg-surface">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col-reverse items-start justify-between gap-12 px-6 pb-16 pt-10 lg:flex-row lg:items-center lg:gap-0 lg:px-[130px] lg:pb-32 lg:pt-32">
        <div className="w-full lg:w-[600px] lg:shrink-0">
          <p className="text-body font-medium leading-[27px] text-accent">Award winning company</p>
          <h1 className="mt-6 w-full text-[40px] font-medium leading-[1.2] text-ink lg:text-display">
            Digital marketing agency and design. We grow your business online
          </h1>
          <p className="mt-4 max-w-[584px] text-subtitle text-ink">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris imperdiet felis egestas aug
          </p>
          <a
            href="#free-review"
            className="mt-8 inline-flex items-center justify-center rounded-[4px] bg-accent px-8 py-3.5 text-subtitle font-medium leading-7 text-surface-alt transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Start a project
          </a>
        </div>

        <img
          src={heroComposite}
          width={1160}
          height={1222}
          alt="Marketing specialist beside floating analytics cards"
          className="w-full max-w-[580px] self-center lg:w-[580px] lg:max-w-none"
        />
      </div>
    </section>
  )
}
