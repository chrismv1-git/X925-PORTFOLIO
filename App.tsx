import React from 'react';
import GridBackground from './components/GridBackground';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Capabilities from './components/Capabilities';
import Process from './components/Process';
import Contact from './components/Contact';
import Logo from './components/Logo';

function App() {
  return (
    <div className="relative bg-black min-h-screen selection:bg-[#FFC107] selection:text-black">
      <GridBackground />
      <Logo />
      
      <main className="relative z-10">
        <Hero />
        <Portfolio />
        <Capabilities />
        <Process />
        <Contact />
      </main>
    </div>
  );
}

export default App;