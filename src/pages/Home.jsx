import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// Sections da HOME
import HeroSection from '../sections/HeroSection'
import AboutSection from '../sections/AboutSection'
import WhySection from '../sections/WhySection'
import BNCCSection from '../sections/BNCCSection'
import AEESection from '../sections/AEESection'
import InclusionPracticeSection from '../sections/InclusionPracticeSection'
import AudienceSection from '../sections/AudienceSection'
import CommitmentSection from '../sections/CommitmentSection'

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <WhySection />
        <BNCCSection />
        <AEESection />
        <InclusionPracticeSection />
        <AudienceSection />
        <CommitmentSection />
      </main>

      <Footer />
    </>
  )
}
