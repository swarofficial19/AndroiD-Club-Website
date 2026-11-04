import React from 'react';
import { ArrowRight, Sparkles, Code2, Users, Rocket, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { CLUB_IDENTITY } from '../data/club';

interface JoinCommunityProps {
  onOpenJoinModal: () => void;
}

export const JoinCommunity: React.FC<JoinCommunityProps> = ({ onOpenJoinModal }) => {
  const perks = [
    {
      icon: Code2,
      title: 'Real-World Peer Mentorship',
      desc: 'Learn Kotlin, modern Android Jetpack Compose, and system design alongside senior student builders.',
    },
    {
      icon: Rocket,
      title: 'Hackathon Incubation',
      desc: 'Form teams for Advitya, Geek Rush, and national hackathons to build production-grade prototypes.',
    },
    {
      icon: Users,
      title: 'Open Collaborative Culture',
      desc: 'No prior experience required. Curiosity, consistency, and excitement to build come first.',
    },
    {
      icon: Award,
      title: 'Authentic Portfolio Projects',
      desc: 'Develop real mobile applications, full-stack tools, and research experiments deployed to GitHub.',
    },
  ];

  return (
    <section className="py-24 bg-transparent relative border-t border-[#3DDC84]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Glow backdrop card */}
        <div className="relative rounded-[36px] bg-[#0A0D0B] border border-[#3DDC84]/25 p-8 sm:p-12 lg:p-16 text-center overflow-hidden glow-card">
          
          {/* Subtle background glow */}
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#3DDC84]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#00FF87]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header Content */}
          <div className="relative max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101512] border border-[#3DDC84]/30 text-xs font-semibold text-slate-300 mb-4 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00FF87]" />
              <span className="text-[#00FF87]">{CLUB_IDENTITY.subName}</span>
              <span className="text-slate-500">·</span>
              <span className="text-white">{CLUB_IDENTITY.institution}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
              &ldquo;{CLUB_IDENTITY.communityMessage}&rdquo;
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed [text-wrap:balance]">
              {CLUB_IDENTITY.motto} Join our student-driven community at VIT Bhopal to master Android engineering, explore modern web stacks, and experiment with on-device machine learning.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenJoinModal}
                className="px-8 py-4 rounded-xl bg-[#3DDC84] hover:bg-[#00FF87] text-black font-bold text-sm transition-all duration-200 shadow-lg shadow-[#3DDC84]/25 inline-flex items-center gap-2"
              >
                <span>Join Our Community</span>
                <ArrowRight size={16} strokeWidth={2.5} />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="px-8 py-4 rounded-xl bg-[#000000] hover:bg-[#101512] text-white font-semibold text-sm border border-[#3DDC84]/25 hover:border-[#3DDC84]/60 transition-all duration-200"
              >
                Connect With Us
              </motion.a>
            </div>
          </div>

          {/* Perks Grid */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left pt-6 border-t border-[#3DDC84]/15">
            {perks.map((perk, idx) => {
              const Icon = perk.icon;
              return (
                <div 
                  key={idx} 
                  className="p-5 rounded-2xl bg-[#000000]/70 border border-[#3DDC84]/15 hover:border-[#3DDC84]/40 transition duration-150"
                >
                  <div className="w-10 h-10 rounded-xl border border-[#3DDC84]/30 bg-[#3DDC84]/10 flex items-center justify-center mb-3 text-[#3DDC84]">
                    <Icon size={18} />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1.5">{perk.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{perk.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center text-xs text-slate-400 font-mono">
            {CLUB_IDENTITY.address}
          </div>

        </div>

      </div>
    </section>
  );
};
