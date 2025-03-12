
import './App.css';
import HeroSection from './components/hero';
import RadarSection from './components/radar';

function App() {
  return (
    <div className="App">
        <div className="hero">
          <HeroSection />
        </div>

        <div className="radar">
          <RadarSection />
          </div>
    </div>
  );
}

export default App;
