import React from 'react'
import { motion } from 'framer-motion'
import { Globe, HandHelping, Heart, Sparkles, Target, Users } from 'lucide-react'
import InteractiveBackground from '../components/InteractiveBackground'
import SectionHeading from '../components/SectionHeading'

const ITEMS = [
  { title: 'Criança no Centro', desc: 'Colocar a criança no centro do processo educacional.', icon: <Heart /> },
  { title: 'Singularidades', desc: 'Respeitar singularidades e ritmos de aprendizagem.', icon: <Target /> },
  { title: 'Acessibilidade', desc: 'Apoiar práticas pedagógicas acessíveis e equitativas.', icon: <Globe /> },
  { title: 'Colaborativo', desc: 'Estimular o trabalho colaborativo entre profissionais.', icon: <Users /> },
  { title: 'Vínculo', desc: 'Fortalecer o vínculo e a participação da família.', icon: <HandHelping /> },
  { title: 'Ação Intencional', desc: 'Planejamento consciente e ação intencional.', icon: <Sparkles /> }
]

export default function InclusionPracticeSection() {
  return (
    <section className="py-32 px-6 bg-nexxusBlue text-white relative overflow-hidden">
      <InteractiveBackground color="#ffffff" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Título */}
        <SectionHeading light>
          Inclusão na Prática
        </SectionHeading>

        {/* Texto explicativo — agora como TEXTO */}
        <p className="mt-1 max-w-5xl text-lg text-blue-100/80 font-medium leading-relaxed">
          Mais do que registrar informações, o <span className="font-bold text-white">NEXXUS</span>{' '}
          promove uma educação inclusiva aplicada, ao:
        </p>

        {/* Cards */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -15, backgroundColor: 'rgba(255, 255, 255, 0.12)' }}
              className="bg-white/5 backdrop-blur-2xl p-12 rounded-[4rem] border border-white/10 transition-all duration-500 group"
            >
              {/* Ícone */}
              <div className="mb-8 text-blue-200">
                <motion.div
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="group-hover:scale-110 transition-transform"
                >
                  {item.icon}
                </motion.div>
              </div>

              {/* Título */}
              <h4 className="text-2xl font-black mb-4 tracking-tight group-hover:translate-x-2 transition-transform">
                {item.title}
              </h4>

              {/* Descrição */}
              <p className="text-blue-100/60 text-lg leading-relaxed font-medium">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
