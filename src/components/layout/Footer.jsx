import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-industrial-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4">
              <span className="text-white">PARADISE</span>
              <span className="text-copper"> RECYCLING</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Leading the way in sustainable wire recycling and steel processing
              for over 25 years. Committed to environmental responsibility and
              excellence.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-industrial-light rounded-full flex items-center justify-center hover:bg-copper transition-colors duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-industrial-light rounded-full flex items-center justify-center hover:bg-copper transition-colors duration-300"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-industrial-light rounded-full flex items-center justify-center hover:bg-copper transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-industrial-light rounded-full flex items-center justify-center hover:bg-copper transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4 text-copper">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Our Division', 'Products', 'Process', 'Sustainability', 'Clients', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-400 hover:text-copper transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4 text-copper">
              Our Services
            </h4>
            <ul className="space-y-2">
              {[
                'Wire Recycling',
                'Steel Industry',
                'Scrap Processing',
                'Metal Trading',
                'Industrial Waste Management',
                'Environmental Solutions',
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-copper transition-colors duration-300 text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4 text-copper">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <HiLocationMarker className="text-copper text-xl mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Paradise Wire Recycling Industry, Industrial Area, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <HiPhone className="text-copper text-xl flex-shrink-0" />
                <a
                  href="tel:+911234567890"
                  className="text-gray-400 hover:text-copper transition-colors duration-300 text-sm"
                >
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <HiMail className="text-copper text-xl flex-shrink-0" />
                <a
                  href="mailto:info@paradiserecycling.com"
                  className="text-gray-400 hover:text-copper transition-colors duration-300 text-sm"
                >
                  info@paradiserecycling.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-industrial-light pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Paradise Wire Recycling Industry. All rights
              reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-copper transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-copper transition-colors duration-300 text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
