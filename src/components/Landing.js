// Landing.js
import React from 'react';
import Header from './Header';  // Import your Header component
import './Landing.css';  // Styles for Landing component

export default function Landing() {
  return (
    <div className="landing" style={{ backgroundImage: 'url(/greek21.jpg)'}}>
      <Header />  {/* The header will sit on top of the background */}
      <div className="landing-content">
        <div className="landing-title-container">
            <h3 className='title1'>villa kallisto</h3>
            <h2 className='title2'>where oasis breeze meets the <br/> sea</h2>
            <p className='title3'>Enjoy the luxury and the variety of amenities that Villa Kallisto has to offer, <br/>
            set very close to the seaside resort of Corfu.
            </p>
        </div>

        <div className="button-container">
            <div className="button-circle">
                <div className="button-content">
                    <p className="buttonText">Discover More</p>
                    
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}