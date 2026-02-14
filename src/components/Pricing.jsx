import React from 'react';

const Pricing = () => {
  const plans = [
    {
      title: 'Smart Glasses',
      price: '35,000',
      currency: 'PKR',
      featured: false,
      features: [
        'Real-time subtitles',
        'Urdu & English support',
        'Offline AI processing',
        'Adjustable font size',
        'Emoji emotions',
        '10-12 hour battery',
        '1-year warranty',
        'Basic software updates'
      ]
    },
    {
      title: 'Premium Plan',
      price: '40,000',
      currency: 'PKR',
      featured: true,
      features: [
        'Everything in Smart Glasses',
        '20+ language translation',
        'Advanced AI updates',
        'Priority customer support',
        'Future cloud sync',
        'Exclusive features access',
        '2-year extended warranty',
        'Free accessories bundle'
      ]
    }
  ];

  return (
    <section id="pricing" className="py-16 sm:py-20 lg:py-24 bg-dark-2 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-black gradient-text text-center mb-4 uppercase">
          Pricing & Plans
        </h2>
        <p className="text-center text-gray-400 text-base sm:text-lg lg:text-xl mb-12 sm:mb-16 max-w-3xl mx-auto font-grotesk">
          Choose the perfect plan for your needs
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-dark rounded-3xl p-6 sm:p-8 lg:p-10 border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                plan.featured
                  ? 'border-primary shadow-xl shadow-primary/30'
                  : 'border-primary/30 hover:border-primary'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 gradient-bg rounded-full text-dark font-bold text-sm uppercase">
                  Recommended
                </div>
              )}

              <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4 font-grotesk">
                {plan.title}
              </h3>
              <div className="mb-6 sm:mb-8">
                <span className="font-orbitron text-4xl sm:text-5xl lg:text-6xl font-black gradient-text">
                  {plan.price}
                </span>
                <span className="text-gray-400 ml-2 text-lg sm:text-xl">{plan.currency}</span>
              </div>

              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <i className="fas fa-check text-primary mt-1 flex-shrink-0"></i>
                    <span className="text-gray-300 font-grotesk text-sm sm:text-base">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all duration-300 ${
                plan.featured
                  ? 'gradient-bg text-dark hover:scale-105 shadow-lg hover:shadow-primary/50'
                  : 'border-2 border-primary text-primary hover:bg-primary hover:text-dark'
              }`}>
                Pre-Order Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
