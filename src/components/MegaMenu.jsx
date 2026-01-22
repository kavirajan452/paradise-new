import { useEffect, useRef } from 'react';
import './MegaMenu.css';

const MegaMenu = ({ isOpen, onClose }) => {
  const menuRef = useRef(null);
  const firstFocusableRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open');
      firstFocusableRef.current?.focus();
    } else {
      document.body.classList.remove('menu-open');
    }

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="mega-menu-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation menu"
    >
      <div 
        className="mega-menu-content"
        onClick={(e) => e.stopPropagation()}
        ref={menuRef}
      >
        <button 
          className="close-btn"
          onClick={onClose}
          aria-label="Close menu"
          ref={firstFocusableRef}
        >
          <span>×</span>
        </button>

        <nav className="mega-menu-nav">
          <ul className="mega-menu-list">
            <li>
              <button onClick={() => handleNavClick('about')} className="mega-menu-link">
                ABOUT US
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('divisions')} className="mega-menu-link">
                DIVISIONS
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('products')} className="mega-menu-link">
                PRODUCT & MATERIALS
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('machines')} className="mega-menu-link">
                MACHINES
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('contact')} className="mega-menu-link">
                CONTACT US
              </button>
            </li>
          </ul>
        </nav>

        <div className="mega-menu-footer">
          <p>PARADISE WIRE RECYCLING INDUSTRY</p>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
