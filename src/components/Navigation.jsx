import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = ['Home', 'About', 'Features', 'How It Works', 'Pricing', 'Impact', 'FAQ', 'Contact'];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <div className="font-orbitron text-2xl lg:text-3xl font-black gradient-text tracking-wider cursor-pointer"
               onClick={() => scrollToSection('home')}>
            Audora
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link.toLowerCase().replace(/\s+/g, '-'))}
                className="relative text-gray-300 hover:text-primary transition-colors duration-300 font-grotesk font-medium after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {link}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-primary text-2xl"
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
        isMobileMenuOpen ? 'max-h-96 bg-dark-2/95 backdrop-blur-lg' : 'max-h-0'
      }`}>
        <div className="px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollToSection(link.toLowerCase().replace(' ', '-'))}
              className="block w-full text-left px-4 py-2 text-gray-300 hover:text-primary hover:bg-dark-3 rounded-lg transition-all duration-300"
            >
              {link}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
