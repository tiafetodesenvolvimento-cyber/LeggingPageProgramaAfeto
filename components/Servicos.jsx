function Servicos() {
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
              className="bg-white/90 backdrop-blur-sm p-5 sm:p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2"
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

export default Servicos


