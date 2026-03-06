import { useLanguage } from '../context/LanguageContext'

const Experience = () => {
  const { t } = useLanguage()

  return (
    <section className="mb-6 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white text-2xl shadow-lg">
          💼
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          {t('experienceTitle')}
        </h2>
      </div>
      
      <div className="space-y-6">
        {t('highlights').map((highlight, index) => (
          <div 
            key={index} 
            className="flex gap-4 group hover:bg-blue-50 dark:hover:bg-gray-700/50 p-4 rounded-lg transition-all duration-300 border border-transparent hover:border-blue-200 dark:hover:border-blue-700"
          >
            <div className="flex-shrink-0 mt-1">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                {index + 1}
              </div>
            </div>
            <div className="flex-1">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                {highlight}
              </p>
            </div>
            <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Key Achievements Section */}
      <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <span className="text-2xl">🏆</span>
          {t('language') === 'es' ? 'Logros Destacados' : 'Key Achievements'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-4 border border-green-200 dark:border-green-700">
            <div className="flex items-start gap-3">
              <span className="text-3xl">✅</span>
              <div>
                <div className="font-bold text-gray-900 dark:text-white">
                  {t('language') === 'es' ? '10+ Proyectos IoT' : '10+ IoT Projects'}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {t('language') === 'es' ? 'Implementados en producción' : 'Deployed in production'}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-700">
            <div className="flex items-start gap-3">
              <span className="text-3xl">⚡</span>
              <div>
                <div className="font-bold text-gray-900 dark:text-white">
                  {t('language') === 'es' ? 'Optimización 40%' : '40% Optimization'}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {t('language') === 'es' ? 'Reducción en consumo energético' : 'Energy consumption reduction'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
