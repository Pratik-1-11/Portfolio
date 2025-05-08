import React from 'react';
import { Code, Server, Database, PenTool as Tool } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Get to know me better</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="w-full md:w-1/2 space-y-6 animate-fadeIn">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Who am I?</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm Pratik D3vkota, an IT student with a passion for creating efficient, user-friendly applications. I'm pursuing a degree in Computer Information System from Pokhara University and aspiring to become a Full Stack Developer.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              My journey in tech began when I first discovered the power of coding to solve real-world problems. Since then, I've been dedicated to expanding my skills and knowledge in various technologies and frameworks.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I enjoy working on challenging projects that push my abilities and allow me to learn new concepts. Whether it's building web applications, mobile apps, or working with databases, I'm always excited to tackle new challenges.
            </p>
            
            <div className="pt-4">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors duration-300 inline-block shadow-md hover:shadow-lg"
              >
                Contact Me
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-primary-500 mb-4">
                <Code size={36} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Frontend</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Creating beautiful, responsive, and user-friendly interfaces with HTML, CSS, and JavaScript.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-primary-500 mb-4">
                <Server size={36} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Backend</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Building robust server-side applications with PHP, Node.js, and Firebase for efficient data processing.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-primary-500 mb-4">
                <Database size={36} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Databases</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Managing and optimizing data with SQL and MySQL for secure and efficient data storage.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-primary-500 mb-4">
                <Tool size={36} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Tools</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Utilizing Git, GitHub, VS Code, and Postman to streamline development workflow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;