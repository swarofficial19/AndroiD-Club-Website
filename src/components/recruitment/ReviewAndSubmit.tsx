import React from 'react';
import {
  User,
  GraduationCap,
  Briefcase,
  HelpCircle,
  Link as LinkIcon,
  CheckSquare,
  Square,
  ShieldCheck,
  Edit3,
  AlertCircle,
  Sparkles,
} from 'lucide-react';
import { TEAMS_LIST } from '../../data/recruitment';
import { ApplicationFormData, TeamId } from '../../types/recruitment';

interface ReviewAndSubmitProps {
  formData: ApplicationFormData;
  onJumpToStep: (stepNumber: number) => void;
  onToggleAgreement: (agreed: boolean) => void;
  agreementAccepted: boolean;
  error?: string;
}

export const ReviewAndSubmit: React.FC<ReviewAndSubmitProps> = ({
  formData,
  onJumpToStep,
  onToggleAgreement,
  agreementAccepted,
  error,
}) => {
  const primaryTeam = TEAMS_LIST.find((t) => t.id === formData.primaryTeam);
  const secondaryTeam = TEAMS_LIST.find((t) => t.id === formData.secondaryTeam);

  return (
    <div className="space-y-6 text-left">
      <div className="p-4 rounded-2xl bg-[#101512] border border-[#3DDC84]/20">
        <h4 className="text-base font-bold text-white flex items-center gap-2">
          <Sparkles size={18} className="text-[#3DDC84]" />
          <span>Final Review of Your Application</span>
        </h4>
        <p className="text-xs text-slate-300 mt-1">
          Please review your details carefully before submitting. You can click <strong>Edit</strong> on any section to make quick adjustments.
        </p>
      </div>

      {/* 1. Personal Information */}
      <div className="p-5 rounded-2xl bg-[#0A0D0B] border border-white/10 space-y-3">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <User size={16} className="text-[#3DDC84]" />
            <h5 className="text-sm font-bold text-white">1. Personal Information</h5>
          </div>
          <button
            onClick={() => onJumpToStep(1)}
            className="text-xs text-[#3DDC84] hover:underline flex items-center gap-1 font-mono"
          >
            <Edit3 size={12} />
            <span>Edit</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
          <div>
            <span className="text-slate-500 block text-[10px] uppercase font-mono">Full Name</span>
            <span className="text-white font-medium">{formData.fullName || '—'}</span>
          </div>
          <div>
            <span className="text-slate-500 block text-[10px] uppercase font-mono">Registration No.</span>
            <span className="text-white font-mono font-medium">{formData.regNumber || '—'}</span>
          </div>
          <div>
            <span className="text-slate-500 block text-[10px] uppercase font-mono">College Email</span>
            <span className="text-white font-medium">{formData.collegeEmail || '—'}</span>
          </div>
          <div>
            <span className="text-slate-500 block text-[10px] uppercase font-mono">Personal Email</span>
            <span className="text-white font-medium">{formData.personalEmail || '—'}</span>
          </div>
          <div>
            <span className="text-slate-500 block text-[10px] uppercase font-mono">Phone Number</span>
            <span className="text-white font-mono font-medium">{formData.phoneNumber || '—'}</span>
          </div>
          <div>
            <span className="text-slate-500 block text-[10px] uppercase font-mono">Gender & Stay</span>
            <span className="text-white font-medium">
              {formData.gender || '—'} {formData.residenceType ? `(${formData.residenceType})` : ''}
            </span>
          </div>
        </div>
      </div>

      {/* 2. Academic Information */}
      <div className="p-5 rounded-2xl bg-[#0A0D0B] border border-white/10 space-y-3">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <GraduationCap size={16} className="text-[#3DDC84]" />
            <h5 className="text-sm font-bold text-white">2. Academic Information</h5>
          </div>
          <button
            onClick={() => onJumpToStep(2)}
            className="text-xs text-[#3DDC84] hover:underline flex items-center gap-1 font-mono"
          >
            <Edit3 size={12} />
            <span>Edit</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
          <div>
            <span className="text-slate-500 block text-[10px] uppercase font-mono">Batch</span>
            <span className="text-[#3DDC84] font-medium">{formData.batch || '—'}</span>
          </div>
          <div>
            <span className="text-slate-500 block text-[10px] uppercase font-mono">Branch / Degree</span>
            <span className="text-white font-medium">{formData.degreeBranch || '—'}</span>
          </div>
          <div>
            <span className="text-slate-500 block text-[10px] uppercase font-mono">Current Semester</span>
            <span className="text-white font-medium">{formData.currentSemester || '—'}</span>
          </div>
          <div>
            <span className="text-slate-500 block text-[10px] uppercase font-mono">CGPA / Grade</span>
            <span className="text-white font-mono">{formData.cgpa || 'N/A'}</span>
          </div>
          <div className="sm:col-span-2">
            <span className="text-slate-500 block text-[10px] uppercase font-mono">Institution</span>
            <span className="text-white font-medium">{formData.college}</span>
          </div>
        </div>
      </div>

      {/* 3. Team Preferences */}
      <div className="p-5 rounded-2xl bg-[#0A0D0B] border border-white/10 space-y-3">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <Briefcase size={16} className="text-[#3DDC84]" />
            <h5 className="text-sm font-bold text-white">3. Team Selection</h5>
          </div>
          <button
            onClick={() => onJumpToStep(3)}
            className="text-xs text-[#3DDC84] hover:underline flex items-center gap-1 font-mono"
          >
            <Edit3 size={12} />
            <span>Edit</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="p-3 rounded-xl bg-black/40 border border-white/5">
            <span className="text-[#3DDC84] font-mono text-[10px] uppercase font-bold block mb-1">
              Primary Preference (1st Choice)
            </span>
            <h6 className="text-sm font-bold text-white">
              {primaryTeam ? primaryTeam.name : 'Not selected'}
            </h6>
            <p className="text-[11px] text-slate-400 mt-0.5">
              {primaryTeam?.tagline}
            </p>
          </div>

          <div className="p-3 rounded-xl bg-black/40 border border-white/5">
            <span className="text-slate-400 font-mono text-[10px] uppercase font-bold block mb-1">
              Secondary Preference (Optional)
            </span>
            <h6 className="text-sm font-bold text-white">
              {secondaryTeam ? secondaryTeam.name : 'None selected'}
            </h6>
            <p className="text-[11px] text-slate-400 mt-0.5">
              {secondaryTeam?.tagline || 'Secondary choice is optional'}
            </p>
          </div>
        </div>

        {formData.whyJoinTeam && (
          <div className="pt-2 text-xs">
            <span className="text-slate-500 block text-[10px] uppercase font-mono mb-1">
              Motivation Statement:
            </span>
            <p className="p-3 rounded-xl bg-black/30 border border-white/5 text-slate-300 leading-relaxed italic">
              "{formData.whyJoinTeam}"
            </p>
          </div>
        )}
      </div>

      {/* 4. Role-Specific Questions Summary */}
      <div className="p-5 rounded-2xl bg-[#0A0D0B] border border-white/10 space-y-3">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <HelpCircle size={16} className="text-[#3DDC84]" />
            <h5 className="text-sm font-bold text-white">
              4. {primaryTeam ? primaryTeam.name : 'Role'} Responses
            </h5>
          </div>
          <button
            onClick={() => onJumpToStep(4)}
            className="text-xs text-[#3DDC84] hover:underline flex items-center gap-1 font-mono"
          >
            <Edit3 size={12} />
            <span>Edit</span>
          </button>
        </div>

        {primaryTeam ? (
          <div className="space-y-3 text-xs">
            {primaryTeam.roleQuestions.map((q, idx) => (
              <div key={q.id} className="p-3 rounded-xl bg-black/40 border border-white/5">
                <span className="text-[11px] font-semibold text-slate-300 block mb-1">
                  Q{idx + 1}: {q.label}
                </span>
                <p className="text-slate-200 font-mono text-xs whitespace-pre-wrap">
                  {formData.roleResponses[q.id] || <span className="text-slate-500 italic">No answer provided</span>}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xs text-slate-500 italic">No primary team selected.</p>
        )}
      </div>

      {/* 5. Skills & Social Links */}
      <div className="p-5 rounded-2xl bg-[#0A0D0B] border border-white/10 space-y-3">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <LinkIcon size={16} className="text-[#3DDC84]" />
            <h5 className="text-sm font-bold text-white">5. Skills & Portfolio Links</h5>
          </div>
          <button
            onClick={() => onJumpToStep(5)}
            className="text-xs text-[#3DDC84] hover:underline flex items-center gap-1 font-mono"
          >
            <Edit3 size={12} />
            <span>Edit</span>
          </button>
        </div>

        <div className="space-y-3 text-xs">
          <div>
            <span className="text-slate-500 block text-[10px] uppercase font-mono mb-1.5">
              Selected Skills:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {formData.skills.length > 0 ? (
                formData.skills.map((s, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 rounded-lg bg-[#3DDC84]/15 border border-[#3DDC84]/30 text-[#3DDC84] font-mono text-[11px]"
                  >
                    {s}
                  </span>
                ))
              ) : (
                <span className="text-slate-500 italic">None specified</span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
            <div>
              <span className="text-slate-500 block text-[10px] uppercase font-mono">GitHub</span>
              <span className="text-white truncate block font-mono text-[11px]">
                {formData.githubUrl || '—'}
              </span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px] uppercase font-mono">LinkedIn</span>
              <span className="text-white truncate block font-mono text-[11px]">
                {formData.linkedinUrl || '—'}
              </span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px] uppercase font-mono">Portfolio / Drive</span>
              <span className="text-white truncate block font-mono text-[11px]">
                {formData.portfolioUrl || '—'}
              </span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px] uppercase font-mono">Other Link</span>
              <span className="text-white truncate block font-mono text-[11px]">
                {formData.otherProfileUrl || '—'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mandatory Agreement Checkbox */}
      <div className="p-4 sm:p-5 rounded-2xl bg-[#0A0D0B] border border-[#3DDC84]/30 space-y-3">
        <label className="flex items-start gap-3 cursor-pointer group">
          <button
            type="button"
            onClick={() => onToggleAgreement(!agreementAccepted)}
            className="mt-0.5 text-[#3DDC84] focus:outline-none"
          >
            {agreementAccepted ? (
              <CheckSquare size={20} className="text-[#3DDC84]" />
            ) : (
              <Square size={20} className="text-slate-500 group-hover:text-slate-300 transition" />
            )}
          </button>
          <span className="text-xs sm:text-sm text-slate-200 leading-snug">
            I confirm that all information provided in this application is accurate and true to the best of my knowledge, and I agree to actively contribute and abide by the values of the Android Club community at VIT Bhopal University.
          </span>
        </label>

        {error && (
          <div className="flex items-center gap-1.5 text-xs text-red-400 font-medium pl-8">
            <AlertCircle size={14} />
            <span>{error}</span>
          </div>
        )}

        {/* Privacy Note */}
        <div className="flex items-start gap-2 pt-2 border-t border-white/5 text-[11px] text-slate-400 pl-1">
          <ShieldCheck size={14} className="text-[#3DDC84] shrink-0 mt-0.5" />
          <span>
            <strong>Privacy Disclaimer:</strong> Your data is securely processed exclusively for Android Club recruitment evaluations at VIT Bhopal University and will not be shared with external third parties.
          </span>
        </div>
      </div>
    </div>
  );
};
