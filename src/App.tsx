import { useState } from 'react'
import { Blog } from './components/Blog'
import { ChooseUs } from './components/ChooseUs'
import { ClientLogos } from './components/ClientLogos'
import { Footer } from './components/Footer'
import { FreeReviewForm } from './components/FreeReviewForm'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Newsletter } from './components/Newsletter'
import { Stats } from './components/Stats'
import { Strategy } from './components/Strategy'
import { Testimonials } from './components/Testimonials'
import { WhatWeDo } from './components/WhatWeDo'
import { WhoWeAre } from './components/WhoWeAre'

function App() {
  const [reviewOpen, setReviewOpen] = useState(false)

  return (
    <div
      className="min-h-screen bg-surface font-sans text-ink antialiased"
      onClick={(event) => {
        const target = event.target as HTMLElement
        const trigger = target.closest('a[href="#free-review"]')
        if (trigger) {
          event.preventDefault()
          setReviewOpen(true)
        }
      }}
    >
      <Header />
      <main>
        <Hero />
        <ClientLogos />
        <WhoWeAre />
        <ChooseUs />
        <Stats />
        <WhatWeDo />
        <Strategy />
        <Blog />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
      {reviewOpen ? <FreeReviewForm onClose={() => setReviewOpen(false)} /> : null}
    </div>
  )
}

export default App
