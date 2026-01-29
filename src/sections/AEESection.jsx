import React from 'react'
import { ClipboardCheck, FileText, ShieldCheck, Users } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import FeatureCard from '../components/FeatureCard'

export default function AEESection() {
  return (
    <section id="aee" className="py-32 px-6 bg-blue-50/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Título */}
        <SectionHeading>
          Fortalecendo o AEE
        </SectionHeading>

        {/* Texto explicativo — agora mais próximo do título */}
        <p className="mt-1 max-w-5xl text-lg text-gray-700 font-medium leading-relaxed">
          O <span className="font-bold text-nexxusBlue">NEXXUS</span> fortalece a atuação do
          Atendimento Educacional Especializado (AEE), oferecendo suporte de forma ética,
          documentada e alinhada à legislação educacional vigente.
        </p>

        {/* Cards */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <FeatureCard
            title="Registro Organizado"
            description="Registro organizado das necessidades específicas."
            icon={<ClipboardCheck />}
          />

          <FeatureCard
            title="PAEE"
            description="Construção e acompanhamento do PAEE."
            icon={<FileText />}
          />

          <FeatureCard
            title="Articulação"
            description="Articulação entre sala regular e equipe multiprofissional."
            icon={<Users />}
          />

          <FeatureCard
            title="Estratégias"
            description="Planejamento de recursos e adaptações pedagógicas."
            icon={<ShieldCheck />}
          />
        </div>

      </div>
    </section>
  )
}
