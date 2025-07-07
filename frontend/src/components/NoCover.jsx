import { Link } from "react-router-dom";
import cover from '../assets/cover.png'

function NoCover({ setQuery, setSearched, setBooks }) {
  return (
    <div className="text-center py-16">
      <div className="glass-effect card-modern max-w-lg mx-auto border-subtle">
        <div>
            <img src={cover} alt="noCover" />
        </div>
        <div className="space-y-4">
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
  );
}

export default NoCover;
