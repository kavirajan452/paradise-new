import { useEffect, useRef, useState } from 'react';
import './SectionTwo.css';

function SectionTwo() {
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
      { threshold: 0.2 }
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

  return (
    <section className="section-two" ref={sectionRef}>
      {/* Vertical Centerline */}
      <div className="section-two__centerline"></div>

      <div className="section-two__container">
        {/* Prelabel */}
        <div className={`section-two__prelabel ${isVisible ? 'visible' : ''}`}>
          FOR OVER
        </div>

        {/* Counter Box */}
        <div className={`section-two__counter-box ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-two__counter-text">02 DECADES</h2>
        </div>

        {/* Brand Headline */}
        <h3 className={`section-two__headline ${isVisible ? 'visible' : ''}`}>
          <span className="bold">PARADISE</span> WIRE RECYCLING INDUSTRY
        </h3>

        {/* Description */}
        <p className={`section-two__description ${isVisible ? 'visible' : ''}`}>
          Leading the charge in sustainable metal recycling for over two decades,
          we transform scrap materials into valuable resources with precision,
          integrity, and environmental responsibility.
        </p>
      </div>
    </section>
  );
}

export default SectionTwo;
