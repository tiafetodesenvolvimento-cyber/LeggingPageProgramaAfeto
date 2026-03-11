import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { ChevronRight, Sparkles, X, Send } from 'lucide-react'
import InteractiveBackground from '../components/InteractiveBackground'
import FloatingLogo from '../components/FloatingLogo'

const ACESSO_AFETOS_URL =
  'https://main.d2prrtiyzobbr8.amplifyapp.com/login'

export default function HeroSection() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const yParallax = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({
    nome: '',
    whatsapp: '',
    email: '',
    perfil: '',
    mensagem: '',
  })

  // Fechar com ESC
  React.useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const text = `
📌 *Solicitação de Apresentação – Afeto'S*

👤 Nome: ${form.nome}
📱 WhatsApp: ${form.whatsapp}
📧 E-mail: ${form.email}
🏷 Perfil: ${form.perfil}

💬 Mensagem:
${form.mensagem || 'Não informado'}
    `.trim()

    const phone = '558999403-4016' // 👉 coloque aqui o WhatsApp oficial
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`

    window.open(url, '_blank')
    setOpen(false)
  }

  return (
    <section
      id="top"
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-32 pb-20 px-6 bg-white overflow-hidden"
    >
      <InteractiveBackground />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
        {/* Conteúdo */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-blue-50/50 px-6 py-2.5 rounded-full text-nexxusBlue font-black text-[10px] tracking-[0.2em] mb-10 border border-blue-100"
          >
            <Sparkles size={14} />
            SISTEMA INTEGRADO DE AVALIAÇÃO, PLANEJAMENTO E ACOMPANHAMENTO
          </motion.div>

          <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-nexxusBlue mb-10">
            Afeto&apos;S
          </h1>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
            Conectando <span className="italic text-[#ff616f]">clínica</span>,{' '}
            <span className="italic text-[#ffd76e]">escola</span> e{' '}
            <span className="italic text-[#00cfd7]">família</span>.
          </h2>

          <p className="text-xl text-gray-500 mb-12 max-w-xl">
            Avaliar com sentido. Planejar com propósito. Incluir com responsabilidade.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href={ACESSO_AFETOS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-nexxusBlue text-white px-12 py-6 rounded-xl font-black flex items-center justify-center gap-2"
            >
              Acessar o Afeto&apos;S <ChevronRight size={18} />
            </motion.a>

            {/* CTA premium (EXATAMENTE como você pediu) */}
            <motion.button
              type="button"
              onClick={() => setOpen(true)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="relative px-12 py-6 rounded-xl font-black text-base transition-all text-nexxusBlue text-center bg-white shadow-sm"
            >
              <span className="absolute inset-0 rounded-xl p-[1px] bg-gradient-to-r from-[#00cfd7]/55 via-[#ffd76e]/55 to-[#ff616f]/55">
                <span className="block h-full w-full rounded-xl bg-white" />
              </span>

              <span className="relative z-10">Solicitar Apresentação</span>
            </motion.button>
          </div>
        </motion.div>

        <motion.div style={{ y: yParallax }} className="hidden lg:flex">
          <FloatingLogo />
        </motion.div>
      </div>

      {/* MODAL — Solicitar Apresentação */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center px-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              <div
                className="w-full max-w-lg bg-white rounded-2xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6 border-b flex justify-between items-center">
                  <h3 className="font-black text-lg">Solicitar apresentação</h3>
                  <button onClick={() => setOpen(false)} aria-label="Fechar">
                    <X />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                  <input
                    name="nome"
                    required
                    placeholder="Nome"
                    onChange={handleChange}
                    className="w-full border rounded-xl px-4 py-3"
                  />

                  <input
                    name="whatsapp"
                    required
                    placeholder="WhatsApp"
                    onChange={handleChange}
                    className="w-full border rounded-xl px-4 py-3"
                  />

                  <input
                    name="email"
                    type="email"
                    placeholder="E-mail"
                    onChange={handleChange}
                    className="w-full border rounded-xl px-4 py-3"
                  />

                  <select
                    name="perfil"
                    required
                    onChange={handleChange}
                    className="w-full border rounded-xl px-4 py-3"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Perfil
                    </option>
                    <option value="Escola">Escola</option>
                    <option value="Clínica">Clínica</option>
                    <option value="Prefeitura">Prefeitura / Rede Pública</option>
                    <option value="Outro">Outro</option>
                  </select>

                  <textarea
                    name="mensagem"
                    rows={3}
                    placeholder="Mensagem (opcional)"
                    onChange={handleChange}
                    className="w-full border rounded-xl px-4 py-3"
                  />

                  <button
                    type="submit"
                    className="w-full bg-nexxusBlue text-white py-4 rounded-xl font-black flex items-center justify-center gap-2"
                  >
                    Enviar solicitação <Send size={16} />
                  </button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
