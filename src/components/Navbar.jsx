import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronRight, Menu, X, Sparkles } from 'lucide-react'

const NAV_ITEMS = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Funcionalidades', href: '#funcionalidades' },
  { label: 'Recursos Pedagógicos', href: '#recursos-pedagogicos' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 cursor-pointer"
          href="#top"
        >
          <div className="w-10 h-10 flex items-center justify-center overflow-hidden">
            <img
              src="/logo_nexxus.png"
              alt="Nexxus Logo Symbol"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-2xl font-black tracking-tighter text-nexxusBlue">
            NEXXUS
          </span>
        </motion.a>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-10 font-bold">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-500 hover:text-nexxusBlue transition-all relative group text-sm uppercase tracking-widest"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-nexxusBlue transition-all group-hover:w-full"></span>
            </a>
          ))}

          <motion.a
            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px -10px rgba(1, 38, 119, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            href="#funcionalidades"
            className="bg-nexxusBlue text-white px-8 py-3 rounded-2xl font-black text-sm uppercase tracking-widest transition-all inline-flex items-center gap-3"
          >
            Conhecer o NEXXUS <ChevronRight size={18} />
          </motion.a>
        </div>

        {/* Menu Mobile */}
        <button
          className="md:hidden text-nexxusBlue"
          onClick={() => setIsMobileMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Dropdown Mobile */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-2xl p-6 flex flex-col gap-6 border-t border-gray-100"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-lg font-bold text-gray-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <a
              href="#cta"
              className="bg-nexxusBlue text-white w-full py-4 rounded-2xl font-black text-lg text-center inline-flex items-center justify-center gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Sparkles size={18} /> Solicitar Apresentação
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
