import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Facebook, Instagram, Linkedin } from 'lucide-react'

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
  {
    label: 'E-mail',
    href: 'mailto:ti@institutoafetofloriano.com.br',
    icon: Mail,
  },
]

export default function Footer() {
  return (
    <footer className="bg-white pt-32 pb-16 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-4 gap-16 mb-24">
          {/* Logo + Frase */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 flex items-center justify-center overflow-hidden">
                <img src="/logo_nexxus.png" alt="Logo Nexxus" className="w-full h-full object-contain" />
              </div>
              <span className="text-3xl font-black text-nexxusBlue tracking-tighter">Afeto'S</span>
            </div>

            <p className="text-lg text-gray-400 font-medium leading-relaxed italic">
              Avaliar com sentido. <br />
              Planejar com propósito. <br />
              Incluir com responsabilidade.
            </p>
          </div>

          {/* Contato */}
          <div className="min-w-0">
            <h5 className="text-sm font-black text-nexxusBlue mb-8 uppercase tracking-[0.2em]">Contato</h5>

            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-gray-500 font-medium min-w-0">
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-nexxusBlue shrink-0">
                  <Mail size={18} />
                </div>

                <a
                  href="mailto:ti@institutoafetofloriano.com.br"
                  className="min-w-0 break-all hover:text-nexxusBlue transition-colors"
                  title="ti@institutoafetofloriano.com.br"
                >
                  ti@institutoafetofloriano.com.br
                </a>
              </li>

              <li className="flex items-center gap-4 text-gray-500 font-medium min-w-0">
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-nexxusBlue shrink-0">
                  <Phone size={18} />
                </div>

                <a href="tel:+5589994034016" className="hover:text-nexxusBlue transition-colors">
                  (89) 99403-4016
                </a>
              </li>
            </ul>
          </div>

          {/* Institucional */}
          <div>
            <h5 className="text-sm font-black text-nexxusBlue mb-8 uppercase tracking-[0.2em]">Institucional</h5>

            <ul className="space-y-4">
              <li>
                <a href="#sobre" className="text-lg text-gray-500 font-bold hover:text-nexxusBlue transition-colors">
                  Sobre o Afeto'S
                </a>
              </li>

              <li>
                <a
                  href="#funcionalidades"
                  className="text-lg text-gray-500 font-bold hover:text-nexxusBlue transition-colors"
                >
                  Nossas Soluções
                </a>
              </li>

              <li>
                <a href="#" className="text-lg text-gray-500 font-bold hover:text-nexxusBlue transition-colors">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h5 className="text-sm font-black text-nexxusBlue mb-8 uppercase tracking-[0.2em]">Siga-nos</h5>

            <div className="flex gap-4 flex-wrap">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -6, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-nexxusBlue hover:bg-nexxusBlue hover:text-white transition-all"
                  aria-label={label}
                  title={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="pt-16 border-t border-gray-100 text-center space-y-3">
          <p className="text-gray-400 font-bold text-sm tracking-widest uppercase">
            © {new Date().getFullYear()} Instituto Afeto – Saúde e Desenvolvimento Familiar. Todos os direitos reservados.
          </p>

          <p className="text-gray-400 text-sm">
            Sistema desenvolvido por Matheus Ribeiro, Amanda Nascimento, Izaque Nicolas, e Thais Cristina.
          </p>
        </div>
      </div>
    </footer>
  )
}
