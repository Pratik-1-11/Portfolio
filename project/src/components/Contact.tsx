import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github as GitHub, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to contact me
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="space-y-8 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Contact Information</h3>
            
            <div className="flex items-start space-x-4">
              <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full text-primary-500 dark:text-primary-400">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-800 dark:text-white">Email</h4>
                <a href="mailto:contact@sujantamang.com" className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                  contact@sujantamang.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full text-primary-500 dark:text-primary-400">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-800 dark:text-white">Phone</h4>
                <a href="tel:+9779801234567" className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                  +977 9801234567
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full text-primary-500 dark:text-primary-400">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-800 dark:text-white">Location</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Kathmandu, Nepal
                </p>
              </div>
            </div>
            
            <div className="pt-6">
              <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 dark:hover:text-white transition-colors">
                  <GitHub size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 dark:hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 dark:hover:text-white transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-8 shadow-md animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Send Me a Message</h3>
            
            {submitted ? (
              <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 p-4 rounded-lg mb-6">
                Thank you for your message! I'll get back to you soon.
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>
              
              <button
                type="submit"
                className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors duration-300 flex items-center gap-2 shadow-md hover:shadow-lg"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;