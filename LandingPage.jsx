import { useState, useEffect } from 'react'

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

  // Componente Navbar
  const Navbar = () => (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
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
              className={`text-base sm:text-lg md:text-xl font-bold transition-colors ${
                isScrolled ? 'text-afeto-primary' : 'text-white'
              }`}
              style={{ color: isScrolled ? '#14d9b5' : 'white' }}
            >
              Programa Afeto
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <button
              onClick={() => scrollToSection('sobre')}
              className={`font-medium transition-colors hover:opacity-80 text-sm lg:text-base ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className={`font-medium transition-colors hover:opacity-80 text-sm lg:text-base ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('equipe')}
              className={`font-medium transition-colors hover:opacity-80 text-sm lg:text-base ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Equipe
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className={`font-medium transition-colors hover:opacity-80 text-sm lg:text-base ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Contato
            </button>
            <button
              onClick={handleLogin}
              className="px-3 lg:px-4 py-2 rounded-lg font-semibold text-white transition-all text-sm lg:text-base"
              style={{
                backgroundColor: '#14d9b5',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#10a98f'
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#14d9b5'
              }}
            >
              Entrar
            </button>
          </div>
          <button
            className="md:hidden p-2"
            onClick={handleLogin}
            style={{ color: isScrolled ? '#14d9b5' : 'white' }}
            aria-label="Entrar"
          >
            <i className="fas fa-sign-in-alt text-xl"></i>
          </button>
        </div>
      </div>
    </nav>
  )

  // Componente Hero
  const Hero = () => (
    <section className="gradient-bg min-h-screen flex items-center justify-center pt-16 sm:pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="text-center md:text-left fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Programa
            <span className="block" style={{ color: '#10a98f' }}>
              Afeto
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto md:mx-0">
            Transformando vidas através do cuidado, desenvolvimento e acolhimento familiar.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
            <button
              onClick={handleLogin}
              className="px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg font-semibold text-white text-sm sm:text-base md:text-lg shadow-lg transition-all transform hover:scale-105"
              style={{
                backgroundColor: '#14d9b5',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#10a98f'
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#14d9b5'
              }}
            >
              Acessar Sistema
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg font-semibold bg-white/20 backdrop-blur-sm text-white text-sm sm:text-base md:text-lg border-2 border-white/30 transition-all transform hover:scale-105"
            >
              Saiba Mais
            </button>
          </div>
        </div>
        <div className="flex justify-center md:justify-end slide-in-right">
          <img
            src="/afeto.png"
            alt="Instituto Afeto"
            className="w-56 sm:w-64 md:w-80 lg:w-96 xl:w-[500px] floating-img object-contain"
            onError={(e) => {
              console.error('Erro ao carregar imagem afeto.png:', e.target.src)
              e.target.style.display = 'none'
            }}
          />
        </div>
      </div>
    </section>
  )

  // Componente Sobre
  const Sobre = () => (
    <section id="sobre" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#14d9b5' }}>
            Sobre o Programa
          </h2>
          <div className="w-20 sm:w-24 h-1 mx-auto mb-4 sm:mb-6" style={{ backgroundColor: '#14d9b5' }}></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            O Programa Afeto é uma iniciativa do Instituto Afeto dedicada à saúde e desenvolvimento familiar,
            oferecendo suporte especializado para crianças, adolescentes e suas famílias.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          <div className="bg-gradient-to-br from-afeto-light to-white p-5 sm:p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 slide-in-left">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#14d9b5' }}>
              <i className="fas fa-heart text-white text-xl sm:text-2xl"></i>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3" style={{ color: '#10a98f' }}>
              Acolhimento
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Oferecemos um ambiente seguro e acolhedor onde cada criança e família se sentem valorizados e compreendidos.
            </p>
          </div>

          <div className="bg-gradient-to-br from-afeto-light to-white p-5 sm:p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 fade-in">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#14d9b5' }}>
              <i className="fas fa-graduation-cap text-white text-xl sm:text-2xl"></i>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3" style={{ color: '#10a98f' }}>
              Desenvolvimento
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Promovemos o desenvolvimento integral através de programas educacionais e atividades que estimulam o crescimento pessoal.
            </p>
          </div>

          <div className="bg-gradient-to-br from-afeto-light to-white p-5 sm:p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 slide-in-right sm:col-span-2 lg:col-span-1">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#14d9b5' }}>
              <i className="fas fa-users text-white text-xl sm:text-2xl"></i>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3" style={{ color: '#10a98f' }}>
              Família
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Fortalecemos os vínculos familiares e oferecemos suporte para que cada família possa prosperar junta.
            </p>
          </div>
        </div>
      </div>
    </section>
  )

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
      <section id="servicos" className="py-12 sm:py-16 md:py-20 lg:py-24 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16 fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
              Nossos Serviços
            </h2>
            <div className="w-20 sm:w-24 h-1 mx-auto mb-4 sm:mb-6 bg-white"></div>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto px-4">
              Oferecemos uma gama completa de serviços para atender às necessidades das crianças e suas famílias.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-afeto-light to-white p-5 sm:p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#14d9b5' }}>
                  <i className={`fas ${service.icon} text-white text-xl sm:text-2xl`}></i>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3" style={{ color: '#10a98f' }}>
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
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
      <section id="equipe" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16 fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#14d9b5' }}>
              Nossa Equipe
            </h2>
            <div className="w-20 sm:w-24 h-1 mx-auto mb-4 sm:mb-6" style={{ backgroundColor: '#14d9b5' }}></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Conheça os profissionais dedicados que fazem a diferença no desenvolvimento e cuidado de cada criança e família.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 group"
              >
                <div className="relative mx-auto mb-4 sm:mb-6 w-32 h-32 sm:w-40 sm:h-40">
                  <div className="absolute inset-0 rounded-full p-1 transition-all duration-300 ease-in-out group-hover:scale-105" style={{ background: 'linear-gradient(135deg, #14d9b5, #10a98f)' }}>
                    <div className="w-full h-full rounded-full overflow-hidden bg-white p-1">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full transition-transform duration-300 ease-in-out group-hover:scale-105"
                        onError={(e) => {
                          e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=200&background=14d9b5&color=fff&bold=true`
                        }}
                      />
                    </div>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-center transition-colors duration-300 group-hover:text-[#14d9b5]" style={{ color: '#10a98f' }}>
                  {member.name}
                </h3>
                <p className="text-sm sm:text-base font-semibold text-gray-500 mb-3 sm:mb-4 text-center">
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
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-110 hover:bg-[#0077b5] bg-gray-100 group-hover:bg-[#14d9b5]"
                    aria-label={`LinkedIn de ${member.name}`}
                  >
                    <i className="fab fa-linkedin-in text-gray-600 group-hover:text-white transition-colors duration-300"></i>
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
  const Contato = () => (
    <section id="contato" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#14d9b5' }}>
            Entre em Contato
          </h2>
          <div className="w-20 sm:w-24 h-1 mx-auto mb-4 sm:mb-6" style={{ backgroundColor: '#14d9b5' }}></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Estamos aqui para ajudar. Entre em contato conosco para mais informações sobre o Programa Afeto.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-afeto-light to-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6" style={{ color: '#10a98f' }}>
                  Informações de Contato
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#14d9b5' }}>
                      <i className="fas fa-map-marker-alt text-white text-sm sm:text-base"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">Endereço</h4>
                      <p className="text-xs sm:text-sm md:text-base text-gray-600">Instituto Afeto – Saúde e Desenvolvimento Familiar</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#14d9b5' }}>
                      <i className="fas fa-envelope text-white text-sm sm:text-base"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">Email</h4>
                      <p className="text-xs sm:text-sm md:text-base text-gray-600 break-all">contato@institutoafeto.org.br</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#14d9b5' }}>
                      <i className="fas fa-phone text-white text-sm sm:text-base"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">Telefone</h4>
                      <p className="text-xs sm:text-sm md:text-base text-gray-600">(00) 0000-0000</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6" style={{ color: '#10a98f' }}>
                  Acesso ao Sistema
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                  Profissionais e administradores autorizados podem acessar o sistema interno para gerenciar aprendizes,
                  registrar atendimentos e acompanhar o desenvolvimento.
                </p>
                <button
                  onClick={handleLogin}
                  className="w-full px-5 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold text-white text-base sm:text-lg shadow-lg transition-all transform hover:scale-105"
                  style={{
                    backgroundColor: '#14d9b5',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#10a98f'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#14d9b5'
                  }}
                >
                  <i className="fas fa-sign-in-alt mr-2"></i>
                  Acessar Sistema
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

  // Componente Footer
  const Footer = () => (
    <footer className="bg-gray-900 text-white py-8 sm:py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <img
                src="/logo-removebg-preview.png"
                alt="Logo Instituto Afeto"
                className="h-8 sm:h-10 w-auto"
                onError={(e) => {
                  e.target.style.display = 'none'
                }}
              />
              <span className="text-lg sm:text-xl font-bold" style={{ color: '#14d9b5' }}>
                Programa Afeto
              </span>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm">
              Transformando vidas através do cuidado, desenvolvimento e acolhimento familiar.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" style={{ color: '#14d9b5' }}>
              Links Rápidos
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-gray-400 text-xs sm:text-sm">
              <li>
                <button onClick={() => scrollToSection('sobre')} className="hover:text-white transition-colors">
                  Sobre
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('servicos')} className="hover:text-white transition-colors">
                  Serviços
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('equipe')} className="hover:text-white transition-colors">
                  Equipe
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contato')} className="hover:text-white transition-colors">
                  Contato
                </button>
              </li>
              <li>
                <button onClick={handleLogin} className="hover:text-white transition-colors">
                  Login
                </button>
              </li>
            </ul>
          </div>
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" style={{ color: '#14d9b5' }}>
              Redes Sociais
            </h4>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: '#14d9b5' }}
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f text-sm sm:text-base"></i>
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: '#14d9b5' }}
                aria-label="Instagram"
              >
                <i className="fab fa-instagram text-sm sm:text-base"></i>
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: '#14d9b5' }}
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in text-sm sm:text-base"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center text-gray-400 text-xs sm:text-sm">
          <p>
            © 2023 Instituto Afeto – Saúde e Desenvolvimento Familiar. Todos os direitos reservados.
          </p>
          <p className="mt-1 sm:mt-2">
            Site Desenvolvido por Matheus Ribeiro, Izaque Nicolas, Amanda Iasmin e Thais Cristina.
          </p>
        </div>
      </div>
    </footer>
  )

  // Componente GlobalStyles
  const GlobalStyles = () => (
    <style>{`
      @keyframes gradientAnimation {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      .gradient-bg {
        background: linear-gradient(-45deg, #e0fbf7, #f8fafc, #14d9b5, #10a98f);
        background-size: 400% 400%;
        animation: gradientAnimation 15s ease infinite;
      }
      .floating-img {
        animation: floaty 4.5s ease-in-out infinite;
        will-change: transform;
      }
      @keyframes floaty {
        0% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0); }
      }
      .fade-in {
        animation: fadeIn 1s ease-in;
      }
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .slide-in-left {
        animation: slideInLeft 0.8s ease-out;
      }
      @keyframes slideInLeft {
        from { opacity: 0; transform: translateX(-50px); }
        to { opacity: 1; transform: translateX(0); }
      }
      .slide-in-right {
        animation: slideInRight 0.8s ease-out;
      }
      @keyframes slideInRight {
        from { opacity: 0; transform: translateX(50px); }
        to { opacity: 1; transform: translateX(0); }
      }
    `}</style>
  )

  return (
    <div className="min-h-screen bg-white">
      <GlobalStyles />
      <Navbar />
      <Hero />
      <Sobre />
      <Servicos />
      <Equipe />
      <Contato />
      <Footer />
    </div>
  )
}

export default LandingPage
