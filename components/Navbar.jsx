function Navbar({ isScrolled, scrollToSection, handleLogin }) {
  return (
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
}

export default Navbar


