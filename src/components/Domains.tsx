import React from 'react';
import { Smartphone, Globe, Cpu, Palette, ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { DOMAINS } from '../data/domains';
import { fadeIn, staggerContainer } from '../utils/motion';

export const Domains: React.FC = () => {
  const getDomainIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone':
        return <Smartphone size={28} className="text-[#3DDC84]" />;
      case 'Globe':
        return <Globe size={28} className="text-[#00FF87]" />;
      case 'Cpu':
        return <Cpu size={28} className="text-[#3DDC84]" />;
      case 'Palette':
      default:
        return <Palette size={28} className="text-[#00FF87]" />;
    }
  };

  return (
    <section id="domains" className="py-24 bg-transparent relative border-t border-[#3DDC84]/15">
      {/* Background glow highlights */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#3DDC84]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#00FF87]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-left max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101512] border border-[#3DDC84]/30 text-xs font-semibold text-[#3DDC84] mb-3 font-mono">
            <Sparkles size={14} />
            <span>TECHNICAL DOMAINS</span>
            <span className="text-slate-500">·</span>
            <span className="text-white">VIT BHOPAL CHAPTER</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
            WHAT DO WE STAND FOR?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed [text-wrap:balance]">
            Our club operates across four interconnected technical specializations, giving student developers comprehensive hands-on exposure from design heuristics to system deployment.
          </p>
        </motion.div>

        {/* Four Detailed Domain Cards Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {DOMAINS.map((domain, idx) => (
            <motion.div
              key={domain.id}
              variants={fadeIn('up', idx * 0.1)}
              whileHover={{ scale: 1.02, y: -4 }}
              className="p-8 rounded-3xl bg-[#0A0D0B] border border-[#3DDC84]/25 hover:border-[#3DDC84]/60 transition-all duration-300 text-left flex flex-col justify-between glow-card shadow-xl group"
            >
              <div>
                {/* Header: Domain Number + Icon + Title */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3.5 rounded-2xl bg-[#101512] border border-[#3DDC84]/20 group-hover:border-[#3DDC84]/50 group-hover:bg-[#3DDC84]/10 transition-colors">
                      {getDomainIcon(domain.icon)}
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-[#3DDC84] tracking-wider uppercase">
                        Domain {domain.domainNumber}
                      </span>
                      <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-[#00FF87] transition-colors">
                        {domain.title}
                      </h3>
                    </div>
                  </div>

                  <span className="text-slate-600 font-mono text-xs">
                    0{idx + 1} / 04
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-sans">
                  {domain.description}
                </p>

                {/* Focus Areas List */}
                <div className="space-y-2.5 mb-8">
                  <p className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Core Focus Areas:
                  </p>
                  {domain.focusAreas.map((area, fIdx) => (
                    <div 
                      key={fIdx}
                      className="flex items-center gap-2.5 text-xs text-slate-200"
                    >
                      <CheckCircle2 size={15} className="text-[#3DDC84] shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Domain Badge & Interactive Tag */}
              <div className="pt-5 border-t border-[#3DDC84]/15 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">
                  Student Cohorts & Workshops
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#00FF87] group-hover:translate-x-0.5 transition-transform">
                  Active Track <ArrowUpRight size={14} />
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
