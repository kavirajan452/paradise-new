import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './SectionFour.css';

function SectionFour() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const divisions = [
    {
      id: 1,
      title: 'WIRE RECYCLING',
      description: 'Expert processing of copper wire and cable recycling with state-of-the-art equipment and sustainable practices.',
      image: '/assets/section-4/division-1.svg',
      link: '#wire-recycling'
    },
    {
      id: 2,
      title: 'STEEL INDUSTRY',
      description: 'Comprehensive steel scrap recycling solutions serving industrial and manufacturing sectors with precision.',
      image: '/assets/section-4/division-2.svg',
      link: '#steel-industry'
    },
    {
      id: 3,
      title: 'E-WASTE RECYCLING',
      description: 'Responsible electronic waste recycling ensuring proper disposal and recovery of valuable materials.',
      image: '/assets/section-4/division-3.svg',
      link: '#e-waste'
    }
  ];

  return (
    <section className="section-four" ref={sectionRef}>
      {/* Wave decoration at top */}
      <div className="section-four__wave-top">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path 
            d="M0,50 Q360,0 720,50 T1440,50 L1440,100 L0,100 Z" 
            fill="#1a1a1a"
          />
        </svg>
      </div>

      <div className={`section-four__container ${isVisible ? 'visible' : ''}`}>
        {/* Header */}
        <div className="section-four__header">
          <h2 className="section-four__title">OUR DIVISION</h2>
          <p className="section-four__subtitle">
            Specialized recycling divisions with expertise across multiple industries and materials,
            delivering sustainable solutions for a cleaner tomorrow.
          </p>
        </div>

        {/* Swiper Carousel */}
        <div className="section-four__slider-wrapper">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            loop={divisions.length > 3}
            loopAdditionalSlides={2}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            speed={1000}
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
                centeredSlides: true,
                loop: true
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 25,
                centeredSlides: false,
                loop: false
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
                centeredSlides: true,
                loop: false
              },
              1400: {
                slidesPerView: 2.5,
                spaceBetween: 40,
                centeredSlides: true,
                loop: false
              }
            }}
            className="division-swiper"
          >
            {divisions.map((division) => (
              <SwiperSlide key={division.id}>
                <div className="division-card">
                  <div className="division-card__image">
                    <img 
                      src={division.image} 
                      alt={`${division.title} facility`}
                      loading="lazy"
                    />
                    <div className="division-card__overlay"></div>
                  </div>
                  <div className="division-card__content">
                    <h3 className="division-card__title">{division.title}</h3>
                    <p className="division-card__description">{division.description}</p>
                    <a 
                      href={division.link} 
                      className="division-card__link"
                      aria-label={`Learn more about ${division.title}`}
                    >
                      VIEW MORE
                      <svg 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path 
                          d="M5 12H19M19 12L12 5M19 12L12 19" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button 
            className="swiper-button-prev-custom"
            aria-label="Previous slide"
          >
            <svg 
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M15 18L9 12L15 6" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button 
            className="swiper-button-next-custom"
            aria-label="Next slide"
          >
            <svg 
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M9 18L15 12L9 6" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default SectionFour;
