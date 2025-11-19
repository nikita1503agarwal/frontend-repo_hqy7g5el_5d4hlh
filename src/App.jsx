import React from 'react'
import Hero from './components/Hero'
import Treatments from './components/Treatments'
import Brands from './components/Brands'
import Pricing from './components/Pricing'
import Comparison from './components/Comparison'
import FAQ from './components/FAQ'

function App() {
  return (
    <div className="min-h-screen bg-white text-stone-900">
      {/* Top bar */}
      <header className="absolute top-0 left-0 right-0 z-10">
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <div className="text-xl font-semibold tracking-tight">Glow Clinic</div>
          <nav className="hidden md:flex items-center gap-6 text-stone-700">
            <a href="#treatments" className="hover:text-stone-900">Treatments</a>
            <a href="#pricing" className="hover:text-stone-900">Pricing</a>
            <a href="#brands" className="hover:text-stone-900">Brands</a>
            <a href="#faq" className="hover:text-stone-900">Info</a>
          </nav>
          <a href="#book" className="px-4 py-2 rounded-full bg-stone-900 text-white hover:bg-stone-800">Book</a>
        </div>
      </header>

      <Hero />
      <Treatments />
      <div id="brands"><Brands /></div>
      <Pricing />
      <Comparison />
      <div id="faq"><FAQ /></div>

      <footer className="py-16 bg-stone-50 text-stone-600">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p>© {new Date().getFullYear()} Glow Clinic. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-stone-800">Privacy</a>
            <a href="#" className="hover:text-stone-800">Terms</a>
            <a href="tel:+000000000" className="hover:text-stone-800">Call us</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
