import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Sujan Tamang</h2>
            <p className="text-gray-400 max-w-md">
              IT Student & Aspiring Full Stack Developer based in Kathmandu, Nepal.
              Building creative solutions for the digital world.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-center md:justify-end space-x-6">
              <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
              <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
            
            <div className="flex justify-center md:justify-end">
              <a 
                href="#contact" 
                className="px-6 py-2 border border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white rounded-lg transition-colors duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            &copy; {currentYear} Sujan Tamang. All rights reserved.
          </p>
          
          <p className="text-gray-400 flex items-center mt-4 md:mt-0">
            Made with <Heart size={16} className="mx-1 text-red-500" /> in Nepal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;