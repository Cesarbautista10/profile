import { useLanguage } from '../context/LanguageContext'

const TechStack = () => {
  const { t } = useLanguage()
  
  const technologies = [
    { name: 'C', icon: '⚙️' },
    { name: 'Python', icon: '🐍' },
    { name: 'Assembly', icon: '💾' },
    { name: 'ESP32', icon: '📡' },
    { name: 'STM32', icon: '🔧' },
    { name: 'Arduino', icon: '🤖' },
    { name: 'MQTT', icon: '📨' },
    { name: 'I2C', icon: '🔌' },
    { name: 'SPI', icon: '🔗' },
    { name: 'UART', icon: '📞' },
    { name: 'Git', icon: '📚' },
    { name: 'Linux', icon: '🐧' },
  ]

  return (
    <section className="mb-6 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
        {t('techTitle')}
      </h2>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, idx) => (
          <div key={idx} className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full border border-gray-200 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm font-medium">
            {tech.icon} {tech.name}
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechStack
