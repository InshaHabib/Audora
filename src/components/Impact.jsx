import React from 'react';

const Impact = () => {
  const stats = [
    { number: '430M+', label: 'Global Hearing Loss', icon: 'fa-earth-americas' },
    { number: '20M+', label: 'Users in Pakistan', icon: 'fa-users' },
    { number: '10-12h', label: 'Battery Life', icon: 'fa-battery-full' },
    { number: '20+', label: 'Languages', icon: 'fa-language' }
  ];

  return (
    <section id="impact" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-2 to-dark-3"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-black gradient-text text-center mb-4 uppercase">
          Market & Social Impact
        </h2>
        <p className="text-center text-gray-400 text-base sm:text-lg lg:text-xl mb-12 sm:mb-16 max-w-3xl mx-auto font-grotesk">
          Making a difference in millions of lives worldwide
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-dark-2 rounded-2xl p-6 sm:p-8 border border-primary/20 hover:border-primary transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 text-center group"
            >
              <div className="text-4xl sm:text-5xl text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className={`fas ${stat.icon}`}></i>
              </div>
              <div className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-black gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 font-grotesk text-sm sm:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
