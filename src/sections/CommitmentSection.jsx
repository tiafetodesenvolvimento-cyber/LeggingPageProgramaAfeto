import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Globe, Heart, ShieldCheck } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

export default function CommitmentSection() {
  const ease = [0.16, 1, 0.3, 1]

  const ITEMS = useMemo(
    () => [
      {
        label: 'Responsabilidade ética',
        Icon: ShieldCheck,
        tone: 'from-[#00cfd7]/18 via-white to-white',
      },
      {
        label: 'Respeito à diversidade',
        Icon: Globe,
        tone: 'from-[#ffd76e]/22 via-white to-white',
      },
      {
        label: 'Desenvolvimento integral da criança',
        Icon: Heart,
        tone: 'from-[#ff616f]/18 via-white to-white',
      },
    ],
    []
  )

  return (
    <section className="relative py-28 md:py-32 px-6 bg-white overflow-hidden">
      {/* Fundo bem leve (sem bolhas grandes) */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(1,38,119,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(1,38,119,0.18) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header mais “premium”: título + texto dentro de um bloco */}
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading>Nosso Compromisso</SectionHeading>

          <p className="mt-6 text-lg md:text-xl text-gray-600 font-medium leading-relaxed">
            O <span className="font-extrabold text-nexxusBlue">Afeto&apos;S</span> une{' '}
            <span className="font-bold text-gray-900">ciência</span>,{' '}
            <span className="font-bold text-gray-900">educação</span> e{' '}
            <span className="font-bold text-gray-900">cuidado</span>, com responsabilidade ética,
            respeito à diversidade e foco no desenvolvimento integral da criança.
          </p>
        </div>

        {/* Linha central (estética, dá acabamento) */}
        <div className="mt-10 flex justify-center">
          <div className="h-[3px] w-28 rounded-full bg-gradient-to-r from-[#00cfd7] via-[#ffd76e] to-[#ff616f]" />
        </div>

        {/* Cards: estilo “split” moderno (ícone em pílula + conteúdo em placa) */}
        <div className="mt-14 grid md:grid-cols-3 gap-6 lg:gap-8">
          {ITEMS.map((item, i) => {
            const Icon = item.Icon

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.8, ease, delay: i * 0.06 }}
                whileHover={{ y: -6 }}
                className="group"
              >
                <div
                  className="
                    relative h-full
                    rounded-[2.2rem]
                    border border-gray-200
                    bg-white
                    shadow-[0_22px_60px_-50px_rgba(1,38,119,0.22)]
                    transition-all duration-500
                    hover:shadow-[0_34px_95px_-70px_rgba(1,38,119,0.38)]
                    overflow-hidden
                    p-8
                  "
                >
                  {/* Background tonal (bem sutil) */}
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${item.tone}`}
                  />

                  <div className="relative">
                    {/* “Pílula” do ícone (super clean, sem ficar bloco pesado) */}
                    <div className="inline-flex items-center gap-3 rounded-full border border-blue-100 bg-white/80 px-4 py-2 backdrop-blur-sm">
                      <span
                        className="
                          h-10 w-10 rounded-full
                          bg-nexxusBlue text-white
                          flex items-center justify-center
                          shadow-[0_14px_35px_-22px_rgba(1,38,119,0.55)]
                        "
                        aria-hidden="true"
                      >
                        <Icon size={18} />
                      </span>

                      <span className="text-[11px] font-black tracking-[0.22em] text-gray-500">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Texto (hierarquia mais elegante) */}
                    <h4 className="mt-6 text-[18px] md:text-[19px] font-extrabold text-gray-900 tracking-tight leading-snug">
                      {item.label}
                    </h4>

                    <p className="mt-3 text-sm md:text-[15px] font-semibold text-gray-600 leading-relaxed">
                      {i === 0 &&
                        'Diretrizes claras, rastreabilidade e postura ética em todo o processo.'}
                      {i === 1 &&
                        'Inclusão com respeito: diferentes perfis, ritmos e realidades.'}
                      {i === 2 &&
                        'Olhar ampliado para apoiar aprendizagem, participação e desenvolvimento.'}
                    </p>

                    {/* Detalhe minimalista no fim */}
                    <div className="mt-7 h-[2px] w-16 rounded-full bg-gradient-to-r from-[#00cfd7] via-[#ffd76e] to-[#ff616f] opacity-70" />
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
