import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider, useTheme } from './context/ThemeContext';

const AppContent = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [activeFilter, setActiveFilter] = useState<string>('all');

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <About />
      <Skills />
      <Projects activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <Education />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;