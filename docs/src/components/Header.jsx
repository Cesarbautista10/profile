import { useLanguage } from '../context/LanguageContext'

const Header = () => {
  const { t } = useLanguage()

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden mb-6">
      {/* Banner with gradient and pattern */}
      <div className="h-56 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)',
          }}></div>
        </div>
        {/* Animated particles effect */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-20 right-20 w-3 h-3 bg-blue-200 rounded-full animate-pulse delay-100"></div>
          <div className="absolute bottom-10 left-1/4 w-2 h-2 bg-purple-200 rounded-full animate-pulse delay-200"></div>
          <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-white rounded-full animate-pulse delay-300"></div>
        </div>
      </div>

      <div className="px-6 pb-6">
        {/* Profile Photo */}
        <div className="relative -mt-20 mb-4">
          <div className="inline-block relative">
            <img
              src="/profile/img/1745084366008.jpeg"
              alt="Cesar Bautista"
              className="w-40 h-40 rounded-full border-4 border-white dark:border-gray-800 shadow-2xl object-cover"
            />
            <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 border-4 border-white dark:border-gray-800 rounded-full"></div>
          </div>
        </div>

        {/* Name and Title */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-3">
            Cesar Bautista
            <span className="text-blue-600 dark:text-blue-400">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
            </span>
          </h1>
          <p className="text-2xl text-gray-700 dark:text-gray-300 font-semibold mb-3">
            {t('title')}
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
            {t('description')}
          </p>
        </div>

        {/* Key Highlights - NEW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg p-4 border border-blue-200 dark:border-blue-700">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white text-2xl">
                ⚡
              </div>
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Especialidad</div>
                <div className="font-bold text-gray-900 dark:text-white">IoT & Embedded</div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg p-4 border border-purple-200 dark:border-purple-700">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-white text-2xl">
                🔧
              </div>
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Hardware</div>
                <div className="font-bold text-gray-900 dark:text-white">ESP32 | STM32</div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg p-4 border border-green-200 dark:border-green-700">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-white text-2xl">
                💻
              </div>
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Lenguajes</div>
                <div className="font-bold text-gray-900 dark:text-white">C | Python</div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
            <a href="https://www.linkedin.com/in/cesar-bautista-653513356/" target="_blank" className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-medium text-sm flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"/></svg>
              LinkedIn
            </a>
            <a href="https://github.com/Cesarbautista10" target="_blank" className="px-4 py-2 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-full hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors font-medium text-sm">GitHub</a>
            <a href="https://youtube.com/@cesarbautista5183" target="_blank" className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium text-sm">YouTube</a>
            <a href="https://www.instagram.com/mrmaster394" target="_blank" className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium text-sm">Instagram</a>
            <a href="https://wiki.uelectronics.com/" target="_blank" className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium text-sm">Wiki</a>
        </div>
      </div>
    </div>
  )
}

export default Header
