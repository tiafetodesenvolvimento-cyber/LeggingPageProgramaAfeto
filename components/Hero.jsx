function Hero({ scrollToSection, handleLogin }) {
  return (
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
}

export default Hero


