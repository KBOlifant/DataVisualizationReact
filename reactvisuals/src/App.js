import logo from './logo.svg';
import './App.css';
import React from 'react';
import Bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './components/Cards';

function App() {
  return (
    <div className="App">
      <section className="HeroSection">
        <h1 className='text-warning'>Hero</h1>
      </section>

      <section className="cardSection">
        <div className='card-Section-Title'>
          <h2>Select data</h2>
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
        
        <div className="bigGraph">

        </div>
        <div className="smallGraph">

        </div>
      </section>
    </div>
  );
}

export default App;
