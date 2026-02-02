import React, { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Layers,
  LineChart,
  FileText,
  CheckCircle2,
  School,
  HeartHandshake,
  Stethoscope,
  Users
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const FLOW = [
  {
    key: 'dados',
    title: 'Dados organizados',
    subtitle: 'Contexto escolar + familiar',
    icon: Layers,
    detail:
      'Centraliza informações importantes (histórico, observações, registros e rotinas) com clareza e padronização.'
  },
  {
    key: 'analise',
    title: 'Análise do desenvolvimento',
    subtitle: 'Leitura ampliada e contínua',
    icon: LineChart,
    detail:
      'Ajuda a visualizar o desenvolvimento global da criança e identificar prioridades pedagógicas com base em evidências.'
  },
  {
    key: 'plano',
    title: 'Plano educacional',
    subtitle: 'PEI e PAEE com propósito',
    icon: FileText,
    detail:
      'Transforma observações em estratégias e metas pedagógicas alinhadas à BNCC e ao AEE, de forma documentada.'
  },
  {
    key: 'acomp',
    title: 'Acompanhamento',
    subtitle: 'Evolução e continuidade',
    icon: CheckCircle2,
    detail:
      'Mantém histórico e atualização do processo, favorecendo continuidade, corresponsabilidade e consistência.'
  }
]

const CONNECTS = [
  { label: 'Escola', icon: School },
  { label: 'Família', icon: HeartHandshake },
  { label: 'Saúde', icon: Stethoscope },
  { label: 'Equipe', icon: Users }
]

export default function SobreDetalhadoSection() {
  const [active, setActive] = useState('dados')
  const activeItem = useMemo(() => FLOW.find((f) => f.key === active) ?? FLOW[0], [active])
  const ActiveIcon = activeItem.icon

  return (
    <section
      id="sobre"
      className="
        pt-6 md:pt-8 pb-20 px-6 bg-white relative overflow-hidden
        scroll-mt-28 md:scroll-mt-32
      "
    >
      {/* Glow sutil (mantido, mas mais discreto pra não “empurrar” visualmente) */}
      <div className="absolute -top-24 -left-24 w-[520px] h-[520px] bg-blue-100/20 blur-[140px] rounded-full" />
      <div className="absolute -bottom-24 -right-24 w-[560px] h-[560px] bg-blue-50/30 blur-[160px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Título mais próximo do topo */}
        <div className="mb-6 md:mb-8">
          <SectionHeading subtitle="Mais do que um sistema, um fluxo inteligente para transformar dados em ação pedagógica.">
            O que é o Afeto'S?
          </SectionHeading>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="grid lg:grid-cols-2 gap-12 md:gap-14 items-start"
        >
          {/* TEXTO */}
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              O <strong className="text-nexxusBlue">Afeto'S</strong> é um sistema desenvolvido para apoiar escolas,
              redes de ensino e equipes multiprofissionais na organização, análise e acompanhamento
              do desenvolvimento infantil.
            </p>

            <p>
              A plataforma integra informações pedagógicas, educacionais e contextuais em um único
              fluxo, permitindo transformar observações e registros em estratégias pedagógicas
              intencionais e documentadas.
            </p>

            <p>
              Criado a partir das demandas reais da educação inclusiva, o NexxuS respeita a
              <strong> BNCC</strong>, o <strong>AEE</strong> e os princípios éticos do cuidado com a infância.
            </p>

            <div className="mt-3 bg-blue-50 border border-blue-100 rounded-2xl p-6">
              <p className="text-nexxusBlue font-black">
                O Afeto'S organiza. Evidencia. Direciona.
              </p>
              <p className="text-gray-600 mt-1">
                Decisões pedagógicas fundamentadas — sem substituir diagnósticos médicos.
              </p>
            </div>
          </div>

          {/* PAINEL INTERATIVO */}
          <div className="bg-white/85 backdrop-blur border border-blue-100 rounded-[3rem] p-8 shadow-lg">
            <div className="mb-6">
              <p className="text-xs font-black tracking-widest uppercase text-nexxusBlue/70">
                Fluxo Vivo do Afeto'S
              </p>
              <h3 className="text-xl font-black text-nexxusBlue mt-1">
                Dados → Análise → Plano → Acompanhamento
              </h3>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {CONNECTS.map(({ label, icon: Icon }) => (
                <span
                  key={label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-nexxusBlue font-bold text-sm border border-blue-100"
                >
                  <Icon size={16} />
                  {label}
                </span>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {FLOW.map((item) => {
                const Icon = item.icon
                const isActive = item.key === active
                return (
                  <button
                    key={item.key}
                    onClick={() => setActive(item.key)}
                    className={`rounded-2xl p-5 border text-left transition-all ${
                      isActive
                        ? 'bg-nexxusBlue text-white border-nexxusBlue'
                        : 'bg-white border-blue-100 hover:border-nexxusBlue/40'
                    }`}
                  >
                    <div className="flex gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          isActive ? 'bg-white/15' : 'bg-blue-50 text-nexxusBlue'
                        }`}
                      >
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="font-black">{item.title}</p>
                        <p className={`text-sm ${isActive ? 'text-white/80' : 'text-gray-500'}`}>
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>

            <div className="mt-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.key}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white border border-blue-100 rounded-2xl p-6"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-nexxusBlue flex items-center justify-center">
                      <ActiveIcon size={18} />
                    </div>
                    <p className="font-black text-nexxusBlue">{activeItem.title}</p>
                  </div>
                  <p className="text-gray-600">{activeItem.detail}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
