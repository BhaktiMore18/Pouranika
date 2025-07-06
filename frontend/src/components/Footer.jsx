export default function Footer() {
  return (
    <footer className="footer-modern">
      <div className="footer-container">
        <div className="footer-grid">
          {/* About Section */}
          <div className="footer-section">
            <div className="flex items-center space-x-3 mb-4">
              <div className="text-2xl">📚</div>
              <div>
                <h3 className="footer-title">Pouranik</h3>
                <p className="text-sm" style={{ color: 'var(--secondary-400)' }}>Book Discovery Platform</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Discover your next favorite book with our comprehensive collection and personalized recommendations.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <div>
              <a href="/" className="footer-link">Home</a>
              <a href="/explore" className="footer-link">Explore Books</a>
              <a href="/genres" className="footer-link">Browse Genres</a>
              <a href="/about" className="footer-link">About Us</a>
            </div>
          </div>

          {/* Categories */}
          <div className="footer-section">
            <h4 className="footer-title">Popular Categories</h4>
            <div>
              <a href="/genres?category=fiction" className="footer-link">Fiction</a>
              <a href="/genres?category=non-fiction" className="footer-link">Non-Fiction</a>
              <a href="/genres?category=mystery" className="footer-link">Mystery & Thriller</a>
              <a href="/genres?category=romance" className="footer-link">Romance</a>
              <a href="/genres?category=sci-fi" className="footer-link">Science Fiction</a>
            </div>
          </div>

          {/* Connect */}
          <div className="footer-section">
            <h4 className="footer-title">Connect With Us</h4>
            <div className="footer-social">
              <a href="#" className="footer-link" style={{ color: 'var(--accent-blue)' }}>📘</a>
              <a href="#" className="footer-link" style={{ color: '#E4405F' }}>📸</a>
              <a href="#" className="footer-link" style={{ color: 'var(--accent-blue)' }}>🐦</a>
              <a href="#" className="footer-link" style={{ color: 'var(--primary-400)' }}>�</a>
            </div>
            <p className="text-sm leading-relaxed">
              Follow us for book recommendations, reading tips, and literary discussions.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Pouranik. All rights reserved. | Built with ❤️ for book lovers everywhere</p>
        </div>
      </div>
    </footer>
  );
}
