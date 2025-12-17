import React from 'react';
import { motion } from 'framer-motion';

const Loader: React.FC = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <div className="relative flex flex-col items-center">
        {/* Main Logo Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex items-center gap-2"
        >
            <span className="mono font-bold text-2xl md:text-4xl tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-br from-[#FFC107] via-[#FFD700] to-[#B8860B] drop-shadow-[0_0_15px_rgba(255,193,7,0.4)]">
                X925
            </span>
        </motion.div>
        
        {/* Loading Bar Container */}
        <div className="mt-4 h-[1px] w-32 md:w-40 bg-[#111] overflow-hidden relative">
            {/* Moving Bar */}
            <motion.div 
                className="absolute inset-y-0 left-0 bg-[#FFC107] shadow-[0_0_10px_#FFC107]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.2, ease: "easeInOut" }}
            />
        </div>

        {/* System Text */}
        <motion.div 
            className="mt-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
        >
            <span className="mono text-[10px] text-gray-500 tracking-[0.3em] uppercase">
                System Initializing...
            </span>
        </motion.div>
      </div>

      {/* Decorative corners */}
      <div className="absolute top-10 left-10 w-4 h-4 border-t border-l border-white/20"></div>
      <div className="absolute top-10 right-10 w-4 h-4 border-t border-r border-white/20"></div>
      <div className="absolute bottom-10 left-10 w-4 h-4 border-b border-l border-white/20"></div>
      <div className="absolute bottom-10 right-10 w-4 h-4 border-b border-r border-white/20"></div>
    </motion.div>
  );
};

export default Loader;