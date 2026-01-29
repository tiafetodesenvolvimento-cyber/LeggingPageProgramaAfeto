import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

const POINTS = [
  { title: 'Considerar o desenvolvimento integral da criança.' },
  { title: 'Respeitar as dimensões cognitivas, socioemocionais, motoras e comunicativas.' },
  { title: 'Apoiar práticas pedagógicas que valorizam a diversidade.' },
  { title: 'Promover o acompanhamento contínuo da aprendizagem.' }
]

export default function BNCCSection() {
  return (
    <section id="bncc" className="py-32 px-6 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          
          {/* Coluna da imagem + texto final */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="NEXXUSBNCC.png"
              alt="BNCC"
              className="relative rounded-[4.5rem] shadow-2xl border-8 border-white z-10"
            />

            {/* Texto de fechamento */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-10"
            >
              <div className="bg-blue-50/60 border border-blue-100 rounded-2xl px-8 py-6">
                <p className="text-gray-700 text-lg font-medium leading-relaxed">
                  O sistema auxilia a escola a transformar observações e avaliações em{' '}
                  <span className="font-bold text-nexxusBlue">
                    estratégias pedagógicas coerentes com a BNCC
                  </span>.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Coluna do conteúdo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading subtitle="O NEXXUS está alinhado aos princípios da Base Nacional Comum Curricular, ao:">
              Alinhamento com a BNCC
            </SectionHeading>

            <div className="grid gap-8">
              {POINTS.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 16 }}
                  className="flex items-start gap-8 group"
                >
                  <div className="w-14 h-14 bg-blue-50 text-nexxusBlue rounded-full flex items-center justify-center font-black text-xl flex-shrink-0 group-hover:bg-nexxusBlue group-hover:text-white transition-all duration-300 shadow-sm">
                    {i + 1}
                  </div>

                  {/* TÍTULO AJUSTADO */}
                  <h4 className="text-xl font-black text-nexxusBlue leading-snug">
                    {item.title}
                  </h4>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
