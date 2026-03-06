import { useLanguage } from '../context/LanguageContext'

const Footer = () => {
  const { t } = useLanguage()
  
  return (
    <footer className="text-center py-6 mt-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
        &copy; 2026 Cesar Bautista • {t('footerText')}
      </p>
      <p className="text-xs text-gray-400 dark:text-gray-500">{t('updated')}</p>
    </footer>
  )
}

export default Footer
