import React, { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, HandHelping, Heart, Sparkles, Target, Users } from 'lucide-react'
import InteractiveBackground from '../components/InteractiveBackground'
import SectionHeading from '../components/SectionHeading'

export default function InclusionPracticeSection() {
  const ease = [0.16, 1, 0.3, 1]
  const [active, setActive] = useState(0)

  const ITEMS = useMemo(
    () => [
      { title: 'Criança no Centro', desc: 'Colocar a criança no centro do processo educacional.', Icon: Heart, chips: ['Foco', 'Escuta', 'Prioridade'] },
      { title: 'Singularidades', desc: 'Respeitar singularidades e ritmos de aprendizagem.', Icon: Target, chips: ['Ritmo', 'Perfil', 'Potencial'] },
      { title: 'Acessibilidade', desc: 'Apoiar práticas pedagógicas acessíveis e equitativas.', Icon: Globe, chips: ['Equidade', 'Acesso', 'Inclusão'] },
      { title: 'Colaborativo', desc: 'Estimular o trabalho colaborativo entre profissionais.', Icon: Users, chips: ['Rede', 'Alinhamento', 'Fluxo'] },
      { title: 'Vínculo', desc: 'Fortalecer o vínculo e a participação da família.', Icon: HandHelping, chips: ['Família', 'Parceria', 'Participação'] },
      { title: 'Ação Intencional', desc: 'Planejamento consciente e ação intencional.', Icon: Sparkles, chips: ['Plano', 'Método', 'Clareza'] },
    ],
    []
  )

  const activeItem = ITEMS[active]

  return (
    <section className="relative overflow-hidden bg-nexxusBlue px-6 py-28 text-white md:py-32">
      {/* fundo interativo */}
      <InteractiveBackground color="#ffffff" />

      {/* textura + vinheta (sem linhas coloridas) */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              'radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
            backgroundSize: '30px 30px, 44px 44px',
            backgroundPosition: '0 0, 14px 10px',
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.10)_0%,rgba(1,38,119,0.35)_45%,rgba(1,38,119,0.95)_100%)]" />
      </div>

      {/* orbes neutros */}
      <div className="pointer-events-none absolute -top-52 -left-52 h-[720px] w-[720px] rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-280px] right-[-280px] h-[760px] w-[760px] rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* topo: título + painel editorial */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 backdrop-blur-xl">
              <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                <span className="absolute h-2.5 w-2.5 rounded-full bg-white/25" />
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
              </span>
              <span className="text-[10px] font-black tracking-[0.22em] text-white/85">
                INCLUSÃO APLICADA • NA PRÁTICA
              </span>
            </div>

            <div className="mt-5">
              <SectionHeading light>Inclusão na Prática</SectionHeading>

              {/* “marcadores” (sem linha colorida) */}
              <div className="mt-3 flex flex-wrap items-center gap-2">
                {['CUIDADO', 'EVIDÊNCIAS', 'CONTINUIDADE'].map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-[11px] font-extrabold tracking-[0.16em] text-white/70 backdrop-blur-xl"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <p className="mt-6 max-w-5xl text-lg font-medium leading-relaxed text-white/80 md:text-xl">
              Mais do que registrar informações, o{' '}
              <span className="font-extrabold text-white">Afeto&apos;S</span> promove uma educação inclusiva
              aplicada ao que realmente sustenta resultados no dia a dia.
            </p>
          </div>

          {/* painel do item ativo */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-[2.2rem] border border-white/15 bg-white/[0.06] p-6 shadow-[0_24px_90px_-70px_rgba(0,0,0,0.75)] backdrop-blur-xl">
              {/* brilho sutil superior */}
              <div className="pointer-events-none absolute inset-x-0 -top-28 h-48 bg-gradient-to-b from-white/10 to-transparent opacity-60" />

              <div className="flex items-center justify-between">
                <div className="text-[11px] font-black tracking-[0.22em] text-white/55">EM FOCO</div>
                <div className="text-[11px] font-black tracking-[0.22em] text-white/45">
                  {String(active + 1).padStart(2, '0')} / {String(ITEMS.length).padStart(2, '0')}
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.title}
                  initial={{ opacity: 0, y: 10, filter: 'blur(2px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -10, filter: 'blur(2px)' }}
                  transition={{ duration: 0.45, ease }}
                  className="mt-4"
                >
                  <div className="flex items-start gap-4">
                    <div className="relative mt-0.5 inline-flex">
                      <div className="absolute -inset-[2px] rounded-2xl bg-white/15 opacity-60" />
                      <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white">
                        <activeItem.Icon size={22} />
                      </div>
                    </div>

                    <div className="min-w-0">
                      <div className="text-xl font-black leading-snug text-white">{activeItem.title}</div>
                      <div className="mt-2 text-sm font-semibold leading-relaxed text-white/75">
                        {activeItem.desc}
                      </div>

                      {/* chips (sem linha colorida) */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {activeItem.chips.map((c) => (
                          <span
                            key={c}
                            className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-[11px] font-extrabold tracking-[0.14em] text-white/70"
                          >
                            {c.toUpperCase()}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* divisor discreto */}
                  <div className="mt-6 h-px w-full bg-white/10" />

                  <div className="mt-4 text-xs font-semibold text-white/55">
                    Passe o mouse nos cards para destacar. No mobile, toque para alternar.
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* grid de cards — estilo “editorial” com recorte e perfuração */}
        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {ITEMS.map((item, i) => {
            const Icon = item.Icon
            const isActive = i === active

            return (
              <motion.button
                key={item.title}
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.75, ease, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="group text-left focus:outline-none focus:ring-2 focus:ring-white/25"
              >
                <div
                  className={`
                    relative h-full overflow-hidden rounded-[2.2rem]
                    border bg-white/[0.06] backdrop-blur-xl
                    shadow-[0_22px_70px_-55px_rgba(0,0,0,0.70)]
                    transition-all duration-500
                    ${isActive ? 'border-white/25' : 'border-white/12'}
                  `}
                >
                  {/* recortes do “ticket” */}
                  <span
                    className={`
                      pointer-events-none absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2
                      h-10 w-10 rounded-full bg-nexxusBlue/90 border
                      ${isActive ? 'border-white/25' : 'border-white/12'}
                    `}
                    aria-hidden="true"
                  />
                  <span
                    className={`
                      pointer-events-none absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2
                      h-10 w-10 rounded-full bg-nexxusBlue/90 border
                      ${isActive ? 'border-white/25' : 'border-white/12'}
                    `}
                    aria-hidden="true"
                  />

                  {/* perfuração discreta (pontinhos) */}
                  <div className="pointer-events-none absolute left-1/2 top-6 -translate-x-1/2 opacity-70" aria-hidden="true">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 12 }).map((_, idx) => (
                        <span key={idx} className="h-1 w-1 rounded-full bg-white/15" />
                      ))}
                    </div>
                  </div>

                  {/* brilho superior */}
                  <div className="pointer-events-none absolute inset-x-0 -top-28 h-48 bg-gradient-to-b from-white/10 to-transparent opacity-60" />

                  <div className="relative p-9 md:p-10">
                    {/* ícone + número */}
                    <div className="flex items-center justify-between">
                      <div className="relative inline-flex">
                        <div className="absolute -inset-[2px] rounded-2xl bg-white/15 opacity-60" />
                        <div
                          className={`
                            relative flex h-12 w-12 items-center justify-center rounded-2xl
                            border border-white/15 bg-white/10 text-white
                            transition-all duration-500
                            group-hover:bg-white/12
                          `}
                          aria-hidden="true"
                        >
                          <Icon size={22} />
                        </div>
                      </div>

                      <div className="text-[11px] font-black tracking-[0.22em] text-white/55">
                        {String(i + 1).padStart(2, '0')}
                      </div>
                    </div>

                    {/* título */}
                    <h4 className="mt-7 text-xl font-extrabold tracking-tight text-white md:text-[22px]">
                      {item.title}
                    </h4>

                    {/* descrição */}
                    <p className="mt-3 text-base font-medium leading-relaxed text-white/75 md:text-[17px]">
                      {item.desc}
                    </p>

                    {/* chips rápidos */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.chips.slice(0, 2).map((c) => (
                        <span
                          key={c}
                          className={`
                            rounded-full border px-3 py-1 text-[10px] font-black tracking-[0.18em]
                            transition-colors duration-500
                            ${isActive ? 'border-white/25 bg-white/10 text-white/85' : 'border-white/15 bg-white/[0.06] text-white/70'}
                          `}
                        >
                          {c.toUpperCase()}
                        </span>
                      ))}
                    </div>

                    {/* destaque de borda interna no hover (sem gradiente colorido) */}
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <div className="absolute inset-0 rounded-[2.2rem] shadow-[inset_0_1px_0_rgba(255,255,255,0.20)]" />
                    </div>
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
