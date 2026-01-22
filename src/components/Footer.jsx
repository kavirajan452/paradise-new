import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-main">
        <div className="footer-overlay"></div>
        <div className="footer-content">
          <div className="footer-hero">
            <h2 className="footer-title">
              SUSTAINABLE
            </h2>
            <p className="footer-tagline">
              CREATING TODAY FOR <span className="highlight">PARADISE RECYCLING</span>
            </p>
          </div>

          <div className="footer-grid">
            <div className="footer-column">
              <h3 className="footer-column-title">ABOUT US</h3>
              <p className="footer-text">
                Paradise Wire Recycling Industry is a leading name in sustainable recycling, 
                committed to environmental responsibility and innovation.
              </p>
              <div className="footer-social">
                <a href="#" aria-label="Facebook" className="social-link">f</a>
                <a href="#" aria-label="Twitter" className="social-link">𝕏</a>
                <a href="#" aria-label="LinkedIn" className="social-link">in</a>
                <a href="#" aria-label="Instagram" className="social-link">📷</a>
              </div>
            </div>

            <div className="footer-column">
              <h3 className="footer-column-title">QUICK LINKS</h3>
              <ul className="footer-links">
                <li><a href="#about">About Us</a></li>
                <li><a href="#divisions">Our Divisions</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#machines">Technology</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-column-title">SERVICES</h3>
              <ul className="footer-links">
                <li><a href="#divisions">Wire Recycling</a></li>
                <li><a href="#divisions">Steel Processing</a></li>
                <li><a href="#divisions">Metal Trading</a></li>
                <li><a href="#products">Material Supply</a></li>
                <li><a href="#products">Scrap Purchase</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-column-title">CONTACT INFO</h3>
              <ul className="footer-contact">
                <li>
                  <span className="contact-icon">📍</span>
                  <span>Industrial Area, Paradise City</span>
                </li>
                <li>
                  <span className="contact-icon">📞</span>
                  <span>+1 (555) 123-4567</span>
                </li>
                <li>
                  <span className="contact-icon">✉️</span>
                  <span>info@paradiserecycling.com</span>
                </li>
                <li>
                  <span className="contact-icon">🕒</span>
                  <span>Mon - Sat: 8:00 AM - 6:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; 2024 Paradise Wire Recycling Industry. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#privacy">Privacy Policy</a>
              <span className="separator">|</span>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
