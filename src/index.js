import React from 'react';
import ReactDOM from 'react-dom/client';
import Landing from './components/Landing';
import Hero from './components/Hero'
import Explore from './components/Explore';
import Service from './components/Service';
import Contact from './components/Contact';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Landing />
    <Hero/>
    <Explore/>
    <Service/>
    <Contact/>
    <Footer/>
  </React.StrictMode>
);



