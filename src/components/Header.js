import React, { useState } from 'react';
import './Header.scss';
import logo from '../assets/logo.png';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="HappinessPlan Logo" />
      </div>

      <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
        <Link to="/" className={`nav-btn${location.pathname === '/' ? ' active' : ''}`} onClick={closeMenu}>Home</Link>
        <Link to="/about" className={`nav-btn${location.pathname === '/about' ? ' active' : ''}`} onClick={closeMenu}>About</Link>
        <Link to="/services" className={`nav-btn${location.pathname === '/services' ? ' active' : ''}`} onClick={closeMenu}>Services</Link>
        <Link to="/contact" className={`nav-btn${location.pathname === '/contact' ? ' active' : ''}`} onClick={closeMenu}>Contact</Link>
        <Link to="/blog" className={`nav-btn${location.pathname === '/blog' ? ' active' : ''}`} onClick={closeMenu}>Blog</Link>
      </nav>

      <div className="right-nav">
        <button className="nav-icon search-btn">
          <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#e3e3e3">
            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
          </svg>
        </button>
        <button className="nav-btn login-btn">Log in</button>
        <button className="hamburger-menu" onClick={toggleMenu}>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;