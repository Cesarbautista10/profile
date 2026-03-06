import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { language, changeLanguage, t } = useLanguage()
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg sticky top-0 z-50 border-b-2 border-blue-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Nombre */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              CB
            </Link>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 text-lg font-medium transition-colors ${
                isActive('/') 
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-md' 
                  : 'text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              {t('profile')}
            </Link>
            <Link
              to="/microcontrollers"
              className={`px-3 py-2 text-lg font-medium transition-colors ${
                isActive('/microcontrollers') 
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-md' 
                  : 'text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              {t('microcontrollers')}
            </Link>
            <Link
              to="/interfaces"
              className={`px-3 py-2 text-lg font-medium transition-colors ${
                isActive('/interfaces') 
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-md' 
                  : 'text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              {t('interfaces')}
            </Link>
            <Link
              to="/blog"
              className={`px-3 py-2 text-lg font-medium transition-colors ${
                isActive('/blog') || location.pathname.startsWith('/blog/') 
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-md' 
                  : 'text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              {t('blog')}
            </Link>
            
            {/* Language Selector */}
            <div className="flex items-center gap-2 ml-4">
              <button
                onClick={() => changeLanguage('es')}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all ${
                  language === 'es'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                <span className="text-lg leading-none">🇲🇽</span>
                <span>ES</span>
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all ${
                  language === 'en'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                <span className="text-lg leading-none">🇺🇸</span>
                <span>EN</span>
              </button>
            </div>
            
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>

          {/* Botones móvil */}
          <div className="md:hidden flex items-center gap-2">
            {/* Language Selector Mobile */}
            <button
              onClick={() => changeLanguage(language === 'es' ? 'en' : 'es')}
              className="px-3 py-2 text-lg rounded-md bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              {language === 'es' ? '🇺🇸' : '🇲🇽'}
            </button>
            
            {/* Dark Mode Toggle Mobile */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700"
              aria-label="Toggle dark mode"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/') 
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
                  : 'text-gray-900 dark:text-white hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {t('profile')}
            </Link>
            <Link
              to="/microcontrollers"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/microcontrollers') 
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
                  : 'text-gray-900 dark:text-white hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {t('microcontrollers')}
            </Link>
            <Link
              to="/interfaces"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/interfaces') 
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
                  : 'text-gray-900 dark:text-white hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {t('interfaces')}
            </Link>
            <Link
              to="/blog"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/blog') || location.pathname.startsWith('/blog/') 
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
                  : 'text-gray-900 dark:text-white hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {t('blog')}
            </Link>
            
            {/* Language Toggle Mobile */}
            <div className="px-3 py-2">
              <button
                onClick={() => changeLanguage(language === 'es' ? 'en' : 'es')}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
              >
                {language === 'es' ? '�🇸 English' : '🇲🇽 Español'}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
