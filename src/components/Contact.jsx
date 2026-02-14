import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-2 via-dark to-dark-2"></div>
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-black gradient-text text-center mb-4 uppercase">
          Get In Touch
        </h2>
        <p className="text-center text-gray-400 text-base sm:text-lg lg:text-xl mb-12 sm:mb-16 font-grotesk">
          Have questions? We'd love to hear from you
        </p>

        <form onSubmit={handleSubmit} className="bg-dark-2 rounded-3xl p-6 sm:p-8 lg:p-10 border border-primary/20 hover:border-primary transition-colors duration-300">
          <div className="mb-6">
            <label className="block text-primary font-bold mb-2 font-grotesk text-sm sm:text-base">
              Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder='Enter your Name'
              className="w-full px-4 py-3 bg-dark border-2 border-primary/30 rounded-xl text-gray-100 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 font-grotesk text-sm sm:text-base"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-primary font-bold mb-2 font-grotesk text-sm sm:text-base">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder='name@gmail.com'
              className="w-full px-4 py-3 bg-dark border-2 border-primary/30 rounded-xl text-gray-100 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 font-grotesk text-sm sm:text-base"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-primary font-bold mb-2 font-grotesk text-sm sm:text-base">
              Message
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              placeholder='Message.....'
              rows="5"
              className="w-full px-4 py-3 bg-dark border-2 border-primary/30 rounded-xl text-gray-100 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none font-grotesk text-sm sm:text-base"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 sm:py-4 gradient-bg rounded-full text-dark font-bold text-base sm:text-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-primary/50"
          >
            {submitted ? 'Message Sent! ✓' : 'Send Message'}
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="text-center">
            <i className="fas fa-envelope text-3xl text-primary mb-2"></i>
            <p className="text-gray-400 font-grotesk text-sm">info@Audora.com</p>
          </div>
          <div className="text-center">
            <i className="fas fa-phone text-3xl text-primary mb-2"></i>
            <p className="text-gray-400 font-grotesk text-sm">+92 300 1234567</p>
          </div>
          <div className="text-center">
            <i className="fas fa-location-dot text-3xl text-primary mb-2"></i>
            <p className="text-gray-400 font-grotesk text-sm">Rawalpindi, Pakistan</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
