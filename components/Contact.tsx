import React from 'react';
import { Mail, Clock, ShieldCheck } from 'lucide-react';
import { Reveal } from './Reveal';

const Contact: React.FC = () => {
  return (
    <footer className="relative z-10 pt-32 pb-10 px-6 bg-[#020202] border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <Reveal>
          <div className="inline-block px-3 py-1 bg-[#FFC107]/10 border border-[#FFC107]/30 text-[#FFC107] text-xs font-bold tracking-widest mb-6">
            INITIATE PROJECT
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            Let's get started!
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            X295 Solutions offers the quickest, most resilient, and flexible framework to successfully move your web application, SaaS or AI-software from concept to live production.
          </p>

          <div className="flex flex-col items-center gap-8 mb-20">
             <button className="group relative px-10 py-5 bg-[#FFC107] text-black font-bold text-lg tracking-widest uppercase hover:bg-[#FFD54F] transition-all shadow-[0_0_30px_rgba(255,193,7,0.3)] hover:shadow-[0_0_50px_rgba(255,193,7,0.6)] animate-pulse hover:animate-none">
                <span className="relative z-10 flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  Contact Us Now
                </span>
             </button>

             <div className="flex items-center gap-3 text-sm text-gray-500 border border-white/10 px-4 py-2 bg-white/5">
                <Clock className="w-4 h-4 text-[#00FFFF]" />
                <span>We are available every day</span>
             </div>
          </div>
        </Reveal>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto pt-10 mt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 mono gap-4">
        <div>
          &copy; 2025 X295 Solutions. PROFESSIONAL WEB APPLICATION DEVELOPMENT.
        </div>
        <div className="flex gap-6">
          <span className="hover:text-white cursor-pointer transition-colors">PRIVACY PROTOCOL</span>
          <span className="flex items-center gap-2">
            SYSTEM STATUS: 
            <span className="text-emerald-500 font-bold flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" /> ONLINE
            </span>
            <span className="flex items-center gap-2 ml-2 text-gray-500">
               <img src="https://image2url.com/images/1765977641881-6539f9a2-5c5c-4703-ab30-ea1c5307d2a0.png" alt="Germany" className="w-5 h-auto opacity-80" />
               BASED IN GERMANY
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Contact;