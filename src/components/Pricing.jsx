import React from 'react'
import { motion } from 'framer-motion'

const tiers = [
  {
    name: 'Single Area',
    price: '£149',
    items: [
      'One focused area',
      'Premium brand included',
      'Follow-up review',
    ]
  },
  {
    name: 'Two Areas',
    price: '£239',
    items: [
      'Two harmonised areas',
      'Tailored dosing plan',
      'Follow-up review',
    ]
  },
  {
    name: 'Three Areas',
    price: '£299',
    items: [
      'Comprehensive smoothing',
      'Balanced upper-face approach',
      'Follow-up review',
    ]
  }
]

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-semibold text-stone-900">Transparent pricing</h2>
          <p className="mt-4 text-stone-600 text-lg">Invest in subtle, confident results. No rushed appointments, no hidden fees.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="p-8 rounded-2xl bg-white border border-stone-200 shadow-sm flex flex-col"
            >
              <h3 className="text-xl font-medium text-stone-900">{t.name}</h3>
              <div className="mt-2 text-4xl font-semibold text-stone-900">{t.price}</div>
              <ul className="mt-6 space-y-3 text-stone-700">
                {t.items.map((it) => (
                  <li key={it} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-stone-900" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
              <a href="#book" className="mt-8 inline-flex justify-center px-5 py-3 rounded-full bg-stone-900 text-white hover:bg-stone-800 transition">Book consultation</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
