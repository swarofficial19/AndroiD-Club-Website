import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Smartphone,
  Server,
  Cpu,
  Palette,
  CalendarCheck,
  Brush,
  FileText,
  Coins,
  Video,
  Megaphone,
  Check,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  ArrowRight,
} from 'lucide-react';
import { TEAMS_LIST } from '../../data/recruitment';
import { TeamDefinition, TeamId } from '../../types/recruitment';

interface TeamBrowserProps {
  selectedTeamId?: TeamId | '';
  onSelectTeam: (teamId: TeamId) => void;
}

export const TeamBrowser: React.FC<TeamBrowserProps> = ({
  selectedTeamId,
  onSelectTeam,
}) => {
  const [filter, setFilter] = useState<'All' | 'Technical' | 'Non-Technical'>('All');
  const [expandedTeamId, setExpandedTeamId] = useState<TeamId | null>(null);

  const filteredTeams = TEAMS_LIST.filter((t) => {
    if (filter === 'All') return true;
    return t.category === filter;
  });

  const getTeamIcon = (iconName: string) => {
    const props = { size: 20 };
    switch (iconName) {
      case 'Smartphone':
        return <Smartphone {...props} />;
      case 'Server':
        return <Server {...props} />;
      case 'Cpu':
        return <Cpu {...props} />;
      case 'Palette':
        return <Palette {...props} />;
      case 'CalendarCheck':
        return <CalendarCheck {...props} />;
      case 'Brush':
        return <Brush {...props} />;
      case 'FileText':
        return <FileText {...props} />;
      case 'Coins':
        return <Coins {...props} />;
      case 'Video':
        return <Video {...props} />;
      case 'Megaphone':
        return <Megaphone {...props} />;
      default:
        return <Smartphone {...props} />;
    }
  };

  const toggleExpand = (teamId: TeamId) => {
    setExpandedTeamId(expandedTeamId === teamId ? null : teamId);
  };

  return (
    <div id="teams-browser" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-left">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#3DDC84] font-semibold block mb-1">
            Choose Your Arena
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            10 Specialized Teams & Divisions
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
            Whether you engineer low-level Kotlin apps, scale web backends, conduct AI research, or orchestrate high-impact events and visual branding — there is a dedicated home for you.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#0A0D0B] border border-white/10 self-start md:self-auto">
          {(['All', 'Technical', 'Non-Technical'] as const).map((tab) => {
            const count =
              tab === 'All'
                ? TEAMS_LIST.length
                : TEAMS_LIST.filter((t) => t.category === tab).length;
            const isActive = filter === tab;
            return (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
                  isActive
                    ? 'bg-[#3DDC84] text-black shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Teams Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredTeams.map((team) => {
          const isSelected = selectedTeamId === team.id;
          const isExpanded = expandedTeamId === team.id;

          return (
            <motion.div
              key={team.id}
              layout
              className={`rounded-2xl bg-[#0A0D0B] border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                isSelected
                  ? 'border-[#3DDC84] shadow-xl shadow-[#3DDC84]/15 ring-1 ring-[#3DDC84]'
                  : 'border-white/10 hover:border-[#3DDC84]/40 hover:shadow-lg hover:shadow-black'
              }`}
            >
              <div className="p-5 sm:p-6 space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between gap-3">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center border transition"
                    style={{
                      backgroundColor: `${team.accentColor}15`,
                      color: team.accentColor,
                      borderColor: `${team.accentColor}30`,
                    }}
                  >
                    {getTeamIcon(team.icon)}
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider ${
                        team.category === 'Technical'
                          ? 'bg-[#3DDC84]/10 text-[#3DDC84] border border-[#3DDC84]/20'
                          : 'bg-purple-500/10 text-purple-300 border border-purple-500/20'
                      }`}
                    >
                      {team.category}
                    </span>
                  </div>
                </div>

                {/* Team Info */}
                <div>
                  <h4 className="text-lg font-bold text-white group-hover:text-[#3DDC84] transition">
                    {team.name}
                  </h4>
                  <p className="text-xs font-mono text-slate-400 mt-0.5 leading-snug">
                    {team.tagline}
                  </p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {team.description}
                </p>

                {/* Key Skills Tags */}
                <div>
                  <span className="text-[10px] uppercase font-mono text-slate-500 font-semibold block mb-2">
                    Key Domains & Tools:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {team.keySkills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-[11px] text-slate-300 font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expandable Questionnaire Preview */}
                <div className="pt-2 border-t border-white/5">
                  <button
                    onClick={() => toggleExpand(team.id)}
                    className="w-full flex items-center justify-between text-left text-xs font-medium text-slate-400 hover:text-[#3DDC84] transition py-1"
                  >
                    <span className="flex items-center gap-1.5">
                      <HelpCircle size={13} className="text-[#3DDC84]" />
                      <span>{team.roleQuestions.length} Role-Specific Questions</span>
                    </span>
                    {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-2 mt-2 pt-2 border-t border-white/5 text-[11px] text-slate-400"
                      >
                        {team.roleQuestions.map((q, qIdx) => (
                          <div key={q.id} className="p-2 rounded-lg bg-black/40 border border-white/5">
                            <span className="font-mono text-[#3DDC84] font-semibold mr-1.5">
                              Q{qIdx + 1}:
                            </span>
                            <span className="text-slate-300">{q.label}</span>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-4 bg-white/[0.02] border-t border-white/5 flex items-center justify-between gap-3">
                {isSelected ? (
                  <div className="flex items-center gap-2 text-xs font-bold text-[#3DDC84]">
                    <Check size={16} />
                    <span>Selected as Primary Choice</span>
                  </div>
                ) : (
                  <span className="text-xs text-slate-400">
                    Ready to join this track?
                  </span>
                )}

                <button
                  onClick={() => onSelectTeam(team.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-[#3DDC84] text-black shadow-md'
                      : 'bg-white/5 hover:bg-[#3DDC84] text-white hover:text-black border border-white/10 hover:border-transparent'
                  }`}
                >
                  <span>{isSelected ? 'Selected' : 'Select Team'}</span>
                  {!isSelected && <ArrowRight size={13} />}
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
