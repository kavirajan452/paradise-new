import { useInView } from 'react-intersection-observer';
import './Divisions.css';

const Divisions = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const divisions = [
    {
      title: 'WIRE RECYCLING',
      description: 'Advanced wire processing and recycling solutions with state-of-the-art European machinery for maximum efficiency and sustainability.',
      icon: '🔄'
    },
    {
      title: 'STEEL INDUSTRY',
      description: 'Comprehensive steel recycling services including cutting, sorting, and processing of various steel materials for industrial reuse.',
      icon: '🏭'
    },
    {
      title: 'METAL TRADING',
      description: 'Global metal trading operations connecting suppliers and buyers with transparent pricing and reliable supply chains.',
      icon: '💼'
    }
  ];

  return (
    <section className="divisions" id="divisions" ref={ref}>
      <div className="container">
        <div className={`divisions-header ${inView ? 'animate-in' : ''}`}>
          <h2 className="section-title">OUR DIVISION</h2>
          <p className="section-subtitle">
            We operate across multiple sectors of the recycling industry, providing comprehensive 
            solutions that transform waste into valuable resources.
          </p>
        </div>

        <div className="divisions-grid">
          {divisions.map((division, index) => (
            <div 
              key={index}
              className={`division-card ${inView ? 'animate-in' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="division-image">
                <div className="division-icon">{division.icon}</div>
                <div className="division-overlay"></div>
              </div>
              <div className="division-content">
                <h3 className="division-title">{division.title}</h3>
                <p className="division-description">{division.description}</p>
                <button className="division-link">
                  LEARN MORE
                  <span className="arrow">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Divisions;
