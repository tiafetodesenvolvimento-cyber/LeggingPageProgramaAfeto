import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import WhySection from './sections/WhySection'
import BNCCSection from './sections/BNCCSection'
import AEESection from './sections/AEESection'
import InclusionPracticeSection from './sections/InclusionPracticeSection'
import FeaturesSection from './sections/FeaturesSection'
import AudienceSection from './sections/AudienceSection'
import CommitmentSection from './sections/CommitmentSection'
import CTASection from './sections/CTASection'

export default function App() {
  return (
    <div className="relative min-h-screen bg-white selection:bg-nexxusBlue selection:text-white overflow-hidden">
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <WhySection />
        <BNCCSection />
        <AEESection />
        <InclusionPracticeSection />
        <FeaturesSection />
        <AudienceSection />
        <CommitmentSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  )
}
