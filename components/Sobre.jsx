function Sobre() {
  return (
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
}

export default Sobre


