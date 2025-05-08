import React from 'react';
import { Github as GitHub, Linkedin, Twitter, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden pt-20">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern bg-grid-size opacity-5 dark:opacity-10"></div>
      
      <div className="container mx-auto px-4 py-16 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <p className="inline-block px-3 py-1 text-sm bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 rounded-full animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              👋 Welcome to my portfolio
            </p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              Pratik D3vkota
            </h1>
            
            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
              IT Student & Aspiring Full Stack Developer
            </h2>
            
            <p className="text-gray-600 dark:text-gray-400 max-w-lg animate-fadeIn" style={{ animationDelay: '0.8s' }}>
              Building tomorrow's tech, one project at a time. Passionate about creating efficient, user-friendly applications that make a difference.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start animate-fadeIn" style={{ animationDelay: '1s' }}>
              <a 
                href="#contact" 
                className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                Get in Touch
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 bg-transparent border border-gray-300 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 rounded-lg transition-all duration-300 flex items-center gap-2"
              >
                View Projects
              </a>
            </div>
            
            <div className="flex gap-4 justify-center md:justify-start pt-4 animate-fadeIn" style={{ animationDelay: '1.2s' }}>
              <a href="https://github.com/pratik5407b" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300">
                <GitHub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/pratik-devkota-09a559364/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300">
                <Linkedin size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300">
                <Twitter size={24} />
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center md:justify-end animate-fadeIn" style={{ animationDelay: '1s' }}>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              <img 
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Pratik D3vkota" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;