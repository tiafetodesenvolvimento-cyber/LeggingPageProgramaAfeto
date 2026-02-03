import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Layers, TrendingUp, Target, Share2 } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

export default function WhySection() {
  const ease = [0.16, 1, 0.3, 1]

  const ITEMS = useMemo(
    () => [
      {
        step: '01',
        label: 'Coletar',
        title: 'Organiza dados do contexto escolar e familiar.',
        impact: 'Menos ruído, mais clareza.',
        icon: <Layers size={22} />,
      },
      {
        step: '02',
        label: 'Analisar',
        title: 'Apoia a leitura do desenvolvimento global da criança.',
        impact: 'Evidências ao longo do tempo.',
        icon: <TrendingUp size={22} />,
      },
      {
        step: '03',
        label: 'Decidir',
        title: 'Contribui para decisões pedagógicas fundamentadas.',
        impact: 'Planejamento com propósito.',
        icon: <Target size={22} />,
      },
      {
        step: '04',
        label: 'Conectar',
        title: 'Favorece corresponsabilidade entre escola e família.',
        impact: 'Acompanhamento alinhado.',
        icon: <Share2 size={22} />,
      },
    ],
    []
  )

  return (
    <section className="relative py-28 px-6 overflow-hidden bg-[#f7f9ff]">
      {/* Fundo sutil */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.22]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(rgba(1,38,119,0.10) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading>Por que o Afeto&apos;S existe?</SectionHeading>

        <p className="mt-4 max-w-5xl text-lg text-gray-700 font-medium leading-relaxed">
          A educação inclusiva exige olhar ampliado, planejamento intencional e ações articuladas.
          O <span className="font-bold text-nexxusBlue">Afeto&apos;S</span> nasce para fortalecer esse
          processo, oferecendo às escolas uma ferramenta que:
        </p>

        {/* Cards */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7, ease, delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="group"
            >
              <div
                className="
                  relative h-full rounded-[2.1rem] bg-white
                  border border-blue-100/70
                  shadow-[0_18px_55px_-45px_rgba(1,38,119,0.30)]
                  transition-all duration-400
                  hover:shadow-[0_28px_85px_-60px_rgba(1,38,119,0.40)]
                  overflow-hidden
                "
              >
                {/* Faixa superior mínima (assinatura) */}
                <div className="h-[3px] w-full bg-gradient-to-r from-[#00cfd7] via-[#ffd76e] to-[#ff616f]" />

                <div className="p-8 flex flex-col h-full">
                  {/* Step + label */}
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] font-black tracking-[0.18em] text-nexxusBlue/85">
                      {item.step}
                    </span>
                    <span className="text-[12px] font-bold text-gray-500">{item.label}</span>
                  </div>

                  {/* ÍCONE (fixo igual ao print) */}
                  <div className="mt-7 flex items-center justify-center">
                    <div
                      className="
                        h-14 w-14 rounded-2xl
                        bg-nexxusBlue
                        text-white
                        flex items-center justify-center
                        shadow-[0_14px_35px_-20px_rgba(1,38,119,0.55)]
                      "
                    >
                      {/* força o ícone ficar branco */}
                      <span className="text-white">{item.icon}</span>
                    </div>
                  </div>

                  {/* Título */}
                  <h4 className="mt-7 text-[17px] font-extrabold text-gray-900 leading-snug text-center">
                    {item.title}
                  </h4>

                  {/* Impacto */}
                  <p className="mt-4 text-sm text-gray-600 font-semibold leading-relaxed text-center">
                    {item.impact}
                  </p>
                </div>

                {/* brilho discreto no hover */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-40 w-40 rounded-full bg-[#012677]/7 blur-2xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Encerramento */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, ease, delay: 0.08 }}
          className="mt-16 max-w-3xl mx-auto text-center"
        >
          <div className="bg-white/85 backdrop-blur-sm border border-blue-100 rounded-2xl px-10 py-7 shadow-[0_18px_55px_-45px_rgba(1,38,119,0.25)]">
            <p className="text-gray-700 text-lg font-medium leading-relaxed">
              Tudo isso{' '}
              <span className="font-bold text-nexxusBlue">sem substituir diagnósticos médicos</span>, mas
              qualificando o <span className="font-bold text-nexxusBlue">planejamento educacional</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
