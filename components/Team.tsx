import React, { useState, useEffect, useRef } from 'react';
import { Reveal } from './Reveal';
import { Shield } from 'lucide-react';

const Team: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        // Calculate position relative to the section for the mask
        setMousePos({ 
          x: event.clientX - rect.left, 
          y: event.clientY - rect.top 
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const members = [
    {
      name: "DAVID, GERMANY",
      role: "Developer & Project Architect",
      image: "https://image2url.com/images/1766007093442-d78ee50f-afc4-4ef2-9057-a38ebaa5687d.jpg",
      badge: "https://image2url.com/images/1766007242258-448b3247-359c-4f71-bdc3-fda741930e68.png",
      points: [
        "Strategic Architecture & Roadmapping",
        "End-to-End Deployment Coordination",
        "Performance Optimization & QA"
      ]
    },
    {
      name: "MARK, GERMANY",
      role: "UI/UX Designer",
      image: "https://image2url.com/images/1766007121454-65c1e155-6036-47de-84ef-c4d212144ed9.jpg",
      badge: "https://image2url.com/images/1766007242258-448b3247-359c-4f71-bdc3-fda741930e68.png",
      points: [
        "High-Fidelity Visual Identity",
        "Strategic User Experience",
        "Interactive Motion Design"
      ]
    },
    {
      name: "JAMIE, NETHERLANDS",
      role: "AI ENGINEER & FULL STACK DEVELOPER",
      image: "https://image2url.com/images/1766007130645-0e420ea1-ebe0-433a-b65c-9adabf711508.jpg",
      badge: "https://image2url.com/images/1766007296598-08931a3c-4283-48d1-a39b-ba42d7448b73.png",
      points: [
        "Intelligent Architecture Integration",
        "Automated Workflow Engineering",
        "AI Performance & Scalability"
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-32 px-6 z-10 bg-[#020202] border-t border-white/5 overflow-hidden">
      {/* Background Interactive Grid (Same as top of website) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
           style={{
             maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
             WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)'
           }}>
        {/* Base Grid - Barely Visible */}
        <div 
          className="absolute inset-0 z-0 opacity-[0.07]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #333 1px, transparent 1px),
              linear-gradient(to bottom, #333 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Interactive Highlight Grid */}
        <div 
          className="absolute inset-0 z-10 transition-opacity duration-200 ease-out"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            maskImage: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
            WebkitMaskImage: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, black, transparent)`
          }}
        />
      </div>
      
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFC107] opacity-[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal>
          <div className="mb-20 text-center">
            <span className="block text-gray-500 mono text-xs tracking-[0.2em] mb-2">
               THE EXPERTS
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight">
              <span className="text-[#FFC107]">///</span> THE X925 TEAM
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {members.map((member, idx) => (
            <Reveal key={idx} delay={idx * 0.15}>
              <div className="group relative bg-[#050505] border border-white/5 hover:border-[#FFC107]/50 transition-all duration-500 overflow-hidden rounded-sm hover:shadow-[0_0_30px_rgba(255,193,7,0.05)]">
                
                {/* Image Area - Increased height by 15% (from h-96 [384px] to h-[442px]) */}
                <div className="relative h-[442px] overflow-hidden">
                  {/* Grayscale to Color Effect */}
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-700 ease-out transform group-hover:scale-105" 
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500" />
                  
                  {/* Status Badge Image */}
                  <div className="absolute top-4 right-4 opacity-0 translate-x-4 -translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 ease-out delay-75 w-10 md:w-12 pointer-events-none z-30">
                     <img 
                        src={member.badge} 
                        alt="Status Badge" 
                        className="w-full h-auto drop-shadow-[0_0_15px_rgba(0,0,0,0.7)]"
                     />
                  </div>
                </div>

                {/* Content Block - Overlapping Image */}
                <div className="relative z-20 px-6 pb-8 -mt-12">
                   {/* Name Box */}
                   <div className="bg-[#0A0A0A] border border-white/10 p-5 shadow-2xl group-hover:border-[#FFC107]/30 transition-colors duration-300 relative overflow-hidden">
                      {/* Accent Corner */}
                      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#FFC107] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      <h3 className="text-xl font-bold text-white tracking-tight uppercase mb-1 group-hover:text-[#FFC107] transition-colors">{member.name}</h3>
                      <div className="flex items-center gap-2">
                         <Shield className="w-3 h-3 text-[#00FFFF]" />
                         <span className="text-[#00FFFF] mono text-[10px] tracking-widest uppercase">{member.role}</span>
                      </div>
                   </div>

                   {/* Bullet Points */}
                   <div className="mt-6 space-y-3">
                      {member.points.map((point, i) => (
                        <div key={i} className="flex items-start gap-3 group/item">
                           <span className="mt-1.5 w-1 h-1 bg-gray-600 rotate-45 group-hover/item:bg-[#FFC107] transition-colors duration-300"></span>
                           <p className="text-gray-400 text-sm font-light leading-relaxed group-hover/item:text-gray-300 transition-colors">
                              {point}
                           </p>
                        </div>
                      ))}
                   </div>
                </div>

                {/* Animated Bottom Border */}
                <div className="absolute bottom-0 left-0 h-[3px] w-full bg-[#FFC107] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;