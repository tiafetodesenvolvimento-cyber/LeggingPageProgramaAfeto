import React from 'react'
import Navbar from '../components/Navbar'

import SobreDetalhadoSection from '../sections/SobreDetalhadoSection'
import FinalidadeSection from '../sections/FinalidadeSection'

export default function SobreNexxus() {
  return (
    <>
      <Navbar />

      <main className="pt-32">
        <SobreDetalhadoSection />
        <FinalidadeSection />
      </main>

    </>
  )
}
