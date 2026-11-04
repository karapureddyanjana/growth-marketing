import aboutComposite from '../assets/composites/about.webp'

export function WhoWeAre() {
  return (
    <section id="who-we-are" className="bg-surface">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-12 px-6 py-16 lg:flex-row lg:items-center lg:justify-between lg:gap-[100px] lg:px-[130px] lg:py-16">
        <div className="max-w-[480px]">
          <p className="text-body font-medium leading-[27px] text-accent">Who we are</p>
          <h2 className="mt-6 text-heading font-medium text-ink">Top #1 marketing agency in the world</h2>
          <p className="mt-4 text-subtitle text-ink">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris imperdiet felis egestas augue.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris imperdiet felis egestas augue.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center justify-center rounded-[4px] bg-ink px-8 py-3.5 text-small font-medium text-surface-alt transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            Get in Touch
          </a>
        </div>

        <img
          src={aboutComposite}
          width={1196}
          height={1256}
          alt="Analyst reviewing user activity and product growth"
          className="w-full max-w-[598px]"
        />
      </div>
    </section>
  )
}
