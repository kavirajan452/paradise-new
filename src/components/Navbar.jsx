import { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Prevent body scroll when drawer is open using CSS class
    if (isDrawerOpen) {
      document.documentElement.classList.add('drawer-open');
    } else {
      document.documentElement.classList.remove('drawer-open');
    }

    // Focus trap for accessibility
    if (isDrawerOpen) {
      const drawer = document.querySelector('.mobile-drawer');
      const focusableElements = drawer?.querySelectorAll(
        'button, a, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements && focusableElements.length > 0) {
        focusableElements[0].focus();
      }
    }

    return () => {
      document.documentElement.classList.remove('drawer-open');
    };
  }, [isDrawerOpen]);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape' && isDrawerOpen) {
      setIsDrawerOpen(false);
    }
  };

  return (
    <nav 
      className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="navbar__container">
        {/* Mail Icon Button */}
        <button 
          className="navbar__icon-btn navbar__mail-btn"
          aria-label="Contact us via email"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="4" width="18" height="12" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <path d="M1 4L10 11L19 4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          </svg>
        </button>

        {/* Left Menu Items */}
        <ul className="navbar__menu navbar__menu--left">
          <li><a href="#about">ABOUT US</a></li>
          <li><a href="#divisions">DIVISIONS</a></li>
        </ul>

        {/* Centered Logo */}
        <a href="/" className="navbar__logo" aria-label="Paradise Home">
          <img src="/logo.svg" alt="Paradise Logo" />
        </a>

        {/* Right Menu Items */}
        <ul className="navbar__menu navbar__menu--right">
          <li><a href="#products">PRODUCTS FOR SALE</a></li>
          <li><a href="#contact">CONTACT US</a></li>
        </ul>

        {/* Hamburger Menu Button */}
        <button 
          className="navbar__icon-btn navbar__hamburger"
          aria-label="Toggle mobile menu"
          aria-expanded={isDrawerOpen}
          aria-controls="mobile-drawer"
          onClick={handleDrawerToggle}
        >
          <span className="hamburger__line"></span>
          <span className="hamburger__line"></span>
          <span className="hamburger__line"></span>
        </button>
      </div>

      {/* Mobile Drawer */}
      {isDrawerOpen && (
        <div 
          className="mobile-drawer"
          id="mobile-drawer"
          role="dialog"
          aria-modal="true"
          onKeyDown={handleKeyDown}
        >
          <div className="mobile-drawer__overlay" onClick={handleDrawerToggle}></div>
          <div className="mobile-drawer__content">
            <button 
              className="mobile-drawer__close"
              onClick={handleDrawerToggle}
              aria-label="Close menu"
            >
              ×
            </button>
            <nav className="mobile-drawer__nav">
              <a href="#about" onClick={handleDrawerToggle}>ABOUT US</a>
              <a href="#divisions" onClick={handleDrawerToggle}>DIVISIONS</a>
              <a href="#products" onClick={handleDrawerToggle}>PRODUCTS FOR SALE</a>
              <a href="#contact" onClick={handleDrawerToggle}>CONTACT US</a>
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
