import React from 'react';
import { Instagram, Linkedin, Youtube, Globe, Sparkles, Share2, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import { SOCIAL_CHANNELS } from '../data/social';
import { fadeIn, staggerContainer } from '../utils/motion';

export const CommunitySocial: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'instagram':
        return <Instagram size={28} className="text-[#3DDC84]" />;
      case 'linkedin':
        return <Linkedin size={28} className="text-[#00FF87]" />;
      case 'youtube':
        return <Youtube size={28} className="text-[#3DDC84]" />;
      case 'community':
      default:
        return <Globe size={28} className="text-[#00FF87]" />;
    }
  };

  return (
    <section id="community-social" className="py-24 bg-transparent relative border-t border-[#3DDC84]/15">
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
            <Share2 size={14} />
            <span>COMMUNITY FOOTPRINT</span>
            <span className="text-slate-500">·</span>
            <span className="text-white">VIT BHOPAL</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
            CONNECT WITH OUR COMMUNITY
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed [text-wrap:balance]">
            Join our growing ecosystem of student developers, UI designers, and technology enthusiasts across our digital channels and campus events.
          </p>
        </motion.div>

        {/* Four Social Channels Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SOCIAL_CHANNELS.map((item, idx) => (
            <motion.div
              key={item.id}
              variants={fadeIn('up', idx * 0.1)}
              whileHover={{ scale: 1.02, y: -4 }}
              className="p-7 rounded-3xl bg-[#0A0D0B] border border-[#3DDC84]/25 hover:border-[#3DDC84]/60 transition-all duration-300 text-left flex flex-col justify-between glow-card shadow-xl group"
            >
              <div>
                {/* Channel Icon & Sublabel */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3.5 rounded-2xl bg-[#101512] border border-[#3DDC84]/20 group-hover:bg-[#3DDC84]/10 transition-colors">
                    {getIcon(item.id)}
                  </div>

                  <span className="px-2.5 py-1 rounded-full bg-[#050806] border border-white/10 text-[10px] font-mono text-[#00FF87] uppercase tracking-wider">
                    {item.sublabel}
                  </span>
                </div>

                <p className="text-xs font-mono text-slate-400 mb-1">
                  {item.platform}
                </p>

                <h3 className="text-3xl font-extrabold text-white tracking-tight font-mono mb-3">
                  {item.followers}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed font-sans mb-4">
                  {item.actionHint}
                </p>
              </div>

              {/* Informative placeholder indicator without inventing external links */}
              <div className="pt-4 border-t border-[#3DDC84]/15 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Official Channel</span>
                <span className="text-[#3DDC84] flex items-center gap-1">
                  <Info size={12} /> Verified
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
