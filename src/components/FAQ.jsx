import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  { q: 'What is Botox?', a: 'A prescription medicine that relaxes targeted muscles to soften expression lines. We use it conservatively to maintain natural movement.' },
  { q: 'How long do results last?', a: 'On average 3–4 months. Consistency and aftercare can extend longevity.' },
  { q: 'Will it look obvious?', a: 'Our approach is minimal and tailored. The goal is for friends to say you look well-rested, not treated.' },
]

const FAQ = () => {
  const [open, setOpen] = React.useState(0)
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-semibold text-stone-900">Botox, simply explained</h2>
          <p className="mt-4 text-stone-600 text-lg">Safety-led, medically delivered treatments guided by facial balance and restraint.</p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto divide-y divide-stone-200 border border-stone-200 rounded-2xl">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q} className="p-6">
                <button className="w-full text-left flex items-center justify-between" onClick={() => setOpen(isOpen ? -1 : i)}>
                  <span className="text-lg font-medium text-stone-900">{f.q}</span>
                  <span className="text-stone-500">{isOpen ? '-' : '+'}</span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden text-stone-700 leading-relaxed pt-4">
                      {f.a}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ
