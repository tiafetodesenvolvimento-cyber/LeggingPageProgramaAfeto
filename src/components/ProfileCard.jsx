import React from 'react'
import { motion } from 'framer-motion'

export default function ProfileCard({ name, role, description, image }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="
        bg-white
        rounded-[3rem]
        border border-blue-100/80
        shadow-[0_12px_30px_-22px_rgba(1,38,119,0.35)]
        hover:shadow-[0_24px_60px_-30px_rgba(1,38,119,0.45)]
        transition-shadow
        h-full
        p-10
        flex flex-col items-center text-center
        relative overflow-hidden
      "
    >
      {/* highlight suave no topo */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-blue-50/70 to-transparent" />

      {/* Foto */}
      <div className="relative z-10 w-28 h-28 rounded-full overflow-hidden mb-6 border-[4px] border-[#012677] shadow-sm bg-white">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Nome */}
      <h4 className="relative z-10 text-xl font-black text-nexxusBlue tracking-tight leading-tight">
        {name}
      </h4>

      {/* Cargo */}
      <p className="relative z-10 mt-2 text-[13px] font-extrabold uppercase tracking-[0.18em] text-gray-500">
        {role}
      </p>

      {/* Descrição (controlada, sem ficar gigante) */}
      <p className="relative z-10 mt-5 text-[15px] text-gray-600 leading-relaxed font-medium">
        {description}
      </p>

      {/* Rodapé fixo do card (deixa todos com “base” igual) */}
      <div className="mt-auto pt-7 w-full">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-100 to-transparent" />
        <div className="mt-5 flex justify-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#012677]" />
        </div>
      </div>
    </motion.div>
  )
}
