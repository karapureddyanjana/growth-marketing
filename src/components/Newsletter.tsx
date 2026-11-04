import { useState, type FormEvent } from 'react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!email) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section id="contact" className="bg-surface">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-6 py-16 lg:px-[354px]">
        <div className="text-center">
          <h2 className="text-heading font-medium text-ink">Stay update</h2>
          <p className="mt-4 text-subtitle text-ink">
            Subscribe to our newsletter to receive ou best daily , week and month offer.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-12 flex w-full max-w-[698px] flex-col gap-4 rounded-[4px] bg-surface p-6 shadow-input sm:flex-row sm:items-center sm:justify-between"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="email adress"
            className="w-full bg-transparent px-2 text-subtitle text-ink placeholder:text-line-muted focus:outline-none sm:flex-1"
          />
          <button
            type="submit"
            className="inline-flex shrink-0 items-center justify-center rounded-[4px] bg-accent px-8 py-3.5 text-title font-medium text-surface-alt transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {submitted ? 'Subscribed' : 'Susbscribe'}
          </button>
        </form>
      </div>
    </section>
  )
}
