import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  Code2,
  Users,
  Compass,
  CheckCircle2,
  Calendar,
  AlertTriangle,
} from 'lucide-react';
import { RECRUITMENT_CONFIG } from '../../data/recruitment';

interface RecruitmentHeroProps {
  onApplyClick: () => void;
  onExploreTeamsClick: () => void;
  isTestMode: boolean;
  onToggleTestMode: () => void;
}

export const RecruitmentHero: React.FC<RecruitmentHeroProps> = ({
  onApplyClick,
  onExploreTeamsClick,
  isTestMode,
  onToggleTestMode,
}) => {
  return (
    <div className="relative overflow-hidden pt-8 pb-12 sm:pb-16 text-left">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#3DDC84]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Recruitment Status Pill */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101512] border border-[#3DDC84]/30 shadow-lg shadow-black/50">
            <span className="relative flex h-2 w-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isTestMode ? 'bg-[#3DDC84]' : 'bg-amber-400'}`} />
              <span className={`relative inline-flex rounded-full h-2 w-2 ${isTestMode ? 'bg-[#3DDC84]' : 'bg-amber-500'}`} />
            </span>
            <span className="text-xs font-mono font-semibold text-slate-200">
              {isTestMode ? (
                <span className="text-[#3DDC84]">Interactive Evaluator Test Mode Active</span>
              ) : (
                <span className="text-amber-400">Recruitment Cycle 2025 · Officially Closed</span>
              )}
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-slate-400">
            <Calendar size={13} className="text-[#3DDC84]" />
            <span>Target: 2025 & 2026 Batches</span>
          </div>
        </div>

        {/* Headings */}
        <div className="max-w-4xl space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[#3DDC84] font-semibold block mb-2">
              {RECRUITMENT_CONFIG.subTitle}
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08]">
              {RECRUITMENT_CONFIG.title}
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-3xl leading-relaxed"
          >
            {RECRUITMENT_CONFIG.description}
          </motion.p>
        </div>

        {/* Value Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-8 pb-8"
        >
          <div className="p-3.5 rounded-2xl bg-[#0A0D0B] border border-white/5 hover:border-[#3DDC84]/30 transition group">
            <div className="w-8 h-8 rounded-lg bg-[#3DDC84]/10 text-[#3DDC84] flex items-center justify-center mb-2.5">
              <Code2 size={16} />
            </div>
            <h4 className="text-xs font-bold text-white mb-0.5">Technical Teams</h4>
            <p className="text-[11px] text-slate-400 leading-snug">Android, SDC, R&D & UI/UX</p>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#0A0D0B] border border-white/5 hover:border-[#3DDC84]/30 transition group">
            <div className="w-8 h-8 rounded-lg bg-[#3DDC84]/10 text-[#3DDC84] flex items-center justify-center mb-2.5">
              <Users size={16} />
            </div>
            <h4 className="text-xs font-bold text-white mb-0.5">Non-Technical Teams</h4>
            <p className="text-[11px] text-slate-400 leading-snug">EVM, Design, Media & PR</p>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#0A0D0B] border border-white/5 hover:border-[#3DDC84]/30 transition group">
            <div className="w-8 h-8 rounded-lg bg-[#3DDC84]/10 text-[#3DDC84] flex items-center justify-center mb-2.5">
              <Compass size={16} />
            </div>
            <h4 className="text-xs font-bold text-white mb-0.5">Learn & Grow</h4>
            <p className="text-[11px] text-slate-400 leading-snug">Bootcamps & Peer Mentorship</p>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#0A0D0B] border border-white/5 hover:border-[#3DDC84]/30 transition group">
            <div className="w-8 h-8 rounded-lg bg-[#3DDC84]/10 text-[#3DDC84] flex items-center justify-center mb-2.5">
              <Sparkles size={16} />
            </div>
            <h4 className="text-xs font-bold text-white mb-0.5">Flagship Events</h4>
            <p className="text-[11px] text-slate-400 leading-snug">Hackathons & Tech Meets</p>
          </div>

          <div className="col-span-2 sm:col-span-1 p-3.5 rounded-2xl bg-[#0A0D0B] border border-white/5 hover:border-[#3DDC84]/30 transition group">
            <div className="w-8 h-8 rounded-lg bg-[#3DDC84]/10 text-[#3DDC84] flex items-center justify-center mb-2.5">
              <CheckCircle2 size={16} />
            </div>
            <h4 className="text-xs font-bold text-white mb-0.5">Core Leadership</h4>
            <p className="text-[11px] text-slate-400 leading-snug">Lead Chapters & Projects</p>
          </div>
        </motion.div>

        {/* CTA Bar & Evaluator Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-white/10"
        >
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onApplyClick}
              className="px-6 py-3 rounded-xl bg-[#3DDC84] hover:bg-[#00FF87] text-black text-xs sm:text-sm font-bold transition flex items-center gap-2 shadow-lg shadow-[#3DDC84]/20 hover:shadow-[#3DDC84]/40"
            >
              <span>APPLY NOW</span>
              <ArrowRight size={16} />
            </button>

            <button
              onClick={onExploreTeamsClick}
              className="px-5 py-3 rounded-xl bg-[#101512] hover:bg-[#161d18] border border-[#3DDC84]/30 hover:border-[#3DDC84]/60 text-white text-xs sm:text-sm font-semibold transition flex items-center gap-2"
            >
              <span>EXPLORE TEAMS (10)</span>
            </button>
          </div>

          {/* Test / Recruiter Mode Switcher */}
          <div className="flex items-center gap-3 p-2.5 rounded-xl bg-[#0A0D0B] border border-white/10 text-xs">
            <div className="flex items-center gap-2">
              <AlertTriangle size={15} className="text-amber-400 shrink-0" />
              <span className="text-slate-300">
                Cycle closed (19 Sep 2025).{' '}
                <span className="text-slate-400">Want to test dynamic forms?</span>
              </span>
            </div>
            <button
              onClick={onToggleTestMode}
              className={`px-3 py-1.5 rounded-lg font-mono text-[11px] font-bold transition ${
                isTestMode
                  ? 'bg-[#3DDC84] text-black shadow-md shadow-[#3DDC84]/30'
                  : 'bg-white/10 text-slate-300 hover:text-white hover:bg-white/15'
              }`}
            >
              {isTestMode ? 'Test Mode: ON' : 'Enable Test Mode'}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
