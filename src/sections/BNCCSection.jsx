import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, CheckCircle2, GraduationCap, Sparkles } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const POINTS = [
  { title: 'Considerar o desenvolvimento integral da criança.', icon: GraduationCap },
  { title: 'Respeitar as dimensões cognitivas, socioemocionais, motoras e comunicativas.', icon: BookOpen },
  { title: 'Apoiar práticas pedagógicas que valorizam a diversidade.', icon: Sparkles },
  { title: 'Promover o acompanhamento contínuo da aprendizagem.', icon: CheckCircle2 },
]

export default function BNCCSection() {
  const ease = [0.16, 1, 0.3, 1]

  return (
    <section
      id="bncc"
      className="relative py-28 md:py-32 px-6 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* COLUNA DA IMAGEM */}
          <motion.div
            initial={{ opacity: 0, x: -26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.85, ease }}
          >
            <div className="relative rounded-[3rem] border border-blue-100 bg-white shadow-[0_30px_90px_-70px_rgba(1,38,119,0.55)] overflow-hidden">

              <div className="flex items-center justify-between px-7 pt-7">
                <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-3 py-1 text-[11px] font-extrabold tracking-[0.18em] text-nexxusBlue">
                  <span className="h-1.5 w-1.5 rounded-full bg-nexxusBlue/70" />
                  BNCC
                </span>

                <div className="flex gap-1 opacity-60">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <span key={i} className="h-1 w-1 rounded-full bg-blue-100" />
                  ))}
                </div>
              </div>

              <div className="p-6 pt-5">
                <div className="relative rounded-[2.6rem] ring-1 ring-blue-100 bg-white">
                  <img
                    src="NEXXUSBNCC.png"
                    alt="BNCC"
                    loading="lazy"
                    className="w-full h-auto object-contain max-h-[520px] mx-auto"
                  />
                </div>
              </div>

              <div className="px-7 pb-7">
                <div className="rounded-2xl border border-blue-100 bg-blue-50/50 px-6 py-5">
                  <p className="text-gray-700 text-[15px] md:text-base font-medium leading-relaxed">
                    Transforme observações e avaliações em{' '}
                    <span className="font-bold text-nexxusBlue">
                      estratégias pedagógicas coerentes com a BNCC
                    </span>
                    , com registro e continuidade.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* COLUNA DO TEXTO */}
          <motion.div
            initial={{ opacity: 0, x: 26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.85, ease }}
          >
            <SectionHeading subtitle="O Afeto'S está alinhado aos princípios da Base Nacional Comum Curricular, ao:">
              Alinhamento com a BNCC
            </SectionHeading>

            <div className="mt-10 grid gap-5">
              {POINTS.map((item, i) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.6, ease, delay: i * 0.06 }}
                  >
                    <div className="
                      rounded-[1.9rem]
                      border border-blue-100
                      bg-white
                      shadow-sm
                      p-6
                      flex items-center gap-5
                    ">
                      {/* FRAME AZUL PADRONIZADO */}
                      <div
                        className="
                          h-14 w-14
                          rounded-2xl
                          bg-nexxusBlue
                          text-white
                          flex items-center justify-center
                          shrink-0
                        "
                      >
                        <Icon className="h-6 w-6 leading-none" />
                      </div>

                      <h4 className="text-[18px] md:text-[20px] font-extrabold text-nexxusBlue leading-snug">
                        {item.title}
                      </h4>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
