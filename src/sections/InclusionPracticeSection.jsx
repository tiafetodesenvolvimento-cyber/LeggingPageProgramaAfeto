import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Globe, HandHelping, Heart, Sparkles, Target, Users } from 'lucide-react'
import InteractiveBackground from '../components/InteractiveBackground'
import SectionHeading from '../components/SectionHeading'

export default function InclusionPracticeSection() {
  const ease = [0.16, 1, 0.3, 1]

  const ITEMS = useMemo(
    () => [
      {
        title: 'Criança no Centro',
        desc: 'Colocar a criança no centro do processo educacional.',
        Icon: Heart,
      },
      {
        title: 'Singularidades',
        desc: 'Respeitar singularidades e ritmos de aprendizagem.',
        Icon: Target,
      },
      {
        title: 'Acessibilidade',
        desc: 'Apoiar práticas pedagógicas acessíveis e equitativas.',
        Icon: Globe,
      },
      {
        title: 'Colaborativo',
        desc: 'Estimular o trabalho colaborativo entre profissionais.',
        Icon: Users,
      },
      {
        title: 'Vínculo',
        desc: 'Fortalecer o vínculo e a participação da família.',
        Icon: HandHelping,
      },
      {
        title: 'Ação Intencional',
        desc: 'Planejamento consciente e ação intencional.',
        Icon: Sparkles,
      },
    ],
    []
  )

  return (
    <section className="relative py-28 md:py-32 px-6 bg-nexxusBlue text-white overflow-hidden">
      {/* Seu fundo interativo */}
      <InteractiveBackground color="#ffffff" />

      {/* Profundidade (sutil e elegante) */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.18]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />
      </div>
      <div className="pointer-events-none absolute -top-44 -left-44 h-[560px] w-[560px] rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-260px] right-[-260px] h-[640px] w-[640px] rounded-full bg-white/10 blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Título */}
        <SectionHeading light>Inclusão na Prática</SectionHeading>

        {/* Texto introdutório */}
        <p className="mt-3 max-w-5xl text-lg md:text-xl text-white/80 font-medium leading-relaxed">
          Mais do que registrar informações, o{' '}
          <span className="font-extrabold text-white">Afeto&apos;S</span> promove uma educação inclusiva
          aplicada ao:
        </p>

        {/* Cards */}
        <div className="mt-12 md:mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {ITEMS.map((item, i) => {
            const Icon = item.Icon

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.75, ease, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="group"
              >
                <div
                  className="
                    relative h-full rounded-[2.2rem]
                    border border-white/12
                    bg-white/[0.06] backdrop-blur-xl
                    shadow-[0_22px_70px_-55px_rgba(0,0,0,0.65)]
                    transition-all duration-500
                    overflow-hidden
                  "
                >
                  {/* Borda gradiente sutil no hover (bem elegante) */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute -inset-[1px] rounded-[2.2rem] bg-gradient-to-r from-[#00cfd7]/45 via-[#ffd76e]/45 to-[#ff616f]/45" />
                    <div className="absolute inset-[1px] rounded-[2.15rem] bg-[#012677]/40 backdrop-blur-xl" />
                  </div>

                  {/* brilho de topo */}
                  <div className="pointer-events-none absolute inset-x-0 -top-28 h-48 bg-gradient-to-b from-white/10 to-transparent opacity-60" />

                  <div className="relative p-9 md:p-10">
                    {/* Ícone padronizado: badge fixo (sem animação infinita) */}
                    <div className="flex items-center justify-between">
                      <div className="relative inline-flex">
                        <div className="absolute -inset-[2px] rounded-2xl bg-white/15 opacity-60" />
                        <div
                          className="
                            relative h-12 w-12 rounded-2xl
                            bg-white/10 border border-white/15
                            flex items-center justify-center
                            text-white
                            transition-all duration-500
                            group-hover:bg-white/14
                          "
                          aria-hidden="true"
                        >
                          <Icon size={22} />
                        </div>
                      </div>

                      <div className="text-[11px] font-black tracking-[0.22em] text-white/55">
                        {String(i + 1).padStart(2, '0')}
                      </div>
                    </div>

                    {/* Título */}
                    <h4 className="mt-7 text-xl md:text-[22px] font-extrabold tracking-tight text-white leading-snug">
                      {item.title}
                    </h4>

                    {/* Descrição */}
                    <p className="mt-3 text-white/75 text-base md:text-[17px] leading-relaxed font-medium">
                      {item.desc}
                    </p>

                    {/* Linha assinatura */}
                    <div className="mt-7 h-[3px] w-20 rounded-full bg-gradient-to-r from-[#00cfd7] via-[#ffd76e] to-[#ff616f] opacity-80" />
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
