import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 pb-10 overflow-hidden z-10">
      
      {/* Decorative Technical Elements */}
      <div className="absolute top-8 left-16 hidden lg:block mono text-xs text-[#FFC107] animate-pulse">
        <div>System: ONLINE</div>
        <div>Latency: 12ms</div>
      </div>
      {/* Removed lower right build info block */}

      <div className="max-w-5xl w-full text-center space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center items-center gap-2 mb-6"
        >
          <div className="h-[1px] w-12 bg-gray-700"></div>
          <span className="text-gray-400 tracking-[0.2em] text-sm mono uppercase">LETS BRING YOUR VISION TO LIFE!</span>
          <div className="h-[1px] w-12 bg-gray-700"></div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC107] to-[#FFD54F] drop-shadow-[0_0_15px_rgba(255,193,7,0.3)]">
            Web Applications,
          </span><br />
          Software Development,<br />
          SaaS, AI Tools & more.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm md:text-base text-gray-500 mono"
        >
          By X925 Solutions
        </motion.p>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl leading-relaxed font-light"
        >
          We build modern digital products end-to-end — from UI to backend, database, and deployment — with a strong focus on quality, performance, and maintainability. Making your vision production-ready.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="pt-8"
        >
          <a href="#portfolio" className="group relative inline-flex items-center gap-3 px-10 py-5 bg-[#FFC107] text-black text-sm font-bold tracking-widest uppercase transition-all hover:bg-[#FFD54F] hover:scale-105 hover:shadow-[0_0_30px_rgba(255,193,7,0.5)] active:scale-95">
            <span className="relative z-10">View Case Studies</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-gray-500 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;