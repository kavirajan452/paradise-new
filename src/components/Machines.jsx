import { useInView } from 'react-intersection-observer';
import './Machines.css';

const Machines = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const features = [
    {
      title: 'High Efficiency',
      description: 'Advanced European technology ensures maximum processing efficiency',
      icon: '⚡'
    },
    {
      title: 'Eco-Friendly',
      description: 'Sustainable operations with minimal environmental impact',
      icon: '🌱'
    },
    {
      title: 'Automation',
      description: 'Fully automated systems for consistent quality output',
      icon: '🤖'
    },
    {
      title: 'Safety First',
      description: 'State-of-the-art safety features protecting our workforce',
      icon: '🛡️'
    }
  ];

  return (
    <section className="machines" id="machines" ref={ref}>
      <div className="machines-background"></div>
      <div className="machines-overlay"></div>
      
      <div className="machines-content">
        <div className={`machines-header ${inView ? 'animate-in' : ''}`}>
          <span className="machines-label">TECHNOLOGY</span>
          <h2 className="machines-title">
            WE USE <span className="highlight">ADVANCED EUROPEAN</span><br />
            RECYCLING SYSTEMS
          </h2>
          <p className="machines-description">
            Our state-of-the-art machinery represents the pinnacle of recycling technology, 
            combining efficiency, sustainability, and safety in every operation.
          </p>
        </div>

        <div className="machines-grid">
          <div className={`machines-visual ${inView ? 'animate-in' : ''}`}>
            <div className="machine-card">
              <div className="machine-placeholder">
                <span className="machine-icon">🏭</span>
              </div>
              <div className="machine-info">
                <h4>Industrial Processing</h4>
              </div>
            </div>
            <div className="machine-card">
              <div className="machine-placeholder">
                <span className="machine-icon">⚙️</span>
              </div>
              <div className="machine-info">
                <h4>Automated Systems</h4>
              </div>
            </div>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`feature-card ${inView ? 'animate-in' : ''}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={`machines-cta ${inView ? 'animate-in' : ''}`} style={{ animationDelay: '0.8s' }}>
          <button className="btn">EXPLORE OUR TECHNOLOGY</button>
        </div>
      </div>
    </section>
  );
};

export default Machines;
