import { motion } from 'framer-motion';

const SustainabilitySection = () => {
  return (
    <section id="sustainability" className="py-20 bg-gradient-to-br from-copper-dark/20 to-industrial">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            RECYCLING WITH <span className="text-copper">RESPONSIBILITY</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            At Paradise, sustainability isn't just a goal—it's our foundation. We
            believe that every ton of metal recycled is a step towards a cleaner,
            greener future. Our commitment to Corporate Social Responsibility drives
            us to go beyond profit, focusing on the positive impact we can make on
            our environment and community.
          </p>
        </motion.div>

        {/* Image Collage */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                src: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=400&q=80',
                alt: 'Green Environment',
              },
              {
                src: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&q=80',
                alt: 'Sustainable Future',
              },
              {
                src: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&q=80',
                alt: 'Community Impact',
              },
              {
                src: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&q=80',
                alt: 'Environmental Care',
              },
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="relative aspect-square rounded-lg overflow-hidden shadow-lg group cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-copper/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mt-12"
          >
            {[
              {
                title: 'Zero Waste Goal',
                description:
                  'Committed to achieving zero waste in our operations by 2030',
              },
              {
                title: 'Community Programs',
                description:
                  'Active involvement in local environmental education and awareness',
              },
              {
                title: 'Carbon Neutral',
                description:
                  'Working towards carbon neutrality through renewable energy adoption',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-industrial-light/50 backdrop-blur-sm rounded-lg p-6 border border-copper/20 hover:border-copper/50 transition-colors duration-300"
              >
                <h4 className="text-xl font-heading font-semibold text-copper mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
