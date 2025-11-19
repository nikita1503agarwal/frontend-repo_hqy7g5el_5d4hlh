import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[80vh] md:h-[86vh] w-full">
        <Spline scene="https://prod.spline.design/c1w2QYixcPkptHWE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Soft gradient veil for japandi feel */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/70" />
      </div>

      <div className="container mx-auto px-6 -mt-40 md:-mt-56 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-sm tracking-wide">Glow Clinic • Botox Expertise</span>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-tight tracking-tight text-stone-900">
            Subtle, natural rejuvenation with premium Botox treatments
          </h1>
          <p className="mt-5 text-stone-700 text-lg md:text-xl leading-relaxed">
            A calm, clinical approach inspired by Japandi aesthetics. Thoughtful consultations, expert clinicians, and results that feel like you—well rested.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#pricing" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-stone-900 text-white hover:bg-stone-800 transition">
              View pricing <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#treatments" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-stone-900 ring-1 ring-stone-200 hover:bg-stone-50 transition">
              Explore treatments
            </a>
            <a href="tel:+000000000" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-amber-100 text-amber-900 hover:bg-amber-200 transition">
              <Phone className="mr-2 h-4 w-4" /> Book a consult
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
