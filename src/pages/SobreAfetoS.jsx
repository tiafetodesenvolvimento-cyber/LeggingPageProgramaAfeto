import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import SobreDetalhadoSection from '../sections/SobreDetalhadoSection'
import FinalidadeSection from '../sections/FinalidadeSection'
import TeamSection from '../sections/TeamSection'

export default function SobreNexxus() {
  return (
    <>
      <Navbar />

      <main className="pt-32">
        <SobreDetalhadoSection />
        <FinalidadeSection />
        <TeamSection />
      </main>

      <Footer />
    </>
  )
}
