import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Globe, Heart, ShieldCheck } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

export default function CommitmentSection() {
  const ITEMS = useMemo(
    () => [
      {
        label: 'Responsabilidade ética',
        desc: 'Rastreabilidade, registros consistentes e conduta responsável em cada etapa.',
        Icon: ShieldCheck,
        accent: '#00cfd7',
      },
      {
        label: 'Respeito à diversidade',
        desc: 'Inclusão real: diferentes ritmos, perfis e contextos com equidade.',
        Icon: Globe,
        accent: '#ffd76e',
      },
      {
        label: 'Desenvolvimento integral',
        desc: 'Visão ampliada para apoiar aprendizagem, participação e autonomia.',
        Icon: Heart,
        accent: '#ff616f',
      },
    ],
    []
  )

  return (
    <section className="relative py-28 md:py-32 px-6 bg-white overflow-hidden">
      {/* Fundo sutil premium */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'radial-gradient(rgba(1,38,119,0.28) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />
        <div className="absolute -top-56 left-1/2 -translate-x-1/2 h-[900px] w-[900px] rounded-full bg-[#012677]/8 blur-[140px]" />
        <div className="absolute -bottom-64 -right-64 h-[780px] w-[780px] rounded-full bg-[#00cfd7]/10 blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header limpo */}
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading>Nosso Compromisso</SectionHeading>

          <p className="mt-6 text-lg md:text-xl text-gray-600 font-medium leading-relaxed">
            O <span className="font-extrabold text-nexxusBlue">Afeto&apos;S</span> une{' '}
            <span className="font-bold text-gray-900">ciência</span>,{' '}
            <span className="font-bold text-gray-900">educação</span> e{' '}
            <span className="font-bold text-gray-900">cuidado</span>, com ética, respeito e foco no
            desenvolvimento integral da criança.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid md:grid-cols-3 gap-6 lg:gap-8">
          {ITEMS.map((item, i) => {
            const Icon = item.Icon

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.85, delay: i * 0.06 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div
                  className="
                    relative h-full overflow-hidden
                    rounded-[2.4rem]
                    border border-gray-200
                    bg-white
                    shadow-[0_24px_70px_-55px_rgba(1,38,119,0.28)]
                    transition-all duration-500
                    hover:shadow-[0_40px_110px_-80px_rgba(1,38,119,0.42)]
                  "
                >
                  {/* Barra lateral sólida (mantida) */}
                  <div
                    className="absolute left-0 top-0 h-full w-[7px]"
                    style={{ backgroundColor: item.accent }}
                  />

                  {/* Glow sutil */}
                  <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-[#012677]/8 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="p-8">
                    {/* Topo */}
                    <div className="flex items-start justify-between gap-6">
                      <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 shadow-sm">
                        <span className="text-[10px] font-black tracking-[0.22em] text-gray-500">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{ backgroundColor: item.accent }}
                        />
                      </div>

                      <div
                        className="
                          h-14 w-14 rounded-2xl
                          bg-[#012677] text-white
                          flex items-center justify-center
                          shadow-[0_20px_55px_-35px_rgba(1,38,119,0.55)]
                        "
                      >
                        <Icon size={22} />
                      </div>
                    </div>

                    {/* Texto */}
                    <h4 className="mt-7 text-[19px] font-extrabold text-gray-900 tracking-tight">
                      {item.label}
                    </h4>

                    <p className="mt-3 text-sm md:text-[15px] font-semibold text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>

                    {/* Assinatura inferior — cor sólida */}
                    <div className="mt-7">
                      <div
                        className="h-[2px] w-12 rounded-full"
                        style={{ backgroundColor: item.accent, opacity: 0.8 }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
