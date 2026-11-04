import { useEffect, useId, useRef, useState, type FormEvent } from 'react'

export function FreeReviewForm({ onClose }: { onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false)
  const dialogRef = useRef<HTMLDivElement>(null)
  const headingId = useId()

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    dialogRef.current?.querySelector<HTMLInputElement>('input')?.focus()

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-surface-alt/95 p-4" role="presentation">
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={headingId}
        className="relative w-full max-w-[733px] rounded-lg bg-surface p-8 shadow-[0_6px_24px_4px_rgba(47,223,132,0.15)] lg:p-10"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute -right-3 -top-3 flex size-10 items-center justify-center rounded-full bg-surface shadow-[0_1px_6px_0_rgba(0,184,113,0.15)] transition-colors hover:bg-surface-alt"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="m5 5 10 10M15 5 5 15" stroke="#161e2e" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>

        {submitted ? (
          <div className="py-16 text-center">
            <h2 id={headingId} className="text-[32px] font-medium leading-tight text-ink">
              Thanks! We’ll be in touch.
            </h2>
            <p className="mt-4 text-subtitle leading-7 text-ink">
              Your website checkup request has been received.
            </p>
          </div>
        ) : (
          <>
            <h2 id={headingId} className="text-[32px] font-medium leading-[1.3] text-ink lg:text-[36px]">
              Get Your Free Website Checkup
            </h2>
            <p className="mt-4 max-w-[490px] text-body leading-[1.55] text-ink">
              Discover main benefits and issues of your website and how to fix them.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="full-name" className="sr-only">
                  Full name
                </label>
                <input
                  id="full-name"
                  name="fullName"
                  required
                  placeholder="Full Name*"
                  autoComplete="name"
                  className="w-full rounded-[10px] border border-line-soft bg-surface px-4 py-3.5 text-body text-ink placeholder:text-[#5b6472] focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Email Adress*"
                  autoComplete="email"
                  className="w-full rounded-[10px] border border-line-soft bg-surface px-4 py-3.5 text-body text-ink placeholder:text-[#5b6472] focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  autoComplete="tel"
                  className="w-full rounded-[10px] border border-line-soft bg-surface px-4 py-3.5 text-body text-ink placeholder:text-[#5b6472] focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div>
                <label htmlFor="website" className="sr-only">
                  Website URL
                </label>
                <input
                  id="website"
                  name="website"
                  type="url"
                  placeholder="Website Url"
                  className="w-full rounded-[10px] border border-line-soft bg-surface px-4 py-3.5 text-body text-ink placeholder:text-[#5b6472] focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Message..."
                  className="w-full resize-none rounded-[10px] border border-line-soft bg-surface px-4 py-3.5 text-body text-ink placeholder:text-[#5b6472] focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="rounded-[4px] bg-accent px-8 py-3.5 text-small font-medium text-surface-alt transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  Get My Free Checkup
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
