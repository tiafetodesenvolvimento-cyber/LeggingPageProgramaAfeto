import React from 'react'
import { motion } from 'framer-motion'
import { Layers, TrendingUp, Target, Share2 } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const ITEMS = [
  {
    title: 'Organiza dados relevantes do contexto escolar e familiar.',
    icon: <Layers size={30} />,
  },
  {
    title: 'Apoia a análise do desenvolvimento global da criança.',
    icon: <TrendingUp size={30} />,
  },
  {
    title: 'Contribui para decisões pedagógicas fundamentadas.',
    icon: <Target size={30} />,
  },
  {
    title: 'Favorece a corresponsabilidade entre escola e família.',
    icon: <Share2 size={30} />,
  },
]

export default function WhySection() {
  return (
    <section className="py-28 px-6 bg-blue-50/30 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Título */}
        <SectionHeading>
          Por que o NexxuS existe?
        </SectionHeading>

        {/* Texto introdutório */}
        <p className="mt-4 max-w-5xl text-lg text-gray-700 font-medium leading-relaxed">
          A educação inclusiva exige olhar ampliado, planejamento intencional e ações articuladas.
          O <span className="font-bold text-nexxusBlue"> NEXXUS</span> nasce para fortalecer esse
          processo, oferecendo às escolas uma ferramenta que:
        </p>

        {/* Cards */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white min-h-[340px] p-10 rounded-[3rem]
                         border border-blue-100
                         shadow-lg shadow-blue-900/5
                         hover:shadow-2xl hover:shadow-blue-900/15
                         transition-all duration-500
                         text-center group flex flex-col items-center"
            >
              {/* Ícone */}
              <div className="w-20 h-20 bg-nexxusBlue/10 text-nexxusBlue rounded-[2rem]
                              flex items-center justify-center mb-8
                              group-hover:bg-nexxusBlue group-hover:text-white
                              transition-all duration-500">
                {item.icon}
              </div>

              {/* Título do card — mesma cor do título principal */}
              <h4 className="text-lg font-extrabold text-nexxusBlue leading-snug max-w-[260px]">
                {item.title}
              </h4>
            </motion.div>
          ))}
        </div>

        {/* Texto de encerramento */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-20 max-w-3xl mx-auto text-center"
        >
          <div className="bg-white/80 backdrop-blur-sm border border-blue-100 rounded-2xl px-10 py-7 shadow-md">
            <p className="text-gray-700 text-lg font-medium leading-relaxed">
              Tudo isso <span className="font-bold text-nexxusBlue">sem substituir diagnósticos médicos</span>,
              mas qualificando o <span className="font-bold text-nexxusBlue">planejamento educacional</span>.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
