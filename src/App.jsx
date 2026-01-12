import React, { useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.ready()
    }
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation />
      <Hero />
      <Features />
      <About />
      <CTA />
      <Footer />
    </div>
  )
}

export default App