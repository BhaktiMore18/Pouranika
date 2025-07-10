import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="page-hero section-padding-lg">
        <div className="container-lg text-center">
          <div className="floating-animation space-y-6 mb-12">
            <h1 className="text-6xl md:text-7xl font-bold mb-6" style={{ color: 'var(--primary-700)' }}>
              Welcome to <span style={{ color: 'var(--accent-orange)' }}>Pouranik</span>
            </h1>
            <p className="text-xl max-w-7xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Discover amazing books, build lasting reading habits, and join a passionate community of book lovers. 
              Your next great read is just a search away.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/explore" 
              className="button-primary inline-flex items-center gap-3 no-underline px-8 py-4 text-lg min-w-[220px] justify-center"
            >
              <span className="text-xl">🚀</span>
              <span>Start Exploring</span>
            </Link>
            <Link 
              to="/genres" 
              className="button-secondary inline-flex items-center gap-3 no-underline text-lg min-w-[220px] justify-center"
            >
              <span className="text-xl">📚</span>
              <span>Browse Genres</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-lg">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--primary-700)' }}>Why Choose Pouranik?</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              We've designed the perfect platform for book discovery and reading inspiration.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="card-modern text-center book-card-hover fade-in">
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary-700)' }}>Smart Search</h3>
              <p style={{ color: 'var(--text-secondary)' }} className="leading-relaxed">
                Search through millions of books using our powerful Google Books API integration. Find exactly what you're looking for with intelligent filters and recommendations.
              </p>
            </div>
            <div className="card-modern text-center book-card-hover fade-in">
              <div className="text-6xl mb-6">📑</div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary-700)' }}>Rich Categories</h3>
              <p style={{ color: 'var(--text-secondary)' }} className="leading-relaxed">
                Explore books by genres, topics, and themes. Discover new territories in literature and expand your reading horizons with curated collections.
              </p>
            </div>
            <div className="card-modern text-center book-card-hover fade-in">
              <div className="text-6xl mb-6">💫</div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary-700)' }}>Get Inspired</h3>
              <p style={{ color: 'var(--text-secondary)' }} className="leading-relaxed">
                Find detailed book information, ratings, and previews to help you make the perfect reading choice every single time you browse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding-sm">
        <div className="container-md">
          <div className="card-modern text-center">
            <h3 className="text-2xl font-semibold mb-8" style={{ color: 'var(--primary-700)' }}>
              Powered by Google Books
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2" style={{ color: 'var(--accent-orange)' }}>40M+</div>
                <div className="text-lg" style={{ color: 'var(--text-secondary)' }}>Books Available</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2" style={{ color: 'var(--accent-orange)' }}>100+</div>
                <div className="text-lg" style={{ color: 'var(--text-secondary)' }}>Languages</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2" style={{ color: 'var(--accent-orange)' }}>∞</div>
                <div className="text-lg" style={{ color: 'var(--text-secondary)' }}>Possibilities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding">
        <div className="container-md">
          <div className="card-modern text-center" style={{ background: 'linear-gradient(135deg, var(--primary-50) 0%, var(--primary-100) 100%)', border: '1px solid var(--primary-200)' }}>
            <div className="text-6xl mb-8">🌟</div>
            <h3 className="text-3xl font-bold mb-6" style={{ color: 'var(--primary-800)' }}>Ready to Start Your Reading Journey?</h3>
            <p className="text-xl mb-10 max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--primary-700)' }}>
              Join thousands of readers who have discovered their next favorite book through Pouranik. Your perfect book is waiting for you.
            </p>
            <Link 
              to="/explore" 
              className="button-primary inline-flex items-center gap-3 no-underline px-10 py-5 text-xl"
            >
              <span className="text-2xl">🎯</span>
              <span>Find Your Next Book</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
