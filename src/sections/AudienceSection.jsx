import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Building2, GraduationCap, School, Stethoscope, Users } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

function AudienceCard({ title, Icon, delay = 0 }) {
  const ease = [0.16, 1, 0.3, 1]

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.75, ease, delay }}
      whileHover={{ y: -8 }}
      className="group w-full"
    >
      <div
        className="
          relative h-[260px] md:h-[280px]
          rounded-[2.6rem]
          border border-blue-100/80
          bg-white
          shadow-[0_20px_60px_-45px_rgba(1,38,119,0.25)]
          transition-all duration-500
          hover:shadow-[0_34px_95px_-70px_rgba(1,38,119,0.45)]
          overflow-hidden
          flex flex-col items-center justify-center text-center
          px-10
        "
      >
        {/* Linha fina superior (assinatura) */}
        <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#00cfd7] via-[#ffd76e] to-[#ff616f]" />

        {/* Ícone fixo (azul, igual seu padrão) */}
        <div
          className="
            h-14 w-14 md:h-16 md:w-16
            rounded-2xl
            bg-nexxusBlue text-white
            flex items-center justify-center
            shadow-[0_18px_50px_-30px_rgba(1,38,119,0.55)]
          "
          aria-hidden="true"
        >
          <Icon size={26} />
        </div>

        {/* Título */}
        <h4 className="mt-6 text-[15px] md:text-[16px] font-extrabold text-nexxusBlue leading-snug max-w-[260px]">
          {title}
        </h4>

        {/* Glow discreto */}
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-[#012677]/6 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  )
}

export default function AudienceSection() {
  const AUDIENCE = useMemo(
    () => [
      { title: 'Escolas públicas e privadas', Icon: Building2 },
      { title: 'Redes e secretarias de educação', Icon: School },
      { title: 'Equipes pedagógicas e de inclusão', Icon: Users },
      { title: 'Profissionais da saúde e da educação', Icon: Stethoscope },
      { title: 'Instituições comprometidas com a educação inclusiva', Icon: GraduationCap },
    ],
    []
  )

  return (
    <section
      className="
        relative py-28 md:py-32 px-6 overflow-hidden
        bg-gradient-to-b from-[#f7f9ff] via-white to-[#f7f9ff]
      "
    >
      {/* Glow principal superior */}
      <div className="pointer-events-none absolute -top-56 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full bg-[#012677]/8 blur-[140px]" />

      {/* Glow secundário esquerdo */}
      <div className="pointer-events-none absolute top-40 -left-40 h-[520px] w-[520px] rounded-full bg-[#00cfd7]/12 blur-[120px]" />

      {/* Glow secundário direito */}
      <div className="pointer-events-none absolute bottom-[-260px] right-[-260px] h-[620px] w-[620px] rounded-full bg-[#ff616f]/10 blur-[140px]" />

      {/* Noise / textura sutil */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(rgba(1,38,119,0.25) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading subtitle="Um sistema para quem atua com responsabilidade educacional.">
          Para quem é o Afeto&apos;S?
        </SectionHeading>

        <div className="mt-12 grid gap-10 md:gap-12">
          {/* Linha 1: 3 cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
            {AUDIENCE.slice(0, 3).map((item, i) => (
              <AudienceCard key={item.title} {...item} delay={i * 0.05} />
            ))}
          </div>

          {/* Linha 2: 2 cards centralizados */}
          <div className="flex justify-center gap-10 md:gap-12 flex-wrap">
            {AUDIENCE.slice(3).map((item, i) => (
              <div key={item.title} className="w-full sm:w-[420px]">
                <AudienceCard {...item} delay={(i + 3) * 0.05} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
