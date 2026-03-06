import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

const Carousel = () => {
  const { language } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const projects = [
    {
      title: { es: 'Sistema de Monitoreo IoT', en: 'IoT Monitoring System' },
      description: {
        es: 'Sistema de monitoreo en tiempo real para sensores industriales usando ESP32 y MQTT con dashboard web interactivo',
        en: 'Real-time monitoring system for industrial sensors using ESP32 and MQTT with interactive web dashboard'
      },
      tech: ['ESP32', 'MQTT', 'Python', 'React'],
      image: '🌐',
      color: 'from-blue-600 to-blue-800',
      status: { es: 'En Producción', en: 'In Production' },
      impact: { es: '15 sensores activos', en: '15 active sensors' }
    },
    {
      title: { es: 'Controlador de Motor BLDC', en: 'BLDC Motor Controller' },
      description: {
        es: 'Controlador de motor sin escobillas con STM32 y algoritmo FOC para control preciso de velocidad y torque',
        en: 'Brushless motor controller with STM32 and FOC algorithm for precise speed and torque control'
      },
      tech: ['STM32', 'C', 'PWM', 'FOC'],
      image: '⚡',
      color: 'from-purple-600 to-purple-800',
      status: { es: 'Finalizado', en: 'Completed' },
      impact: { es: '40% más eficiente', en: '40% more efficient' }
    },
    {
      title: { es: 'Sistema de Automatización', en: 'Home Automation System' },
      description: {
        es: 'Sistema completo de automatización doméstica con integración de múltiples protocolos y control por voz',
        en: 'Complete home automation system with multi-protocol integration and voice control'
      },
      tech: ['Arduino', 'Modbus', 'HTTP', 'MQTT'],
      image: '🏠',
      color: 'from-green-600 to-green-800',
      status: { es: 'En Desarrollo', en: 'In Development' },
      impact: { es: '20+ dispositivos', en: '20+ devices' }
    },
    {
      title: { es: 'Datalogger USB', en: 'USB Datalogger' },
      description: {
        es: 'Registrador de datos de alta velocidad con interfaz USB y almacenamiento en tarjeta SD para análisis posterior',
        en: 'High-speed data logger with USB interface and SD card storage for later analysis'
      },
      tech: ['CH55x', 'SPI', 'USB', 'C'],
      image: '💾',
      color: 'from-orange-600 to-orange-800',
      status: { es: 'Prototipo', en: 'Prototype' },
      impact: { es: '1000 muestras/seg', en: '1000 samples/sec' }
    },
  ]

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlay, projects.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
    setIsAutoPlay(false)
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    )
    setIsAutoPlay(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    )
    setIsAutoPlay(false)
  }

  return (
    <section className="mb-6 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-600 rounded-lg flex items-center justify-center text-white text-2xl shadow-lg">
            🚀
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            {language === 'es' ? 'Proyectos Destacados' : 'Featured Projects'}
          </h2>
        </div>
        <button
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
        >
          {isAutoPlay ? '⏸️ Pausar' : '▶️ Reproducir'}
        </button>
      </div>

      <div className="relative">
        {/* Carousel Container */}
        <div className="overflow-hidden rounded-xl">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div key={index} className="min-w-full">
                <div className={`bg-gradient-to-r ${project.color} rounded-xl p-8 text-white relative overflow-hidden`}>
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)',
                    }}></div>
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="text-7xl drop-shadow-lg">{project.image}</div>
                          <div>
                            <h3 className="text-3xl font-bold mb-2">
                              {project.title[language]}
                            </h3>
                            <div className="flex gap-3">
                              <span className="px-3 py-1 bg-white/30 backdrop-blur-sm rounded-full text-sm font-semibold">
                                {project.status[language]}
                              </span>
                              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                                {project.impact[language]}
                              </span>
                            </div>
                          </div>
                        </div>
                        <p className="text-white/95 mb-6 text-lg leading-relaxed">
                          {project.description[language]}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-white/25 backdrop-blur-sm rounded-lg text-sm font-bold shadow-lg hover:bg-white/35 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/95 dark:bg-gray-800/95 p-3 rounded-full shadow-2xl hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
          aria-label="Previous slide"
        >
          <svg className="w-7 h-7 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/95 dark:bg-gray-800/95 p-3 rounded-full shadow-2xl hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
          aria-label="Next slide"
        >
          <svg className="w-7 h-7 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-6">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-12 bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg'
                  : 'w-3 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Project Counter */}
        <div className="text-center mt-4">
          <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full">
            {language === 'es' ? 'Proyecto' : 'Project'} {currentIndex + 1} / {projects.length}
          </span>
        </div>
      </div>
    </section>
  )
}

export default Carousel
