import React from 'react';
import { Server, Layout, GitMerge, Rocket } from 'lucide-react';
import { Reveal } from './Reveal';

const Capabilities: React.FC = () => {
  const items = [
    {
      icon: <Layout className="w-6 h-6" />,
      title: "Complete Digital Products",
      desc: "We deliver full web applications (MVPs, SaaS, client portals, booking systems, internal tools), managing the entire process from the initial concept sketch to the final deployed product."
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Secure & Scalable Foundations",
      desc: "We build robust backend infrastructure, databases, and APIs to establish secure, scalable foundations. We guarantee resilient architecture with reliable Authentication & Roles (User/Admin) management."
    },
    {
      icon: <GitMerge className="w-6 h-6" />,
      title: "Automations & AI Technology",
      desc: "Minimize manual overhead and maximize focus. We embed specific AI software and tools designed to streamline complex tasks—from automated report generation to enhanced fraud detection—delivering immediate value and a rapid ROI."
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Production-Ready Delivery",
      desc: "We deliver a fully operational, production-ready website or web application. This includes meticulously clean, maintainable code, a stringent QA/testing mindset, and a responsive UI optimized for every device."
    }
  ];

  return (
    <section className="relative py-32 px-6 z-10 overflow-hidden bg-black/40">
      {/* Background Tech Grid - Smoothed fade on top and bottom */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20" 
           style={{
             backgroundImage: `
               linear-gradient(to right, #333 1px, transparent 1px),
               linear-gradient(to bottom, #333 1px, transparent 1px)
             `,
             backgroundSize: '40px 40px',
             maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
             WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
           }}>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal>
          <div className="mb-20 border-b border-white/10 pb-8">
            <span className="block text-gray-500 mono text-xs tracking-[0.2em] mb-2 ml-1">
               END-TO-END INNOVATION
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight">
              <span className="text-[#FFC107]">///</span> CAPABILITIES
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6">
          {items.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.15}>
              <div className="group flex flex-col md:flex-row gap-8 items-start p-8 border border-white/5 bg-[#050505] hover:border-[#FFC107]/30 hover:bg-[#0a0a0a] transition-all duration-300 relative overflow-hidden">
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/5 to-transparent -mr-8 -mt-8 rotate-45 group-hover:from-[#FFC107]/20 transition-all duration-500"></div>
                
                {/* New Icon Design */}
                <div className="shrink-0 relative">
                   {/* Icon Glow Background */}
                   <div className="absolute inset-0 bg-[#FFC107] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-full"></div>
                   
                   {/* Icon Container */}
                   <div className="relative w-16 h-16 flex items-center justify-center border border-white/10 bg-black group-hover:border-[#FFC107] group-hover:text-[#FFC107] text-gray-400 transition-all duration-300">
                      {/* Corner Accents on Icon Box */}
                      <span className="absolute top-0 left-0 w-1 h-1 bg-current opacity-50"></span>
                      <span className="absolute top-0 right-0 w-1 h-1 bg-current opacity-50"></span>
                      <span className="absolute bottom-0 left-0 w-1 h-1 bg-current opacity-50"></span>
                      <span className="absolute bottom-0 right-0 w-1 h-1 bg-current opacity-50"></span>
                      
                      {item.icon}
                   </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FFC107] transition-colors flex items-center gap-2">
                    {item.title}
                    <div className="h-[1px] w-8 bg-gray-800 group-hover:bg-[#FFC107]/50 transition-colors"></div>
                  </h3>
                  <p className="text-gray-400 leading-relaxed max-w-3xl">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;