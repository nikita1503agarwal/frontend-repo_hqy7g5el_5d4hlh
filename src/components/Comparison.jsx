import React from 'react'
import { motion } from 'framer-motion'

const rows = [
  { label: 'Clinician expertise', glow: 'Aesthetic medical specialists', other: 'Variable' },
  { label: 'Consultation time', glow: 'Thorough and unhurried', other: 'Short, volume-based' },
  { label: 'Product choice', glow: 'Individually selected premium brands', other: 'Lowest cost option' },
  { label: 'Natural result philosophy', glow: 'Conservative, face-first dosing', other: 'Aggressive smoothing' },
  { label: 'Follow-up', glow: 'Included fine-tune review', other: 'Often extra cost' },
]

const Comparison = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-semibold text-stone-900">Glow Clinic vs. price-fighting clinics</h2>
          <p className="mt-4 text-stone-600 text-lg">We prioritise safety, nuance and longevity over shortcuts. That ethos shapes everything.</p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-stone-200">
          <div className="grid grid-cols-12 bg-stone-50 text-stone-700 text-sm font-medium">
            <div className="col-span-5 p-4 text-left">What matters</div>
            <div className="col-span-4 p-4 text-left">Glow Clinic</div>
            <div className="col-span-3 p-4 text-left">Price-fighting</div>
          </div>
          {rows.map((r, i) => (
            <motion.div
              key={r.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className={`grid grid-cols-12 text-stone-800 ${i % 2 === 0 ? 'bg-white' : 'bg-stone-50'}`}
            >
              <div className="col-span-5 p-4 border-t border-stone-200">{r.label}</div>
              <div className="col-span-4 p-4 border-t border-stone-200 font-medium">{r.glow}</div>
              <div className="col-span-3 p-4 border-t border-stone-200 text-stone-600">{r.other}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Comparison
