import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const DecadesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-20 bg-industrial-dark" ref={ref}>
      <div className="container mx-auto px-4">
        {/* 12 Column Grid Layout */}
        <div className="grid grid-cols-12 gap-4">
          {/* Left spacing - columns 1-2 */}
          <div className="col-span-12 md:col-span-1"></div>

          {/* Main content - columns 3-11 */}
          <div className="col-span-12 md:col-span-10">
            <div className="grid grid-cols-12 gap-6">
              {/* "FOR OVER" - Left aligned */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="col-span-12 md:col-span-6"
              >
                <h3 className="text-copper text-2xl md:text-3xl font-heading font-medium">
                  FOR OVER
                </h3>
              </motion.div>

              {/* Right spacing for balance */}
              <div className="col-span-12 md:col-span-6"></div>

              {/* "02 DECADES" - Center with large typography */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="col-span-12 md:col-span-8 md:col-start-3 text-center"
              >
                <h2 className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold text-white leading-none">
                  02 DECADES
                </h2>
              </motion.div>

              {/* Decorative spacing */}
              <div className="col-span-12"></div>

              {/* Company Name - Right aligned */}
              <div className="col-span-12 md:col-span-4"></div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="col-span-12 md:col-span-8"
              >
                <h3 className="text-copper text-xl md:text-2xl font-heading font-semibold text-right">
                  PARADISE WIRE RECYCLING INDUSTRY
                </h3>
              </motion.div>

              {/* Supporting paragraph - Centered */}
              <div className="col-span-12 md:col-span-2"></div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="col-span-12 md:col-span-8"
              >
                <p className="text-gray-300 text-base md:text-lg leading-relaxed text-center">
                  Since our inception over two decades ago, Paradise Wire
                  Recycling Industry has been at the forefront of sustainable
                  metal recycling. With state-of-the-art European technology and
                  an unwavering commitment to environmental stewardship, we've
                  processed over 5,000 tons of recyclable materials, serving more
                  than 500 satisfied clients across the nation. Our journey is
                  built on innovation, integrity, and a deep respect for our
                  planet's finite resources.
                </p>
              </motion.div>
              <div className="col-span-12 md:col-span-2"></div>
            </div>
          </div>

          {/* Right spacing - column 12 */}
          <div className="col-span-12 md:col-span-1"></div>
        </div>
      </div>
    </section>
  );
};

export default DecadesSection;
