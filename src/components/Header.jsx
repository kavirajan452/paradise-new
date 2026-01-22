import { useState, useEffect } from 'react';
import './Header.css';

const Header = ({ onMenuToggle }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <span className="logo-text">PARADISE</span>
          <span className="logo-subtitle">WIRE RECYCLING INDUSTRY</span>
        </div>

        <nav className="nav-desktop" aria-label="Main navigation">
          <ul className="nav-list">
            <li><button onClick={() => scrollToSection('about')} className="nav-link">ABOUT US</button></li>
            <li><button onClick={() => scrollToSection('divisions')} className="nav-link">DIVISIONS</button></li>
            <li><button onClick={() => scrollToSection('products')} className="nav-link">PRODUCT & MATERIALS</button></li>
            <li><button onClick={() => scrollToSection('machines')} className="nav-link">MACHINES</button></li>
            <li><button onClick={() => scrollToSection('contact')} className="nav-link">CONTACT US</button></li>
          </ul>
        </nav>

        <button 
          className="hamburger"
          onClick={onMenuToggle}
          aria-label="Toggle menu"
          aria-expanded="false"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
