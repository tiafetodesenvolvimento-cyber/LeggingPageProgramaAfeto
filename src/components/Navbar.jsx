import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronRight, Menu, X, Sparkles } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const NAV_ITEMS = [
  { label: 'Sobre', to: '/sobre-nexxus' },
  { label: 'Funcionalidades', href: '#funcionalidades' },
  { label: 'Recursos Pedagógicos', to: '/recursos-pedagogicos' },
]

const ACESSO_AFETOS_URL =
  'https://main.d2prrtiyzobbr8.amplifyapp.com/login'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const goTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const handleRouteToTop = (to) => (e) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)

    if (location.pathname !== to) navigate(to)

    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    })
  }

  // Para anchors (#funcionalidades etc) funcionar mesmo se estiver em outra rota
  const handleAnchor = (hash) => (e) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)

    const runScroll = () => {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(runScroll, 350)
    } else {
      runScroll()
    }
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo → Home + topo */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            to="/"
            onClick={handleRouteToTop('/')}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="w-11 h-11 flex items-center justify-center overflow-hidden">
              <img
                src="/logo_afetoA.png"
                alt="Afeto'S Logo Symbol"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-2xl font-black tracking-tighter text-nexxusBlue">
              Afeto'S
            </span>
          </Link>
        </motion.div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10 font-bold">
          {NAV_ITEMS.map((item) =>
            item.to ? (
              <Link
                key={item.label}
                to={item.to}
                onClick={handleRouteToTop(item.to)}
                className="text-gray-500 hover:text-nexxusBlue transition-all relative group text-sm uppercase tracking-widest"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-nexxusBlue transition-all group-hover:w-full" />
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                onClick={handleAnchor(item.href)}
                className="text-gray-500 hover:text-nexxusBlue transition-all relative group text-sm uppercase tracking-widest"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-nexxusBlue transition-all group-hover:w-full" />
              </a>
            )
          )}

          {/* Externo */}
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px -10px rgba(1, 38, 119, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            href={ACESSO_AFETOS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-nexxusBlue text-white px-8 py-3 rounded-2xl font-black text-sm uppercase tracking-widest transition-all inline-flex items-center gap-3"
          >
            Acesse o Afeto'S <ChevronRight size={18} />
          </motion.a>
        </div>

        {/* Mobile */}
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
            {NAV_ITEMS.map((item) =>
              item.to ? (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={handleRouteToTop(item.to)}
                  className="text-lg font-bold text-gray-700"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={handleAnchor(item.href)}
                  className="text-lg font-bold text-gray-700"
                >
                  {item.label}
                </a>
              )
            )}

            <a
              href={ACESSO_AFETOS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-nexxusBlue text-white w-full py-4 rounded-2xl font-black text-lg text-center inline-flex items-center justify-center gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Sparkles size={18} /> Acesse o Afeto'S
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
