import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'How accurate is the speech-to-text conversion?',
      answer: 'Audora uses advanced AI algorithms with 95%+ accuracy in normal conditions. Accuracy improves over time as the AI learns your environment.'
    },
    {
      question: 'Does it work in noisy environments?',
      answer: 'Yes! Our noise-cancelling microphone filters out background noise to focus on the speaker in front of you.'
    },
    {
      question: 'Is internet connection required?',
      answer: 'No! Audora has an on-device AI chip that processes everything offline. Internet is only needed for software updates and premium features.'
    },
    {
      question: 'How long does the battery last?',
      answer: 'The battery lasts 10-12 hours on a single charge, enough for a full day of use. Charging takes approximately 2 hours.'
    },
    {
      question: 'Can I use it with prescription lenses?',
      answer: 'Yes! Audora glasses can be fitted with prescription lenses at any optical store, or you can order them with your prescription.'
    },
    {
      question: 'What warranty is included?',
      answer: 'All Audora glasses come with a 1-year manufacturer warranty. Premium plan includes 2-year extended warranty.'
    }
  ];

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 bg-dark-2 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-black gradient-text text-center mb-4 uppercase">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-400 text-base sm:text-lg lg:text-xl mb-12 sm:mb-16 font-grotesk">
          Everything you need to know about Audora
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-dark border border-primary/20 rounded-2xl overflow-hidden hover:border-primary transition-colors duration-300"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-6 py-4 sm:px-8 sm:py-6 flex justify-between items-center text-left hover:bg-dark-3 transition-colors duration-300"
              >
                <span className="font-bold text-base sm:text-lg text-gray-100 font-grotesk pr-4">
                  {faq.question}
                </span>
                <i className={`fas fa-chevron-down text-primary transition-transform duration-300 flex-shrink-0 ${
                  activeIndex === index ? 'rotate-180' : ''
                }`}></i>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${
                activeIndex === index ? 'max-h-96' : 'max-h-0'
              }`}>
                <div className="px-6 pb-4 sm:px-8 sm:pb-6 text-gray-400 leading-relaxed font-grotesk text-sm sm:text-base">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
