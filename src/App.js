import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About'
import Languages from './components/Languages'
import ProjectShowcase from './components/Projects';
import Contact from './components/ContactMe';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-white">
      <Navbar />
      <HeroSection />
      <About />
      <Languages />
      <ProjectShowcase />
      <Contact /> 
      <Footer />
    </div>
  );
}

export default App;