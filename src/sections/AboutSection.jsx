import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

export default function AboutSection() {
  return (
    <section id="sobre" className="py-28 px-6 bg-white relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
        
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-2 lg:order-1"
        >
          <SectionHeading>
            Sobre o NexxuS
          </SectionHeading>

          {/* Texto mais próximo + justificado */}
          <div className="mt-4 space-y-5 text-xl text-gray-500 font-medium leading-relaxed text-justify">
            <p>
              O <span className="font-bold text-nexxusBlue">NEXXUS</span> é um sistema desenvolvido
              para apoiar escolas e redes de ensino na avaliação do desenvolvimento infantil, no
              diagnóstico situacional e na elaboração de planos educacionais individualizados, como
              o <span className="font-bold text-nexxusBlue">PEI</span> e o{' '}
              <span className="font-bold text-nexxusBlue">PAEE</span>, em consonância com a{' '}
              <span className="font-bold text-nexxusBlue">BNCC</span>, o{' '}
              <span className="font-bold text-nexxusBlue">
                Atendimento Educacional Especializado (AEE)
              </span>{' '}
              e os princípios da educação inclusiva.
            </p>

            <p>
              Sua proposta é integrar informações pedagógicas, clínicas e familiares em um único
              fluxo de acompanhamento, promovendo clareza, organização e continuidade no
              desenvolvimento de cada criança, sempre respeitando suas singularidades,
              potencialidades e direitos.
            </p>
          </div>
        </motion.div>

        {/* Imagem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2 relative"
        >
          <div className="absolute -inset-10 bg-blue-50 rounded-[5rem] blur-2xl opacity-60"></div>

          <div className="relative bg-white p-4 rounded-[4.5rem] shadow-2xl shadow-blue-900/5 border border-white group overflow-hidden">
            <img
              src="NEXXUSLÓ.png"
              alt="Imagem ilustrativa do sistema NexxuS"
              className="rounded-[3.8rem] object-cover w-full aspect-[4/3] group-hover:scale-110 transition-transform duration-1000"
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
