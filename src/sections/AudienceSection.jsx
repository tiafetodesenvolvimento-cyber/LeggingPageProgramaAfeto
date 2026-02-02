import React from 'react'
import { motion } from 'framer-motion'
import { Building2, GraduationCap, School, Stethoscope, Users } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const AUDIENCE = [
  { title: 'Escolas públicas e privadas', icon: <Building2 size={34} /> },
  { title: 'Redes e secretarias de educação', icon: <School size={34} /> },
  { title: 'Equipes pedagógicas e de inclusão', icon: <Users size={34} /> },
  { title: 'Profissionais da saúde e da educação', icon: <Stethoscope size={34} /> },
  { title: 'Instituições comprometidas com a educação inclusiva', icon: <GraduationCap size={34} /> }
]

function Card({ title, icon }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -10 }}
      transition={{ type: 'spring', stiffness: 240, damping: 18 }}
      className="
        bg-white
        w-full
        h-[360px]
        p-14
        rounded-[3.5rem]
        border border-blue-100
        shadow-[0_18px_50px_-18px_rgba(1,38,119,0.28)]
        hover:shadow-[0_30px_70px_-20px_rgba(1,38,119,0.4)]
        flex flex-col
        items-center
        justify-center
        text-center
        gap-10
        transition-all
      "
    >
      {/* Ícone — sólido */}
      <div
        className="
          w-24 h-24
          bg-nexxusBlue
          text-white
          rounded-[2.8rem]
          flex items-center justify-center
          shadow-md
        "
      >
        {icon}
      </div>

      {/* Título */}
      <h4 className="text-xl font-black text-nexxusBlue tracking-tight leading-snug max-w-[260px]">
        {title}
      </h4>
    </motion.div>
  )
}

export default function AudienceSection() {
  return (
    <section className="py-32 px-6 bg-blue-50/20">
      <div className="max-w-7xl mx-auto">

        <SectionHeading subtitle="Um sistema para quem atua com responsabilidade educacional.">
          Para quem é o Afeto'S?
        </SectionHeading>

        <div className="grid gap-14">

          {/* Linha 1 */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-14">
            {AUDIENCE.slice(0, 3).map((item, i) => (
              <Card key={i} {...item} />
            ))}
          </div>

          {/* Linha 2 centralizada */}
          <div className="flex justify-center gap-14 flex-wrap">
            {AUDIENCE.slice(3).map((item, i) => (
              <div key={i} className="w-full max-w-[420px]">
                <Card {...item} />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
