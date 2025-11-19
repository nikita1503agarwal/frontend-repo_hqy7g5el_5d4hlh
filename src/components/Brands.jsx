import React from 'react'
import { motion } from 'framer-motion'

const brands = [
  {
    name: 'Azzalure',
    desc: 'A well-established brand derived from botulinum toxin type A, known for reliable and precise outcomes.'
  },
  {
    name: 'Bocouture',
    desc: 'A purified formulation (free from complexing proteins) offering consistent performance and elegant results.'
  },
]

const Brands = () => {
  return (
    <section className="py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-semibold text-stone-900">Premium brands we trust</h2>
          <p className="mt-4 text-stone-600 text-lg">We work with globally trusted products for safety, predictability and a refined, natural finish.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {brands.map((b, i) => (
            <motion.div
              key={b.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-white border border-stone-200 shadow-sm"
            >
              <h3 className="text-2xl font-medium text-stone-900">{b.name}</h3>
              <p className="mt-3 text-stone-600">{b.desc}</p>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: brands.length * 0.1 }}
            className="p-8 rounded-2xl bg-white border border-stone-200 shadow-sm md:col-span-2"
          >
            <h3 className="text-2xl font-medium text-stone-900">Other options</h3>
            <p className="mt-3 text-stone-600">We also offer alternatives when clinically appropriate and will advise the best choice during consultation.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Brands
