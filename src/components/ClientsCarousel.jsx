import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './ClientsCarousel.css';

const ClientsCarousel = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const clients = [
    { name: 'Client 1', logo: '🏢' },
    { name: 'Client 2', logo: '🏭' },
    { name: 'Client 3', logo: '🏗️' },
    { name: 'Client 4', logo: '⚙️' },
    { name: 'Client 5', logo: '🔧' },
    { name: 'Client 6', logo: '🛠️' },
    { name: 'Client 7', logo: '⚡' },
    { name: 'Client 8', logo: '🔩' },
    { name: 'Client 9', logo: '🏭' },
    { name: 'Client 10', logo: '🏢' }
  ];

  return (
    <section className="clients" ref={ref}>
      <div className="container">
        <div className={`clients-header ${inView ? 'animate-in' : ''}`}>
          <h2 className="section-title">OUR CLIENTS</h2>
          <p className="section-subtitle">
            Trusted by leading companies worldwide for sustainable recycling solutions
          </p>
        </div>

        <div className={`clients-carousel ${inView ? 'animate-in' : ''}`}>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            className="clients-swiper"
          >
            {clients.map((client, index) => (
              <SwiperSlide key={index}>
                <div className="client-card">
                  <div className="client-logo">
                    <span className="client-icon">{client.logo}</span>
                  </div>
                  <p className="client-name">{client.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ClientsCarousel;
