import React from 'react'
import { motion } from 'framer-motion'
import {
  Sparkles,
  HeartHandshake,
  Code2,
  BadgeCheck,
  ArrowRight,
  Orbit
} from 'lucide-react'
import ProfileCard from '../components/ProfileCard'

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  }
}

function Pill({ icon, children }) {
  return (
    <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 border border-blue-100 text-nexxusBlue font-black text-[11px] tracking-[0.22em] uppercase shadow-sm">
      {icon}
      {children}
    </span>
  )
}

function SectionKicker({ icon, label }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#012677] shadow-inner">
        {icon}
      </div>
      <p className="text-[#012677] font-black text-[11px] tracking-[0.22em] uppercase">
        {label}
      </p>
    </div>
  )
}

function SectionBlock({ kicker, title, desc }) {
  return (
    <div className="flex flex-col gap-4">
      {kicker}
      <h3 className="text-3xl md:text-4xl font-black text-nexxusBlue tracking-tight">
        {title}
      </h3>
      <p className="text-gray-600 font-medium max-w-3xl leading-relaxed">
        {desc}
      </p>
    </div>
  )
}

export default function TeamSection() {
  return (
    <section className="pt-20 md:pt-24 pb-28 md:pb-32 px-6 bg-white relative overflow-hidden">

      {/* ===== BACKGROUND CONCEITUAL ===== */}
      <div className="absolute inset-0 pointer-events-none">

        {/* Gradiente institucional */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/60 via-white to-white" />

        {/* Glow Afeto */}
        <div className="absolute -top-56 -left-56 w-[720px] h-[720px] bg-blue-100/30 blur-[200px] rounded-full" />
        <div className="absolute top-1/3 -right-64 w-[760px] h-[760px] bg-blue-50/50 blur-[220px] rounded-full" />

        {/* Grid educacional sutil */}
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(1,38,119,0.04) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(1,38,119,0.04) 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px'
          }}
        />
      </div>

      {/* ===== CONTEÚDO ===== */}
      <div className="max-w-7xl mx-auto relative z-10">

        {/* HERO */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div className="flex flex-wrap items-center gap-3">
            <Pill icon={<Sparkles size={14} />}>Aqui tem Afeto!</Pill>
            <Pill icon={<BadgeCheck size={14} />}>Educação • Tecnologia • Cuidado</Pill>
          </div>

          <div className="mt-6 grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <h2 className="text-5xl md:text-6xl font-black tracking-tight text-nexxusBlue leading-[0.95]">
                Nossa Equipe
              </h2>
              <p className="mt-4 text-lg md:text-xl text-gray-600 font-medium max-w-3xl leading-relaxed">
                A força do Afeto'S está na soma de{' '}
                <span className="font-bold text-nexxusBlue">visão pedagógica</span>,{' '}
                <span className="font-bold text-nexxusBlue">responsabilidade ética</span> e{' '}
                <span className="font-bold text-nexxusBlue">engenharia de produto</span>.
              </p>
            </div>

            <div className="lg:col-span-4">
              <div className="rounded-[2.5rem] bg-white/85 backdrop-blur border border-blue-100/70 p-6 shadow-[0_25px_70px_-55px_rgba(1,38,119,0.6)]">
                <p className="text-[#012677] font-black text-sm tracking-[0.18em] uppercase flex items-center gap-2">
                  <ArrowRight size={16} />
                  Duas frentes, um só propósito
                </p>

                <div className="mt-4 space-y-3">
                  <div className="flex justify-between rounded-2xl bg-blue-50 border border-blue-100 px-4 py-3">
                    <span className="font-black text-nexxusBlue">Idealização</span>
                    <span className="text-gray-600 text-sm">Visão & inclusão</span>
                  </div>
                  <div className="flex justify-between rounded-2xl bg-blue-50 border border-blue-100 px-4 py-3">
                    <span className="font-black text-nexxusBlue">Desenvolvimento</span>
                    <span className="text-gray-600 text-sm">Produto & tecnologia</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 text-gray-600 text-sm">
                  <Orbit size={16} className="text-[#012677]" />
                  Conectando pessoas e processos.
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ===== IDEALIZADORES ===== */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-16">
          <SectionBlock
            kicker={<SectionKicker icon={<HeartHandshake size={18} />} label="Núcleo de Idealização" />}
            title="Idealizadores"
            desc="Quem trouxe a visão e a responsabilidade educacional do NexxuS: propósito, ética, inclusão e prática."
          />

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProfileCard
              name="Instituto Afeto"
              role="Idealização do Projeto"
              description="Instituição referência em saúde, educação e desenvolvimento infantil, comprometida com práticas inclusivas, éticas e baseadas em evidências."
              image="/equipe/afeto.png"
            />
            <ProfileCard
              name="Lorena Moema"
              role="Educação Inclusiva"
              description="Atuação voltada à educação inclusiva, desenvolvimento infantil e construção de estratégias pedagógicas alinhadas à BNCC."
              image="/equipe/lorena.png"
            />
            <ProfileCard
              name="Thais Cristina"
              role="Educação e Inclusão"
              description="Profissional com atuação na educação inclusiva e no desenvolvimento de estratégias pedagógicas alinhadas à BNCC."
              image="/equipe/Thays.JPG"
            />
            <ProfileCard
              name="Nome do Idealizador"
              role="Gestão Educacional"
              description="Atuação voltada à organização de processos educacionais e ao fortalecimento de práticas inclusivas."
              image="/equipe/afeto.png"
            />
          </div>
        </motion.div>

        {/* DIVIDER */}
        <div className="my-16 h-px bg-gradient-to-r from-transparent via-blue-100 to-transparent" />

        {/* ===== DESENVOLVIMENTO ===== */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <SectionBlock
            kicker={<SectionKicker icon={<Code2 size={18} />} label="Engenharia & Produto" />}
            title="Desenvolvimento do Sistema"
            desc="Profissionais responsáveis por transformar a visão do NexxuS em uma plataforma moderna, segura e escalável."
          />

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProfileCard
              name="Matheus Ribeiro"
              role="Desenvolvedor de Software"
              description="Experiência em Python, IA, machine learning, Django, banco de dados e front-end, com atuação em gestão de equipes."
              image="/equipe/Matheus.jpeg"
            />
            <ProfileCard
              name="Izaque Nicolas"
              role="Desenvolvedor de Software"
              description="Back-end com Django, Flask e Node.js, e front-end com React (Vite) e Tailwind CSS."
              image="/equipe/Izaque.jpeg"
            />
            <ProfileCard
              name="Amanda Nascimento"
              role="Desenvolvedora de Software"
              description="Desenvolvedora Full Stack Jr com foco em Engenharia de Software, React, Django, Node.js e Cloud."
              image="/equipe/Amanda.jpeg"
            />
            <ProfileCard
              name="Carlielson Guimaraes"
              role="Desenvolvedor de Software"
              description="Atuação em desenvolvimento de sistemas, colaboração com o time e suporte à evolução do produto."
              image="/equipe/afeto.png"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
