import React from 'react';
import { HelpCircle, AlertCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { TEAMS_LIST } from '../../data/recruitment';
import { TeamId } from '../../types/recruitment';

interface RoleQuestionsStepProps {
  primaryTeamId: TeamId | '';
  roleResponses: Record<string, string>;
  onChangeResponse: (questionId: string, value: string) => void;
  errors: Record<string, string>;
}

export const RoleQuestionsStep: React.FC<RoleQuestionsStepProps> = ({
  primaryTeamId,
  roleResponses,
  onChangeResponse,
  errors,
}) => {
  const currentTeam = TEAMS_LIST.find((t) => t.id === primaryTeamId);

  if (!primaryTeamId || !currentTeam) {
    return (
      <div className="py-12 text-center space-y-3 p-8 rounded-2xl bg-[#0A0D0B] border border-amber-500/20">
        <div className="w-12 h-12 mx-auto rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center">
          <AlertCircle size={24} />
        </div>
        <h4 className="text-base font-bold text-white">No Primary Team Selected Yet</h4>
        <p className="text-xs text-slate-400 max-w-md mx-auto">
          Please go back to <strong>Step 3 (Team Selection)</strong> and pick your primary team preference. The role-specific questions for that team will automatically generate here.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6 text-left">
      {/* Role Banner */}
      <div className="p-4 rounded-2xl bg-[#101512] border border-[#3DDC84]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#3DDC84] font-bold">
              Specialized Track
            </span>
            <span className="text-xs text-slate-500">•</span>
            <span className="text-xs font-mono text-slate-400">
              {currentTeam.category}
            </span>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white">
            {currentTeam.name} Questionnaire
          </h4>
          <p className="text-xs text-slate-400 mt-0.5">
            {currentTeam.tagline}
          </p>
        </div>

        <div className="px-3 py-1.5 rounded-xl bg-black/40 border border-white/5 text-[11px] font-mono text-slate-300 self-start sm:self-auto">
          {currentTeam.roleQuestions.length} Questions to complete
        </div>
      </div>

      {/* Dynamic Questions List */}
      <div className="space-y-5">
        {currentTeam.roleQuestions.map((q, index) => {
          const value = roleResponses[q.id] || '';
          const hasError = !!errors[q.id];

          return (
            <div
              key={q.id}
              className={`p-5 rounded-2xl bg-[#0A0D0B] border transition-all ${
                hasError
                  ? 'border-red-500/50 shadow-md shadow-red-500/10'
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <label className="text-xs sm:text-sm font-semibold text-slate-100 flex items-start gap-2">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-md bg-[#3DDC84]/15 text-[#3DDC84] text-[11px] font-mono font-bold shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span>
                    {q.label}
                    {q.required && <span className="text-[#3DDC84] ml-1">*</span>}
                  </span>
                </label>
              </div>

              {q.helpText && (
                <p className="text-[11px] text-slate-400 mb-2.5 ml-7">
                  {q.helpText}
                </p>
              )}

              <div className="ml-0 sm:ml-7">
                {q.type === 'select' ? (
                  <select
                    value={value}
                    onChange={(e) => onChangeResponse(q.id, e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#050706] border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-[#3DDC84] focus:ring-1 focus:ring-[#3DDC84]"
                  >
                    <option value="">-- Select an option --</option>
                    {q.options?.map((opt, oIdx) => (
                      <option key={oIdx} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                ) : q.type === 'textarea' ? (
                  <textarea
                    rows={4}
                    value={value}
                    onChange={(e) => onChangeResponse(q.id, e.target.value)}
                    placeholder={q.placeholder || 'Type your detailed answer here...'}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#050706] border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#3DDC84] focus:ring-1 focus:ring-[#3DDC84] resize-y"
                  />
                ) : (
                  <input
                    type={q.type === 'url' ? 'url' : 'text'}
                    value={value}
                    onChange={(e) => onChangeResponse(q.id, e.target.value)}
                    placeholder={q.placeholder || (q.type === 'url' ? 'https://...' : 'Enter your answer')}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#050706] border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#3DDC84] focus:ring-1 focus:ring-[#3DDC84]"
                  />
                )}

                {hasError && (
                  <div className="flex items-center gap-1.5 text-xs text-red-400 mt-1.5 font-medium">
                    <AlertCircle size={13} />
                    <span>{errors[q.id]}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
