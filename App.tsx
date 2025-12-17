import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import GridBackground from './components/GridBackground';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Capabilities from './components/Capabilities';
import Process from './components/Process';
import Team from './components/Team';
import Contact from './components/Contact';
import Logo from './components/Logo';
import Loader from './components/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate system boot up time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative bg-black min-h-screen selection:bg-[#FFC107] selection:text-black">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" />
        ) : (
          <>
            <GridBackground />
            <Logo />
            
            <main className="relative z-10">
              <Hero />
              <Portfolio />
              <Capabilities />
              <Process />
              <Team />
              <Contact />
            </main>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;