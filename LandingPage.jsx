import { useState, useEffect } from 'react'
import GlobalStyles from './components/GlobalStyles'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Servicos from './components/Servicos'
import Contato from './components/Contato'
import Footer from './components/Footer'

function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleLogin = () => {
    window.location.href = '/login'
  }

  return (
    <div className="min-h-screen bg-white">
      <GlobalStyles />
      <Navbar 
        isScrolled={isScrolled}
        scrollToSection={scrollToSection}
        handleLogin={handleLogin}
      />
      <Hero 
        scrollToSection={scrollToSection}
        handleLogin={handleLogin}
      />
      <Sobre />
      <Servicos />
      <Contato handleLogin={handleLogin} />
      <Footer 
        scrollToSection={scrollToSection}
        handleLogin={handleLogin}
      />
    </div>
  )
}

export default LandingPage

