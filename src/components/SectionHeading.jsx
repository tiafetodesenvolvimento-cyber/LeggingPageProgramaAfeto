import React from 'react'
import { motion } from 'framer-motion'

export default function SectionHeading({ children, subtitle, light = false }) {
  return (
    <div className="mb-16 relative">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className={`inline-block px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4 shadow-sm ${
          light ? 'bg-white/10 text-white' : 'bg-blue-50 text-nexxusBlue'
        }`}
      >
        Aqui tem Afeto!
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight ${
          light ? 'text-white' : 'text-nexxusBlue'
        }`}
      >
        {children}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={`text-lg md:text-xl max-w-2xl leading-relaxed font-medium ${
            light ? 'text-blue-100' : 'text-gray-500'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
