import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Education from './components/Education';
import Philosophy from './components/Philosophy';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <Education />
      <Philosophy />
      <Contact />
    </div>
  );
}

export default App;