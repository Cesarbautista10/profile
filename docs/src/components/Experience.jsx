import { useLanguage } from '../context/LanguageContext'

const Experience = () => {
  const { t } = useLanguage()

  return (
    <section className="mb-6 bg-gradient-to-br from-slate-800 to-slate-900 dark:from-slate-900 dark:to-black rounded-2xl shadow-2xl p-8 md:p-12">
      {/* Header */}
      <div className="flex items-center gap-4 mb-10">
        <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h2 className="text-4xl font-bold text-white">
          {t('experienceTitle')}
        </h2>
      </div>
      
      {/* Experience Items */}
      <div className="space-y-4">
        {t('highlights').map((highlight, index) => (
          <div 
            key={index} 
            className="flex items-start gap-5 p-5 rounded-xl bg-slate-700/40 dark:bg-slate-800/40 backdrop-blur-sm hover:bg-slate-700/60 dark:hover:bg-slate-800/60 transition-all duration-300 group cursor-pointer border border-slate-600/30 hover:border-blue-500/50"
          >
            {/* Number Badge */}
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 group-hover:shadow-blue-500/50 transition-all duration-300">
                {index + 1}
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1 pt-1">
              <p className="text-slate-200 dark:text-slate-300 leading-relaxed text-base md:text-lg">
                {highlight}
              </p>
            </div>
            
            {/* Arrow indicator */}
            <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Key Achievements Section */}
      <div className="mt-10 pt-10 border-t border-slate-600/50">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="text-3xl">🏆</span>
          {t('language') === 'es' ? 'Logros Destacados' : 'Key Achievements'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="relative overflow-hidden bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-xl p-6 border border-green-500/30 hover:border-green-400/60 transition-all duration-300 group cursor-pointer backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">✅</span>
              </div>
              <div>
                <div className="font-bold text-xl text-white mb-1">
                  {t('language') === 'es' ? '10+ Proyectos IoT' : '10+ IoT Projects'}
                </div>
                <div className="text-sm text-slate-300">
                  {t('language') === 'es' ? 'Implementados en producción' : 'Deployed in production'}
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-500/20 to-indigo-600/20 rounded-xl p-6 border border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 group cursor-pointer backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">⚡</span>
              </div>
              <div>
                <div className="font-bold text-xl text-white mb-1">
                  {t('language') === 'es' ? 'Optimización 40%' : '40% Optimization'}
                </div>
                <div className="text-sm text-slate-300">
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
