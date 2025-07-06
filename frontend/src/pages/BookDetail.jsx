import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .then(res => res.json())
      .then(data => {
        setBook(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex-center">
        <div className="glass-effect card-modern max-w-md border-subtle text-center">
          <div className="pulse-animation text-6xl mb-6">📚</div>
          <h3 className="heading-tertiary text-white mb-4">Loading Book Details</h3>
          <p className="text-body text-gray-300">
            Fetching comprehensive information about this book...
          </p>
          <div className="mt-6">
            <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-400 h-2 rounded-full animate-pulse w-3/4"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!book || book.error) {
    return (
      <div className="min-h-screen flex-center">
        <div className="glass-effect card-modern max-w-lg border-subtle text-center">
          <div className="text-6xl mb-6">😔</div>
          <h2 className="heading-secondary text-white mb-4">Book Not Found</h2>
          <p className="text-body text-gray-300 mb-8">
            Sorry, we couldn't find the book you're looking for. It might have been removed or the link is incorrect.
          </p>
          <div className="space-y-4">
            <Link 
              to="/explore" 
              className="button-primary inline-flex items-center gap-3 no-underline"
            >
              <span className="text-xl">🔍</span>
              Explore Other Books
            </Link>
            <Link 
              to="/genres" 
              className="button-secondary inline-flex items-center gap-3 no-underline"
            >
              <span className="text-xl">📑</span>
              Browse Genres
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const info = book.volumeInfo;
  const imageUrl = info.imageLinks?.large || info.imageLinks?.medium || info.imageLinks?.thumbnail;

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <section className="py-8">
        <div className="container-modern">
          <Link 
            to="/explore" 
            className="inline-flex items-center gap-3 text-white hover:text-yellow-300 transition-colors duration-300 glass-effect px-4 py-2 rounded-2xl border border-white border-opacity-20 no-underline"
          >
            <span className="text-lg">←</span>
            Back to Explore
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-16">
        <div className="container-modern">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Book Cover Column */}
            <div className="lg:col-span-2">
              <div className="glass-effect card-modern book-card-hover border-medium sticky top-8">
                {/* Book Image */}
                <div className="mb-8">
                  {imageUrl ? (
                    <img
                      className="w-full max-w-sm mx-auto rounded-3xl shadow-2xl border-4 border-white border-opacity-20"
                      src={imageUrl.replace('http:', 'https:')}
                      alt={info.title}
                    />
                  ) : (
                    <div className="w-full max-w-sm mx-auto h-96 bg-gradient-to-br from-purple-400 via-blue-400 to-cyan-400 rounded-3xl flex-center border-4 border-white border-opacity-20">
                      <span className="text-8xl filter drop-shadow-lg">📚</span>
                    </div>
                  )}
                </div>
                
                {/* Quick Info */}
                <div className="space-y-4 mb-8">
                  {info.averageRating && (
                    <div className="glass-effect p-4 rounded-2xl text-center border border-white border-opacity-20">
                      <div className="flex-center gap-2 mb-2">
                        <span className="text-yellow-400 text-2xl">⭐</span>
                        <span className="text-white text-xl font-bold">{info.averageRating}</span>
                      </div>
                      {info.ratingsCount && (
                        <p className="text-small text-gray-300">
                          Based on {info.ratingsCount.toLocaleString()} reviews
                        </p>
                      )}
                    </div>
                  )}
                  
                  <div className="grid grid-cols-2 gap-3 text-center">
                    {[
                      { icon: '📅', label: 'Published', value: info.publishedDate ? new Date(info.publishedDate).getFullYear() : 'Unknown' },
                      { icon: '📄', label: 'Pages', value: info.pageCount ? `${info.pageCount}` : 'Unknown' },
                      { icon: '🌐', label: 'Language', value: info.language ? info.language.toUpperCase() : 'Unknown' },
                      { icon: '📚', label: 'Type', value: info.printType || 'Book' }
                    ].map((item, index) => (
                      <div key={index} className="glass-effect p-3 rounded-xl border border-white border-opacity-20">
                        <div className="text-lg mb-1">{item.icon}</div>
                        <div className="text-xs text-gray-400 mb-1">{item.label}</div>
                        <div className="text-white text-sm font-medium">{item.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="space-y-3">
                  {info.previewLink && (
                    <a 
                      href={info.previewLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="button-primary w-full inline-flex items-center justify-center gap-3 no-underline"
                    >
                      <span className="text-xl">📖</span>
                      Preview Book
                    </a>
                  )}
                  {info.infoLink && (
                    <a 
                      href={info.infoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="button-secondary w-full inline-flex items-center justify-center gap-3 no-underline"
                    >
                      <span className="text-xl">🛒</span>
                      View on Google Books
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Book Details Column */}
            <div className="lg:col-span-3">
              <div className="space-y-8">
                {/* Title and Author */}
                <header className="glass-effect card-modern border-medium">
                  <h1 className="heading-primary text-white mb-4 leading-tight">
                    {info.title}
                  </h1>
                  {info.subtitle && (
                    <h2 className="text-2xl text-gray-300 mb-6 font-medium">
                      {info.subtitle}
                    </h2>
                  )}
                  {info.authors && (
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-gray-400">by</span>
                      <div className="flex flex-wrap gap-2">
                        {info.authors.map((author, index) => (
                          <span key={index} className="text-yellow-300 font-semibold text-lg">
                            {author}{index < info.authors.length - 1 ? ', ' : ''}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Categories */}
                  {info.categories && (
                    <div className="flex flex-wrap gap-2">
                      {info.categories.slice(0, 3).map((category, index) => (
                        <Link
                          key={index}
                          to={`/explore?genre=${encodeURIComponent(category)}`}
                          className="glass-effect px-4 py-2 rounded-2xl text-white text-sm border border-white border-opacity-30 hover:border-opacity-50 transition-colors duration-300 no-underline"
                        >
                          {category}
                        </Link>
                      ))}
                    </div>
                  )}
                </header>

                {/* Publisher Info */}
                {info.publisher && (
                  <section className="glass-effect card-small border-subtle">
                    <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <span className="text-lg">🏢</span>
                      Publisher Information
                    </h3>
                    <p className="text-body text-gray-300">{info.publisher}</p>
                    {info.publishedDate && (
                      <p className="text-small text-gray-400 mt-2">
                        Published on {new Date(info.publishedDate).toLocaleDateString()}
                      </p>
                    )}
                  </section>
                )}

                {/* Description */}
                {info.description && (
                  <section className="glass-effect card-modern border-medium">
                    <h3 className="heading-tertiary text-white mb-6 flex items-center gap-3">
                      <span className="text-2xl">📝</span>
                      About This Book
                    </h3>
                    <div 
                      className="text-body text-gray-300 leading-relaxed space-y-4"
                      dangerouslySetInnerHTML={{ 
                        __html: info.description
                          .replace(/<br\s*\/?>/gi, '<br/>')
                          .replace(/<p>/gi, '<p class="mb-4">')
                          .replace(/<strong>/gi, '<strong class="text-yellow-300 font-semibold">')
                          .replace(/<em>/gi, '<em class="text-gray-200">')
                      }}
                    />
                  </section>
                )}

                {/* Additional Details */}
                <section className="glass-effect card-modern border-medium">
                  <h3 className="heading-tertiary text-white mb-6 flex items-center gap-3">
                    <span className="text-2xl">📊</span>
                    Book Details
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      { label: 'ISBN-10', value: info.industryIdentifiers?.find(id => id.type === 'ISBN_10')?.identifier },
                      { label: 'ISBN-13', value: info.industryIdentifiers?.find(id => id.type === 'ISBN_13')?.identifier },
                      { label: 'Page Count', value: info.pageCount ? `${info.pageCount} pages` : null },
                      { label: 'Print Type', value: info.printType },
                      { label: 'Maturity Rating', value: info.maturityRating },
                      { label: 'Content Version', value: info.contentVersion }
                    ].filter(item => item.value).map((item, index) => (
                      <div key={index} className="flex justify-between items-center py-3 border-b border-white border-opacity-10 last:border-b-0">
                        <span className="text-gray-400 font-medium">{item.label}:</span>
                        <span className="text-white">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Coming Soon Features */}
                <section className="glass-effect card-modern border-gradient">
                  <h3 className="heading-tertiary text-white mb-6 flex items-center gap-3">
                    <span className="text-2xl">🌟</span>
                    Coming Soon
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        icon: '📝',
                        title: 'User Reviews & Ratings',
                        description: 'Read and write detailed reviews from fellow readers'
                      },
                      {
                        icon: '📚',
                        title: 'Personal Library',
                        description: 'Add books to your reading lists and track progress'
                      },
                      {
                        icon: '🎯',
                        title: 'Smart Recommendations',
                        description: 'Get personalized book suggestions based on your reading history'
                      },
                      {
                        icon: '👥',
                        title: 'Book Clubs & Community',
                        description: 'Join discussions and connect with other book lovers'
                      }
                    ].map((feature, index) => (
                      <div key={index} className="glass-effect p-6 rounded-2xl border border-white border-opacity-20">
                        <div className="text-3xl mb-3">{feature.icon}</div>
                        <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                        <p className="text-small text-gray-300 leading-relaxed">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
