function Contato({ handleLogin }) {
  return (
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
}

export default Contato


