import React from 'react'
import { motion } from 'framer-motion'

export default function FloatingLogo() {
  return (
    <motion.div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">

      {/* Anel externo */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
        className="absolute w-full h-full border border-nexxusBlue/10 rounded-full"
      />

      {/* Glow central */}
      <motion.div
        animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-[75%] h-[75%] bg-nexxusBlue/20 blur-[120px] rounded-full"
      />

      {/* ===== Bolinhas azuis ===== */}

      {/* Direita superior */}
      <motion.div
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-16 right-20 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_14px_rgba(59,130,246,0.6)]"
      />

      {/* Direita média */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
        className="absolute top-1/3 right-10 w-2.5 h-2.5 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,0.6)]"
      />

      {/* Direita inferior */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-20 right-24 w-2 h-2 bg-blue-300 rounded-full shadow-[0_0_8px_rgba(147,197,253,0.6)]"
      />

      {/* Esquerda superior */}
      <motion.div
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
        className="absolute top-24 left-20 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_14px_rgba(59,130,246,0.6)]"
      />

      {/* Esquerda média */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-10 w-2.5 h-2.5 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,0.6)]"
      />

      {/* Esquerda inferior */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
        className="absolute bottom-24 left-24 w-2 h-2 bg-blue-300 rounded-full shadow-[0_0_8px_rgba(147,197,253,0.6)]"
      />

      {/* Extra (mais distante, bem sutil) */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1.8 }}
        className="absolute top-10 right-6 w-1.5 h-1.5 bg-blue-200 rounded-full shadow-[0_0_6px_rgba(191,219,254,0.6)]"
      />

      {/* ===== Logo flutuando reta ===== */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10 w-[80%] h-[80%] flex items-center justify-center"
      >
        <img
          src="/logo_afetoA.png"
          alt="AfetoS Logo"
          className="w-full h-full object-contain drop-shadow-[0_30px_60px_rgba(1,38,119,0.35)]"
        />
      </motion.div>

    </motion.div>
  )
}
