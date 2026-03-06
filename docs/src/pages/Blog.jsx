import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { blogPosts } from '../data/blogPosts'

const Blog = () => {
  const { language } = useLanguage()

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {language === 'es' ? 'Blog Técnico' : 'Technical Blog'}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {language === 'es' 
              ? 'Actualizaciones, tutoriales y artículos sobre sistemas embebidos y IoT'
              : 'Updates, tutorials and articles about embedded systems and IoT'}
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              {/* Post Header */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {post.readTime}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Link to={`/blog/${post.slug}`}>
                    {post.title[language]}
                  </Link>
                </h2>

                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt[language]}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      CB
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {post.author}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {new Date(post.date).toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                  
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-sm flex items-center gap-1"
                  >
                    {language === 'es' ? 'Leer más' : 'Read more'}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Section (Optional) */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-xl p-8 text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              {language === 'es' ? '¿Quieres más contenido?' : 'Want more content?'}
            </h3>
            <p className="mb-6 text-blue-100">
              {language === 'es' 
                ? 'Sígueme en GitHub y LinkedIn para actualizaciones semanales sobre sistemas embebidos'
                : 'Follow me on GitHub and LinkedIn for weekly updates on embedded systems'}
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="https://github.com/Cesarbautista10"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/cesar-bautista"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
