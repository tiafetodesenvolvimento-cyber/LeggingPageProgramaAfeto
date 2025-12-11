function Footer({ scrollToSection, handleLogin }) {
  return (
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
}

export default Footer


