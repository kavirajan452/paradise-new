import { motion } from 'framer-motion';

const FinalCTASection = () => {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80')`,
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80"></div>

      {/* Content */}
      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-4"
          >
            MAKE A SUSTAINABLE
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-8"
          >
            <span className="text-copper">CHOICE TODAY</span> WITH{' '}
            <span className="text-copper">PARADISE RECYCLING</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto"
          >
            Partner with us to turn your scrap into value while contributing to a
            greener planet. Let's build a sustainable future together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="tel:+911234567890"
              className="inline-block bg-copper hover:bg-copper-dark text-white font-semibold px-10 py-5 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg"
            >
              REQUEST A QUOTE
            </a>
            <a
              href="mailto:info@paradiserecycling.com"
              className="inline-block bg-transparent border-2 border-copper hover:bg-copper text-white font-semibold px-10 py-5 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg"
            >
              Contact Us
            </a>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: 'Call Us',
                value: '+91 123 456 7890',
                link: 'tel:+911234567890',
              },
              {
                title: 'Email Us',
                value: 'info@paradiserecycling.com',
                link: 'mailto:info@paradiserecycling.com',
              },
              {
                title: 'Visit Us',
                value: 'Industrial Area, India',
                link: '#',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <h4 className="text-copper font-heading font-semibold text-lg mb-2">
                  {item.title}
                </h4>
                <a
                  href={item.link}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {item.value}
                </a>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
