import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

const treatments = [
  {
    title: 'Forehead Lines',
    desc: 'Softening horizontal lines for a smoother, rested look.',
    price: 'from £149'
  },
  {
    title: 'Frown Lines (Glabella)',
    desc: 'Gentle relaxation of the 11s between the brows.',
    price: 'from £149'
  },
  {
    title: 'Crows Feet',
    desc: 'Refine fine lines around the eyes while keeping expression.',
    price: 'from £149'
  },
  {
    title: 'Bunny Lines',
    desc: 'Subtle refinement of lines across the upper nose.',
    price: 'from £119'
  },
  {
    title: 'Jawline Slimming',
    desc: 'Masseter treatment for a softer lower face profile.',
    price: 'from £229'
  },
  {
    title: 'Gummy Smile',
    desc: 'Balance upper lip elevation for a harmonious smile.',
    price: 'from £129'
  }
]

const Treatments = () => {
  return (
    <section id="treatments" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <span className="inline-flex items-center gap-2 text-amber-900 bg-amber-100 px-3 py-1 rounded-full text-sm"><Sparkles className="h-4 w-4"/> Our Approach</span>
          <h2 className="mt-6 text-3xl md:text-5xl font-semibold text-stone-900">Targeted treatments, naturally refined</h2>
          <p className="mt-4 text-stone-600 text-lg">We focus on precision dosing, facial balance and a conservative philosophy. Each treatment is personalised to your features and goals.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="p-7 rounded-2xl border border-stone-200 bg-white/80 shadow-[0_1px_0_rgba(0,0,0,0.03)] hover:shadow-lg hover:-translate-y-0.5 transition"
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-medium text-stone-900">{t.title}</h3>
                <span className="text-stone-500 text-sm">{t.price}</span>
              </div>
              <p className="mt-3 text-stone-600">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Treatments
