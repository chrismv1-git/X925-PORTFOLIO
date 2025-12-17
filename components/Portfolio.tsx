import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import { Reveal } from './Reveal';
import { Code, X, CheckCircle2, Target, ArrowUpRight, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const projects: Project[] = [
  {
    id: '01',
    title: 'ad performance analytics dashboard',
    description: 'B2B SaaS, Client Portal, Database Optimization',
    tags: ['B2B SaaS', 'Client Portal', 'Database Optimization'],
    imageUrl: 'https://image2url.com/images/1765927501190-326af627-339b-4f57-b6d0-5639f3762906.png',
    clientNeeds: [
      "Needed a single dashboard to monitor all campaigns in real time",
      "Lacked clear visibility into ROI, ROAS, and conversion efficiency",
      "Difficulty identifying high- and low-performing campaigns quickly",
      "Missed budget limits and scaling opportunities without alerts",
      "Insights were hard to extract from raw, unstructured data"
    ],
    deliveredSolution: [
      "Clear, user-friendly admin dashboard with secure, simple login access",
      "Modern React-based frontend with scalable, component-driven architecture",
      "Structured KPI overview displaying campaigns, leads, ROI, and ROAS at a glance",
      "Built-in alerts and insight panels for budget thresholds and optimization actions",
      "High-end dark UI with polished data visualizations for easy interpretation"
    ]
  },
  {
    id: '02',
    title: 'inventory performance dashboard',
    description: 'B2B SaaS / Analytic Dashboard / Employee Management',
    tags: ['B2B SaaS', 'Analytic Dashboard', 'Employee Management'],
    imageUrl: 'https://image2url.com/images/1765972410394-9b344f03-1e42-45cc-8d24-3b35f6b06b1a.png',
    clientNeeds: [
      "No centralized view of inventory levels, stock value, and usage across locations",
      "Difficulty tracking low-stock and out-of-stock items before they became critical",
      "Lack of clear efficiency insights around usage vs wastage",
      "Manual, slow reordering process causing supply delays",
      "Complex inventory data that was hard to read and act on quickly"
    ],
    deliveredSolution: [
      "A centralized inventory management dashboard with secure, role-based access",
      "Real-time stock monitoring with clear low-stock and critical out-of-stock alerts",
      "Visual efficiency metrics showing usage, targets, and wastage at a glance",
      "One-click reorder actions directly from alerts and inventory tables",
      "High-end dark UI with intuitive charts, trends, and tables for fast decision-making"
    ]
  },
  {
    id: '03',
    title: 'finance overview & money management',
    description: 'Micro SaaS / Analytic Dashboard',
    tags: ['Micro SaaS', 'Analytic Dashboard'],
    imageUrl: 'https://image2url.com/images/1765976240588-7f408f01-1350-4e5b-8877-752b5035061a.png',
    clientNeeds: [
      "No single view of total balance, savings, investments, and cash flow",
      "Managing multiple wallets and currencies was fragmented and confusing",
      "Limited visibility into spending patterns and recent transactions",
      "Difficulty tracking financial growth and savings targets over time",
      "Needed a simple, clean interface suitable for everyday users"
    ],
    deliveredSolution: [
      "A centralized financial overview dashboard showing balances, savings, and investments",
      "Multi-wallet and multi-currency management with clear status indicators",
      "Visual cash flow analytics with monthly and yearly performance toggles",
      "Structured transaction history with search, filters, and clear statuses",
      "A modern, intuitive UI focused on clarity, accessibility, and control"
    ]
  },
  {
    id: '04',
    title: 'lead and pipeline management',
    description: 'Real Estate SaaS / Dashboard / Employee Management',
    tags: ['Real Estate SaaS', 'Dashboard', 'Employee Management'],
    imageUrl: 'https://image2url.com/images/1765976340183-bd496679-b129-40e0-84cc-eb51d29411dd.png',
    clientNeeds: [
      "Managing multiple leads without a clear, structured overview",
      "Difficulty tracking lead status, budgets, and last contact activity",
      "Missed follow-ups and expiring opportunities due to poor visibility",
      "Time-consuming manual lead prioritization and next-step planning",
      "No centralized place to connect leads with properties and transactions"
    ],
    deliveredSolution: [
      "A centralized lead management dashboard with clear lead cards and statuses",
      "Visual budget and opportunity tracking for each lead at a glance",
      "Built-in reminders and expiring alerts to prevent missed follow-ups",
      "AI-powered lead suggestions to guide next actions and outreach",
      "A clean, intuitive UI optimized for fast navigation and daily agent workflows"
    ]
  },
  {
    id: '05',
    title: 'portfolio discovery website',
    description: 'Portfolio / SaaS Application',
    tags: ['Portfolio', 'SaaS Application'],
    imageUrl: 'https://image2url.com/images/1765977402094-d409f9b8-c923-4e8a-b674-6f5e9dbabdd5.png',
    clientNeeds: [
      "Navigating through thousands of creative assets without effective visual hierarchy",
      "Balancing free community content with premium \"Pro\" services and advertisements",
      "Difficulty for recruiters or designers to quickly filter specific niches like UI/UX or Branding",
      "Lack of immediate visibility into social proof like likes and view counts for project prioritization",
      "Fragmented workflows requiring users to jump between inspiration galleries and stock photo sites"
    ],
    deliveredSolution: [
      "A centralized discovery dashboard with a robust, tag-based filtering system",
      "Visual \"Pro\" indicators and integrated CTA cards to drive platform subscriptions",
      "Data-rich project thumbnails showing engagement metrics and creator credits at a glance",
      "A dedicated \"CreativeStock\" section to bridge the gap between inspiration and asset acquisition",
      "A clean, minimalist UI optimized for high-density visual browsing and fast navigation"
    ]
  },
  {
    id: '06',
    title: 'DIGITAL MARKETING AGENCY',
    description: 'Agency Landing Page / Marketing Automations',
    tags: ['Agency Landing Page', 'Marketing Automations'],
    imageUrl: 'https://image2url.com/images/1765977527755-6a8069af-9a24-43f4-86b8-21a7b20c7caa.png',
    clientNeeds: [
      "High bounce rates due to cluttered or overwhelming initial landing page designs",
      "Difficulty establishing immediate brand authority and professional trust with new visitors",
      "Vague value propositions that fail to communicate specific services like automation or data-driven marketing",
      "Low conversion rates from visitors who are interested but not yet ready to book a direct call",
      "Poor mobile responsiveness or lack of clear visual hierarchy in dark-themed interfaces"
    ],
    deliveredSolution: [
      "A high-impact hero section with a bold, centralized value proposition and clear call-to-action",
      "Visual \"Accepting New Clients\" status indicator to create a sense of exclusivity and urgency",
      "Dual-action primary buttons allowing users to either \"Start Today\" or \"Watch Showreel\" for lower-friction engagement",
      "Streamlined navigation bar focusing on core conversion pillars: Services, Case Studies, Pricing, and About",
      "A premium dark-mode UI with a glowing typography effect to enhance readability and modern brand aesthetic"
    ]
  },
];

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onClick }) => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <Reveal delay={index * 0.1}>
      <div 
        className="group relative bg-[#080808] border border-white/5 overflow-hidden transition-all duration-500 hover:border-[#FFC107]/50 hover:shadow-[0_0_50px_rgba(255,193,7,0.1)] cursor-none rounded-sm"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onMouseMove={handleMouseMove}
        onClick={() => onClick(project)}
      >
        {/* Custom Cursor "OPEN" Button */}
        <div 
            className={`pointer-events-none absolute z-50 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#FFC107] text-black font-bold text-xs tracking-widest shadow-[0_0_30px_rgba(255,193,7,0.6)] transition-all duration-200 ease-out mix-blend-normal ${isHovering ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
            style={{ left: cursorPos.x, top: cursorPos.y }}
        >
            <span className="animate-pulse">VIEW</span>
        </div>

        {/* Image Container */}
        <div className="relative h-72 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent z-10 opacity-90 transition-opacity duration-500 group-hover:opacity-60" />
          <div className="absolute inset-0 bg-[#FFC107] mix-blend-overlay opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-20"></div>
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1 filter grayscale group-hover:grayscale-0"
          />
        </div>

        {/* Content */}
        <div className="p-8 relative z-20">
          <div className="flex justify-between items-start mb-4">
            <span className="text-[#FFC107] mono text-xl font-bold tracking-tight">{project.id}</span>
            <div className="p-2 border border-white/10 rounded-full group-hover:bg-[#FFC107] group-hover:text-black transition-colors duration-300">
               <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#FFC107] transition-colors uppercase tracking-tight">
            {project.title}
          </h3>
          
          <div className="flex flex-wrap gap-2 mt-4 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
              {project.tags.slice(0,3).map((tag, i) => (
                  <span key={i} className="px-2 py-1 bg-white/10 rounded text-[10px] md:text-xs text-gray-300 mono border border-white/5 whitespace-nowrap">
                    {tag}
                  </span>
              ))}
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#FFC107] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      </div>
    </Reveal>
  );
};

interface ModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-0 md:p-6"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ type: "spring", damping: 30, stiffness: 300 }}
          className="relative w-full h-full md:h-auto md:max-h-[95vh] md:max-w-7xl bg-[#050505] border-t border-b md:border border-white/10 md:rounded-xl shadow-[0_0_100px_rgba(0,0,0,1)] flex flex-col overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
            {/* Close Button - Floating */}
            <button
                onClick={onClose}
                className="absolute top-6 right-6 z-50 group flex items-center justify-center w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white transition-all duration-300 hover:bg-[#FFC107] hover:text-black hover:scale-110 hover:rotate-90 hover:border-[#FFC107]"
            >
                <X className="w-5 h-5" />
            </button>

            <div className="overflow-y-auto custom-scrollbar flex-1 bg-[#050505]">
                {/* Image Header Area - Fully Visible */}
                <div className="relative w-full bg-[#050505] border-b border-white/10">
                   <motion.img
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-auto block"
                   />
                </div>

                {/* Content Body */}
                <div className="p-8 md:p-12 lg:p-16 flex flex-col gap-12">
                    
                    {/* Header Section (Moved Below Image) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="px-3 py-1 border border-[#FFC107]/50 bg-[#FFC107]/10 text-[#FFC107] mono text-xs tracking-[0.2em] uppercase rounded-full">
                                Project ID: {project.id}
                            </span>
                        </div>
                        {/* Reduced Heading Size by approx 20% */}
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase tracking-tighter leading-tight mb-6">
                            {project.title}
                        </h2>
                        {/* Removed tags display in modal */}
                    </motion.div>

                    {/* Description Section */}
                     <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="pt-8 border-t border-white/10"
                     >
                         <h3 className="text-lg text-[#FFC107] font-bold mb-6 flex items-center gap-3 tracking-widest uppercase text-xs">
                            <span className="w-8 h-[1px] bg-[#FFC107]"></span>
                            Executive Summary
                         </h3>
                         <p className="text-gray-300 text-xl leading-relaxed font-light max-w-4xl">
                            {project.description}
                         </p>
                     </motion.div>

                    {/* Challenge & Solution Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                         {/* Challenge Column */}
                         {project.clientNeeds && (
                             <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                             >
                                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                   <span className="text-red-500 text-3xl font-light">/</span> 
                                   <span className="tracking-tight">THE CHALLENGE</span>
                                </h3>
                                <div className="grid grid-cols-1 gap-4">
                                    {project.clientNeeds.map((item, idx) => (
                                        <motion.div 
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.5 + (idx * 0.1) }}
                                            className="relative flex items-start gap-4 p-5 bg-red-500/[0.02] border border-red-500/10 hover:bg-red-500/[0.05] hover:border-red-500/30 transition-all duration-300 rounded-sm overflow-hidden group"
                                        >
                                            {/* Hover highlight bar */}
                                            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-red-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></div>
                                            
                                            <div className="shrink-0 mt-1 w-5 h-5 rounded-full border border-red-500/30 text-red-500 flex items-center justify-center">
                                                <AlertCircle className="w-3 h-3" />
                                            </div>
                                            <p className="text-gray-300 text-sm md:text-base leading-relaxed">{item}</p>
                                        </motion.div>
                                    ))}
                                </div>
                             </motion.div>
                         )}

                         {/* Solution Column */}
                         {project.deliveredSolution && (
                             <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                             >
                                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                   <span className="text-[#00FFFF] text-3xl font-light">/</span> 
                                   <span className="tracking-tight">WHAT WE DELIVER</span>
                                </h3>
                                <div className="grid grid-cols-1 gap-4">
                                    {project.deliveredSolution.map((item, idx) => (
                                        <motion.div 
                                            key={idx}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.7 + (idx * 0.1) }}
                                            className="relative flex items-start gap-4 p-5 bg-[#00FFFF]/[0.02] border border-[#00FFFF]/10 hover:bg-[#00FFFF]/[0.05] hover:border-[#00FFFF]/30 transition-all duration-300 rounded-sm overflow-hidden group"
                                        >
                                            {/* Hover highlight bar */}
                                            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#00FFFF] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></div>
                                            
                                            <div className="shrink-0 mt-1 w-5 h-5 rounded-full border border-[#00FFFF]/30 text-[#00FFFF] flex items-center justify-center">
                                                <CheckCircle2 className="w-3 h-3" />
                                            </div>
                                            <p className="text-gray-300 text-sm md:text-base leading-relaxed">{item}</p>
                                        </motion.div>
                                    ))}
                                </div>
                             </motion.div>
                         )}
                    </div>
                </div>
            </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="portfolio" className="relative py-32 px-6 z-10 border-t border-white/5 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
                <span className="text-[#FFC107]">///</span> RECENT PROJECTS
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Engineered for superior efficiency and user delight, our applications transcend the expected. Explore a space where cutting-edge design meets flawless functionality.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index} 
                onClick={setSelectedProject}
              />
            ))}
          </div>
        </div>
      </section>
      
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </>
  );
};

export default Portfolio;