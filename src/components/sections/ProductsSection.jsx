import { motion } from 'framer-motion';
import { HiCheckCircle } from 'react-icons/hi';

const ProductsSection = () => {
  const sellItems = [
    'Copper Wire (Insulated & Bare)',
    'Aluminum Cables',
    'Steel Scrap',
    'Brass Components',
    'Recycled Copper Granules',
    'Industrial Wire Products',
  ];

  const buyItems = [
    'Electronic Waste',
    'Industrial Wire Scrap',
    'Cable & Wire Remnants',
    'Automotive Wiring Harness',
    'Transformer Scrap',
    'Mixed Metal Scrap',
  ];

  return (
    <section id="products" className="relative py-20">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80')`,
        }}
      ></div>
      <div className="absolute inset-0 bg-black/75"></div>

      {/* Content */}
      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Product & <span className="text-copper">Materials</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Comprehensive trading solutions for all your recycling needs
          </p>
        </motion.div>

        {/* Central Graphic/Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="w-32 h-32 bg-copper/20 rounded-full flex items-center justify-center backdrop-blur-sm border-4 border-copper">
            <svg
              className="w-16 h-16 text-copper"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
              />
            </svg>
          </div>
        </motion.div>

        {/* Two Columns */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-12">
          {/* WE SELL */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-industrial-light/80 backdrop-blur-sm rounded-lg p-8 shadow-xl"
          >
            <h3 className="text-2xl font-heading font-bold text-copper mb-6 text-center">
              WE SELL
            </h3>
            <ul className="space-y-3">
              {sellItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <HiCheckCircle className="text-copper text-xl mt-1 flex-shrink-0" />
                  <span className="text-white">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* WE BUY */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-industrial-light/80 backdrop-blur-sm rounded-lg p-8 shadow-xl"
          >
            <h3 className="text-2xl font-heading font-bold text-copper mb-6 text-center">
              WE BUY
            </h3>
            <ul className="space-y-3">
              {buyItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <HiCheckCircle className="text-copper text-xl mt-1 flex-shrink-0" />
                  <span className="text-white">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="#contact"
            className="inline-block bg-copper hover:bg-copper-dark text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Get a Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
