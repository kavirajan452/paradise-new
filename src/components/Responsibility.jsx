import { useInView } from 'react-intersection-observer';
import './Responsibility.css';

const Responsibility = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const images = [
    { id: 1, rotation: -5, emoji: '👥' },
    { id: 2, rotation: 3, emoji: '🌍' },
    { id: 3, rotation: -3, emoji: '🤝' }
  ];

  return (
    <section className="responsibility" ref={ref}>
      <div className="responsibility-overlay"></div>
      
      <div className="responsibility-content">
        <div className={`responsibility-header ${inView ? 'animate-in' : ''}`}>
          <span className="responsibility-label">OUR COMMITMENT</span>
          <h2 className="responsibility-title">
            RECYCLING WITH RESPONSIBILITY
          </h2>
          <p className="responsibility-description">
            We believe in sustainable practices that benefit our communities, our planet, 
            and future generations. Our commitment goes beyond business—it's about making a difference.
          </p>
        </div>

        <div className="gallery">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`gallery-item ${inView ? 'animate-in' : ''}`}
              style={{
                transform: `rotate(${image.rotation}deg)`,
                animationDelay: `${index * 0.2}s`
              }}
            >
              <div className="gallery-image">
                <div className="image-placeholder">
                  <span className="placeholder-icon">{image.emoji}</span>
                </div>
                <div className="gallery-frame"></div>
              </div>
            </div>
          ))}
        </div>

        <div className={`responsibility-cta ${inView ? 'animate-in' : ''}`} style={{ animationDelay: '0.8s' }}>
          <button className="btn btn-outline">LEARN ABOUT OUR IMPACT</button>
        </div>
      </div>
    </section>
  );
};

export default Responsibility;
