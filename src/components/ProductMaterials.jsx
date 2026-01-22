import { useInView } from 'react-intersection-observer';
import './ProductMaterials.css';

const ProductMaterials = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const sellItems = [
    'Copper Wire',
    'Aluminum Scrap',
    'Steel Rods',
    'Brass Materials',
    'Zinc Products',
    'Lead Components'
  ];

  const buyItems = [
    'Industrial Wire Scrap',
    'Electronic Waste',
    'Cable Remnants',
    'Metal Alloys',
    'Automotive Parts',
    'Construction Materials'
  ];

  return (
    <section className="products" id="products" ref={ref}>
      <div className="products-overlay"></div>
      <div className="products-content">
        <div className={`products-header ${inView ? 'animate-in' : ''}`}>
          <h2 className="section-title">PRODUCT & MATERIALS</h2>
          <p className="products-subtitle">
            Comprehensive trading solutions for recycled materials
          </p>
        </div>

        <div className="products-grid">
          <div className={`product-column ${inView ? 'animate-in' : ''}`}>
            <div className="product-column-header">
              <h3 className="product-column-title">WE SELL</h3>
            </div>
            <ul className="product-list">
              {sellItems.map((item, index) => (
                <li key={index} className="product-item">
                  <span className="product-bullet">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="products-center">
            <div className="products-icon">
              <div className="icon-wrapper">⚙️</div>
            </div>
          </div>

          <div className={`product-column ${inView ? 'animate-in' : ''}`} style={{ animationDelay: '0.3s' }}>
            <div className="product-column-header">
              <h3 className="product-column-title">WE BUY</h3>
            </div>
            <ul className="product-list">
              {buyItems.map((item, index) => (
                <li key={index} className="product-item">
                  <span className="product-bullet">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`products-cta ${inView ? 'animate-in' : ''}`} style={{ animationDelay: '0.6s' }}>
          <button className="btn btn-outline">GET A QUOTE</button>
        </div>
      </div>
    </section>
  );
};

export default ProductMaterials;
