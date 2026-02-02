import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronRight, Sparkles } from 'lucide-react'
import InteractiveBackground from '../components/InteractiveBackground'
import FloatingLogo from '../components/FloatingLogo'

export default function HeroSection() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const yParallax = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  return (
    <section
      id="top"
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-32 pb-20 px-6 bg-white overflow-hidden"
    >
      <InteractiveBackground />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
        {/* Conteúdo textual */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Badge superior */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-blue-50/50 backdrop-blur-sm px-6 py-2.5 rounded-full text-nexxusBlue font-black text-[10px] tracking-[0.2em] mb-10 border border-blue-100 shadow-sm"
          >
            <Sparkles size={14} className="animate-pulse" />
            <span>SISTEMA INTEGRADO DE AVALIAÇÃO, PLANEJAMENTO E ACOMPANHAMENTO</span>
          </motion.div>

          {/* Título */}
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-nexxusBlue leading-[0.8] mb-10 tracking-tighter">
            Afeto'S
          </h1>

          {/* Subtítulo */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 leading-tight">
            Conectando <span className="text-blue-600 italic">clínica</span>,{' '}
            <span className="text-blue-600 italic">escola</span> e{' '}
            <span className="text-blue-600 italic">família</span>.
          </h2>

          {/* Texto descritivo */}
          <p className="text-xl text-gray-500 leading-relaxed mb-12 max-w-xl font-medium">
            Avaliar com sentido. Planejar com propósito. Incluir com responsabilidade. Alinhado à{' '}
            <span className="text-nexxusBlue font-bold">BNCC</span> e ao{' '}
            <span className="text-nexxusBlue font-bold">AEE</span>.
          </p>

          {/* Botões */}
          <div className="flex flex-col sm:flex-row gap-5 mb-14">
            <motion.a
              whileHover={{ scale: 1.04, boxShadow: '0 18px 40px -15px rgba(1, 38, 119, 0.35)' }}
              whileTap={{ scale: 0.96 }}
              href="#funcionalidades"
              className="bg-nexxusBlue text-white px-12 py-6 rounded-xl font-black text-base shadow-xl transition-all flex items-center justify-center gap-2"
            >
              Acessar o Afeto'S <ChevronRight size={18} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.04, backgroundColor: '#f8faff' }}
              whileTap={{ scale: 0.96 }}
              href="#cta"
              className="bg-white text-nexxusBlue border border-nexxusBlue/15 px-12 py-6 rounded-xl font-black text-base transition-all shadow-sm text-center"
            >
              Solicitar Apresentação
            </motion.a>
          </div>
        </motion.div>

        {/* Logo flutuante */}
        <motion.div
          style={{ y: yParallax }}
          className="hidden lg:flex items-center justify-center"
        >
          <FloatingLogo />
        </motion.div>
      </div>
    </section>
  )
}
