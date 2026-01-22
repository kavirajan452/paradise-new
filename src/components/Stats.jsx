import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './Stats.css';

const Stats = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [counts, setCounts] = useState({
    employees: 0,
    countries: 0,
    tons: 0,
    clients: 0
  });

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = {
      employees: 5000,
      countries: 25,
      tons: 500,
      clients: 100
    };

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        employees: Math.floor(targets.employees * progress),
        countries: Math.floor(targets.countries * progress),
        tons: Math.floor(targets.tons * progress),
        clients: Math.floor(targets.clients * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [inView]);

  return (
    <section className="stats" id="about" ref={ref}>
      <div className="stats-overlay"></div>
      <div className="stats-content">
        <div className={`stats-header ${inView ? 'animate-in' : ''}`}>
          <span className="stats-since">SINCE</span>
          <h2 className="stats-decades">02 DECADES</h2>
          <h3 className="stats-company">
            <span className="highlight">PARADISE</span> WIRE RECYCLING INDUSTRY
          </h3>
          <p className="stats-description">
            Leading the way in sustainable wire recycling with state-of-the-art European technology 
            and a commitment to environmental responsibility.
          </p>
        </div>

        <div className={`stats-grid ${inView ? 'animate-in' : ''}`}>
          <div className="stat-item">
            <div className="stat-number">
              {/* Display in K format: 5000 → 5K+ */}
              {Math.floor(counts.employees / 1000)}
              <span className="stat-plus">K+</span>
            </div>
            <div className="stat-label">Employees Trust Our Solutions</div>
          </div>

          <div className="stat-item">
            <div className="stat-number">
              {counts.countries}
              <span className="stat-plus">+</span>
            </div>
            <div className="stat-label">Countries Served</div>
          </div>

          <div className="stat-item">
            <div className="stat-number">
              {counts.tons}
              <span className="stat-plus">+</span>
            </div>
            <div className="stat-label">Tons Recycled Monthly</div>
          </div>

          <div className="stat-item">
            <div className="stat-number">
              {counts.clients}
              <span className="stat-plus">+</span>
            </div>
            <div className="stat-label">Happy Clients</div>
          </div>
        </div>

        <div className={`stats-cta ${inView ? 'animate-in' : ''}`}>
          <button className="btn">EXPLORE OUR SOLUTIONS</button>
        </div>
      </div>
    </section>
  );
};

export default Stats;
