import React from 'react'
import { motion, useSpring, useTransform } from 'framer-motion'
import { useMousePosition } from '../hooks/useMousePosition'

export default function InteractiveBackground({ color = '#012677' }) {
  const { x, y } = useMousePosition()
  const springConfig = { stiffness: 40, damping: 30 }
  const smoothX = useSpring(x, springConfig)
  const smoothY = useSpring(y, springConfig)

  const xPos1 = useTransform(smoothX, (val) => (val - window.innerWidth / 2) * 0.1)
  const yPos1 = useTransform(smoothY, (val) => (val - window.innerHeight / 2) * 0.1)

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div
        style={{ x: xPos1, y: yPos1 }}
        className="absolute top-[-10%] left-[-10%] w-[80%] h-[80%] rounded-full blur-[150px] opacity-[0.08]"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-full h-full bg-gradient-to-br from-nexxusBlue to-blue-400" />
      </motion.div>
      {/* camada opcional para mudar o "tom" em seções escuras */}
      <div
        className="absolute inset-0"
        style={{ background: `radial-gradient(circle at center, ${color}22 0%, transparent 60%)` }}
      />
    </div>
  )
}
