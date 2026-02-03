import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ClipboardCheck, FileText, ShieldCheck, Users } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

export default function AEESection() {
  const ease = [0.16, 1, 0.3, 1]
  const [active, setActive] = useState(0)

  const CARDS = useMemo(
    () => [
      {
        title: 'Registro organizado',
        description: 'Organize necessidades específicas, histórico e evidências com clareza.',
        icon: ClipboardCheck,
        accent: 'from-[#00cfd7] via-[#012677] to-[#00cfd7]',
      },
      {
        title: 'PAEE',
        description: 'Crie, acompanhe e atualize o PAEE com estrutura e continuidade.',
        icon: FileText,
        accent: 'from-[#ffd76e] via-[#012677] to-[#ffd76e]',
      },
      {
        title: 'Articulação',
        description: 'Conecte sala regular, AEE e equipe multiprofissional com alinhamento.',
        icon: Users,
        accent: 'from-[#ff616f] via-[#012677] to-[#ff616f]',
      },
      {
        title: 'Estratégias',
        description: 'Planeje recursos, adaptações e intervenções pedagógicas com método.',
        icon: ShieldCheck,
        accent: 'from-[#00cfd7] via-[#ffd76e] to-[#ff616f]',
      },
    ],
    []
  )

  return (
    <section id="aee" className="relative py-28 md:py-32 px-6 overflow-hidden bg-[#f7f9ff]">
      {/* Fundo leve e profissional */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.18]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(rgba(1,38,119,0.12) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />
      </div>
      <div className="pointer-events-none absolute -top-44 -left-44 h-[560px] w-[560px] rounded-full bg-[#00cfd7]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-240px] right-[-240px] h-[620px] w-[620px] rounded-full bg-[#ff616f]/10 blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header com “destaque” elegante */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full bg-white/70 border border-blue-100 px-4 py-2 shadow-sm backdrop-blur-sm">
              <span className="text-[10px] font-black tracking-[0.22em] text-nexxusBlue">
                ATENDIMENTO EDUCACIONAL ESPECIALIZADO
              </span>
            </div>

            <div className="mt-5">
              <SectionHeading>Fortalecendo o AEE</SectionHeading>
              <div className="mt-2 h-[3px] w-24 rounded-full bg-gradient-to-r from-[#00cfd7] via-[#ffd76e] to-[#ff616f]" />
            </div>

            <p className="mt-6 max-w-3xl text-lg text-gray-700 font-medium leading-relaxed">
              O <span className="font-bold text-nexxusBlue">Afeto&apos;S</span> fortalece a atuação do AEE,
              oferecendo suporte de forma ética, documentada e alinhada à legislação educacional vigente.
            </p>
          </div>

          {/* Mini “painel” de foco (sem parecer slider) */}
          <div className="hidden lg:block">
            <div className="rounded-3xl bg-white/70 border border-blue-100 shadow-sm backdrop-blur-sm px-6 py-5 w-[360px]">
              <div className="text-[11px] font-black tracking-[0.22em] text-gray-500">EM FOCO</div>
              <div className="mt-2 text-xl font-black text-gray-900 leading-snug">
                {CARDS[active].title}
              </div>
              <div className="mt-3 text-sm font-semibold text-gray-600 leading-relaxed">
                {CARDS[active].description}
              </div>
              <div className="mt-4 h-[3px] w-24 rounded-full bg-gradient-to-r from-[#00cfd7] via-[#ffd76e] to-[#ff616f]" />
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {CARDS.map((card, i) => {
            const Icon = card.icon
            const isActive = i === active

            return (
              <motion.button
                key={card.title}
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.75, ease, delay: i * 0.06 }}
                whileHover={{ y: -8 }}
                className={`
                  group text-left w-full h-full
                  rounded-[2rem] border bg-white/85 backdrop-blur-md
                  shadow-[0_18px_55px_-45px_rgba(1,38,119,0.32)]
                  transition-all duration-500
                  focus:outline-none focus:ring-2 focus:ring-nexxusBlue/30
                  ${isActive ? 'border-blue-200' : 'border-blue-100/70'}
                `}
              >
                <div className="relative h-full rounded-[2rem] overflow-hidden p-7">
                  {/* Barra superior “assinatura” */}
                  <div className={`absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r ${card.accent}`} />

                  {/* Glow sutil no hover */}
                  <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-[#012677]/8 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Ícone (fixo, premium) */}
                  <div className="flex items-center justify-between">
                    <div
                      className="
                        h-12 w-12 rounded-2xl
                        bg-nexxusBlue text-white
                        flex items-center justify-center
                        shadow-[0_14px_35px_-22px_rgba(1,38,119,0.55)]
                      "
                      aria-hidden="true"
                    >
                      <Icon size={20} />
                    </div>

                    <span className="text-[11px] font-black tracking-[0.22em] text-gray-400">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-[18px] font-extrabold text-gray-900 leading-snug">
                      {card.title}
                    </h4>
                    <p className="mt-3 text-sm font-semibold text-gray-600 leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {/* Rodapé minimalista */}
                  <div className="mt-7">
                    <div className="h-[2px] w-16 rounded-full bg-gradient-to-r from-[#00cfd7] via-[#ffd76e] to-[#ff616f] opacity-70" />
                  </div>
                </div>
              </motion.button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
