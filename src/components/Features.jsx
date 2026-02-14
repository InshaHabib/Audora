import React, { useEffect, useRef, useState } from 'react';

const Features = () => {
  const featuresRef = useRef(null);
  const [activeDemo, setActiveDemo] = useState(null);
  const [fontSize, setFontSize] = useState(18);

  const features = [
    {
      icon: 'fa-comment-dots',
      title: 'Real-time Subtitles',
      description: 'AI-powered speech-to-text conversion displays subtitles directly on your AR lens in real-time with 95%+ accuracy.',
      emoji: '💬',
      demo: 'subtitle'
    },
    {
      icon: 'fa-text-height',
      title: 'Adjustable Font Size',
      description: 'Customize subtitle size for optimal readability in any lighting condition. Choose from small, medium, large, or extra-large.',
      emoji: '📏',
      demo: 'fontsize'
    },
    {
      icon: 'fa-face-smile',
      title: 'Emoji-based Emotions',
      description: 'Visual emotion indicators help you understand the speaker\'s tone and feelings through AI-powered sentiment analysis.',
      emoji: '😊',
      demo: 'emoji'
    },
    {
      icon: 'fa-language',
      title: 'Multilingual Support',
      description: 'Supports Urdu and English natively, with 20+ languages available in premium plan including Arabic, Chinese, Spanish, French.',
      emoji: '🌐',
      demo: null
    },
    {
      icon: 'fa-microchip',
      title: 'Offline AI Processing',
      description: 'Built-in AI chip processes everything locally - no internet connection required. Works anywhere, anytime.',
      emoji: '🤖',
      demo: null
    },
    {
      icon: 'fa-battery-full',
      title: '10-12 Hour Battery',
      description: 'All-day battery life ensures you stay connected from morning to night. Fast charging: 0-80% in 90 minutes.',
      emoji: '🔋',
      demo: null
    },
    {
      icon: 'fa-microphone',
      title: 'Noise-Cancelling Mic',
      description: 'Advanced noise-cancelling technology filters out background noise for crystal clear audio capture in any environment.',
      emoji: '🎙️',
      demo: null
    },
    {
      icon: 'fa-palette',
      title: 'Stylish Design',
      description: 'Modern, lightweight design that looks like regular glasses. Available in multiple colors and prescription lens compatible.',
      emoji: '🕶️',
      demo: null
    },
    {
      icon: 'fa-camera',
      title: 'Optional Camera',
      description: 'Premium models include an optional front-facing camera for video calls and visual context enhancement.',
      emoji: '📷',
      demo: null
    }
  ];

  const hardwareSpecs = [
    { icon: 'fa-display', label: 'AR Lens + Micro Projector', value: 'HD Display' },
    { icon: 'fa-microchip', label: 'AI Processor Chip', value: 'Neural Engine' },
    { icon: 'fa-microphone', label: 'Noise-Cancelling Mic', value: 'Dual Array' },
    { icon: 'fa-battery-three-quarters', label: 'Battery Life', value: '10-12 Hours' },
    { icon: 'fa-weight-hanging', label: 'Weight', value: 'Only 45g' },
    { icon: 'fa-water', label: 'Water Resistant', value: 'IP54 Rated' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.feature-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('visible');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="py-16 sm:py-20 lg:py-24 bg-dark-2 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-black gradient-text text-center mb-4 uppercase">
          Powerful Features
        </h2>
        <p className="text-center text-gray-400 text-base sm:text-lg lg:text-xl mb-12 sm:mb-16 max-w-3xl mx-auto font-grotesk">
          Cutting-edge technology designed to enhance your daily communication
        </p>

        {/* Interactive Demo Section */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16 bg-dark rounded-3xl p-6 sm:p-8 border border-primary/20">
          <h3 className="text-2xl font-bold text-primary mb-6 font-grotesk text-center">Live Demo Preview</h3>
          
          {/* Subtitle Demo */}
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 sm:p-8 mb-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <i className="fas fa-microphone text-primary text-2xl"></i>
              <p className="text-gray-400 font-grotesk">Live Subtitle Preview:</p>
            </div>
            <div className="bg-dark/50 rounded-xl p-4 border border-primary/30">
              <p className="text-center font-grotesk" style={{ fontSize: `${fontSize}px`, transition: 'all 0.3s ease' }}>
                "Hello! Welcome to Audora." <span className="text-2xl ml-2">👋</span>
              </p>
            </div>
          </div>

          {/* Font Size Adjuster */}
          <div className="bg-dark-3 rounded-2xl p-6">
            <label className="block text-primary font-bold mb-3 font-grotesk">Adjust Font Size:</label>
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">Small</span>
              <input
                type="range"
                min="14"
                max="32"
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
                className="flex-1 h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer"
                style={{
                  accentColor: '#00f0ff'
                }}
              />
              <span className="text-gray-400 text-sm">Large</span>
              <span className="text-primary font-bold font-orbitron">{fontSize}px</span>
            </div>
          </div>

          {/* Emotion Demo */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { emoji: '😊', label: 'Happy', color: 'from-green-500/20' },
              { emoji: '😢', label: 'Sad', color: 'from-blue-500/20' },
              { emoji: '😡', label: 'Angry', color: 'from-red-500/20' },
              { emoji: '😮', label: 'Surprised', color: 'from-yellow-500/20' }
            ].map((emotion, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${emotion.color} to-transparent rounded-xl p-4 text-center border border-primary/10 hover:border-primary/30 transition-all cursor-pointer`}>
                <div className="text-3xl mb-2">{emotion.emoji}</div>
                <p className="text-sm text-gray-400 font-grotesk">{emotion.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}

        <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card opacity-100 translate-y-0 transition-all duration-500 bg-dark border border-primary/20 rounded-2xl p-6 sm:p-8 hover:border-primary hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 group"
            >
              <div className="relative">
                <div className="text-5xl sm:text-6xl mb-4 sm:mb-6 gradient-text group-hover:scale-110 transition-transform duration-300">
                  <i className={`fas ${feature.icon}`}></i>
                </div>
                <span className="absolute top-0 right-0 text-3xl sm:text-4xl group-hover:animate-bounce">
                  {feature.emoji}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4 font-grotesk">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed font-grotesk text-sm sm:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>


        {/* Hardware Specifications */}
        <div className="bg-dark rounded-3xl p-6 sm:p-8 lg:p-10 border border-primary/20">
          <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-8 font-grotesk text-center">
            <i className="fas fa-cog mr-3"></i>
            Hardware Specifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hardwareSpecs.map((spec, index) => (
              <div key={index} className="bg-dark-2 rounded-2xl p-6 border border-primary/10 hover:border-primary/30 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <i className={`fas ${spec.icon} text-primary text-xl`}></i>
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm mb-1 font-grotesk">{spec.label}</h4>
                    <p className="text-white font-bold font-grotesk">{spec.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Prototype/MVP Section */}
        <div className="mt-12 sm:mt-16 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-6 font-grotesk">
            See Audora in Action
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-dark rounded-2xl p-8 border border-primary/20 hover:border-primary transition-all group">
              <i className="fas fa-video text-6xl text-primary mb-4 group-hover:scale-110 transition-transform"></i>
              <h4 className="text-xl font-bold text-white mb-2 font-grotesk">Product Demo Video</h4>
              <p className="text-gray-400 text-sm font-grotesk">Watch how Audora works in real-world scenarios</p>
              <button className="mt-4 px-6 py-2 border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-dark transition-all">
                Watch Demo
              </button>
            </div>
            <div className="bg-dark rounded-2xl p-8 border border-primary/20 hover:border-primary transition-all group">
              <i className="fas fa-images text-6xl text-primary mb-4 group-hover:scale-110 transition-transform"></i>
              <h4 className="text-xl font-bold text-white mb-2 font-grotesk">Image Gallery</h4>
              <p className="text-gray-400 text-sm font-grotesk">Browse our product photos and user experiences</p>
              <button className="mt-4 px-6 py-2 border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-dark transition-all">
                View Gallery
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
