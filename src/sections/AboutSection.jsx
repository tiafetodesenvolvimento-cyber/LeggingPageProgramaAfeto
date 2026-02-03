import React from 'react'
import { motion } from 'framer-motion'

export default function AboutSection() {
  const ease = [0.16, 1, 0.3, 1]

  return (
    <section
      id="sobre"
      className="
        relative py-24 md:py-28 px-6 overflow-hidden
        bg-gradient-to-br from-[#012677] via-[#012677] to-[#021b4d]
      "
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 lg:gap-20 items-center relative z-10">
        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, x: -26 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.9, ease }}
          className="order-2 lg:order-1"
        >
          {/* Label superior */}
          <div className="inline-flex items-center rounded-full bg-white/10 border border-white/20 px-4 py-2 backdrop-blur-md">
            <span className="text-[10px] font-black tracking-[0.22em] text-white">
              AQUI TEM AFETO!
            </span>
          </div>

          {/* TÍTULO PRINCIPAL – agora visível */}
          <h2 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white">
            Sobre o Afeto&apos;S
          </h2>


          {/* Linha gradiente */}
          <div className="mt-2 h-[3px] w-24 rounded-full bg-gradient-to-r from-[#00cfd7] via-[#ffd76e] to-[#ff616f]" />

          {/* Texto */}
          <div className="mt-8 space-y-6 text-lg md:text-xl text-white/90 font-medium leading-relaxed max-w-xl">
            <p>
              O <span className="font-extrabold text-white">Afeto&apos;S</span> apoia escolas e redes
              de ensino na avaliação do desenvolvimento e na construção de planos educacionais
              individualizados{' '}
              <span className="font-extrabold text-white">PEI</span> e{' '}
              <span className="font-extrabold text-white">PAEE</span>, em consonância com a{' '}
              <span className="font-extrabold text-white">BNCC</span> e o{' '}
              <span className="font-extrabold text-white">AEE</span>.
            </p>

            <p>
              Integra informações pedagógicas, clínicas e familiares para dar clareza ao processo,
              manter histórico organizado e fortalecer decisões com evidências, sempre respeitando
              singularidades e direitos.
            </p>
          </div>

          {/* KPIs */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl">
            <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md px-4 py-4">
              <div className="text-sm font-black text-white">PEI/PAEE</div>
              <div className="text-xs text-white/80 font-semibold mt-1">Estruturado</div>
            </div>

            <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md px-4 py-4">
              <div className="text-sm font-black text-white">BNCC</div>
              <div className="text-xs text-white/80 font-semibold mt-1">Alinhamento</div>
            </div>

            <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md px-4 py-4">
              <div className="text-sm font-black text-white">AEE</div>
              <div className="text-xs text-white/80 font-semibold mt-1">Suporte</div>
            </div>
          </div>
        </motion.div>

        {/* IMAGEM */}
        <motion.div
          initial={{ opacity: 0, y: 14, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.9, ease }}
          className="order-1 lg:order-2 relative"
        >
          {/* Card */}
          <div className="relative rounded-[2.8rem] border border-white/20 bg-white/10 backdrop-blur-md overflow-hidden shadow-xl">
            {/* Top bar */}
            <div className="px-6 pt-6">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-black tracking-[0.2em] text-white">
                  AFETO&apos;S
                </span>

                <span className="text-[11px] font-black tracking-wide text-white/80">
                  EDUCAÇÃO INCLUSIVA
                </span>
              </div>
              <div className="mt-4 h-[2px] w-full bg-gradient-to-r from-transparent via-[#00cfd7]/40 to-transparent" />
            </div>

            {/* Imagem */}
            <div className="p-6 pt-5">
              <div className="rounded-[2.2rem] overflow-hidden ring-1 ring-white/25">
                <img
                  src="NEXXUSLÓ.png"
                  alt="Imagem ilustrativa do sistema Afeto'S"
                  className="object-cover w-full aspect-[4/3] transition-transform duration-700 ease-out hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Rodapé */}
            <div className="px-6 pb-7">
              <div className="h-[3px] w-20 rounded-full bg-gradient-to-r from-[#00cfd7] via-[#ffd76e] to-[#ff616f]" />
              <p className="mt-3 text-sm text-white/80 font-semibold">
                Mais clareza, continuidade e evidências no acompanhamento.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
