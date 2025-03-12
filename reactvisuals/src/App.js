import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './components/Cards';
import HeroSection from './components/hero';
import RadarSection from './components/radar';
import Row from "react-bootstrap/esm/Row";
import Doughnut01 from './components/Doughnut01';
import Doughnut02 from './components/Doughnut02';
import _lineChart from './components/lineChart';
import Quicksand from "@fontsource/quicksand";

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
          <h2 id='sectionTitle'>Selected Data analysis</h2>
          <h4 className='pt-4'>Rader graph</h4>
        </div>
        
        <div id="bigGraph">
          <div className="radar">
            <RadarSection />
          </div>
        </div>

        <div className='graphlowerH'>
          <div className="smallGraphs" >
            <Row className="justify-content-center">
              <div>
                <div className= "doughnutChart">
                  <Doughnut01 />
                  <h4 className='pt-4'>Seating</h4>
                </div>
              </div>
            </Row>
          </div>

          <div className="smallGraphs">
            <Row className="justify-content-center">
              <div>
                <div className= "doughnutChart">
                  <_lineChart />
                  <h4 className='pt-4'>Cost</h4>
                </div>
              </div>
            </Row>
          </div>
        </div>
        
      </section>
    </div>
  );
}

export default App;
