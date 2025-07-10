import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTopButton from "./components/_global/ScrollToTop";
import "./App.css";

function App() {
  return (
    <div className="app-gradient">
      <Navbar />
      <main className="main-content">
        <div className="page-wrapper">
          <AppRoutes />
        </div>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
