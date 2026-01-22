import { useInView } from 'react-intersection-observer';
import './Hero.css';

const Hero = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <section className="hero" ref={ref}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className={`hero-text ${inView ? 'animate-in' : ''}`}>
          <h1 className="hero-title">
            <span className="hero-title-top">TURNING</span>
            <span className="hero-title-main">SUSTAINABILITY</span>
            <span className="hero-title-bottom">SCRAP INTO</span>
          </h1>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;
