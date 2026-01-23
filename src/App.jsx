import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import SectionFour from './components/SectionFour';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </div>
  );
}

export default App;
