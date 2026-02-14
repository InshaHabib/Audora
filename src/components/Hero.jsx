import React, { useState, useEffect, useRef } from 'react';

const Hero = () => {
  const [typedWords, setTypedWords] = useState([]);
  const words = ['Hello', '👋', 'Wellcome', 'to', 'Audora'];

  const hasRun = useRef(false);
  useEffect(() => {
     if (hasRun.current) return;
     hasRun.current = true;

    words.forEach((word, index) => {
      setTimeout(() => {
        setTypedWords(prev => [...prev, word]);
      }, index * 300);
    });
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-2 to-dark-3"></div>
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-orbitron text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black gradient-text mb-6 tracking-tight animate-fade-in-up leading-tight">
          Hear the World Through Vision
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto animate-fade-in-up font-grotesk" style={{animationDelay: '0.2s'}}>
        Audora Smart AR Glasses are designed to bridge communication gaps for individuals with hearing difficulties.  
        </p>

        {/* Subtitle Demo */}
        <div className="inline-flex flex-wrap gap-2 sm:gap-3 items-center justify-center px-4 sm:px-8 py-4 sm:py-6 bg-primary/5 border border-primary/20 rounded-2xl mb-8 animate-fade-in-up font-orbitron text-sm sm:text-base md:text-lg" style={{animationDelay: '0.4s'}}>
          {typedWords.map((word, index) => (
            <span key={index} className="animate-type" style={{animationDelay: `${index * 0.2}s`, opacity: 0}}>
              {word}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <button 
            onClick={() => scrollToSection('pricing')}
            className="w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 gradient-bg rounded-full text-dark font-bold text-base sm:text-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-primary/50"
          >
            Pre-Order Now
          </button>
          <button 
            onClick={() => scrollToSection('features')}
            className="w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 border-2 border-primary text-primary rounded-full font-bold text-base sm:text-lg hover:bg-primary hover:text-dark transition-all duration-300"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
