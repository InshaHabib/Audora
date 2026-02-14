import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Impact from './components/Impact';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-grotesk">
      <Navigation />
      <Hero />
      <About />
      <Features />
      <HowItWorks />
      <Pricing />
      <Impact />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
