import React from 'react'
import { motion } from 'framer-motion'
import { Globe, Heart, ShieldCheck } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const ITEMS = [
  { label: 'Responsabilidade ética', icon: <ShieldCheck size={56} /> },
  { label: 'Respeito à diversidade', icon: <Globe size={56} /> },
  { label: 'Desenvolvimento integral da criança', icon: <Heart size={56} /> }
]

export default function CommitmentSection() {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Título */}
        <SectionHeading>
          Nosso Compromisso
        </SectionHeading>

        {/* Texto institucional */}
        <p className="mt-6 text-lg text-gray-600 font-medium leading-relaxed max-w-3xl mx-auto">
          O <span className="font-bold text-nexxusBlue">Afeto'S</span> é um sistema que une
          <span className="font-bold"> ciência</span>, <span className="font-bold">educação</span> e
          <span className="font-bold"> cuidado</span>, com responsabilidade ética, respeito à diversidade
          e foco no desenvolvimento integral da criança.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-20 mt-20">
          {ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, type: 'spring', stiffness: 200 }}
              className="flex flex-col items-center gap-8 group"
            >
              <div className="
                text-nexxusBlue
                bg-blue-50
                p-10
                rounded-[3rem]
                group-hover:bg-nexxusBlue
                group-hover:text-white
                transition-all
                duration-500
                shadow-md
              ">
                {item.icon}
              </div>

              <p className="text-xl font-black text-nexxusBlue tracking-tight text-center">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
