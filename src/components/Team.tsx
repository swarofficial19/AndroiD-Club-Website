import React, { useState } from 'react';
import { Quote, Sparkles, ChevronRight, X, UserCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { LEADERSHIP_TEAM } from '../data/team';
import { LeaderProfile } from '../types';
import { fadeIn, staggerContainer } from '../utils/motion';

export const Team: React.FC = () => {
  const [selectedLeader, setSelectedLeader] = useState<LeaderProfile | null>(null);

  return (
    <section id="team" className="py-24 bg-transparent relative border-t border-[#3DDC84]/15">
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
            <Sparkles size={14} />
            <span>LEADERSHIP & PILLARS</span>
            <span className="text-slate-500">·</span>
            <span className="text-white">SDC ANDROID CLUB</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
            MEET THE PEOPLE BEHIND THE COMMUNITY
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed [text-wrap:balance]">
            Our elected leadership team guides technical strategy, leads hackathon sprints, manages university operations, and fosters an inclusive peer environment.
          </p>
        </motion.div>

        {/* 6 Leadership Cards Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {LEADERSHIP_TEAM.map((member, idx) => (
            <motion.div
              key={member.id}
              variants={fadeIn('up', idx * 0.1)}
              whileHover={{ scale: 1.02, y: -4 }}
              className="p-6 sm:p-7 rounded-3xl bg-[#0A0D0B] border border-[#3DDC84]/25 hover:border-[#3DDC84]/60 transition-all duration-300 text-left flex flex-col justify-between glow-card shadow-xl group"
            >
              <div>
                {/* Header: Initials Avatar + Role Badge */}
                <div className="flex items-start justify-between mb-5">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#101512] to-[#050806] border border-[#3DDC84]/40 flex items-center justify-center text-xl font-bold font-mono text-[#00FF87] shadow-[0_0_20px_-5px_rgba(61,220,132,0.3)] group-hover:border-[#3DDC84] transition-colors">
                    {member.initials}
                  </div>

                  <span className="px-3 py-1 rounded-full bg-[#101512] border border-[#3DDC84]/30 text-xs font-mono font-semibold text-[#3DDC84]">
                    {member.role}
                  </span>
                </div>

                {/* Name & Focus Domain */}
                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#00FF87] transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs text-slate-400 font-mono mb-4">
                  {member.focusDomain}
                </p>

                {/* Quote Excerpt */}
                <div className="p-4 rounded-2xl bg-[#050806] border border-[#3DDC84]/15 mb-4 relative">
                  <Quote size={16} className="text-[#3DDC84]/40 mb-1" />
                  <p className="text-xs text-slate-300 italic leading-relaxed line-clamp-3">
                    &ldquo;{member.quote}&rdquo;
                  </p>
                </div>
              </div>

              {/* Read Full Quote / Expand Interaction */}
              <button
                onClick={() => setSelectedLeader(member)}
                className="w-full pt-3 border-t border-[#3DDC84]/15 flex items-center justify-between text-xs font-semibold text-[#3DDC84] hover:text-[#00FF87] transition-colors group-hover:translate-x-0.5"
              >
                <span>Read Full Message</span>
                <ChevronRight size={15} />
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal / Dialog for Full Quote */}
        <AnimatePresence>
          {selectedLeader && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-lg rounded-3xl bg-[#0A0D0B] border border-[#3DDC84]/30 shadow-2xl p-6 sm:p-8 text-left"
              >
                <button 
                  onClick={() => setSelectedLeader(null)}
                  aria-label="Close message"
                  className="absolute top-5 right-5 p-2 rounded-full bg-white/5 text-slate-400 hover:text-[#3DDC84] hover:bg-[#3DDC84]/10 transition"
                >
                  <X size={20} />
                </button>

                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-[#101512] border border-[#3DDC84]/40 flex items-center justify-center text-lg font-bold font-mono text-[#00FF87]">
                    {selectedLeader.initials}
                  </div>
                  <div>
                    <span className="text-xs font-mono font-semibold text-[#3DDC84] uppercase tracking-wider">
                      {selectedLeader.role}
                    </span>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {selectedLeader.name}
                    </h3>
                    <p className="text-xs text-slate-400 font-mono">
                      {selectedLeader.focusDomain}
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#050806] border border-[#3DDC84]/20 mb-6">
                  <Quote size={20} className="text-[#3DDC84] mb-2" />
                  <p className="text-sm text-slate-200 leading-relaxed italic">
                    &ldquo;{selectedLeader.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-slate-400 font-mono border-t border-[#3DDC84]/15">
                  <span>SDC Android Club · VIT Bhopal</span>
                  <button
                    onClick={() => setSelectedLeader(null)}
                    className="px-4 py-2 rounded-xl bg-[#3DDC84] hover:bg-[#00FF87] text-black font-semibold text-xs transition"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
