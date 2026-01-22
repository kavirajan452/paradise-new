import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const DivisionSection = () => {
  const divisions = [
    {
      title: 'Wire Recycling',
      description:
        'Advanced wire stripping and copper recovery systems that process thousands of tons of wire annually with minimal environmental impact.',
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80',
    },
    {
      title: 'Steel Industry',
      description:
        'State-of-the-art steel processing facilities equipped with cutting-edge technology for efficient metal sorting and processing.',
      image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80',
    },
    {
      title: 'Scrap Processing',
      description:
        'Comprehensive scrap metal processing solutions with advanced machinery for maximum recovery and sustainable practices.',
      image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80',
    },
  ];

  return (
    <section id="division" className="py-20 bg-industrial">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Our <span className="text-copper">Division</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Specialized divisions working in harmony to deliver excellence
          </p>
        </motion.div>

        {/* Swiper Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1.5,
              },
              1024: {
                slidesPerView: 2.5,
              },
            }}
            className="division-swiper pb-16"
          >
            {divisions.map((division, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-industrial-light rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 group"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={division.image}
                      alt={division.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-heading font-bold text-white mb-3">
                      {division.title}
                    </h3>
                    <p className="text-gray-400 text-base mb-4 leading-relaxed">
                      {division.description}
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center text-copper hover:text-copper-light transition-colors duration-300 font-medium"
                    >
                      Learn More
                      <HiArrowRight className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
                    </a>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx>{`
        .division-swiper {
          padding-bottom: 4rem;
        }
        .division-swiper :global(.swiper-button-next),
        .division-swiper :global(.swiper-button-prev) {
          color: #b87333;
        }
        .division-swiper :global(.swiper-pagination-bullet) {
          background: #b87333;
        }
        .division-swiper :global(.swiper-pagination-bullet-active) {
          background: #b87333;
        }
      `}</style>
    </section>
  );
};

export default DivisionSection;
