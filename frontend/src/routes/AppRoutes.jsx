import BookDetail from '../pages/BookDetail';
import Genres from '../pages/Genres';
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import Explore from '../pages/Explore';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/book/:id" element={<BookDetail />} />
      <Route path="/genres" element={<Genres />} />
      <Route path="/explore" element={<Explore />} />
    </Routes>
  );
}