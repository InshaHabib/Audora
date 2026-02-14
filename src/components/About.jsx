import React from 'react';

const About = () => {
  const timeline = [
    {
      year: '2023',
      title: 'The Idea',
      description: 'Founded with a mission to bridge communication gaps for the hearing-impaired community using cutting-edge AR technology.'
    },
    {
      year: '2024',
      title: 'Development',
      description: 'Assembled a team of AI experts, hardware engineers, and accessibility specialists to develop the first prototype.'
    },
    {
      year: '2025',
      title: 'Beta Testing',
      description: 'Successfully tested with 500+ users across Pakistan, achieving 95%+ satisfaction rate and valuable feedback.'
    },
    {
      year: '2026',
      title: 'Launch',
      description: 'Official product launch with pre-orders now available. Expanding to global markets soon.'
    }
  ];

  const problems = [
    {
      icon: 'fa-volume-xmark',
      title: 'Traditional Hearing Aids Limitations',
      description: 'Only amplify sound, don\'t provide visual context or emotional cues'
    },
    {
      icon: 'fa-comment-slash',
      title: 'Communication Barriers',
      description: 'Difficulty in noisy environments, group conversations, and understanding emotions'
    },
    {
      icon: 'fa-universal-access',
      title: 'Accessibility Gaps',
      description: 'Expensive solutions, limited language support, and lack of real-time assistance'
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-dark">
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mission & Vision */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-black gradient-text mb-4">
            About Audora
          </h2>
          <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto font-grotesk">
            Revolutionizing communication for the hearing-impaired community
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-dark-2 rounded-3xl p-8 border border-primary/20 hover:border-primary transition-all group">
            <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <i className="fas fa-bullseye text-dark text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4 font-grotesk">Our Mission</h3>
            <p className="text-gray-400 leading-relaxed font-grotesk">
             Our mission is to help hearing-impaired individuals communicate easily by converting speech into real-time subtitles using smart and accessible technology.
            </p>
          </div>

          <div className="bg-dark-2 rounded-3xl p-8 border border-primary/20 hover:border-primary transition-all group">
            <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <i className="fas fa-eye text-dark text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4 font-grotesk">Our Vision</h3>
            <p className="text-gray-400 leading-relaxed font-grotesk">
              Our vision is to build an inclusive future where everyone can connect, understand, and communicate without limitations.
            </p>
          </div>
        </div>

        {/* The Problem */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-center gradient-text mb-8 font-orbitron uppercase">
            The Problem We're Solving
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {problems.map((problem, index) => (
              <div key={index} className="bg-dark-2 rounded-2xl p-6 border border-red-500/20 hover:border-red-500/50 transition-all">
                <i className={`fas ${problem.icon} text-4xl text-red-400 mb-4`}></i>
                <h4 className="text-lg font-bold text-white mb-3 font-grotesk">{problem.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed font-grotesk">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Solution */}
        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 sm:p-12 border border-primary/20 mb-16">
          <div className="text-center mb-8">
            <i className="fas fa-lightbulb text-6xl text-primary mb-4"></i>
            <h3 className="text-2xl sm:text-3xl font-bold gradient-text mb-4 font-orbitron">
              Audora's AI-Powered Solution
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-dark/50 rounded-2xl p-6 backdrop-blur-sm">
              <i className="fas fa-check-circle text-green-400 text-2xl mb-3"></i>
              <h4 className="text-lg font-bold text-white mb-2 font-grotesk">Real-time Visual Context</h4>
              <p className="text-gray-400 text-sm font-grotesk">
                See conversations as they happen with instant subtitles and emotion indicators displayed directly on AR glasses.
              </p>
            </div>
            <div className="bg-dark/50 rounded-2xl p-6 backdrop-blur-sm">
              <i className="fas fa-check-circle text-green-400 text-2xl mb-3"></i>
              <h4 className="text-lg font-bold text-white mb-2 font-grotesk">Offline AI Processing</h4>
              <p className="text-gray-400 text-sm font-grotesk">
                Works without internet using on-device AI chip, ensuring privacy and reliability anywhere.
              </p>
            </div>
            <div className="bg-dark/50 rounded-2xl p-6 backdrop-blur-sm">
              <i className="fas fa-check-circle text-green-400 text-2xl mb-3"></i>
              <h4 className="text-lg font-bold text-white mb-2 font-grotesk">Emotion Detection</h4>
              <p className="text-gray-400 text-sm font-grotesk">
                AI analyzes tone and sentiment, displaying relevant emojis to capture emotional nuances.
              </p>
            </div>
            <div className="bg-dark/50 rounded-2xl p-6 backdrop-blur-sm">
              <i className="fas fa-check-circle text-green-400 text-2xl mb-3"></i>
              <h4 className="text-lg font-bold text-white mb-2 font-grotesk">Affordable & Accessible</h4>
              <p className="text-gray-400 text-sm font-grotesk">
                Priced affordably at PKR 35,000-40,000, making advanced technology accessible to everyone.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-center gradient-text mb-12 font-orbitron">
            Our Journey
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-secondary"></div>
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-dark-2 rounded-2xl p-6 border border-primary/20 hover:border-primary transition-all inline-block">
                      <h4 className="text-xl font-bold text-primary mb-2 font-grotesk">{item.title}</h4>
                      <p className="text-gray-400 font-grotesk">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center text-dark font-orbitron font-black text-base shadow-lg">
                      {item.year}
                    </div>
                  </div>
                  
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Values */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold gradient-text mb-8 font-orbitron uppercase">
            Our Values
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'fa-universal-access', title: 'Accessibility First', color: 'text-blue-400' },
              { icon: 'fa-heart', title: 'Empathy Driven', color: 'text-red-400' },
              { icon: 'fa-lightbulb', title: 'Innovation', color: 'text-yellow-400' },
              { icon: 'fa-users', title: 'Community Focus', color: 'text-green-400' }
            ].map((value, index) => (
              <div key={index} className="bg-dark-2 rounded-2xl p-6 border border-primary/10 hover:border-primary/30 transition-all">
                <i className={`fas ${value.icon} text-4xl ${value.color} mb-3`}></i>
                <h4 className="font-bold text-white font-grotesk">{value.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
