import React from 'react';
import {
  Calendar,
  Clock,
  Mail,
  Phone,
  UserCheck,
  GraduationCap,
  AlertCircle,
  Sparkles,
} from 'lucide-react';
import { RECRUITMENT_CONFIG } from '../../data/recruitment';

interface RecruitmentInfoPanelProps {
  isTestMode: boolean;
  onToggleTestMode: () => void;
  onStartApplication: () => void;
}

export const RecruitmentInfoPanel: React.FC<RecruitmentInfoPanelProps> = ({
  isTestMode,
  onToggleTestMode,
  onStartApplication,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-left">
      {/* Official Status Notice Banner */}
      {!isTestMode ? (
        <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-[#140F08] border border-amber-500/30 text-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 mt-0.5 shrink-0">
              <AlertCircle size={20} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-amber-300">
                Applications for this recruitment cycle are closed.
              </h4>
              <p className="text-xs text-amber-200/80 mt-1 max-w-2xl leading-relaxed">
                The registration deadline was <strong>{RECRUITMENT_CONFIG.deadlineFormatted}</strong> for the 2025–2026 academic year intake. For queries, contact our coordinators below or enable Interactive Test Mode to preview and test the complete application wizard.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={onToggleTestMode}
              className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold transition flex items-center gap-1.5 shadow-md"
            >
              <Sparkles size={14} />
              <span>Launch Evaluator Preview</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-[#09150E] border border-[#3DDC84]/40 text-[#A3E635] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-[#3DDC84]/20 text-[#3DDC84] mt-0.5 shrink-0">
              <Sparkles size={20} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#3DDC84]">
                Evaluator Test Mode Active (Full 6-Step Dynamic Form Unlocked)
              </h4>
              <p className="text-xs text-slate-300 mt-1 max-w-2xl leading-relaxed">
                You can freely navigate through all 6 steps, test role-specific dynamic question branching for all 10 teams, test form validation rules, and simulate application reference ID generation.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={onStartApplication}
              className="px-4 py-2 rounded-xl bg-[#3DDC84] hover:bg-[#00FF87] text-black text-xs font-bold transition flex items-center gap-1.5 shadow-md"
            >
              <span>Go to Application Form</span>
            </button>
            <button
              onClick={onToggleTestMode}
              className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-slate-300 text-xs font-medium transition"
            >
              Exit Test Mode
            </button>
          </div>
        </div>
      )}

      {/* Info Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Target Batches */}
        <div className="p-5 rounded-2xl bg-[#0A0D0B] border border-white/5 hover:border-[#3DDC84]/30 transition space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono text-[#3DDC84] uppercase tracking-wider font-semibold">
              Eligibility
            </span>
            <div className="w-7 h-7 rounded-lg bg-[#3DDC84]/10 text-[#3DDC84] flex items-center justify-center">
              <GraduationCap size={15} />
            </div>
          </div>
          <h4 className="text-sm font-bold text-white">Target Batches</h4>
          <div className="space-y-1.5 pt-1">
            {RECRUITMENT_CONFIG.targetBatches.map((batch, idx) => (
              <div
                key={idx}
                className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-xs text-slate-200 font-medium"
              >
                {batch}
              </div>
            ))}
          </div>
          <p className="text-[11px] text-slate-400 pt-1">
            Open exclusively for students of VIT Bhopal University.
          </p>
        </div>

        {/* Registration Deadline */}
        <div className="p-5 rounded-2xl bg-[#0A0D0B] border border-white/5 hover:border-[#3DDC84]/30 transition space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider font-semibold">
              Schedule
            </span>
            <div className="w-7 h-7 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center">
              <Clock size={15} />
            </div>
          </div>
          <h4 className="text-sm font-bold text-white">Registration Deadline</h4>
          <div className="p-2.5 rounded-xl bg-[#140F08] border border-amber-500/20 text-xs text-amber-200 font-mono font-medium">
            19 September 2025
            <span className="block text-[11px] text-amber-400/80">11:59 PM IST (Closed)</span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-slate-400 pt-1">
            <Mail size={12} className="text-[#3DDC84]" />
            <a
              href={`mailto:${RECRUITMENT_CONFIG.officialEmail}`}
              className="text-slate-300 hover:text-[#3DDC84] underline underline-offset-2 transition"
            >
              {RECRUITMENT_CONFIG.officialEmail}
            </a>
          </div>
        </div>

        {/* Faculty Coordinator */}
        <div className="p-5 rounded-2xl bg-[#0A0D0B] border border-white/5 hover:border-[#3DDC84]/30 transition space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono text-[#3DDC84] uppercase tracking-wider font-semibold">
              Faculty Mentor
            </span>
            <div className="w-7 h-7 rounded-lg bg-[#3DDC84]/10 text-[#3DDC84] flex items-center justify-center">
              <UserCheck size={15} />
            </div>
          </div>
          <h4 className="text-sm font-bold text-white">
            {RECRUITMENT_CONFIG.facultyCoordinator.name}
          </h4>
          <p className="text-xs text-slate-400">
            {RECRUITMENT_CONFIG.facultyCoordinator.role} · VIT Bhopal University
          </p>
          <div className="pt-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#3DDC84]/10 text-[#3DDC84] text-[11px] font-mono">
              Academic Advisory & Governance
            </span>
          </div>
        </div>

        {/* Student Coordinators */}
        <div className="p-5 rounded-2xl bg-[#0A0D0B] border border-white/5 hover:border-[#3DDC84]/30 transition space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono text-[#3DDC84] uppercase tracking-wider font-semibold">
              Point of Contact
            </span>
            <div className="w-7 h-7 rounded-lg bg-[#3DDC84]/10 text-[#3DDC84] flex items-center justify-center">
              <Phone size={15} />
            </div>
          </div>
          <h4 className="text-sm font-bold text-white">Student Coordinators</h4>
          <div className="space-y-2 pt-1 text-xs">
            {RECRUITMENT_CONFIG.studentCoordinators.map((coordinator, idx) => (
              <div key={idx} className="flex items-center justify-between border-b border-white/5 pb-1.5 last:border-0 last:pb-0">
                <span className="text-slate-200 font-medium">{coordinator.name}</span>
                <a
                  href={`tel:${coordinator.phone?.replace(/\s+/g, '')}`}
                  className="font-mono text-slate-400 hover:text-[#3DDC84] text-[11px] transition"
                >
                  {coordinator.phone}
                </a>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-slate-500 pt-1">
            Available on WhatsApp / Call during recruitment query hours.
          </p>
        </div>
      </div>
    </div>
  );
};
