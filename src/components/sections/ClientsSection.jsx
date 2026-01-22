import { motion } from 'framer-motion';

const ClientsSection = () => {
  // Using placeholder logos - in production, replace with actual client logos
  const clients = [
    { name: 'Client 1', logo: 'https://via.placeholder.com/200x100/1a1a1a/ffffff?text=Client+1' },
    { name: 'Client 2', logo: 'https://via.placeholder.com/200x100/1a1a1a/ffffff?text=Client+2' },
    { name: 'Client 3', logo: 'https://via.placeholder.com/200x100/1a1a1a/ffffff?text=Client+3' },
    { name: 'Client 4', logo: 'https://via.placeholder.com/200x100/1a1a1a/ffffff?text=Client+4' },
    { name: 'Client 5', logo: 'https://via.placeholder.com/200x100/1a1a1a/ffffff?text=Client+5' },
    { name: 'Client 6', logo: 'https://via.placeholder.com/200x100/1a1a1a/ffffff?text=Client+6' },
    { name: 'Client 7', logo: 'https://via.placeholder.com/200x100/1a1a1a/ffffff?text=Client+7' },
    { name: 'Client 8', logo: 'https://via.placeholder.com/200x100/1a1a1a/ffffff?text=Client+8' },
  ];

  return (
    <section id="clients" className="py-20 bg-industrial-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Our <span className="text-copper">Clients</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Trusted by leading organizations across industries
          </p>
        </motion.div>

        {/* Logo Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-industrial-light rounded-lg p-6 flex items-center justify-center h-32 hover:bg-industrial transition-all duration-300 border border-transparent hover:border-copper/50">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-gray-400 text-lg mb-4">
              Join our growing list of satisfied clients
            </p>
            <a
              href="#contact"
              className="inline-block bg-copper hover:bg-copper-dark text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Become a Partner
            </a>
          </motion.div>
        </div>

        {/* Mobile Carousel Note */}
        <style jsx>{`
          @media (max-width: 768px) {
            .grid {
              overflow-x: auto;
              scroll-snap-type: x mandatory;
              -webkit-overflow-scrolling: touch;
            }
            .grid > div {
              scroll-snap-align: start;
              min-width: 150px;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default ClientsSection;
