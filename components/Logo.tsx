import React from 'react';
import { motion } from 'framer-motion';

const Logo: React.FC = () => {
  return (
    <motion.div 
      className="fixed top-6 right-6 md:top-8 md:right-16 z-50 pointer-events-none select-none mix-blend-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div className="relative overflow-hidden py-1 px-2 group">
        <div className="flex items-start gap-1">
            <span className="mono font-bold text-sm md:text-base tracking-[0.25em] text-[#FFC107] drop-shadow-[0_0_10px_rgba(255,193,7,0.4)]">
                X925
            </span>
            <div className="w-1 h-1 bg-[#FFC107] rounded-full mt-1.5 shadow-[0_0_5px_#FFC107]" />
        </div>
        
        {/* Periodic Shimmer Animation */}
        <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFF9C4] to-transparent skew-x-12 opacity-40"
            animate={{
                x: ['-250%', '250%']
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 5,
                ease: "easeInOut"
            }}
        />
      </div>
    </motion.div>
  );
};

export default Logo;