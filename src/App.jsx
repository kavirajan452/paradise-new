import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <SectionTwo />
      <SectionThree />
    </div>
  );
}

export default App;
