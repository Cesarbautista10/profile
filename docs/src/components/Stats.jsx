import { useLanguage } from '../context/LanguageContext'

const Stats = () => {
  const { t } = useLanguage()

  const stats = [
    { 
      value: '58', 
      label: t('followers'),
      icon: '👥',
      color: 'from-blue-600 to-blue-800',
      bgColor: 'from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20',
      borderColor: 'border-blue-200 dark:border-blue-700'
    },
    { 
      value: '60', 
      label: t('following'),
      icon: '🤝',
      color: 'from-purple-600 to-purple-800',
      bgColor: 'from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20',
      borderColor: 'border-purple-200 dark:border-purple-700'
    },
    { 
      value: '10+', 
      label: t('projects'),
      icon: '🚀',
      color: 'from-green-600 to-green-800',
      bgColor: 'from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20',
      borderColor: 'border-green-200 dark:border-green-700'
    },
    { 
      value: '5+', 
      label: t('yearsExp'),
      icon: '⭐',
      color: 'from-orange-600 to-orange-800',
      bgColor: 'from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20',
      borderColor: 'border-orange-200 dark:border-orange-700'
    },
  ]

  return (
    <section className="mb-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center text-white text-2xl shadow-lg">
          📊
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          {t('statsTitle')}
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${stat.bgColor} rounded-xl p-6 border ${stat.borderColor} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group`}
          >
            <div className="text-center">
              <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Impact Metrics */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-l-4 border-blue-600">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                {t('language') === 'es' ? 'Código Escrito' : 'Code Written'}
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">50K+ líneas</div>
            </div>
            <div className="text-4xl">💻</div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-l-4 border-purple-600">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                {t('language') === 'es' ? 'Dispositivos Controlados' : 'Devices Controlled'}
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">100+ unidades</div>
            </div>
            <div className="text-4xl">🔌</div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-l-4 border-green-600">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                {t('language') === 'es' ? 'Horas de Desarrollo' : 'Development Hours'}
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">5000+ hrs</div>
            </div>
            <div className="text-4xl">⏱️</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats
