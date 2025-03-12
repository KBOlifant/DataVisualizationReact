import React from 'react';
import  '../App.css'; // We'll create this CSS file next
import A388 from '../assests/A388.jpg'; // Replace with your actual image path

const HeroSection = () => {
  return (
    <div className="hero-section" style={{ borderRadius: '24px'}}>
      <div className="hero-content">
        <h1 id="subjectTitle">A388</h1>
        <p>A380-800 is the first true double-deck passenger airliner for the long-range market, while the A380-800F cargo version is to be the first commercial freighter with three
             full cargo decks. Maximum cruising speed Mach 0.88 and can reach FL350 in 28 minutes as initial cruise altitude. The 555-seat aircraft uses the same cockpit layout and
             operating procedures as the Airbus A320 and A330/A340 Families, ensuring that pilots qualified on other Airbus fly-by-wire aircraft can step into the A380 with minimal
             additional training. First flight in April 2005.</p>
      </div>
      <img src={A388} alt="Android Data" className="hero-image" />
    </div>
  );
};

export default HeroSection;