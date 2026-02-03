import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

const POINTS = [
  { title: 'Considerar o desenvolvimento integral da criança.' },
  { title: 'Respeitar as dimensões cognitivas, socioemocionais, motoras e comunicativas.' },
  { title: 'Apoiar práticas pedagógicas que valorizam a diversidade.' },
  { title: 'Promover o acompanhamento contínuo da aprendizagem.' },
]

export default function BNCCSection() {
  const ease = [0.16, 1, 0.3, 1]

  return (
    <section id="bncc" className="relative py-28 md:py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* COLUNA DA IMAGEM */}
          <motion.div
            initial={{ opacity: 0, x: -26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.85, ease }}
            className="relative order-1 lg:order-1"
          >
            {/* Card da imagem (limpo) */}
            <div className="relative rounded-[3rem] bg-white border border-blue-100 shadow-[0_25px_70px_-55px_rgba(1,38,119,0.45)] overflow-hidden">
              {/* Linha fininha no topo */}
              <div className="h-[3px] w-full bg-gradient-to-r from-[#00cfd7] via-[#ffd76e] to-[#ff616f]" />

              <div className="p-6">
                <div className="rounded-[2.4rem] overflow-hidden ring-1 ring-blue-100">
                  <img
                    src="NEXXUSBNCC.png"
                    alt="BNCC"
                    className="w-full object-cover aspect-[4/3]"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Texto de fechamento (separado, bem alinhado, sem “cardão”) */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7, ease, delay: 0.12 }}
              className="mt-8"
            >
              <div className="rounded-2xl bg-blue-50/60 border border-blue-100 px-8 py-6">
                <p className="text-gray-700 text-lg font-medium leading-relaxed">
                  O sistema auxilia a escola a transformar observações e avaliações em{' '}
                  <span className="font-bold text-nexxusBlue">
                    estratégias pedagógicas coerentes com a BNCC
                  </span>
                  .
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* COLUNA DO CONTEÚDO */}
          <motion.div
            initial={{ opacity: 0, x: 26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.85, ease }}
            className="order-2 lg:order-2"
          >
            <SectionHeading subtitle="O Afeto'S está alinhado aos princípios da Base Nacional Comum Curricular, ao:">
              Alinhamento com a BNCC
            </SectionHeading>

            {/* Lista com número em “pílula” (elegante e simples) */}
            <div className="mt-10 grid gap-6">
              {POINTS.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.6, ease, delay: i * 0.06 }}
                  className="flex items-start gap-5"
                >
                  {/* Número */}
                  <div
                    className="
                      w-12 h-12 rounded-full
                      bg-blue-50 text-nexxusBlue
                      flex items-center justify-center
                      font-black text-base
                      border border-blue-100
                      shadow-sm
                      flex-shrink-0
                    "
                  >
                    {i + 1}
                  </div>

                  {/* Texto */}
                  <div className="pt-1">
                    <h4 className="text-[18px] md:text-xl font-black text-nexxusBlue leading-snug">
                      {item.title}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Linha assinatura */}
            <div className="mt-12 h-[3px] w-24 rounded-full bg-gradient-to-r from-[#00cfd7] via-[#ffd76e] to-[#ff616f]" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
