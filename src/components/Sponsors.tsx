import React from 'react';
import { Sparkles, Handshake, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { SPONSORS_PARTNERS } from '../data/sponsors';
import { fadeIn, staggerContainer } from '../utils/motion';

export const Sponsors: React.FC = () => {
  return (
    <section id="sponsors" className="py-24 bg-transparent relative border-t border-[#3DDC84]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-left max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101512] border border-[#3DDC84]/30 text-xs font-semibold text-[#3DDC84] mb-3 font-mono">
            <Handshake size={14} />
            <span>ECOSYSTEM COLLABORATIONS</span>
            <span className="text-slate-500">·</span>
            <span className="text-white">INDUSTRY ALLIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
            OUR SPONSORS & PARTNERS
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed [text-wrap:balance]">
            Organizations and platforms that have supported our technical events, hackathons, workshops and student community initiatives at VIT Bhopal.
          </p>
        </motion.div>

        {/* 9 Sponsor Brand Cards Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {SPONSORS_PARTNERS.map((sponsor, idx) => (
            <motion.div
              key={sponsor.id}
              variants={fadeIn('up', idx * 0.05)}
              whileHover={{ scale: 1.03, y: -4 }}
              className="p-6 sm:p-7 rounded-2xl bg-[#0A0D0B] border border-[#3DDC84]/20 hover:border-[#3DDC84]/60 transition-all duration-300 text-left flex flex-col justify-between glow-card group shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    PARTNER 0{idx + 1}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#3DDC84]/40 group-hover:bg-[#00FF87] group-hover:shadow-[0_0_8px_#00FF87] transition-all" />
                </div>

                {/* Clean, high-contrast typography brand treatment */}
                <h3 className="text-2xl font-extrabold text-white tracking-tight group-hover:text-[#00FF87] transition-colors mb-2">
                  {sponsor.name}
                </h3>

                <p className="text-xs font-mono text-[#3DDC84] mb-3">
                  {sponsor.category}
                </p>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {sponsor.tagline}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Verified Partner</span>
                <span className="text-[#3DDC84]">SDC Android Club</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
