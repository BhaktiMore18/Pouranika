import { useState, useEffect, useCallback } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { searchBooks } from "../services/bookService";
import BookCard from "../components/BookCard";

export default function Explore() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [searchParams] = useSearchParams();

  const handleSearch = useCallback(async (e, searchTerm = null) => {
    if (e && e.preventDefault) e.preventDefault();
    const searchQuery = searchTerm || query;
    if (!searchQuery.trim()) return;

    setLoading(true);
    setSearched(true);
    const results = await searchBooks(searchQuery);
    setBooks(results);
    setLoading(false);
  }, [query]);

  // Handle genre filtering from URL params
  useEffect(() => {
    const genreParam = searchParams.get("genre");
    if (genreParam) {
      setQuery(genreParam);
      handleSearch({ preventDefault: () => {} }, genreParam);
    }
  }, [searchParams, handleSearch]);

  const popularSearches = [
    "Harry Potter",
    "Fiction",
    "Self Help",
    "Mystery",
    "Romance",
    "Science Fiction",
    "Biography",
    "History",
    "Philosophy",
    "Psychology",
    "Business",
    "Technology",
  ];

  const handleQuickSearch = (term) => {
    setQuery(term);
    handleSearch({ preventDefault: () => {} }, term);
  };

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="page-hero section-spacing-small">
        <div className="container-modern text-center">
          <h1
            className="heading-primary mb-6 floating-animation"
            style={{ color: "var(--primary-700)" }}
          >
            🔍 Explore Books
          </h1>
          <p
            className="text-body-large max-w-3xl mx-auto mb-12"
            style={{ color: "var(--text-secondary)" }}
          >
            Search through millions of books and discover your next favorite
            read. Use our advanced search to find exactly what you're looking
            for.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="pb-16">
        <div className="container-narrow">
          <div className="glass-effect-strong card-modern border-medium">
            <form onSubmit={handleSearch} className="w-full max-w-2xl mx-auto">
              <div className="relative w-full">
                
                <input
                  className="input-modern w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  placeholder="Search for Books,Authors..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-2xl pointer-events-none">
                  🔍
                </span>
              </div>
              <button
                type="submit"
                className={`mt-4 button-primary w-full ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-3">
                    <div className="spinner" />
                    Searching through millions of books...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-3">
                    <span className="text-xl">📚</span>
                    Search Books
                  </span>
                )}
              </button>
            </form>

            {/* Quick Filters */}
            <div className="popular-searches-section">
              <h3
                className="font-semibold mb-6 text-center"
                style={{ color: "var(--text-primary)" }}
              >
                Popular Searches
              </h3>
              <div className="search-button-grid">
                {popularSearches.map((term) => (
                  <button
                    key={term}
                    onClick={() => handleQuickSearch(term)}
                    className="search-button"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="pb-16">
        <div className="container-modern">
          {/* Loading State */}
          {loading && (
            <div className="text-center py-16">
              <div className="glass-effect card-small max-w-md mx-auto border-subtle">
                <div className="pulse-animation text-6xl mb-6">📚</div>
                <h3
                  className="heading-tertiary mb-4"
                  style={{ color: "var(--text-primary)" }}
                >
                  Searching Books
                </h3>
                <p
                  className="text-body"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Finding the perfect books for you...
                </p>
                <div className="mt-6">
                  <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-400 h-2 rounded-full animate-pulse w-3/4"></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* No Results */}
          {searched && !loading && books.length === 0 && (
            <div className="text-center py-16">
              <div className="glass-effect card-modern max-w-lg mx-auto border-subtle">
                <div className="text-6xl mb-6">😔</div>
                <h3
                  className="heading-tertiary mb-4"
                  style={{ color: "var(--text-primary)" }}
                >
                  No Books Found
                </h3>
                <p
                  className="text-body mb-6"
                  style={{ color: "var(--text-secondary)" }}
                >
                  We couldn't find any books matching your search. Try different
                  keywords or browse our popular genres.
                </p>
                <div className="space-y-4">
                  <p className="text-small text-red-300 glass-effect p-3 rounded-xl border border-red-400 border-opacity-30">
                    💡 Make sure your Google Books API key is properly
                    configured
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      onClick={() => {
                        setQuery("");
                        setSearched(false);
                        setBooks([]);
                      }}
                      className="button-secondary"
                    >
                      Clear Search
                    </button>
                    <Link
                      to="/genres"
                      className="button-primary no-underline text-center"
                    >
                      Browse Genres
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Results Grid */}
          {books.length > 0 && !loading && (
            <div>
              <div className="text-center mb-12">
                <h2
                  className="heading-secondary mb-4"
                  style={{ color: "var(--primary-700)" }}
                >
                  Found {books.length} Amazing Books! 📚
                </h2>
                <p
                  className="text-body"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {query && `Results for "${query}"`}
                </p>
              </div>

              <div className="grid-modern grid-4">
                {books.map((book, index) => (
                  <div
                    key={book.id}
                    className="slide-in-animation"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <BookCard book={book} />
                  </div>
                ))}
              </div>

              {/* Load More Button (Future Enhancement) */}
              <div className="text-center mt-16">
                <div className="glass-effect card-small max-w-md mx-auto border-subtle">
                  <p className="text-body text-gray-300 mb-4">
                    Want to see more results?
                  </p>
                  <p className="text-small text-gray-400">
                    📈 Pagination feature coming soon!
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Welcome State */}
          {!searched && !loading && (
            <div className="text-center py-16">
              <div className="glass-effect card-modern max-w-2xl mx-auto border-subtle">
                <div className="text-8xl mb-8 floating-animation">📖</div>
                <h3 className="heading-secondary text-white mb-6">
                  Start Your Book Discovery Journey
                </h3>
                <p className="text-body-large text-gray-300 mb-8 max-w-lg mx-auto">
                  Enter a book title, author name, or topic in the search box
                  above to begin exploring our vast collection.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { icon: "📚", label: "40M+ Books" },
                    { icon: "🌍", label: "100+ Languages" },
                    { icon: "⭐", label: "Rated & Reviewed" },
                    { icon: "🔗", label: "Preview Links" },
                  ].map((feature, index) => (
                    <div key={index} className="text-center p-4">
                      <div className="text-3xl mb-2">{feature.icon}</div>
                      <div className="text-small text-gray-300">
                        {feature.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}