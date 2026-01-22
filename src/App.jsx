import { useState } from 'react';
import Header from './components/Header';
import MegaMenu from './components/MegaMenu';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Divisions from './components/Divisions';
import ProductMaterials from './components/ProductMaterials';
import Machines from './components/Machines';
import Responsibility from './components/Responsibility';
import ClientsCarousel from './components/ClientsCarousel';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="app">
      <Header onMenuToggle={toggleMenu} />
      <MegaMenu isOpen={isMenuOpen} onClose={closeMenu} />
      <main>
        <Hero />
        <Stats />
        <Divisions />
        <ProductMaterials />
        <Machines />
        <Responsibility />
        <ClientsCarousel />
      </main>
      <Footer />
    </div>
  );
}

export default App;
