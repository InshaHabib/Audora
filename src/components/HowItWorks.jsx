import React, { useState } from 'react';

const HowItWorks = () => {
  const [selectedStep, setSelectedStep] = useState(0);

  const steps = [
    {
      number: 1,
      title: 'Capture Speech',
      description: 'Advanced noise-cancelling microphone captures clear audio from conversations.',
      icon: 'fa-microphone',
      color: 'from-blue-500 to-blue-600',
      details: [
        'Dual-array microphone system',
        'AI-powered noise reduction',
        'Voice activity detection',
        'Wind noise suppression'
      ]
    },
    {
      number: 2,
      title: 'AI Conversion',
      description: 'On-device AI processor converts speech to text with emotion detection in milliseconds.',
      icon: 'fa-brain',
      color: 'from-purple-500 to-purple-600',
      details: [
        'Real-time processing (< 100ms)',
        'Sentiment analysis for emotions',
        'Context-aware AI',
        'Multiple language support'
      ]
    },
    {
      number: 3,
      title: 'AR Display',
      description: 'Subtitles and emojis appear seamlessly on your AR lens without obstructing your view.',
      icon: 'fa-glasses',
      color: 'from-pink-500 to-pink-600',
      details: [
        'HD micro-projection',
        'Adjustable transparency',
        'Multiple display modes',
        'Eye-tracking optimization'
      ]
    }
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-dark">
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-black gradient-text text-center mb-4 uppercase">
          How It Works
        </h2>
        <p className="text-center text-gray-400 text-base sm:text-lg lg:text-xl mb-12 sm:mb-16 max-w-3xl mx-auto font-grotesk">
          Three simple steps to seamless communication
        </p>

        {/* Main Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="text-center group"
            >
              <div className="relative inline-block mb-6">
                <div style={{ background: "linear-gradient(135deg, #a855f7, #9333ea)" }}
                  className="w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center text-white font-orbitron text-4xl md:text-5xl font-black mx-auto shadow-lg transition-transform duration-300 hover:scale-110"
                >
                  {step.number}
                </div>
              </div>
              <div className="text-5xl text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className={`fas ${step.icon}`}></i>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-grotesk">
                {step.title}
              </h3>
              <p className="text-gray-400 leading-relaxed font-grotesk text-sm sm:text-base mb-4">
                {step.description}
              </p>
              
              {/* Details List */}
              <div className="bg-dark-2 rounded-xl p-4 border border-primary/20">
                <ul className="space-y-2 text-left">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                      <i className="fas fa-check text-success mt-1 flex-shrink-0"></i>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Flow Arrows */}
        <div className="hidden md:flex justify-center items-center gap-4 mb-16">
          <div className="flex-1 max-w-xs text-center">
            <div className="bg-dark-2 rounded-lg p-4 border border-primary/20">
              <i className="fas fa-microphone text-3xl text-blue-500 mb-2"></i>
              <p className="text-sm text-gray-400 font-grotesk">Audio Input</p>
            </div>
          </div>
          <i className="fas fa-arrow-right text-2xl text-primary"></i>
          <div className="flex-1 max-w-xs text-center">
            <div className="bg-dark-2 rounded-lg p-4 border border-primary/20">
              <i className="fas fa-microchip text-3xl text-purple-500 mb-2"></i>
              <p className="text-sm text-gray-400 font-grotesk">AI Processing</p>
            </div>
          </div>
          <i className="fas fa-arrow-right text-2xl text-primary"></i>
          <div className="flex-1 max-w-xs text-center">
            <div className="bg-dark-2 rounded-lg p-4 border border-primary/20">
              <i className="fas fa-glasses text-3xl text-pink-500 mb-2"></i>
              <p className="text-sm text-gray-400 font-grotesk">AR Display</p>
            </div>
          </div>
        </div>

        {/* Product Showcase */}
        <div className="max-w-2xl mx-auto bg-dark-2 rounded-3xl p-6 sm:p-8 md:p-12 border border-primary/20 hover:border-primary transition-colors duration-300">
          <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-20"></div>
            <i className="fas fa-glasses text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-primary animate-float relative z-10"></i>
            <div className="absolute bottom-4 left-4 right-4 bg-dark/80 backdrop-blur-sm rounded-lg p-3 border border-primary/30">
              <p className="text-sm text-gray-300 font-grotesk text-center">
                Audora AR Smart Glasses - See What You Cannot Hear
              </p>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3">
            <div className="bg-dark rounded-lg p-3 text-center border border-primary/10">
              <i className="fas fa-weight-hanging text-primary text-xl mb-1"></i>
              <p className="text-xs text-gray-400">45g Light</p>
            </div>
            <div className="bg-dark rounded-lg p-3 text-center border border-primary/10">
              <i className="fas fa-clock text-primary text-xl mb-1"></i>
              <p className="text-xs text-gray-400">10-12h Battery</p>
            </div>
            <div className="bg-dark rounded-lg p-3 text-center border border-primary/10">
              <i className="fas fa-shield-halved text-primary text-xl mb-1"></i>
              <p className="text-xs text-gray-400">IP54 Rated</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
