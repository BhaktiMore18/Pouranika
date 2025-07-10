import { Link } from "react-router-dom";
import cover from "../assets/cover.png";

export default function BookCard({ book }) {
  const info = book.volumeInfo;
  const imageUrl =
    info.imageLinks?.thumbnail || info.imageLinks?.smallThumbnail;
  return (
    <Link to={`/book/${book.id}`} className="block no-underline">
      <article className="glass-effect book-card-hover border-subtle group h-full flex flex-col overflow-hidden">
        {/* Book Cover Section */}
        <div className="relative overflow-hidden h-64">
          {imageUrl ? (
            <img
              src={imageUrl.replace("http:", "https:")}
              alt={info.title}
              className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="bg-gradient-to-br from-purple-400 via-blue-400 to-cyan-400 flex items-center justify-center">
              <img
                src={cover}
                alt={info.title}
                className="w-full object-cover group-hover:scale-110 transition-transform duration-500 max-w-sm"
              />
            </div>
          )}

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>

          {/* Rating Badge */}
          {info.averageRating && (
            <div className="absolute top-4 right-4 glass-effect px-3 py-1 rounded-2xl border border-white border-opacity-30">
              <div className="flex items-center gap-1">
                <span className="text-yellow-400 text-sm">⭐</span>
                <span className="text-white text-sm font-semibold">
                  {info.averageRating}
                </span>
              </div>
            </div>
          )}

          {/* Category Badge */}
          {info.categories && (
            <div className="absolute top-4 left-4">
              <span className="glass-effect px-3 py-1 rounded-2xl text-white text-xs font-medium border border-white border-opacity-30">
                {info.categories[0]}
              </span>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-6 flex-1 flex flex-direction-column">
          {/* Title and Author */}
          <div className="mb-4 flex-1">
            <h3 className="font-bold text-white text-lg line-clamp-2 mb-2 group-hover:text-yellow-300 transition-colors duration-300">
              {info.title}
            </h3>
            {info.authors && (
              <p className="text-gray-300 text-sm mb-3">
                by {info.authors.slice(0, 2).join(", ")}
                {info.authors.length > 2 && " & others"}
              </p>
            )}

            {/* Description Preview */}
            {info.description && (
              <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed">
                {info.description.replace(/<[^>]*>/g, "").substring(0, 120)}...
              </p>
            )}
          </div>

          {/* Metadata Footer */}
          <div className="space-y-3 pt-4 border-t border-white border-opacity-10">
            {/* Publication Info */}
            <div className="flex items-center justify-between text-xs">
              {info.publishedDate && (
                <span className="text-gray-400 flex items-center gap-1">
                  <span>📅</span>
                  {new Date(info.publishedDate).getFullYear()}
                </span>
              )}
              {info.pageCount && (
                <span className="text-gray-400 flex items-center gap-1">
                  <span>📄</span>
                  {info.pageCount}p
                </span>
              )}
            </div>

            {/* Rating Count and Language */}
            <div className="flex items-center justify-between text-xs">
              {info.ratingsCount && (
                <span className="text-gray-400">
                  {info.ratingsCount} reviews
                </span>
              )}
              {info.language && (
                <span className="text-gray-400 uppercase">{info.language}</span>
              )}
            </div>

            {/* Action Hint */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="glass-effect px-4 py-2 rounded-xl text-center border border-white border-opacity-30">
                <span className="text-white text-sm font-medium flex items-center justify-center gap-2">
                  <span>📖</span>
                  View Details
                </span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
