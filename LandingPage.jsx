import { useState, useEffect } from 'react'

// Constantes de cores e temas
const COLORS = {
  primary: '#14d9b5', // Verde suave principal
  primaryDark: '#10a98f', // Verde escuro
  secondary: '#a8d8ea', // Azul claro
  accent: '#d4a5f9', // Lilás claro
  text: {
    primary: '#1a1a1a',
    secondary: '#4a5568',
    light: '#718096',
  },
  background: {
    light: '#f7fafc',
    white: '#ffffff',
    gradient: 'linear-gradient(135deg, #e0fbf7 0%, #b8f0e8 25%, #8fe5d9 50%, #5dd9c7 75%, #14d9b5 100%)',
  },
}

// Hook customizado para scroll
const useScroll = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return isScrolled
  }

  // Componente Navbar
const Navbar = ({ isScrolled, scrollToSection, handleLogin }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { id: 'sobre', label: 'Sobre' },
    { id: 'servicos', label: 'Serviços' },
    { id: 'equipe', label: 'Equipe' },
    { id: 'contato', label: 'Contato' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-4'
      }`}
      role="navigation"
      aria-label="Navegação principal"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <img
              src="/logo-removebg-preview.png"
              alt="Logo Instituto Afeto"
              className="h-8 sm:h-10 md:h-12 w-auto"
              onError={(e) => {
                e.target.style.display = 'none'
              }}
            />
            <span
              className="text-base sm:text-lg md:text-xl font-bold transition-colors"
              style={{ color: isScrolled ? COLORS.primary : 'white' }}
            >
              Programa Afeto
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            {navLinks.map((link) => (
            <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`font-medium transition-all duration-200 text-sm lg:text-base hover:opacity-80 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
                aria-label={`Ir para seção ${link.label}`}
            >
                {link.label}
            </button>
            ))}
            <button
              onClick={handleLogin}
              className="px-4 lg:px-5 py-2 rounded-lg font-semibold text-white transition-all duration-200 hover:shadow-lg hover:scale-105 text-sm lg:text-base"
              style={{ backgroundColor: COLORS.primary }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = COLORS.primaryDark
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = COLORS.primary
              }}
              aria-label="Acessar sistema"
            >
              Entrar
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ color: isScrolled ? COLORS.primary : 'white' }}
            aria-label="Menu mobile"
            aria-expanded={isMobileMenuOpen}
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 bg-white/95 backdrop-blur-md rounded-lg p-4 shadow-lg animate-fade-in">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  scrollToSection(link.id)
                  setIsMobileMenuOpen(false)
                }}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 active:bg-gray-200 rounded-lg transition-colors touch-manipulation"
                style={{ minHeight: '44px' }}
              >
                {link.label}
              </button>
            ))}
          <button
            onClick={handleLogin}
              className="block w-full text-center px-4 py-3 rounded-lg font-semibold text-white transition-colors active:opacity-80 touch-manipulation mt-2"
              style={{ backgroundColor: COLORS.primary, minHeight: '44px' }}
          >
              Entrar
          </button>
        </div>
        )}
      </div>
    </nav>
  )
}

  // Componente Hero
const Hero = ({ scrollToSection, handleLogin }) => (
  <section
    className="min-h-screen flex items-center justify-center pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    style={{ background: COLORS.background.gradient }}
    aria-label="Seção principal"
  >
    {/* Decorative elements - hidden on mobile */}
    <div className="absolute inset-0 opacity-10 hidden sm:block">
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl" style={{ backgroundColor: COLORS.accent }}></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: COLORS.secondary }}></div>
    </div>

    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center relative z-10 w-full">
      <div className="text-center md:text-left animate-fade-in order-2 md:order-1">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight">
          <span className="text-white drop-shadow-lg">Programa</span>
          <span className="block mt-1 sm:mt-2" style={{ color: COLORS.primaryDark }}>
              Afeto
            </span>
          </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed drop-shadow-md px-2">
            Transformando vidas através do cuidado, desenvolvimento e acolhimento familiar.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
            <button
              onClick={handleLogin}
            className="px-5 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-3.5 md:py-4 rounded-lg font-semibold text-white text-sm sm:text-base md:text-lg lg:text-xl shadow-md transition-all duration-300 hover:shadow-lg active:scale-95 touch-manipulation"
            style={{ backgroundColor: COLORS.primary, minHeight: '44px' }}
              onMouseEnter={(e) => {
              e.target.style.backgroundColor = COLORS.primaryDark
              }}
              onMouseLeave={(e) => {
              e.target.style.backgroundColor = COLORS.primary
              }}
            aria-label="Acessar sistema"
            >
              Acessar Sistema
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
            className="px-5 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-3.5 md:py-4 rounded-lg font-semibold text-white text-sm sm:text-base md:text-lg lg:text-xl transition-all duration-300 hover:opacity-90 active:scale-95 touch-manipulation"
            style={{ 
              backgroundColor: 'rgba(224, 251, 247, 0.8)',
              border: `1px solid rgba(20, 217, 181, 0.5)`,
              backdropFilter: 'blur(10px)',
              minHeight: '44px'
            }}
            aria-label="Saiba mais sobre o programa"
            >
              Saiba Mais
            </button>
          </div>
        </div>
      <div className="flex justify-center md:justify-end animate-slide-in-right order-1 md:order-2 mb-6 md:mb-0">
          <img
            src="/afeto.png"
          alt="Ilustração representando o Instituto Afeto"
          className="w-48 sm:w-64 md:w-80 lg:w-96 xl:w-[500px] object-contain animate-float"
            onError={(e) => {
              console.error('Erro ao carregar imagem afeto.png:', e.target.src)
              e.target.style.display = 'none'
            }}
          />
        </div>
      </div>
    </section>
  )

// Componente Section Header
const SectionHeader = ({ title, description, className = '' }) => (
  <div className={`text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20 ${className}`}>
    <h2
      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 px-2"
      style={{ color: COLORS.primary }}
    >
      {title}
          </h2>
    <div
      className="w-20 sm:w-24 md:w-32 h-1 sm:h-1.5 mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"
      style={{ backgroundColor: COLORS.primary }}
    ></div>
    {description && (
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-6 leading-relaxed">
        {description}
      </p>
    )}
        </div>
)

// Componente Sobre
const Sobre = () => {
  const features = [
    {
      icon: 'fa-heart',
      title: 'Acolhimento',
      description: 'Oferecemos um ambiente seguro e acolhedor onde cada criança e família se sentem valorizados e compreendidos.',
    },
    {
      icon: 'fa-graduation-cap',
      title: 'Desenvolvimento',
      description: 'Promovemos o desenvolvimento integral através de programas educacionais e atividades que estimulam o crescimento pessoal.',
    },
    {
      icon: 'fa-users',
      title: 'Família',
      description: 'Fortalecemos os vínculos familiares e oferecemos suporte para que cada família possa prosperar junta.',
    },
  ]

  return (
    <section
      id="sobre"
      className="py-16 sm:py-20 md:py-24 lg:py-32"
      style={{ backgroundColor: COLORS.background.white }}
      aria-labelledby="sobre-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Sobre o Programa"
          description="O Programa Afeto é uma iniciativa do Instituto Afeto dedicada à saúde e desenvolvimento familiar, oferecendo suporte especializado para crianças, adolescentes e suas famílias."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-5 sm:p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100"
            >
              <div
                className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                style={{ backgroundColor: COLORS.secondary }}
              >
                <i className={`fas ${feature.icon} text-white text-xl sm:text-2xl md:text-3xl`}></i>
            </div>
              <h3
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 md:mb-4"
                style={{ color: COLORS.primaryDark }}
              >
                {feature.title}
            </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {feature.description}
            </p>
          </div>
          ))}
        </div>
      </div>
    </section>
  )
}

  // Componente Servicos
  const Servicos = () => {
    const services = [
      {
        icon: 'fa-user-graduate',
        title: 'Aprendizes',
        description: 'Programa de desenvolvimento para crianças e adolescentes em diferentes níveis de aprendizado.',
      },
      {
        icon: 'fa-user-md',
        title: 'Profissionais',
        description: 'Equipe qualificada de profissionais dedicados ao cuidado e desenvolvimento dos aprendizes.',
      },
      {
        icon: 'fa-chart-line',
        title: 'Acompanhamento',
        description: 'Sistema completo de avaliação e acompanhamento do progresso de cada aprendiz.',
      },
      {
        icon: 'fa-shield-alt',
        title: 'Segurança',
        description: 'Ambiente seguro e protegido com acesso exclusivo para profissionais autorizados.',
      },
    ]

    return (
    <section
      id="servicos"
      className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden"
      style={{ background: COLORS.background.gradient }}
      aria-labelledby="servicos-title"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: COLORS.accent }}></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: COLORS.secondary }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white drop-shadow-lg">
              Nossos Serviços
            </h2>
          <div className="w-24 sm:w-32 h-1.5 mx-auto mb-6 sm:mb-8 rounded-full bg-white"></div>
          <p className="text-base sm:text-lg md:text-xl text-white/95 max-w-3xl mx-auto px-4 leading-relaxed">
              Oferecemos uma gama completa de serviços para atender às necessidades das crianças e suas famílias.
            </p>
          </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
              className="bg-white/95 backdrop-blur-sm p-5 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50"
            >
              <div
                className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 transition-transform duration-300 hover:scale-110 hover:rotate-3"
                style={{ backgroundColor: COLORS.primary }}
              >
                <i className={`fas ${service.icon} text-white text-xl sm:text-2xl md:text-3xl`}></i>
                </div>
              <h3
                className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4"
                style={{ color: COLORS.primaryDark }}
              >
                  {service.title}
                </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

// Componente Equipe
const Equipe = () => {
  const teamMembers = [
    {
      name: 'Matheus Ribeiro',
      role: 'Desenvolvedor',
      description: 'Desenvolvedor responsável pela criação e manutenção do sistema do Programa Afeto.',
      image: '/equipe/Matheus.jpeg',
      linkedin: '#',
    },
    {
      name: 'Izaque Nicolas',
      role: 'Desenvolvedor',
      description: 'Desenvolvedor especializado em soluções tecnológicas e melhorias do sistema.',
      image: '/equipe/Izaque.jpeg',
      linkedin: '#',
    },
    {
      name: 'Amanda Iasmin',
      role: 'Desenvolvedora',
      description: 'Desenvolvedora dedicada ao desenvolvimento e melhorias do sistema.',
      image: '/equipe/Amanda.jpeg',
      linkedin: '#',
    },
    {
      name: 'Thays Cristina',
      role: 'Administradora - Coordenadora de Qualidade, Inovação e Marketing',
      description: 'Responsável pela gestão estratégica, qualidade, inovação e comunicação do Programa Afeto.',
      image: '/equipe/Thays.JPG',
      linkedin: '#',
    },
  ]

  return (
    <section
      id="equipe"
      className="py-16 sm:py-20 md:py-24 lg:py-32"
      style={{ backgroundColor: COLORS.background.light }}
      aria-labelledby="equipe-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Nossa Equipe"
          description="Conheça os profissionais dedicados que fazem a diferença no desenvolvimento e cuidado de cada criança e família."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-5 sm:p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100"
            >
              <div className="relative mx-auto mb-4 sm:mb-6 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40">
                <div
                  className="absolute inset-0 rounded-full p-1 sm:p-1.5 transition-all duration-300 group-hover:scale-105"
                  style={{ background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})` }}
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-white p-1">
                    <img
                      src={member.image}
                      alt={`Foto de ${member.name}`}
                      className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=200&background=${COLORS.primary.replace('#', '')}&color=fff&bold=true`
                      }}
                    />
                  </div>
                </div>
              </div>
              <h3
                className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 text-center transition-colors duration-300 group-hover:text-[#14d9b5]"
                style={{ color: COLORS.primaryDark }}
              >
                {member.name}
              </h3>
              <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-500 mb-2 sm:mb-3 md:mb-4 text-center">
                {member.role}
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 text-center leading-relaxed mb-4">
                {member.description}
              </p>
              <div className="flex justify-center">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[#0077b5] bg-gray-100 group-hover:bg-[#14d9b5] touch-manipulation"
                  aria-label={`LinkedIn de ${member.name}`}
                  style={{ minWidth: '44px', minHeight: '44px' }}
                >
                  <i className="fab fa-linkedin-in text-gray-600 group-hover:text-white transition-colors duration-300 text-sm sm:text-base"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
                  </div>
    </section>
  )
}

// Componente Contato
const Contato = () => {
  const contactInfo = [
    {
      icon: 'fa-map-marker-alt',
      label: 'Endereço',
      value: 'Instituto Afeto – Saúde e Desenvolvimento Familiar',
    },
    {
      icon: 'fa-envelope',
      label: 'Email',
      value: 'contato@institutoafeto.org.br',
      link: 'mailto:contato@institutoafeto.org.br',
    },
    {
      icon: 'fa-phone',
      label: 'Telefone',
      value: '(00) 0000-0000',
      link: 'tel:+5500000000000',
    },
  ]

  return (
    <section
      id="contato"
      className="py-16 sm:py-20 md:py-24 lg:py-32"
      style={{ backgroundColor: COLORS.background.white }}
      aria-labelledby="contato-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Entre em Contato"
          description="Estamos aqui para ajudar. Entre em contato conosco para mais informações sobre o Programa Afeto."
        />

        <div className="max-w-3xl mx-auto">
          <h3
            className="text-2xl sm:text-3xl font-bold mb-8 text-center"
            style={{ color: COLORS.primary }}
          >
            Informações de Contato
          </h3>
          <div className="space-y-4 sm:space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-start gap-3 sm:gap-4 md:gap-6 p-4 sm:p-5 md:p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 active:bg-gray-200 transition-colors duration-300 border border-gray-100"
              >
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-110"
                  style={{ backgroundColor: COLORS.primary }}
                >
                  <i className={`fas ${info.icon} text-white text-base sm:text-lg md:text-xl`}></i>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base md:text-lg">{info.label}</h4>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-gray-600 hover:text-[#14d9b5] transition-colors break-all text-sm sm:text-base touch-manipulation"
                      style={{ minHeight: '44px', display: 'inline-block' }}
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-600 text-sm sm:text-base">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

  // Componente Footer
const Footer = ({ scrollToSection, handleLogin }) => {
  const footerLinks = [
    { id: 'sobre', label: 'Sobre' },
    { id: 'servicos', label: 'Serviços' },
    { id: 'equipe', label: 'Equipe' },
    { id: 'contato', label: 'Contato' },
  ]

  const socialLinks = [
    { icon: 'fa-facebook-f', label: 'Facebook', href: '#' },
    { icon: 'fa-instagram', label: 'Instagram', href: '#' },
    { icon: 'fa-linkedin-in', label: 'LinkedIn', href: '#' },
  ]

  return (
    <footer
      className="bg-gray-900 text-white py-12 sm:py-16"
      role="contentinfo"
      aria-label="Rodapé"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-8 sm:mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-4">
              <img
                src="/logo-removebg-preview.png"
                alt="Logo Instituto Afeto"
                className="h-8 sm:h-10 w-auto"
                onError={(e) => {
                  e.target.style.display = 'none'
                }}
              />
              <span
                className="text-lg sm:text-xl font-bold"
                style={{ color: COLORS.primary }}
              >
                Programa Afeto
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transformando vidas através do cuidado, desenvolvimento e acolhimento familiar.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4
              className="font-semibold mb-4 text-base sm:text-lg"
              style={{ color: COLORS.primary }}
            >
              Links Rápidos
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="hover:text-white transition-colors duration-200"
                    aria-label={`Ir para seção ${link.label}`}
                  >
                    {link.label}
                </button>
              </li>
              ))}
              <li>
                <button
                  onClick={handleLogin}
                  className="hover:text-white transition-colors duration-200"
                  aria-label="Acessar sistema"
                >
                  Login
                </button>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4
              className="font-semibold mb-4 text-base sm:text-lg"
              style={{ color: COLORS.primary }}
            >
              Redes Sociais
            </h4>
            <div className="flex gap-3 sm:gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  style={{ backgroundColor: COLORS.primary }}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`fab ${social.icon} text-sm sm:text-base`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center text-gray-400 text-xs sm:text-sm">
          <p>
            © {new Date().getFullYear()} Instituto Afeto – Saúde e Desenvolvimento Familiar. Todos os direitos reservados.
          </p>
          <p className="mt-2">
            Site Desenvolvido por Matheus Ribeiro, Izaque Nicolas, Amanda Iasmin e Thais Cristina.
          </p>
        </div>
      </div>
    </footer>
  )
}

  // Componente GlobalStyles
  const GlobalStyles = () => (
    <style>{`
      @keyframes gradientAnimation {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
    
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes slideInRight {
      from {
        opacity: 0;
        transform: translateX(50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
    
    .animate-fade-in {
      animation: fadeIn 1s ease-out;
    }
    
    .animate-slide-in-right {
      animation: slideInRight 1s ease-out;
    }
    
    /* Smooth scroll */
    html {
      scroll-behavior: smooth;
    }
    
    /* Focus styles for accessibility */
    button:focus-visible,
    a:focus-visible {
      outline: 2px solid ${COLORS.primary};
      outline-offset: 2px;
    }
    
    /* Touch optimization for mobile */
    .touch-manipulation {
      touch-action: manipulation;
      -webkit-tap-highlight-color: transparent;
    }
    
    /* Better text rendering on mobile */
    body {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    /* Prevent text size adjustment on iOS */
    @media screen and (max-width: 768px) {
      input, textarea, select, button {
        font-size: 16px !important;
      }
    }
    `}</style>
  )

// Componente Principal
function LandingPage() {
  const isScrolled = useScroll()

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
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
      <Hero scrollToSection={scrollToSection} handleLogin={handleLogin} />
      <Sobre />
      <Servicos />
      <Equipe />
      <Contato />
      <Footer scrollToSection={scrollToSection} handleLogin={handleLogin} />
    </div>
  )
}

export default LandingPage
