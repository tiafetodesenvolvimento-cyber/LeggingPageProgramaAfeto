import React from 'react'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const FEATURES = [
  'Diagnóstico situacional estruturado.',
  'Organização de avaliações e observações.',
  'Apoio ao levantamento de hipóteses.',
  'Elaboração orientada de PEI e PAEE.',
  'Relatórios claros, objetivos e acessíveis.',
  'Acompanhamento da evolução da criança.',
  'Integração entre escola, profissionais e família.'
]

export default function FeaturesSection() {
  return (
    <section id="funcionalidades" className="py-32 px-6 bg-white relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <SectionHeading subtitle="Funcionalidades pensadas para a prática educacional inclusiva.">
            O que o NexxuS oferece?
          </SectionHeading>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {FEATURES.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-6 p-8 bg-blue-50/20 rounded-[2.5rem] hover:bg-blue-50 transition-all border border-transparent hover:border-blue-100 group"
            >
              <div className="bg-nexxusBlue p-3 rounded-full text-white shadow-xl group-hover:scale-110 transition-transform">
                <ChevronRight size={20} />
              </div>
              <span className="text-xl font-bold text-gray-700 group-hover:text-nexxusBlue transition-colors">
                {item}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
