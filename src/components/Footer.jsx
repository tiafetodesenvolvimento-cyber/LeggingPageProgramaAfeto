import React from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight,
  Sparkles,
  MapPin,
} from 'lucide-react'

const SOCIAL_LINKS = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/p/Instituto-Afeto-61559410830009/',
    icon: Facebook,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/institutoafetofloriano/',
    icon: Instagram,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/institutoafetofloriano/',
    icon: Linkedin,
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden px-6 pt-24 md:pt-28 pb-14 bg-[#061642]">
      {/* FUNDO CRIATIVO: ondas + glows + textura */}
      <div className="pointer-events-none absolute inset-0">
        {/* glows */}
        <div className="absolute -top-48 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full bg-[#00cfd7]/18 blur-[160px]" />
        <div className="absolute -bottom-56 right-[-220px] h-[680px] w-[680px] rounded-full bg-[#ff616f]/16 blur-[170px]" />

        {/* wave 1 */}
        <div className="absolute left-0 right-0 top-0 h-[220px] opacity-[0.35]">
          <svg
            viewBox="0 0 1440 320"
            className="h-full w-full"
            preserveAspectRatio="none"
          >
            <path
              fill="rgba(255,255,255,0.10)"
              d="M0,224L48,208C96,192,192,160,288,160C384,160,480,192,576,202.7C672,213,768,203,864,176C960,149,1056,107,1152,117.3C1248,128,1344,192,1392,224L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            />
          </svg>
        </div>

        {/* wave 2 */}
        <div className="absolute left-0 right-0 top-0 h-[260px] opacity-[0.18] translate-y-12">
          <svg
            viewBox="0 0 1440 320"
            className="h-full w-full"
            preserveAspectRatio="none"
          >
            <path
              fill="rgba(255,255,255,0.10)"
              d="M0,160L60,186.7C120,213,240,267,360,282.7C480,299,600,277,720,240C840,203,960,149,1080,133.3C1200,117,1320,139,1380,149.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            />
          </svg>
        </div>

        {/* textura */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'radial-gradient(rgba(255,255,255,0.45) 1px, transparent 1px)',
            backgroundSize: '34px 34px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER DO FOOTER (marca + CTA criativo) */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          {/* Brand */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md flex items-center justify-center overflow-hidden">
              <img
                src="/logo_afetoB.png"
                alt="Logo Afeto'S"
                className="w-8 h-8 object-contain"
                loading="lazy"
              />
            </div>

            <div className="leading-none">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-black tracking-tighter text-white">Afeto&apos;S</span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1 text-[10px] font-black tracking-[0.22em] text-white/90">
                  <Sparkles size={12} />
                  EDUCAÇÃO INCLUSIVA
                </span>
              </div>
              <p className="mt-2 text-white/75 font-medium">
                Avaliar com sentido • Planejar com propósito • Incluir com responsabilidade
              </p>
            </div>
          </div>

          {/* CTA compacto (sem formulário pesado) */}
          <motion.a
            href="#cta"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="
              group inline-flex items-center justify-center gap-3
              rounded-2xl
              px-6 py-4
              bg-white text-[#061642]
              font-black
              shadow-[0_20px_60px_-35px_rgba(0,0,0,0.65)]
              transition-all
              hover:shadow-[0_35px_90px_-55px_rgba(0,0,0,0.85)]
            "
          >
            Solicitar apresentação
            <span className="h-10 w-10 rounded-xl bg-[#012677] text-white flex items-center justify-center transition-transform group-hover:translate-x-1">
              <ArrowRight size={18} />
            </span>
          </motion.a>
        </div>

        {/* CONTEÚDO */}
        <div className="mt-14 grid lg:grid-cols-12 gap-10">
          {/* Contato */}
          <div className="lg:col-span-5">
            <h5 className="text-xs font-black tracking-[0.22em] text-white/80 uppercase">
              Contato
            </h5>

            <div className="mt-6 grid gap-4">
              <a
                href="mailto:ti@institutoafetofloriano.com.br"
                className="
                  group flex items-center gap-4
                  rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md
                  px-5 py-4
                  transition-all
                  hover:bg-white/14
                "
              >
                <div className="h-12 w-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-white">
                  <Mail size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-black tracking-[0.18em] uppercase text-white/60">
                    E-mail
                  </p>
                  <p className="text-white font-semibold break-all">
                    ti@institutoafetofloriano.com.br
                  </p>
                </div>
                <ArrowRight
                  size={18}
                  className="ml-auto text-white/55 group-hover:text-white transition-colors"
                />
              </a>

              <a
                href="tel:+5589994034016"
                className="
                  group flex items-center gap-4
                  rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md
                  px-5 py-4
                  transition-all
                  hover:bg-white/14
                "
              >
                <div className="h-12 w-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-white">
                  <Phone size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-black tracking-[0.18em] uppercase text-white/60">
                    WhatsApp
                  </p>
                  <p className="text-white font-semibold">(89) 99403-4016</p>
                </div>
                <ArrowRight
                  size={18}
                  className="ml-auto text-white/55 group-hover:text-white transition-colors"
                />
              </a>

              {/* opcional: local */}
              <div
                className="
                  flex items-center gap-4
                  rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md
                  px-5 py-4
                "
              >
                <div className="h-12 w-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-white">
                  <MapPin size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-black tracking-[0.18em] uppercase text-white/60">
                    Atendimento
                  </p>
                  <p className="text-white/80 font-semibold">
                    Presencial e teleatendimento
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-4">
            <h5 className="text-xs font-black tracking-[0.22em] text-white/80 uppercase">
              Institucional
            </h5>

            <ul className="mt-6 space-y-3">
              {[
                { label: "Sobre o Afeto'S", href: '#sobre' },
                { label: 'Nossas Soluções', href: '#funcionalidades' },
                { label: 'Política de Privacidade', href: '#' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="
                      group inline-flex items-center gap-3
                      text-white/80 font-semibold
                      hover:text-white transition-colors
                    "
                  >
                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#00cfd7] via-[#ffd76e] to-[#ff616f]" />
                    {item.label}
                    <ArrowRight
                      size={16}
                      className="text-white/45 group-hover:text-white transition-colors"
                    />
                  </a>
                </li>
              ))}
            </ul>

            {/* detalhe */}
            <div className="mt-10 h-[3px] w-28 rounded-full bg-gradient-to-r from-[#00cfd7] via-[#ffd76e] to-[#ff616f]" />
          </div>

          {/* Social */}
          <div className="lg:col-span-3">
            <h5 className="text-xs font-black tracking-[0.22em] text-white/80 uppercase">
              Siga-nos
            </h5>

            <div className="mt-6 flex gap-3 flex-wrap">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className="
                    w-12 h-12 rounded-2xl
                    bg-white/10 border border-white/15 backdrop-blur-md
                    flex items-center justify-center
                    text-white
                    transition-all duration-300
                    hover:bg-white/16
                  "
                  aria-label={label}
                  title={label}
                >
                  <Icon size={18} />
                </motion.a>
              ))}

              {/* Email social */}
              <motion.a
                href="mailto:ti@institutoafetofloriano.com.br"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="
                  w-12 h-12 rounded-2xl
                  bg-white/10 border border-white/15 backdrop-blur-md
                  flex items-center justify-center
                  text-white
                  transition-all duration-300
                  hover:bg-white/16
                "
                aria-label="E-mail"
                title="E-mail"
              >
                <Mail size={18} />
              </motion.a>
            </div>

            {/* mini frase */}
            <p className="mt-8 text-white/65 font-medium leading-relaxed">
              Construindo pontes entre escola, família e prática inclusiva.
            </p>
          </div>
        </div>

        {/* BASE */}
        <div className="mt-14 pt-10 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/55 font-semibold text-sm text-center md:text-left">
              © {year} Instituto Afeto – Saúde e Desenvolvimento Familiar. Todos os direitos reservados.
            </p>

            <p className="text-white/45 text-sm text-center md:text-right">
              Sistema desenvolvido por{' '}
              <span className="font-semibold text-white/70">Matheus Ribeiro</span>,{' '}
              <span className="font-semibold text-white/70">Amanda Nascimento</span>,{' '}
              <span className="font-semibold text-white/70">Izaque Nicolas</span> e{' '}
              <span className="font-semibold text-white/70">Thais Cristina</span>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
