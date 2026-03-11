import React from 'react'
import { motion } from 'framer-motion'
import {
  Building2,
  GraduationCap,
  School,
  Stethoscope,
  Users,
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const AUDIENCE = [
  { title: 'Escolas públicas e privadas', Icon: Building2 },
  { title: 'Redes e secretarias de educação', Icon: School },
  { title: 'Equipes pedagógicas e de inclusão', Icon: Users },
  { title: 'Profissionais da saúde e da educação', Icon: Stethoscope },
  { title: 'Instituições comprometidas com a educação inclusiva', Icon: GraduationCap },
]

export default function AudienceSection() {
  const ease = [0.16, 1, 0.3, 1]

  return (
    <section className="relative py-32 px-6 bg-[#f8faff] overflow-hidden">
      {/* Estrutura de fundo limpa */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(1,38,119,0.18) 1px, transparent 1px)',
            backgroundSize: '100% 48px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading subtitle="Um sistema que se adapta a quem atua com responsabilidade educacional.">
          Para quem é o Afeto&apos;S?
        </SectionHeading>

        {/* Estrutura editorial */}
        <div className="mt-20 grid lg:grid-cols-5 gap-10 items-stretch">
          {AUDIENCE.map((item, i) => {
            const Icon = item.Icon

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease, delay: i * 0.08 }}
                className="
                  relative
                  bg-white
                  border border-blue-100
                  rounded-[2.2rem]
                  px-8
                  py-12
                  flex flex-col
                  justify-between
                  shadow-[0_20px_60px_-45px_rgba(1,38,119,0.25)]
                "
              >
                {/* Linha estrutural lateral */}
                <div className="absolute left-0 top-10 bottom-10 w-[3px] bg-nexxusBlue/20 rounded-full" />

                {/* Ícone grande e sério */}
                <div className="text-nexxusBlue mb-10">
                  <Icon size={36} strokeWidth={1.6} />
                </div>

                {/* Texto */}
                <h4 className="text-[17px] font-extrabold text-[#012677] leading-snug">
                  {item.title}
                </h4>

                {/* Marca editorial */}
                <div className="mt-10">
                  <span className="text-[11px] font-black tracking-[0.3em] text-gray-400">
                    PERFIL {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Fecho conceitual */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease, delay: 0.2 }}
          className="mt-20 max-w-3xl mx-auto text-center text-gray-600 text-lg font-medium leading-relaxed"
        >
          O Afeto&apos;S não é um sistema genérico.  
          Ele se molda à realidade institucional, respeitando funções, contextos e responsabilidades.
        </motion.p>
      </div>
    </section>
  )
}
