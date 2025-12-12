import { useState, useEffect, useCallback, memo } from 'react'
import VLibrasComponent from './components/VLibrasComponent'

// ============================================
// CONSTANTES E CONFIGURAÇÕES
// ============================================

const COLORS = {
  primary: '#14d9b5',
  primaryDark: '#10a98f',
  secondary: '#a8d8ea',
  accent: '#d4a5f9',
  text: {
    primary: '#1a1a1a',
    secondary: '#4a5568',
    light: '#718096',
  },
  background: {
    light: '#f7fafc',
    white: '#ffffff',
    gradient:
      'linear-gradient(135deg, #e0fbf7 0%, #b8f0e8 25%, #8fe5d9 50%, #5dd9c7 75%, #14d9b5 100%)',
  },
}

const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
}

// ============================================
// HOOKS CUSTOMIZADOS
// ============================================

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

// ============================================
// COMPONENTES REUTILIZÁVEIS
// ============================================

const Button = memo(
  ({
    children,
    onClick,
    variant = 'primary',
    className = '',
    ariaLabel,
    type = 'button',
    ...props
  }) => {
    const baseStyles =
      'px-5 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-3.5 md:py-4 rounded-lg font-semibold text-white text-sm sm:text-base md:text-lg lg:text-xl shadow-md transition-all duration-300 hover:shadow-lg active:scale-95 touch-manipulation'

    const variants = {
      primary: {
        style: { backgroundColor: COLORS.primary, minHeight: '44px' },
        onMouseEnter: (e) => {
          e.target.style.backgroundColor = COLORS.primaryDark
        },
        onMouseLeave: (e) => {
          e.target.style.backgroundColor = COLORS.primary
        },
      },
      secondary: {
        style: {
          backgroundColor: 'rgba(224, 251, 247, 0.8)',
          border: `1px solid rgba(20, 217, 181, 0.5)`,
          backdropFilter: 'blur(10px)',
          minHeight: '44px',
          color: '#1a1a1a',
        },
      },
    }

    const variantStyles = variants[variant] || variants.primary

    return (
      <button
        type={type}
        onClick={onClick}
        className={`${baseStyles} ${className}`}
        style={variantStyles.style}
        onMouseEnter={variantStyles.onMouseEnter}
        onMouseLeave={variantStyles.onMouseLeave}
        aria-label={ariaLabel}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

const IconBox = memo(({ icon, size = 'md', className = '' }) => {
  const sizes = {
    sm: 'w-12 h-12 text-lg',
    md: 'w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 text-xl sm:text-2xl md:text-3xl',
  }

  return (
    <div
      className={`${sizes[size]} rounded-2xl flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:rotate-3 ${className}`}
      style={{ backgroundColor: COLORS.secondary }}
      aria-hidden="true"
    >
      <i className={`fas ${icon} text-white`} />
    </div>
  )
})

IconBox.displayName = 'IconBox'

const Card = memo(({ children, className = '', hover = true, ...props }) => (
  <div
    className={`bg-white p-5 sm:p-6 md:p-8 rounded-2xl shadow-md transition-all duration-300 border border-gray-100 ${
      hover ? 'hover:shadow-xl transform hover:-translate-y-2' : ''
    } ${className}`}
    {...props}
  >
    {children}
  </div>
))

Card.displayName = 'Card'

const SectionHeader = memo(({ title, description, className = '', titleId }) => (
  <header className={`text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20 ${className}`}>
    <h2
      id={titleId}
      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 px-2"
      style={{ color: COLORS.primary }}
    >
      {title}
    </h2>
    <div
      className="w-20 sm:w-24 md:w-32 h-1 sm:h-1.5 mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"
      style={{ backgroundColor: COLORS.primary }}
      aria-hidden="true"
    />
    {description && (
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-6 leading-relaxed">
        {description}
      </p>
    )}
  </header>
))

SectionHeader.displayName = 'SectionHeader'

// ============================================
// COMPONENTES DE NAVEGAÇÃO
// ============================================

const Navbar = memo(({ isScrolled, scrollToSection, handleLogin }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { id: 'sobre', label: 'Sobre' },
    { id: 'servicos', label: 'Serviços' },
    { id: 'equipe', label: 'Equipe' },
    { id: 'contato', label: 'Contato' },
  ]

  const handleLinkClick = useCallback(
    (id) => {
      scrollToSection(id)
      setIsMobileMenuOpen(false)
    },
    [scrollToSection]
  )

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-4'
      }`}
      role="navigation"
      aria-label="Navegação principal"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleLinkClick('inicio')}
            className="flex items-center gap-2 sm:gap-3"
            aria-label="Ir para o início"
          >
            <img
              src="/logo-removebg-preview.png"
              alt=""
              className="h-8 sm:h-10 md:h-12 w-auto"
              width="48"
              height="48"
              loading="eager"
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
          </button>

          {/* Desktop*/}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleLinkClick(link.id)}
                className={`font-medium transition-all duration-200 text-sm lg:text-base hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded ${
                  isScrolled
                    ? 'text-gray-700 focus:ring-gray-300'
                    : 'text-white focus:ring-white'
                }`}
                aria-label={`Ir para seção ${link.label}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            style={{ color: isScrolled ? COLORS.primary : 'white' }}
            aria-label={isMobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`} aria-hidden="true" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden mt-4 pb-4 space-y-2 bg-white/95 backdrop-blur-md rounded-lg p-4 shadow-lg animate-fade-in"
            role="menu"
            aria-label="Menu mobile"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleLinkClick(link.id)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 active:bg-gray-200 rounded-lg transition-colors touch-manipulation focus:outline-none focus:ring-2 focus:ring-gray-300"
                style={{ minHeight: '44px' }}
                role="menuitem"
              >
                {link.label}
              </button>
            ))}

            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false)
                handleLogin()
              }}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 active:bg-gray-200 rounded-lg transition-colors touch-manipulation focus:outline-none focus:ring-2 focus:ring-gray-300"
              style={{ minHeight: '44px' }}
              role="menuitem"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </nav>
  )
})

Navbar.displayName = 'Navbar'

// ============================================
// COMPONENTES DE SEÇÕES
// ============================================

const Hero = memo(({ scrollToSection, handleLogin }) => (
  <section
    id="inicio"
    className="relative min-h-screen flex items-center pt-28 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    style={{
      background: "linear-gradient(135deg, #0fb8ad 0%, #1fc8db 50%, #0fb8ad 100%)"
    }}
    aria-label="Seção principal - Programa Afeto"
  >
    {/* GLOW MAIS FORTE E VISÍVEL */}
    <div className="absolute inset-0 pointer-events-none">
      <div
        className="absolute -top-20 -left-20 w-[550px] h-[550px] rounded-full blur-[150px] opacity-40"
        style={{ backgroundColor: "#ffffff" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-[550px] h-[550px] rounded-full blur-[150px] opacity-20"
        style={{ backgroundColor: "#e7faff" }}
        aria-hidden="true"
      />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

      {/* TEXTO */}
      <div className="animate-fade-in text-center md:text-left order-2 md:order-1">
        <h1 className="font-extrabold leading-[1.1] tracking-tight drop-shadow-sm">
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white">
            Programa
          </span>

          <span className="block mt-2 text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gray-50">
            Afeto
          </span>
        </h1>

        <p className="mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-xl mx-auto md:mx-0 leading-relaxed drop-shadow">
          Transformando vidas com cuidado, apoio e acolhimento familiar —  
          um compromisso com o futuro das crianças.
        </p>

        {/* BOTÕES */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Button
            onClick={handleLogin}
            ariaLabel="Acessar sistema"
            className="w-full sm:w-auto text-base md:text-lg 
                      bg-sky-600 text-white font-semibold 
                      px-8 py-3 rounded-xl shadow-lg 
                      hover:bg-sky-700 transition"
          >
            Acessar Sistema
          </Button>


          <Button
            onClick={() => scrollToSection('sobre')}
            variant="secondary"
            ariaLabel="Saiba mais"
            className="w-full sm:w-auto text-base md:text-lg bg-teal-900/20 text-white border-white/30 hover:bg-teal-900/30 shadow-md"
          >
            Saiba Mais
          </Button>
        </div>
      </div>

      {/* IMAGEM */}
      <div className="flex justify-center md:justify-end animate-slide-in-right order-1 md:order-2">
        <img
          src="/afeto1.png"
          alt="Logo Afeto"
          className="w-72 sm:w-96 md:w-[430px] lg:w-[520px] xl:w-[620px] drop-shadow-xl animate-float"
          width="600"
          height="600"
        />
      </div>

    </div>
  </section>
));


Hero.displayName = 'Hero'

const Sobre = memo(() => {
  const features = [
    {
      icon: 'fa-heart',
      title: 'Acolhimento',
      description:
        'Oferecemos um ambiente seguro e acolhedor onde cada criança e família se sentem valorizados e compreendidos.',
    },
    {
      icon: 'fa-graduation-cap',
      title: 'Desenvolvimento',
      description:
        'Promovemos o desenvolvimento integral através de programas educacionais e atividades que estimulam o crescimento pessoal.',
    },
    {
      icon: 'fa-users',
      title: 'Família',
      description:
        'Fortalecemos os vínculos familiares e oferecemos suporte para que cada família possa prosperar junta.',
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
          titleId="sobre-title"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8" role="list">
          {features.map((feature, index) => (
            <Card key={index} hover className="group" role="listitem">
              <IconBox icon={feature.icon} className="mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-3" />
              <h3
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 md:mb-4"
                style={{ color: COLORS.primaryDark }}
              >
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
})

Sobre.displayName = 'Sobre'

const Servicos = memo(() => {
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
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div
          className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: COLORS.accent }}
        />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: COLORS.secondary }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2
            id="servicos-title"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 text-white drop-shadow-lg px-2"
          >
            Nossos Serviços
          </h2>
          <div className="w-20 sm:w-24 md:w-32 h-1 sm:h-1.5 mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full bg-white" aria-hidden="true" />
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/95 max-w-3xl mx-auto px-4 sm:px-6 leading-relaxed">
            Oferecemos uma gama completa de serviços para atender às necessidades das crianças e suas famílias.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8" role="list">
          {services.map((service, index) => (
            <Card key={index} hover className="bg-white/95 backdrop-blur-sm border-white/50" role="listitem">
              <IconBox icon={service.icon} className="mb-4 sm:mb-6" style={{ backgroundColor: COLORS.primary }} />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4" style={{ color: COLORS.primaryDark }}>
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
})

Servicos.displayName = 'Servicos'

const Equipe = memo(() => {
  const teamMembers = [
    {
      name: 'Matheus Ribeiro',
      role: 'Desenvolvedor',
      description: 'Desenvolvedor de Software Júnior, com experiência em gestão de equipes e pesquisa em propriedade intelectual e saúde mental. Focado em soluções inovadoras e resolução de problemas.',
      image: '/equipe/Matheus.jpeg',
      linkedin: 'https://www.linkedin.com/in/matheus-ribeiro-6bb921343/',
    },
    {
      name: 'Izaque Nicolas',
      role: 'Desenvolvedor',
      description: 'Desenvolvedor especializado em soluções tecnológicas e melhorias do sistema.',
      image: '/equipe/Izaque.jpeg',
      linkedin: '#',
    },
    {
      name: 'Amanda Nascimento',
      role: 'Desenvolvedora',
      description: 'Desenvolvedora dedicada ao desenvolvimento e melhorias do sistema.',
      image: '/equipe/Amanda.jpeg',
      linkedin: '#',
    },
    {
      name: 'Thays Cristina',
      role: 'Administradora',
      description: 'Coordenadora de Qualidade, Inovação e Marketing. Idealizadora do Programa Afeto, responsável pela parte intelectual.',
      image: '/equipe/Thays.JPG',
      linkedin: 'https://www.linkedin.com/in/thais-cristina-lima-833155119/',
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
          titleId="equipe-title"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8" role="list">
          {teamMembers.map((member, index) => (
            <Card key={index} hover className="group text-center" role="listitem">
              <div className="relative mx-auto mb-4 sm:mb-6 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40">
                <div
                  className="absolute inset-0 rounded-full p-1 sm:p-1.5 transition-all duration-300 group-hover:scale-105"
                  style={{ background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})` }}
                  aria-hidden="true"
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-white p-1">
                    <img
                      src={member.image}
                      alt={`Foto de ${member.name}, ${member.role}`}
                      className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      width="160"
                      height="160"
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=200&background=${COLORS.primary.replace(
                          '#',
                          ''
                        )}&color=fff&bold=true`
                      }}
                    />
                  </div>
                </div>
              </div>

              <h3
                className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 transition-colors duration-300 group-hover:text-[#14d9b5]"
                style={{ color: COLORS.primaryDark }}
              >
                {member.name}
              </h3>
              <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-500 mb-2 sm:mb-3 md:mb-4">
                {member.role}
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed mb-4">
                {member.description}
              </p>

              <div className="flex justify-center">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[#0077b5] bg-gray-100 group-hover:bg-[#14d9b5] touch-manipulation focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#14d9b5]"
                  aria-label={`Visitar perfil do LinkedIn de ${member.name}`}
                  style={{ minWidth: '44px', minHeight: '44px' }}
                >
                  <i className="fab fa-linkedin-in text-gray-600 group-hover:text-white transition-colors duration-300 text-sm sm:text-base" aria-hidden="true" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
})

Equipe.displayName = 'Equipe'

const Contato = memo(() => {
  const contactInfo = [
    {
      icon: 'fa-map-marker-alt',
      label: 'Endereço',
      value: 'R. São João, 637 - Centro, Floriano - PI, 64800-112',
    },
    {
      icon: 'fa-envelope',
      label: 'Email',
      value: 'qualidadeinovacao@institutoafetofloriano.com.br',
      link: 'mailto:qualidadeinovacao@institutoafetofloriano.com.br',
    },
    {
      icon: 'fa-phone',
      label: 'Telefone',
      value: '(89) 99403-4016',
      link: 'tel:+5589994034016',
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
          titleId="contato-title"
        />

        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center" style={{ color: COLORS.primary }}>
            Informações de Contato
          </h3>

          <div className="space-y-4 sm:space-y-6" role="list">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-start gap-3 sm:gap-4 md:gap-6 p-4 sm:p-5 md:p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 active:bg-gray-200 transition-colors duration-300 border border-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#14d9b5]"
                role="listitem"
              >
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-110"
                  style={{ backgroundColor: COLORS.primary }}
                  aria-hidden="true"
                >
                  <i className={`fas ${info.icon} text-white text-base sm:text-lg md:text-xl`} />
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base md:text-lg">{info.label}</h4>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-gray-600 hover:text-[#14d9b5] transition-colors break-all text-sm sm:text-base touch-manipulation focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#14d9b5] rounded"
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
})

Contato.displayName = 'Contato'

const Footer = memo(({ scrollToSection, handleLogin }) => {
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
    <footer className="bg-gray-900 text-white py-12 sm:py-16" role="contentinfo" aria-label="Rodapé">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-8 sm:mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-4">
              <img
                src="/logo-removebg-preview.png"
                alt=""
                className="h-8 sm:h-10 w-auto"
                width="40"
                height="40"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = 'none'
                }}
              />
              <span className="text-lg sm:text-xl font-bold" style={{ color: COLORS.primary }}>
                Programa Afeto
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transformando vidas através do cuidado, desenvolvimento e acolhimento familiar.
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Links de navegação do rodapé">
            <h4 className="font-semibold mb-4 text-base sm:text-lg" style={{ color: COLORS.primary }}>
              Links Rápidos
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(link.id)}
                    className="hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 rounded"
                    aria-label={`Ir para seção ${link.label}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={handleLogin}
                  className="hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 rounded"
                  aria-label="Acessar sistema"
                >
                  Login
                </button>
              </li>
            </ul>
          </nav>

          {/* Social */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="font-semibold mb-4 text-base sm:text-lg" style={{ color: COLORS.primary }}>
              Redes Sociais
            </h4>
            <div className="flex gap-3 sm:gap-4" role="list">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
                  style={{ backgroundColor: COLORS.primary }}
                  aria-label={`Visitar nosso ${social.label}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  role="listitem"
                >
                  <i className={`fab ${social.icon} text-sm sm:text-base`} aria-hidden="true" />
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
          <p className="mt-2">Site Desenvolvido por Matheus Ribeiro, Izaque Nicolas, Amanda Nascimento e Thais Cristina.</p>
        </div>
      </div>
    </footer>
  )
})

Footer.displayName = 'Footer'

// ============================================
// ESTILOS GLOBAIS
// ============================================

const GlobalStyles = () => (
  <style>{`
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes slideInRight {
      from { opacity: 0; transform: translateX(50px); }
      to { opacity: 1; transform: translateX(0); }
    }

    .animate-float { animation: float 6s ease-in-out infinite; will-change: transform; }
    .animate-fade-in { animation: fadeIn 1s ease-out; }
    .animate-slide-in-right { animation: slideInRight 1s ease-out; }

    html { scroll-behavior: smooth; scroll-padding-top: 80px; }

    button:focus-visible, a:focus-visible {
      outline: 2px solid ${COLORS.primary};
      outline-offset: 2px;
    }

    .touch-manipulation {
      touch-action: manipulation;
      -webkit-tap-highlight-color: transparent;
    }

    body {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    @media screen and (max-width: 768px) {
      input, textarea, select, button { font-size: 16px !important; }
    }

    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    }
  `}</style>
)

// ============================================
// COMPONENTE PRINCIPAL
// ============================================

function LandingPage() {
  const isScrolled = useScroll()

  // ✅ Scroll + hash + foco (navlinks arrumados)
  const scrollToSection = useCallback((id) => {
    const el = document.getElementById(id)
    if (!el) return

    if (window.location.hash !== `#${id}`) {
      window.history.pushState(null, '', `#${id}`)
    }

    const offset = 80
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset

    window.scrollTo({ top, behavior: 'smooth' })

    window.setTimeout(() => {
      if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '-1')
      el.focus({ preventScroll: true })
    }, 450)
  }, [])

  // Ao abrir com #secao, rola certinho
  useEffect(() => {
    const id = window.location.hash?.replace('#', '')
    if (id) {
      setTimeout(() => scrollToSection(id), 200)
    }
  }, [scrollToSection])

  const handleLogin = useCallback(() => {
    window.location.href = '/login'
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <GlobalStyles />
      <VLibrasComponent />
      <Navbar isScrolled={isScrolled} scrollToSection={scrollToSection} handleLogin={handleLogin} />
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
