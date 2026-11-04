import React, { useState } from 'react';
import {
  CheckCircle2,
  Copy,
  Check,
  Calendar,
  Download,
  RotateCcw,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Phone,
} from 'lucide-react';
import { SubmittedApplicationRecord } from '../../types/recruitment';
import { RECRUITMENT_CONFIG } from '../../data/recruitment';

interface ApplicationSuccessCardProps {
  submission: SubmittedApplicationRecord;
  onReset: () => void;
}

export const ApplicationSuccessCard: React.FC<ApplicationSuccessCardProps> = ({
  submission,
  onReset,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(submission.referenceId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadSlip = () => {
    const slipData = {
      referenceId: submission.referenceId,
      submittedAt: submission.submittedAt,
      applicant: {
        name: submission.data.fullName,
        registrationNumber: submission.data.regNumber,
        collegeEmail: submission.data.collegeEmail,
        batch: submission.data.batch,
        branch: submission.data.degreeBranch,
      },
      preferences: {
        primaryTeam: submission.primaryTeamName,
        secondaryTeam: submission.secondaryTeamName || 'None',
      },
      officialCoordinators: RECRUITMENT_CONFIG.studentCoordinators,
    };

    const blob = new Blob([JSON.stringify(slipData, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `AndroidClub-Application-${submission.referenceId}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#0A0D0B] border border-[#3DDC84]/30 shadow-2xl text-left space-y-6">
      {/* Success Badge & Header */}
      <div className="flex items-center gap-4 border-b border-white/10 pb-5">
        <div className="w-14 h-14 rounded-2xl bg-[#3DDC84]/20 text-[#3DDC84] flex items-center justify-center border border-[#3DDC84]/40 shrink-0">
          <CheckCircle2 size={32} />
        </div>
        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#3DDC84] font-bold">
            Application Registered Successfully
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-white">
            Welcome to the Selection Process!
          </h3>
          <p className="text-xs text-slate-400">
            Recorded for the Android Club recruitment cycle · VIT Bhopal
          </p>
        </div>
      </div>

      {/* Reference ID Lockup */}
      <div className="p-4 rounded-2xl bg-[#050706] border border-[#3DDC84]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
            Unique Application Reference ID:
          </span>
          <div className="text-lg sm:text-xl font-mono font-black text-[#3DDC84] tracking-wider mt-0.5">
            {submission.referenceId}
          </div>
          <span className="text-[11px] text-slate-400">
            Logged on: {new Date(submission.submittedAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
          </span>
        </div>

        <button
          onClick={handleCopy}
          className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-[#3DDC84] text-white hover:text-black border border-white/10 text-xs font-mono font-bold transition flex items-center justify-center gap-1.5 self-start sm:self-auto shrink-0"
        >
          {copied ? <Check size={14} className="text-[#3DDC84] group-hover:text-black" /> : <Copy size={14} />}
          <span>{copied ? 'Copied ID!' : 'Copy Reference'}</span>
        </button>
      </div>

      {/* Summary Matrix */}
      <div className="grid grid-cols-2 gap-3 text-xs bg-white/[0.02] p-4 rounded-2xl border border-white/5">
        <div>
          <span className="text-slate-500 block text-[10px] uppercase font-mono">Applicant</span>
          <span className="text-white font-semibold">{submission.data.fullName}</span>
        </div>
        <div>
          <span className="text-slate-500 block text-[10px] uppercase font-mono">Reg. Number</span>
          <span className="text-white font-mono">{submission.data.regNumber}</span>
        </div>
        <div>
          <span className="text-slate-500 block text-[10px] uppercase font-mono">Primary Team</span>
          <span className="text-[#3DDC84] font-semibold">{submission.primaryTeamName}</span>
        </div>
        <div>
          <span className="text-slate-500 block text-[10px] uppercase font-mono">Secondary Team</span>
          <span className="text-slate-300">{submission.secondaryTeamName || 'None'}</span>
        </div>
      </div>

      {/* Next Steps Timeline */}
      <div className="space-y-3">
        <h5 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
          What to Expect Next:
        </h5>
        <div className="space-y-2 text-xs">
          <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-start gap-3">
            <span className="w-5 h-5 rounded-full bg-[#3DDC84]/20 text-[#3DDC84] font-mono text-[10px] flex items-center justify-center shrink-0 mt-0.5">
              1
            </span>
            <div>
              <strong className="text-white block">Application Screening & Shortlisting</strong>
              <p className="text-slate-400 text-[11px] mt-0.5">
                The core leadership team reviews your technical answers, prior portfolio, and motivation.
              </p>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-start gap-3">
            <span className="w-5 h-5 rounded-full bg-[#3DDC84]/20 text-[#3DDC84] font-mono text-[10px] flex items-center justify-center shrink-0 mt-0.5">
              2
            </span>
            <div>
              <strong className="text-white block">Interaction & Practical Task Round</strong>
              <p className="text-slate-400 text-[11px] mt-0.5">
                Shortlisted candidates will receive interview slots via their verified college email (<strong>{submission.data.collegeEmail}</strong>).
              </p>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-start gap-3">
            <span className="w-5 h-5 rounded-full bg-[#3DDC84]/20 text-[#3DDC84] font-mono text-[10px] flex items-center justify-center shrink-0 mt-0.5">
              3
            </span>
            <div>
              <strong className="text-white block">Official Induction into Android Club SDC</strong>
              <p className="text-slate-400 text-[11px] mt-0.5">
                Welcome session with Faculty Mentor Dr. Adarsh Patel and the core chapter leads.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/10">
        <button
          onClick={handleDownloadSlip}
          className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold transition flex items-center justify-center gap-2 border border-white/10"
        >
          <Download size={14} className="text-[#3DDC84]" />
          <span>Download Application Slip (JSON)</span>
        </button>

        <button
          onClick={onReset}
          className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-[#3DDC84] hover:bg-[#00FF87] text-black text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-md shadow-[#3DDC84]/20"
        >
          <RotateCcw size={14} />
          <span>Submit Another Test Application</span>
        </button>
      </div>
    </div>
  );
};
