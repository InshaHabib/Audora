import React from 'react';

const Footer = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-2 border-t border-primary/20 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-orbitron text-2xl font-black gradient-text mb-4">Audora</h3>
            <p className="text-gray-400 mb-4 font-grotesk text-sm">
              Empowering the hearing-impaired community with innovative AR technology.
            </p>
            <div className="flex gap-3">
              <a href="mailto:inshahabib939@gmail.com" className="w-10 h-10 bg-dark border border-primary/30 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-dark transition-all duration-300 hover:scale-110">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="https://www.instagram.com/tech.with.insha" className="w-10 h-10 bg-dark border border-primary/30 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-dark transition-all duration-300 hover:scale-110">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/insha-habib-414441316" className="w-10 h-10 bg-dark border border-primary/30 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-dark transition-all duration-300 hover:scale-110">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/inshahabib" className="w-10 h-10 bg-dark border border-primary/30 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-dark transition-all duration-300 hover:scale-110">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-primary mb-4 font-grotesk">Quick Links</h4>
            <ul className="space-y-2">
              {['Features', 'How It Works', 'Pricing', 'FAQ'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link.toLowerCase().replace(/\s+/g, '-'))}
                    className="text-gray-400 hover:text-primary transition-colors duration-300 font-grotesk text-sm"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-primary mb-4 font-grotesk">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300 font-grotesk text-sm">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300 font-grotesk text-sm">Customer Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300 font-grotesk text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300 font-grotesk text-sm">Terms of Service</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-primary mb-4 font-grotesk">Newsletter</h4>
            <p className="text-gray-400 mb-4 font-grotesk text-sm">Stay updated with our latest news</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 px-4 py-2 bg-dark border border-primary/30 rounded-lg text-gray-100 focus:border-primary focus:outline-none font-grotesk text-sm"
              />
              <button className="px-4 py-2 gradient-bg rounded-lg text-dark font-bold hover:scale-105 transition-transform duration-300 text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-8 text-center text-gray-400 font-grotesk text-sm">
          <p> © {currentYear} Insha Habib. All rights reserved. Designed with ❤️ by Insha Habib.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
