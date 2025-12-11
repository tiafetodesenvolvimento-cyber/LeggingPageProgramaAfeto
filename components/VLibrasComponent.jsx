import { useEffect, useRef } from 'react'

/**
 * Componente VLibras - Integração do plugin de acessibilidade VLibras
 * 
 * Este componente carrega e inicializa o plugin VLibras para tradução
 * de conteúdo em Libras (Língua Brasileira de Sinais).
 * 
 * @returns {null} Componente não renderiza nada visível, apenas inicializa o plugin
 */
const VLibrasComponent = () => {
  const scriptLoaded = useRef(false)
  const widgetInitialized = useRef(false)
  const checkIntervalRef = useRef(null)
  const timeoutRef = useRef(null)

  const initializeWidget = () => {
    // Aguarda o objeto VLibras estar disponível
    if (widgetInitialized.current) return

    checkIntervalRef.current = setInterval(() => {
      if (window.VLibras && window.VLibras.Widget) {
        if (checkIntervalRef.current) {
          clearInterval(checkIntervalRef.current)
          checkIntervalRef.current = null
        }
        
        try {
          // Inicializa o widget apenas uma vez
          if (!document.querySelector('[vw]')) {
            // Cria o container do VLibras
            const vwContainer = document.createElement('div')
            vwContainer.setAttribute('vw', '')
            vwContainer.className = 'enabled'

            // Cria o botão de acesso
            const accessButton = document.createElement('div')
            accessButton.setAttribute('vw-access-button', '')
            accessButton.className = 'active'
            vwContainer.appendChild(accessButton)

            // Cria o wrapper do plugin
            const pluginWrapper = document.createElement('div')
            pluginWrapper.setAttribute('vw-plugin-wrapper', '')
            
            const pluginTopWrapper = document.createElement('div')
            pluginTopWrapper.className = 'vw-plugin-top-wrapper'
            pluginWrapper.appendChild(pluginTopWrapper)
            
            vwContainer.appendChild(pluginWrapper)

            // Adiciona ao body
            document.body.appendChild(vwContainer)

            // Inicializa o widget
            new window.VLibras.Widget('https://vlibras.gov.br/app')
            widgetInitialized.current = true
          }
        } catch (error) {
          console.error('Erro ao inicializar o VLibras:', error)
        }
      }
    }, 100)

    // Timeout de segurança (10 segundos)
    timeoutRef.current = setTimeout(() => {
      if (checkIntervalRef.current) {
        clearInterval(checkIntervalRef.current)
        checkIntervalRef.current = null
      }
      if (!widgetInitialized.current) {
        console.warn('VLibras não foi inicializado dentro do tempo esperado')
      }
    }, 10000)
  }

  useEffect(() => {
    // Evita carregar múltiplas vezes
    if (scriptLoaded.current) return

    // Verifica se o script já foi carregado no DOM
    const existingScript = document.querySelector('script[src*="vlibras-plugin.js"]')
    if (existingScript) {
      scriptLoaded.current = true
      initializeWidget()
      return
    }

    // Carrega o script do VLibras
    const script = document.createElement('script')
    script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js'
    script.async = true
    script.defer = true

    script.onload = () => {
      scriptLoaded.current = true
      initializeWidget()
    }

    script.onerror = () => {
      console.error('Erro ao carregar o plugin VLibras')
    }

    document.body.appendChild(script)

    // Cleanup
    return () => {
      if (checkIntervalRef.current) {
        clearInterval(checkIntervalRef.current)
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  // Componente não renderiza nada
  return null
}

export default VLibrasComponent

