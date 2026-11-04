import React, { useState } from 'react';
import { Compass, Sparkles, Code2, Users, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { ABOUT_INFO, CLUB_IDENTITY } from '../data/club';
import { fadeIn, staggerContainer } from '../utils/motion';

interface AboutProps {
  onOpenJoinModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenJoinModal }) => {
  const [activeValueIndex, setActiveValueIndex] = useState<number>(0);

  const getValueIcon = (id: string) => {
    switch (id) {
      case 'exploration':
        return <Compass size={22} className="text-[#3DDC84]" />;
      case 'discovery':
        return <Sparkles size={22} className="text-[#00FF87]" />;
      case 'development':
        return <Code2 size={22} className="text-[#3DDC84]" />;
      case 'community':
      default:
        return <Users size={22} className="text-[#00FF87]" />;
    }
  };

  const domainPillars = [
    'Android Development',
    'Web Development',
    'Research & Development (RnD)',
    'UI/UX Design',
    'Machine Learning',
    'Internet of Things (IoT)',
    'Cybersecurity',
    'Open Source & Mentorship',
  ];

  return (
    <section id="about" className="py-24 bg-transparent relative border-t border-[#3DDC84]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16 text-left"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101512] border border-[#3DDC84]/30 text-xs font-semibold text-slate-300 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3DDC84]" />
            <span className="text-[#3DDC84] font-mono">{CLUB_IDENTITY.subName}</span>
            <span className="text-slate-500">·</span>
            <span className="text-white font-mono">{CLUB_IDENTITY.institution}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
            {ABOUT_INFO.heading}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed [text-wrap:balance]">
            {ABOUT_INFO.lead}
          </p>
        </motion.div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          
          {/* Left Column: Mission Philosophy & Four Values Grid */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6 text-left">
            
            {/* Club Philosophy Callout */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-7 rounded-3xl bg-[#0A0D0B] border border-[#3DDC84]/25 glow-card"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-[#00FF87] uppercase tracking-wider mb-2">
                <Sparkles size={16} /> Club Philosophy
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-2 font-mono">
                &ldquo;{CLUB_IDENTITY.philosophy}&rdquo;
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                Our foundational ethos is built upon constant exploration of emerging frontiers, experimental discovery through collaborative code labs, and the deliberate development of resilient, real-world systems.
              </p>
            </motion.div>

            {/* Four Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ABOUT_INFO.values.map((val, idx) => (
                <motion.div
                  key={val.id}
                  onClick={() => setActiveValueIndex(idx)}
                  whileHover={{ scale: 1.02 }}
                  className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer text-left ${
                    activeValueIndex === idx
                      ? 'bg-[#101512] border-[#3DDC84]/60 shadow-[0_0_20px_-5px_rgba(61,220,132,0.35)]'
                      : 'bg-[#0A0D0B] border-white/10 hover:border-[#3DDC84]/30'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs text-[#3DDC84] font-semibold">
                      {val.number}
                    </span>
                    <div className="p-2 rounded-xl bg-[#000000]/60 border border-white/5">
                      {getValueIcon(val.id)}
                    </div>
                  </div>

                  <h4 className="text-base font-bold text-white mb-1.5 flex items-center gap-1.5">
                    {val.title}
                  </h4>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {val.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Technology Domains Pill Strip */}
            <div>
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                Key Technical & Academic Horizons:
              </p>
              <div className="flex flex-wrap gap-2">
                {domainPillars.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl bg-[#101512] border border-[#3DDC84]/20 text-xs text-[#3DDC84] font-mono font-medium hover:border-[#00FF87] hover:bg-[#3DDC84]/5 transition"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Focus Showcase & Community Onboarding */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 text-left">
            
            {/* Interactive Selected Value Deep-Dive */}
            <motion.div 
              key={activeValueIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="p-7 rounded-3xl bg-gradient-to-b from-[#101512] via-[#0A0D0B] to-[#050706] border border-[#3DDC84]/30 shadow-xl flex-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#3DDC84]/15 border border-[#3DDC84]/30 text-xs font-mono text-[#00FF87] font-semibold">
                    Core Value #{ABOUT_INFO.values[activeValueIndex].number}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {ABOUT_INFO.values[activeValueIndex].highlight}
                  </span>
                </div>

                <h3 className="text-3xl font-bold text-white tracking-tight mb-3">
                  {ABOUT_INFO.values[activeValueIndex].title}
                </h3>

                <p className="text-sm text-slate-200 leading-relaxed mb-6">
                  {ABOUT_INFO.values[activeValueIndex].description}
                </p>

                <div className="space-y-3 pt-2 border-t border-[#3DDC84]/15">
                  <div className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 size={16} className="text-[#3DDC84] shrink-0 mt-0.5" />
                    <span>Hands-on learning through project cohorts and mentor-led peer groups.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 size={16} className="text-[#3DDC84] shrink-0 mt-0.5" />
                    <span>From Android Native to Full-Stack Web and on-device ML prototypes.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 size={16} className="text-[#3DDC84] shrink-0 mt-0.5" />
                    <span>Participation in university tech fests like Advitya and national hackathons.</span>
                  </div>
                </div>
              </div>

              {/* Motto Card & Join Action */}
              <div className="mt-8 pt-5 border-t border-[#3DDC84]/20">
                <div className="p-4 rounded-2xl bg-[#000000]/70 border border-[#3DDC84]/25 mb-4">
                  <p className="text-xs text-slate-400 font-mono mb-1">Club Motto</p>
                  <p className="text-sm font-bold text-[#00FF87] font-mono">
                    &ldquo;{CLUB_IDENTITY.motto}&rdquo;
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onOpenJoinModal}
                  className="w-full py-3.5 rounded-xl bg-[#3DDC84] hover:bg-[#00FF87] text-black font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-lg shadow-[#3DDC84]/25 flex items-center justify-center gap-2"
                >
                  <span>Become a Member Today</span>
                  <ArrowRight size={15} />
                </motion.button>
              </div>

            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
