import React, { useRef } from 'react';
import { Reveal } from './Reveal';
import { Lightbulb, Settings, CheckCircle } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Process: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 90%"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const steps = [
    {
      id: "01",
      title: "Concept & Kickoff",
      sub: "The Vision",
      icon: <Lightbulb className="w-6 h-6" />,
      desc: "We analyze your requirements thoroughly, developing a clear strategic plan, a tailored, transparent proposal, and specific concepts and ideas designed to maximize your project's impact."
    },
    {
      id: "02",
      title: "Modular Development",
      sub: "The Creation",
      icon: <Settings className="w-6 h-6" />,
      desc: "We develop your project in clear, modular stages, emphasizing clean, maintainable code and the reliable deployment of all core systems (Backend, UI, APIs, Authentication). Every completed phase is rigorously tested."
    },
    {
      id: "03",
      title: "Test, Deploy & Handover",
      sub: "The Result",
      icon: <CheckCircle className="w-6 h-6" />,
      desc: "We test, deploy the application to the production environment, and execute a complete handover (including essential documentation). We then provide support for the initial launch."
    }
  ];

  return (
    <section className="relative py-32 px-6 z-10 bg-black overflow-hidden" ref={containerRef}>
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="mb-24 text-center md:text-left">
            <span className="block text-gray-500 mono text-xs tracking-[0.2em] mb-2 ml-1">
               THE PROCESS
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight mb-4">
              <span className="text-[#FFC107]">///</span> HOW WE WORK
            </h2>
          </div>
        </Reveal>

        <div className="relative pl-6 md:pl-12">
          {/* Vertical Track (Dim) */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/10 md:left-[1px]"></div>
          
          {/* Animated Fill Line (Gold) - Scroll Linked */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-0 top-0 w-[3px] md:w-[3px] bg-[#FFC107] shadow-[0_0_20px_rgba(255,193,7,0.8)] z-10 origin-top md:left-0"
          />

          <div className="flex flex-col gap-8 md:gap-16">
            {steps.map((step, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                 <div className="relative group pl-8 md:pl-12">
                    
                    {/* Node on Line - Vertically Centered relative to the card */}
                    <div className="absolute left-[-5px] md:left-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 md:w-4 md:h-4 bg-black border border-white/30 rounded-full z-20 group-hover:border-[#FFC107] group-hover:scale-125 transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,1)] flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FFC107] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Card Container */}
                    <div className="relative bg-[#050505] border border-white/5 p-8 md:p-12 transition-all duration-500 hover:bg-[#080808] hover:border-[#FFC107]/30 hover:shadow-[0_0_40px_rgba(255,193,7,0.05)]">
                       
                       {/* Grid Layout - Items Centered Vertically */}
                       <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                          
                          {/* Left Side: ID & Heading */}
                          <div className="lg:col-span-5 flex items-center gap-6">
                             <span className="hidden md:block mono text-5xl font-light text-white/5 group-hover:text-[#FFC107]/20 transition-colors select-none">
                                {step.id}
                             </span>
                             <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="text-gray-500 group-hover:text-[#FFC107] transition-colors duration-300">{step.icon}</div>
                                    <span className="text-[#FFC107] text-xs font-bold tracking-widest uppercase">{step.sub}</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#FFC107] transition-colors duration-300">
                                  {step.title}
                                </h3>
                             </div>
                          </div>

                          {/* Divider Line (Desktop only) */}
                          <div className="hidden lg:block lg:col-span-1 flex justify-center h-full">
                             <div className="w-[1px] h-16 bg-white/10 group-hover:bg-[#FFC107]/30 transition-colors"></div>
                          </div>

                          {/* Right Side: The Process */}
                          <div className="lg:col-span-6">
                             <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-3 opacity-60 flex items-center gap-2 group-hover:opacity-100 transition-opacity">
                                <span className="w-1 h-1 bg-[#FFC107] rounded-full shadow-[0_0_5px_#FFC107]"></span>
                                The Process
                             </h4>
                             <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                {step.desc}
                             </p>
                          </div>

                       </div>
                    </div>
                 </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;