import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Contact from './components/Contact'

function App() {
  const [quoteRequest, setQuoteRequest] = useState({ service: '', id: 0 })

  const requestQuote = (service) => {
    if (service) {
      setQuoteRequest((current) => ({ service, id: current.id + 1 }))
    }

    const target =
      document.getElementById('contact-form') ||
      document.getElementById('contact')
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-retro-bg">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services onRequestQuote={requestQuote} />
        <Skills />
        <Projects />
        <Timeline />
        <Contact quoteRequest={quoteRequest} />
      </main>
    </div>
  )
}

export default App
