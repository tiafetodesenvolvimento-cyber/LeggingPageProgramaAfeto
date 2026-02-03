import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { ChevronRight, Sparkles, X, Send } from 'lucide-react'
import InteractiveBackground from '../components/InteractiveBackground'
import FloatingLogo from '../components/FloatingLogo'

export default function HeroSection() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const yParallax = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  const [open, setOpen] = useState(false)

  // Fechar com ESC
  React.useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <section
      id="top"
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-32 pb-20 px-6 bg-white overflow-hidden"
    >
      <InteractiveBackground />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
        {/* Conteúdo textual */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Badge superior */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-blue-50/50 backdrop-blur-sm px-6 py-2.5 rounded-full text-nexxusBlue font-black text-[10px] tracking-[0.2em] mb-10 border border-blue-100 shadow-sm"
          >
            <Sparkles size={14} className="animate-pulse" />
            <span>SISTEMA INTEGRADO DE AVALIAÇÃO, PLANEJAMENTO E ACOMPANHAMENTO</span>
          </motion.div>

          {/* Título */}
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-nexxusBlue leading-[0.8] mb-10 tracking-tighter">
            Afeto&apos;S
          </h1>

          {/* Subtítulo */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 leading-tight">
            Conectando{' '}
            <span className="italic text-[#ff616f]">clínica</span>,{' '}
            <span className="italic text-[#ffd76e]">escola</span> e{' '}
            <span className="italic text-[#00cfd7]">família</span>.
          </h2>

          {/* Texto descritivo */}
          <p className="text-xl text-gray-500 leading-relaxed mb-12 max-w-xl font-medium">
            Avaliar com sentido. Planejar com propósito. Incluir com responsabilidade. Alinhado à{' '}
            <span className="text-nexxusBlue font-bold">BNCC</span> e ao{' '}
            <span className="text-nexxusBlue font-bold">AEE</span>.
          </p>

          {/* Botões */}
          <div className="flex flex-col sm:flex-row gap-5 mb-4">
            <motion.a
              whileHover={{ scale: 1.04, boxShadow: '0 18px 40px -15px rgba(1, 38, 119, 0.35)' }}
              whileTap={{ scale: 0.96 }}
              href="#funcionalidades"
              className="bg-nexxusBlue text-white px-12 py-6 rounded-xl font-black text-base shadow-xl transition-all flex items-center justify-center gap-2"
            >
              Acessar o Afeto&apos;S <ChevronRight size={18} />
            </motion.a>

            {/* CTA premium: Solicitar Apresentação */}
            <motion.button
              type="button"
              onClick={() => setOpen(true)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="relative px-12 py-6 rounded-xl font-black text-base transition-all text-nexxusBlue text-center bg-white shadow-sm"
            >
              {/* borda gradiente sutil */}
              <span className="absolute inset-0 rounded-xl p-[1px] bg-gradient-to-r from-[#00cfd7]/55 via-[#ffd76e]/55 to-[#ff616f]/55">
                <span className="block h-full w-full rounded-xl bg-white" />
              </span>

              <span className="relative z-10">Solicitar Apresentação</span>
            </motion.button>
          </div>

          {/* Microcopy de confiança (aumenta conversão sem poluir) */}
          <div className="text-sm text-gray-500 font-medium">
            Retornamos com uma proposta e apresentação em até{' '}
            <span className="text-gray-700 font-bold">24h úteis</span>.
          </div>
        </motion.div>

        {/* Logo flutuante */}
        <motion.div style={{ y: yParallax }} className="hidden lg:flex items-center justify-center">
          <FloatingLogo />
        </motion.div>
      </div>

      {/* MODAL — Solicitar Apresentação */}
      <AnimatePresence>
        {open && (
          <>
            {/* overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* modal */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center px-6"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
            >
              <div
                className="w-full max-w-lg rounded-2xl bg-white border border-gray-200 shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* header */}
                <div className="px-7 pt-6 pb-5 border-b border-gray-100 flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-black text-gray-900 tracking-tight">
                      Solicitar apresentação do Afeto&apos;S
                    </h3>
                    <p className="text-sm text-gray-500 font-medium mt-1">
                      Envie seus dados e retornamos com uma proposta personalizada.
                    </p>
                  </div>

                  <button
                    onClick={() => setOpen(false)}
                    className="p-2 rounded-xl hover:bg-gray-50 transition"
                    aria-label="Fechar"
                  >
                    <X size={18} className="text-gray-600" />
                  </button>
                </div>

                {/* body */}
                <form
                  className="px-7 py-6 space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault()
                    // Aqui você pode integrar com backend, WhatsApp, EmailJS etc.
                    setOpen(false)
                  }}
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-black tracking-wide text-gray-700">
                        Nome
                      </label>
                      <input
                        required
                        className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 font-medium text-gray-800 outline-none focus:ring-4 focus:ring-blue-100"
                        placeholder="Seu nome"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-black tracking-wide text-gray-700">
                        WhatsApp
                      </label>
                      <input
                        required
                        className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 font-medium text-gray-800 outline-none focus:ring-4 focus:ring-blue-100"
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-black tracking-wide text-gray-700">
                      E-mail
                    </label>
                    <input
                      type="email"
                      className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 font-medium text-gray-800 outline-none focus:ring-4 focus:ring-blue-100"
                      placeholder="seuemail@dominio.com"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-black tracking-wide text-gray-700">
                      Perfil
                    </label>
                    <select
                      className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 font-medium text-gray-800 outline-none focus:ring-4 focus:ring-blue-100"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Selecione uma opção
                      </option>
                      <option value="escola">Escola</option>
                      <option value="clinica">Clínica</option>
                      <option value="prefeitura">Prefeitura / Rede Pública</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-black tracking-wide text-gray-700">
                      Mensagem (opcional)
                    </label>
                    <textarea
                      rows={3}
                      className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 font-medium text-gray-800 outline-none focus:ring-4 focus:ring-blue-100 resize-none"
                      placeholder="Ex.: Quantas escolas/usuários? Objetivo principal?..."
                    />
                  </div>

                  {/* footer */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 bg-nexxusBlue text-white px-5 py-4 rounded-xl font-black shadow-lg hover:opacity-95 transition flex items-center justify-center gap-2"
                    >
                      Enviar solicitação <Send size={16} />
                    </button>

                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="flex-1 bg-white border border-gray-200 text-gray-700 px-5 py-4 rounded-xl font-black hover:bg-gray-50 transition"
                    >
                      Agora não
                    </button>
                  </div>

                  <div className="text-xs text-gray-500 font-medium pt-1">
                    Ao enviar, você concorda em ser contatado para fins de apresentação e proposta.
                  </div>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
