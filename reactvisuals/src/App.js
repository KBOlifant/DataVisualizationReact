import logo from './logo.svg';
import './App.css';
import React from 'react';
import Bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './components/Cards';
import Quicksand from "@fontsource/quicksand";
import HeroSection from './components/hero';
import RadarSection from './components/radar';
import Row from "react-bootstrap/esm/Row";
import Doughnut01 from './components/Doughnut01';
import Doughnut02 from './components/Doughnut02';

function App() {
  return (
    <div className="App" style={{fontFamily: "Quicksand"}} >
      <section className="HeroSection">
        <div className="hero">
          <HeroSection />
        </div>
      </section>

      <section className="cardSection">
        <div className='card-Section-Title'>
          <h2 id="TitleSection">Select data</h2>
          <div className='cards'>
            <Cards />
          </div>
        </div>
      </section>

      <section className="dataAnalysisSection text-white">
        <div className='data-Section-Title'>
          <h2>Selected Data analysis</h2>
          <h4 className='pt-4'>some more text</h4>
        </div>
        
        <div id="bigGraph">
          <div className="radar">
            <RadarSection />
          </div>
        </div>
        <div className="smallGraphs">
          <Row className="justify-content-center">
            <div className='doughnut-charts-container'>
              <div className= "doughnutChart" style={{width: '25%', height: '25%'}}>
                <Doughnut01 />
              </div>
              <div className= "doughnutChart" style={{width: '25%', height: '25%'}}>
                <Doughnut02 />
              </div>
            </div>
          </Row>
        </div>
      </section>
    </div>
  );
}

export default App;
