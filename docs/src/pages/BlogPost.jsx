import { useParams, Link, useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { blogPosts } from '../data/blogPosts'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

const BlogPost = () => {
  const { slug } = useParams()
  const { language } = useLanguage()
  const navigate = useNavigate()
  
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            {language === 'es' ? 'Post no encontrado' : 'Post not found'}
          </p>
          <Link to="/blog" className="text-blue-600 dark:text-blue-400 hover:underline">
            {language === 'es' ? '← Volver al blog' : '← Back to blog'}
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/blog')}
          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-8 group"
        >
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {language === 'es' ? 'Volver al blog' : 'Back to blog'}
        </button>

        {/* Article */}
        <article className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-12 text-white">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                {post.category}
              </span>
              <span className="text-sm text-blue-100">
                {post.readTime}
              </span>
            </div>
            <h1 className="text-4xl font-bold mb-4">
              {post.title[language]}
            </h1>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center font-bold">
                CB
              </div>
              <div>
                <p className="font-medium">{post.author}</p>
                <p className="text-sm text-blue-100">
                  {new Date(post.date).toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-8 py-12">
            <div className="prose prose-lg dark:prose-invert max-w-none
              prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white
              prose-p:text-gray-700 dark:prose-p:text-gray-300
              prose-a:text-blue-600 dark:prose-a:text-blue-400
              prose-strong:text-gray-900 dark:prose-strong:text-white
              prose-code:text-blue-600 dark:prose-code:text-blue-400
              prose-code:bg-gray-100 dark:prose-code:bg-gray-700
              prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
              prose-pre:bg-gray-900 dark:prose-pre:bg-gray-950
              prose-li:text-gray-700 dark:prose-li:text-gray-300
            ">
              <ReactMarkdown
                components={{
                  code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || '')
                    return !inline && match ? (
                      <SyntaxHighlighter
                        style={vscDarkPlus}
                        language={match[1]}
                        PreTag="div"
                        customStyle={{
                          borderRadius: '0.5rem',
                          padding: '1.5rem',
                          fontSize: '0.875rem'
                        }}
                        {...props}
                      >
                        {String(children).replace(/\n$/, '')}
                      </SyntaxHighlighter>
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    )
                  }
                }}
              >
                {post.content[language]}
              </ReactMarkdown>
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                {language === 'es' ? 'Etiquetas' : 'Tags'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share Section */}
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
                {language === 'es' ? 'Compartir artículo' : 'Share article'}
              </h3>
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Twitter
                </button>
                <button className="px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors">
                  LinkedIn
                </button>
                <button className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors">
                  GitHub
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {language === 'es' ? 'Artículos relacionados' : 'Related articles'}
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {blogPosts
              .filter(p => p.id !== post.id)
              .slice(0, 3)
              .map(relatedPost => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow p-4"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {relatedPost.title[language]}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                    {relatedPost.excerpt[language]}
                  </p>
                  <p className="text-xs text-blue-600 dark:text-blue-400 mt-3">
                    {language === 'es' ? 'Leer más →' : 'Read more →'}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPost
