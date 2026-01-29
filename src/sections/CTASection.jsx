import React from 'react'
import { motion } from 'framer-motion'
import InteractiveBackground from '../components/InteractiveBackground'

export default function CTASection() {
  return (
    <section id="cta" className="py-40 px-6 relative bg-nexxusBlue text-white text-center overflow-hidden">
      <InteractiveBackground color="#ffffff" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-black mb-14 leading-[0.9] tracking-tighter"
        >
          Transforme a inclusão hoje.
        </motion.h2>

        <motion.p className="text-2xl text-blue-100 mb-20 max-w-3xl mx-auto leading-relaxed font-medium opacity-80">
          Conheça o NEXXUS e leve mais clareza, organização e propósito para o acompanhamento educacional.
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: '0 40px 80px -20px rgba(255,255,255,0.3)' }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="bg-white text-nexxusBlue px-14 py-8 rounded-[2.5rem] font-black text-2xl shadow-2xl transition-all"
          >
            Solicitar apresentação
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.05)' }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="bg-transparent text-white border-2 border-white/40 px-14 py-8 rounded-[2.5rem] font-black text-2xl transition-all backdrop-blur-sm"
          >
            Entrar em contato
          </motion.a>
        </div>
      </div>
    </section>
  )
}
