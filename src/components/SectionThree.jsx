import { useEffect, useRef, useState } from 'react';
import './SectionThree.css';

function SectionThree() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
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

  // Parallax effect with requestAnimationFrame for performance
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const scrollProgress = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight));
            setScrollY(scrollProgress);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="section-three" ref={sectionRef}>
      {/* Background with Parallax */}
      <div 
        className="section-three__background"
        style={{
          transform: `scale(${1 + scrollY * 0.1})`
        }}
      >
        <div className="section-three__overlay"></div>
      </div>

      {/* Decorative Grid Lines */}
      <div className="section-three__grid">
        <div className="grid-line vertical"></div>
        <div className="grid-line horizontal"></div>
      </div>

      {/* Vertical Centerline */}
      <div className="section-three__centerline"></div>

      <div className="section-three__container">
        {/* Top Stats Row */}
        <div className={`section-three__top-stats ${isVisible ? 'visible' : ''}`}>
          <div className="stat-item left">
            <div className="stat-number">5K</div>
            <div className="stat-caption">TONS OF SCRAP<br />RECYCLED</div>
          </div>
          <div className="stat-item right">
            <div className="stat-number">25</div>
            <div className="stat-caption">YEARS OF<br />EXPERIENCE</div>
          </div>
        </div>

        {/* Center Content */}
        <div className={`section-three__center ${isVisible ? 'visible' : ''}`}>
          <p className="section-three__subheading">
            EMPOWERING YOUR SUCCESS WITH OUR
          </p>
          <h2 className="section-three__main-heading">SOLUTION</h2>
          <button 
            className="section-three__cta-button"
            aria-label="Discover more about our recycling solutions"
          >
            DISCOVER MORE
          </button>
        </div>

        {/* Bottom Stats Row */}
        <div className={`section-three__bottom-stats ${isVisible ? 'visible' : ''}`}>
          <div className="stat-item left">
            <div className="stat-number">500</div>
            <div className="stat-caption">HAPPY CLIENTS</div>
          </div>
          <div className="stat-item right">
            <div className="stat-number">100</div>
            <div className="stat-caption">TEAM MEMBERS</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionThree;
