import { useState } from 'react';
import './Navbar.scss';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <a href="/"><img src="assets/images/logo.svg" alt="logo" /></a>
        </div>

        {/* Desktop Menu (middle) */}
        <ul className={`navbar__menu ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">Page 1</a></li>
          <li><a href="/contact">Page 2</a></li>
        </ul>
        <div>

        </div>

        {/* Mobile Menu Button */}
        <button 
          className="navbar__burger" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;