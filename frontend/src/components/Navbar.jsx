import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar-modern">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <div className="text-2xl">📚</div>
          <div>
            <h1 className="text-xl font-bold" style={{ color: 'var(--primary-700)' }}>Pouranik</h1>
            <p className="text-xs" style={{ color: 'var(--text-muted)', marginTop: '-2px' }}>Book Discovery</p>
          </div>
        </Link>
        
        {/* Navigation Links */}
        <div className="navbar-menu">
          {[
            { path: '/', label: 'Home', icon: '🏠' },
            { path: '/explore', label: 'Explore', icon: '🔍' },
            { path: '/genres', label: 'Genres', icon: '📑' }
          ].map(({ path, label, icon }) => (
            <Link 
              key={path}
              to={path} 
              className={`navbar-link ${isActive(path) ? 'active' : ''}`}
            >
              <span className="text-base">{icon}</span>
              <span>{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
