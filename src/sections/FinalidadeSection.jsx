import React, { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Layers, Target, ShieldCheck, ChevronRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const PURPOSES = [
  {
    key: 'organizar',
    title: 'Organizar informações educacionais',
    desc: 'Estruturar dados pedagógicos, registros e observações de forma clara, contínua e acessível.',
    icon: Layers,
    bullets: ['Registros padronizados', 'Histórico por aluno', 'Contexto escolar e familiar'],
  },
  {
    key: 'planejar',
    title: 'Qualificar o planejamento pedagógico',
    desc: 'Apoiar decisões pedagógicas fundamentadas, alinhadas à BNCC e à educação inclusiva.',
    icon: Target,
    bullets: ['Metas e estratégias', 'Apoio ao PEI/PAEE', 'Decisões pedagógicas coerentes'],
  },
  {
    key: 'seguranca',
    title: 'Garantir segurança ética e documental',
    desc: 'Promover registros responsáveis, sem substituir diagnósticos médicos.',
    icon: ShieldCheck,
    bullets: ['Documentação ética', 'Rastreabilidade', 'Sem substituir diagnóstico médico'],
  }
]

export default function FinalidadeSection() {
  const [active, setActive] = useState('organizar')

  const activeItem = useMemo(() => PURPOSES.find((p) => p.key === active) ?? PURPOSES[0], [active])
  const ActiveIcon = activeItem.icon

  return (
    <section className="py-32 px-6 bg-blue-50/20 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute -top-40 -left-40 w-[620px] h-[620px] bg-blue-100/50 blur-[150px] rounded-full" />
      <div className="absolute -bottom-44 -right-44 w-[620px] h-[620px] bg-blue-50/60 blur-[160px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading subtitle="A finalidade do NexxuS está no uso consciente da informação.">
          Para que o Afeto'S foi criado?
        </SectionHeading>

        <div className="mt-14 grid lg:grid-cols-2 gap-14 items-start">
          {/* Coluna esquerda: cards clicáveis */}
          <div className="grid sm:grid-cols-1 gap-6">
            {PURPOSES.map((item, i) => {
              const Icon = item.icon
              const isActive = item.key === active

              return (
                <motion.button
                  key={item.key}
                  onClick={() => setActive(item.key)}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  className={`w-full text-left rounded-[2.5rem] border p-8 transition-all ${
                    isActive
                      ? 'bg-nexxusBlue border-nexxusBlue text-white shadow-2xl'
                      : 'bg-white border-blue-100 hover:border-nexxusBlue/25 hover:shadow-lg'
                  }`}
                >
                  <div className="flex items-start gap-5">
                    <div
                      className={`w-14 h-14 rounded-[1.4rem] flex items-center justify-center ${
                        isActive ? 'bg-white/15' : 'bg-blue-50 text-nexxusBlue'
                      }`}
                    >
                      <Icon size={24} />
                    </div>

                    <div className="flex-1">
                      <h4 className={`text-lg sm:text-xl font-black ${isActive ? 'text-white' : 'text-nexxusBlue'}`}>
                        {item.title}
                      </h4>
                      <p className={`mt-2 leading-relaxed ${isActive ? 'text-white/85' : 'text-gray-600'}`}>
                        {item.desc}
                      </p>

                      <div className={`mt-4 inline-flex items-center gap-2 text-sm font-black ${
                        isActive ? 'text-white' : 'text-nexxusBlue'
                      }`}>
                        Ver detalhes <ChevronRight size={16} />
                      </div>
                    </div>
                  </div>
                </motion.button>
              )
            })}
          </div>

          {/* Coluna direita: painel “detalhe” animado */}
          <div className="bg-white/70 backdrop-blur-md border border-blue-100 rounded-[3rem] p-10 shadow-xl">
            {/* Top bar fake (SaaS feel) */}
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[11px] font-black tracking-[0.22em] text-nexxusBlue/70 uppercase">
                  Painel de Finalidade
                </p>
                <h3 className="text-2xl font-black text-nexxusBlue mt-2">
                  Impacto direto na rotina da escola
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-nexxusBlue" />
              </div>
            </div>

            <div className="mt-8 h-px bg-blue-100" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.key}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="mt-8"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-[1.6rem] bg-blue-50 text-nexxusBlue flex items-center justify-center">
                    <ActiveIcon size={24} />
                  </div>

                  <div>
                    <h4 className="text-2xl font-black text-nexxusBlue">
                      {activeItem.title}
                    </h4>
                    <p className="mt-2 text-gray-600 leading-relaxed">
                      {activeItem.desc}
                    </p>
                  </div>
                </div>

                {/* bullets */}
                <div className="mt-8 grid sm:grid-cols-1 gap-3">
                  {activeItem.bullets.map((b) => (
                    <div
                      key={b}
                      className="flex items-center gap-3 bg-white border border-blue-100 rounded-2xl px-5 py-4 shadow-sm"
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-nexxusBlue" />
                      <p className="text-gray-700 font-semibold">{b}</p>
                    </div>
                  ))}
                </div>

                {/* mini “progress” visual */}
                <div className="mt-10 bg-blue-50 border border-blue-100 rounded-[2.5rem] p-7">
                  <p className="text-nexxusBlue font-black mb-3">
                    Resultado esperado
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Mais clareza, continuidade e documentação — para decisões pedagógicas mais seguras e um acompanhamento mais eficiente.
                  </p>

                  <div className="mt-6 h-3 w-full rounded-full bg-white border border-blue-100 overflow-hidden">
                    <motion.div
                      initial={{ width: '10%' }}
                      animate={{ width: activeItem.key === 'organizar' ? '45%' : activeItem.key === 'planejar' ? '70%' : '55%' }}
                      transition={{ duration: 0.6 }}
                      className="h-full bg-nexxusBlue"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
