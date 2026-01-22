import { motion } from 'framer-motion';

const ProcessSection = () => {
  return (
    <section id="process" className="py-20 bg-industrial-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 max-w-4xl mx-auto leading-tight">
            WE USE ADVANCED{' '}
            <span className="text-copper">EUROPEAN RECYCLING SYSTEMS</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Cutting-edge technology meets sustainable practices
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Machinery Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
                alt="Advanced Machinery"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <h4 className="text-white font-heading font-semibold text-xl">
                  Precision Machinery
                </h4>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="relative rounded-lg overflow-hidden shadow-xl group">
                <img
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&q=80"
                  alt="Processing Equipment"
                  className="w-full h-40 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-xl group">
                <img
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&q=80"
                  alt="Quality Control"
                  className="w-full h-40 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-copper/20 rounded-full flex items-center justify-center">
                  <span className="text-copper font-bold text-xl">1</span>
                </div>
                <div>
                  <h4 className="text-xl font-heading font-semibold text-white mb-2">
                    Advanced Sorting Technology
                  </h4>
                  <p className="text-gray-400">
                    State-of-the-art sorting systems that separate materials with
                    unmatched precision and efficiency.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-copper/20 rounded-full flex items-center justify-center">
                  <span className="text-copper font-bold text-xl">2</span>
                </div>
                <div>
                  <h4 className="text-xl font-heading font-semibold text-white mb-2">
                    Automated Processing
                  </h4>
                  <p className="text-gray-400">
                    Fully automated systems minimize human error and maximize
                    throughput while maintaining quality standards.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-copper/20 rounded-full flex items-center justify-center">
                  <span className="text-copper font-bold text-xl">3</span>
                </div>
                <div>
                  <h4 className="text-xl font-heading font-semibold text-white mb-2">
                    Environmental Controls
                  </h4>
                  <p className="text-gray-400">
                    Integrated emission control systems ensure zero environmental
                    impact during processing operations.
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <a
                href="#contact"
                className="inline-block bg-copper hover:bg-copper-dark text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Learn About Our Process
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
