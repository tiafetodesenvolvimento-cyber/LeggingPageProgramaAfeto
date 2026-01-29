import React from 'react'
import { motion } from 'framer-motion'

export default function FeatureCard({ title, description, icon }) {
  return (
    <motion.div
      whileHover={{ y: -15, scale: 1.02 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white p-12 rounded-[3.5rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col gap-8 group transition-all duration-500 relative overflow-hidden h-full"
    >
      <div className="w-16 h-16 bg-blue-50 text-nexxusBlue rounded-3xl flex items-center justify-center group-hover:bg-nexxusBlue group-hover:text-white transition-all duration-500 transform group-hover:rotate-[10deg] shadow-inner">
        <motion.div whileHover={{ scale: 1.2 }}>{icon}</motion.div>
      </div>

      <div className="relative z-10">
        <h3 className="text-2xl font-black text-nexxusBlue mb-4 group-hover:translate-x-2 transition-transform duration-500">
          {title}
        </h3>
        <p className="text-gray-500 leading-relaxed text-lg font-medium">{description}</p>
      </div>
    </motion.div>
  )
}
