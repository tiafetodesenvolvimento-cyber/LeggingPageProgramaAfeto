import React, { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
        micro: ['Histórico', 'Evidências', 'Organização'],
      },
      {
        title: 'PAEE',
        description: 'Crie, acompanhe e atualize o PAEE com estrutura e continuidade.',
        icon: FileText,
        micro: ['Plano', 'Acompanhamento', 'Atualizações'],
      },
      {
        title: 'Articulação',
        description: 'Conecte sala regular, AEE e equipe multiprofissional com alinhamento.',
        icon: Users,
        micro: ['Rede', 'Fluxo', 'Integração'],
      },
      {
        title: 'Estratégias',
        description: 'Planeje recursos, adaptações e intervenções pedagógicas com método.',
        icon: ShieldCheck,
        micro: ['Adaptações', 'Recursos', 'Método'],
      },
    ],
    []
  )

  const activeCard = CARDS[active]

  return (
    <section id="aee" className="relative overflow-hidden bg-[#f7f9ff] px-6 py-28 md:py-32">
      {/* Fundo “premium” sem linhas: grid + vinheta + ruído leve */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.30]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(1,38,119,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(1,38,119,0.06) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1)_0%,rgba(247,249,255,0.9)_55%,rgba(247,249,255,1)_100%)]" />
        <div className="absolute inset-0 opacity-[0.08] mix-blend-multiply [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22160%22 height=%22160%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22160%22 height=%22160%22 filter=%22url(%23n)%22 opacity=%220.55%22/%3E%3C/svg%3E')]" />
      </div>

      {/* Orbes neutros (sem cores chamativas / sem faixas) */}
      <div className="pointer-events-none absolute -top-56 -left-56 h-[720px] w-[720px] rounded-full bg-black/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-64 -right-64 h-[760px] w-[760px] rounded-full bg-black/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Cabeçalho + painel editorial */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 rounded-full border border-blue-100 bg-white/70 px-4 py-2 shadow-sm backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                <span className="absolute h-2.5 w-2.5 rounded-full bg-nexxusBlue/25" />
                <span className="h-1.5 w-1.5 rounded-full bg-nexxusBlue" />
              </span>
              <span className="text-[10px] font-black tracking-[0.22em] text-nexxusBlue">
                ATENDIMENTO EDUCACIONAL ESPECIALIZADO
              </span>
            </div>

            <div className="mt-5">
              <SectionHeading>Fortalecendo o AEE</SectionHeading>

              {/* Assinatura: “marcadores editoriais” (sem linhas) */}
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/60 px-3 py-1 text-[11px] font-extrabold tracking-[0.16em] text-gray-500 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
                  ÉTICA
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/60 px-3 py-1 text-[11px] font-extrabold tracking-[0.16em] text-gray-500 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
                  EVIDÊNCIAS
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/60 px-3 py-1 text-[11px] font-extrabold tracking-[0.16em] text-gray-500 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
                  CONTINUIDADE
                </span>
              </div>
            </div>

            <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-gray-700">
              O <span className="font-bold text-nexxusBlue">Afeto&apos;S</span> fortalece a atuação do AEE,
              oferecendo suporte de forma ética, documentada e alinhada à legislação educacional vigente.
            </p>
          </div>

          {/* Painel “editorial” (ativo) */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-[2.2rem] border border-blue-100 bg-white/75 p-6 shadow-[0_18px_60px_-50px_rgba(1,38,119,0.55)] backdrop-blur-md">
              {/* Canto decorativo: recorte suave (sem cor/linha) */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-black/5 blur-2xl" />

              <div className="flex items-center justify-between">
                <div className="text-[11px] font-black tracking-[0.22em] text-gray-500">EM FOCO</div>
                <div className="text-[11px] font-black tracking-[0.22em] text-gray-400">
                  {String(active + 1).padStart(2, '0')} / {String(CARDS.length).padStart(2, '0')}
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCard.title}
                  initial={{ opacity: 0, y: 10, filter: 'blur(2px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -10, filter: 'blur(2px)' }}
                  transition={{ duration: 0.45, ease }}
                  className="mt-4"
                >
                  <div className="text-xl font-black leading-snug text-gray-900">{activeCard.title}</div>
                  <div className="mt-2 text-sm font-semibold leading-relaxed text-gray-600">
                    {activeCard.description}
                  </div>

                  {/* Micro-itens (sem barra colorida) */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {activeCard.micro.map((m) => (
                      <span
                        key={m}
                        className="rounded-full border border-blue-100 bg-white/60 px-3 py-1 text-[11px] font-extrabold tracking-[0.14em] text-gray-500"
                      >
                        {m.toUpperCase()}
                      </span>
                    ))}
                  </div>

                  {/* Divisor discreto */}
                  <div className="mt-6 h-px w-full bg-blue-100/70" />
                  <div className="mt-4 text-xs font-semibold text-gray-500">
                    Passe o mouse nos cards para destacar. No mobile, toque para alternar.
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Cards: estilo “ticket premium” com recortes laterais */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
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
                  group relative w-full text-left
                  focus:outline-none focus:ring-2 focus:ring-nexxusBlue/30
                `}
              >
                <div
                  className={`
                    relative h-full overflow-hidden
                    rounded-[2.2rem] border bg-white/85 p-7 backdrop-blur-md
                    shadow-[0_18px_60px_-52px_rgba(1,38,119,0.45)]
                    transition-all duration-500
                    ${isActive ? 'border-blue-200' : 'border-blue-100/70'}
                  `}
                >
                  {/* Recortes do “ticket” */}
                  <span
                    className={`
                      pointer-events-none absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2
                      h-10 w-10 rounded-full bg-[#f7f9ff] border
                      ${isActive ? 'border-blue-200' : 'border-blue-100/70'}
                    `}
                    aria-hidden="true"
                  />
                  <span
                    className={`
                      pointer-events-none absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2
                      h-10 w-10 rounded-full bg-[#f7f9ff] border
                      ${isActive ? 'border-blue-200' : 'border-blue-100/70'}
                    `}
                    aria-hidden="true"
                  />

                  {/* “Costura” perfurada (pontinhos, sem linha) */}
                  <div className="pointer-events-none absolute left-1/2 top-6 -translate-x-1/2 opacity-70" aria-hidden="true">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 12 }).map((_, idx) => (
                        <span key={idx} className="h-1 w-1 rounded-full bg-blue-100" />
                      ))}
                    </div>
                  </div>

                  {/* Ícone + número */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`
                        flex h-12 w-12 items-center justify-center rounded-2xl
                        bg-nexxusBlue text-white
                        shadow-[0_14px_35px_-22px_rgba(1,38,119,0.55)]
                        transition-transform duration-500
                        group-hover:scale-[1.04]
                      `}
                      aria-hidden="true"
                    >
                      <Icon size={20} />
                    </div>

                    <span className="text-[11px] font-black tracking-[0.22em] text-gray-400">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Conteúdo */}
                  <div className="mt-6">
                    <h4 className="text-[18px] font-extrabold leading-snug text-gray-900">
                      {card.title}
                    </h4>
                    <p className="mt-3 text-sm font-semibold leading-relaxed text-gray-600">
                      {card.description}
                    </p>
                  </div>

                  {/* Micro badges em cada card */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {card.micro.slice(0, 2).map((m) => (
                      <span
                        key={m}
                        className={`
                          rounded-full border px-3 py-1 text-[10px] font-black tracking-[0.18em]
                          transition-colors duration-500
                          ${isActive ? 'border-blue-200 text-nexxusBlue bg-white/70' : 'border-blue-100 text-gray-500 bg-white/60'}
                        `}
                      >
                        {m.toUpperCase()}
                      </span>
                    ))}
                  </div>

                  {/* Hover “sombra interna” elegante (sem cores) */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute inset-0 rounded-[2.2rem] shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]" />
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
