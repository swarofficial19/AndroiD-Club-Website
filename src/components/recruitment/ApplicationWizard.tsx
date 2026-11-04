import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User,
  GraduationCap,
  Briefcase,
  HelpCircle,
  Link as LinkIcon,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Plus,
  X,
  Lock,
} from 'lucide-react';
import {
  ApplicationFormData,
  SubmittedApplicationRecord,
  TeamId,
} from '../../types/recruitment';
import {
  TEAMS_LIST,
  RECRUITMENT_CONFIG,
  SUGGESTED_SKILLS,
} from '../../data/recruitment';
import { RoleQuestionsStep } from './RoleQuestionsStep';
import { ReviewAndSubmit } from './ReviewAndSubmit';
import { ApplicationSuccessCard } from './ApplicationSuccessCard';

interface ApplicationWizardProps {
  isTestMode: boolean;
  onEnableTestMode: () => void;
  preselectedTeamId?: TeamId | '';
}

const INITIAL_FORM_DATA: ApplicationFormData = {
  fullName: '',
  regNumber: '',
  collegeEmail: '',
  personalEmail: '',
  phoneNumber: '',
  gender: '',
  residenceType: '',
  currentCity: '',
  batch: '',
  degreeBranch: 'B.Tech Computer Science & Engineering',
  currentSemester: 'Semester 3',
  cgpa: '',
  college: 'VIT Bhopal University',
  primaryTeam: '',
  secondaryTeam: '',
  whyJoinTeam: '',
  roleResponses: {},
  skills: ['Kotlin', 'Git / GitHub', 'Jetpack Compose'],
  pastExperience: '',
  githubUrl: '',
  linkedinUrl: '',
  portfolioUrl: '',
  otherProfileUrl: '',
  agreementAccepted: false,
};

const STEPS = [
  { number: 1, title: 'Personal Info', icon: User },
  { number: 2, title: 'Academic Info', icon: GraduationCap },
  { number: 3, title: 'Team Selection', icon: Briefcase },
  { number: 4, title: 'Role Questions', icon: HelpCircle },
  { number: 5, title: 'Skills & Links', icon: LinkIcon },
  { number: 6, title: 'Review & Submit', icon: CheckCircle2 },
];

export const ApplicationWizard: React.FC<ApplicationWizardProps> = ({
  isTestMode,
  onEnableTestMode,
  preselectedTeamId,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<ApplicationFormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [newSkillInput, setNewSkillInput] = useState('');
  const [submission, setSubmission] = useState<SubmittedApplicationRecord | null>(null);

  // Sync preselected team if provided
  useEffect(() => {
    if (preselectedTeamId && !formData.primaryTeam) {
      setFormData((prev) => ({
        ...prev,
        primaryTeam: preselectedTeamId,
      }));
    }
  }, [preselectedTeamId]);

  const updateField = <K extends keyof ApplicationFormData>(
    field: K,
    value: ApplicationFormData[K]
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const updateRoleResponse = (questionId: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      roleResponses: {
        ...prev.roleResponses,
        [questionId]: value,
      },
    }));
    if (errors[questionId]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[questionId];
        return next;
      });
    }
  };

  // Add / remove skills
  const addSkill = (skill: string) => {
    if (!skill.trim()) return;
    if (!formData.skills.includes(skill.trim())) {
      setFormData((prev) => ({
        ...prev,
        skills: [...prev.skills, skill.trim()],
      }));
    }
    setNewSkillInput('');
  };

  const removeSkill = (skillToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((s) => s !== skillToRemove),
    }));
  };

  // Step validation
  const validateStep = (step: number): boolean => {
    const errs: Record<string, string> = {};

    if (step === 1) {
      if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
      if (!formData.regNumber.trim()) {
        errs.regNumber = 'Registration number is required (e.g. 23BCSE102)';
      }
      if (!formData.collegeEmail.trim()) {
        errs.collegeEmail = 'College email is required';
      } else if (!formData.collegeEmail.toLowerCase().endsWith('@vitbhopal.ac.in')) {
        errs.collegeEmail = 'Must use official college email ending with @vitbhopal.ac.in';
      }
      if (!formData.personalEmail.trim()) {
        errs.personalEmail = 'Personal email is required';
      } else if (!formData.personalEmail.includes('@')) {
        errs.personalEmail = 'Enter a valid personal email';
      }
      if (!formData.phoneNumber.trim()) {
        errs.phoneNumber = 'Phone number is required';
      } else if (!/^\d{10}$/.test(formData.phoneNumber.replace(/[\s+-]/g, '').slice(-10))) {
        errs.phoneNumber = 'Enter a valid 10-digit mobile number';
      }
      if (!formData.gender) errs.gender = 'Please select your gender';
      if (!formData.residenceType) errs.residenceType = 'Please select residence type';
      if (!formData.currentCity.trim()) errs.currentCity = 'Current city is required';
    }

    if (step === 2) {
      if (!formData.batch) {
        errs.batch = 'Batch selection is mandatory (Eligible: 2025 or 2026 Batch)';
      }
      if (!formData.degreeBranch.trim()) errs.degreeBranch = 'Degree & Branch is required';
      if (!formData.currentSemester) errs.currentSemester = 'Current semester is required';
    }

    if (step === 3) {
      if (!formData.primaryTeam) {
        errs.primaryTeam = 'Please select your primary team preference';
      }
      if (
        formData.secondaryTeam &&
        formData.secondaryTeam === formData.primaryTeam
      ) {
        errs.secondaryTeam = 'Secondary team must be different from primary team';
      }
      if (!formData.whyJoinTeam.trim() || formData.whyJoinTeam.trim().length < 25) {
        errs.whyJoinTeam = 'Please share your motivation (minimum 25 characters)';
      }
    }

    if (step === 4) {
      const selected = TEAMS_LIST.find((t) => t.id === formData.primaryTeam);
      if (selected) {
        selected.roleQuestions.forEach((q) => {
          if (q.required) {
            const resp = formData.roleResponses[q.id]?.trim();
            if (!resp) {
              errs[q.id] = 'This question is required for the ' + selected.name;
            }
          }
        });
      } else {
        errs.primaryTeam = 'Select a primary team first';
      }
    }

    if (step === 5) {
      if (formData.skills.length === 0) {
        errs.skills = 'Please add at least one relevant skill or interest';
      }
    }

    if (step === 6) {
      if (!formData.agreementAccepted) {
        errs.agreement = 'You must confirm and accept the application agreement';
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 6));
      // Scroll wizard into view smoothly
      const el = document.getElementById('application-wizard');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = () => {
    if (!validateStep(6)) return;

    // Generate authentic formatted reference ID: AC-VITB-2025-XXXXX
    const randomSuffix = Math.floor(10000 + Math.random() * 90000);
    const generatedRef = `AC-VITB-2025-${randomSuffix}`;

    const primaryObj = TEAMS_LIST.find((t) => t.id === formData.primaryTeam);
    const secondaryObj = TEAMS_LIST.find((t) => t.id === formData.secondaryTeam);

    const record: SubmittedApplicationRecord = {
      referenceId: generatedRef,
      submittedAt: new Date().toISOString(),
      data: formData,
      primaryTeamName: primaryObj ? primaryObj.name : 'Unassigned',
      secondaryTeamName: secondaryObj ? secondaryObj.name : undefined,
    };

    setSubmission(record);
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM_DATA);
    setCurrentStep(1);
    setSubmission(null);
    setErrors({});
  };

  // If recruitment is closed and test mode is off
  if (!isTestMode && RECRUITMENT_CONFIG.status === 'CLOSED' && !submission) {
    return (
      <div id="application-wizard" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-left">
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0A0D0B] border border-amber-500/30 text-center space-y-5 shadow-2xl">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center border border-amber-500/20">
            <Lock size={32} />
          </div>
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
              Official Recruitment Status: Closed
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Applications for this recruitment cycle are closed.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
              The registration portal closed on <strong>{RECRUITMENT_CONFIG.deadlineFormatted}</strong>. We thank all candidates for the massive enthusiasm and applications.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#050706] border border-white/5 max-w-md mx-auto text-xs text-slate-400 space-y-1.5 font-mono text-left">
            <div className="text-[#3DDC84] font-bold">Need Help or Have Queries?</div>
            <div>• Faculty Coordinator: {RECRUITMENT_CONFIG.facultyCoordinator.name}</div>
            <div>• Student Coordinators: Dhriti Mittal & Ujjawal Patidar</div>
            <div>• Official Email: {RECRUITMENT_CONFIG.officialEmail}</div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onEnableTestMode}
              className="px-6 py-3 rounded-xl bg-[#3DDC84] hover:bg-[#00FF87] text-black text-xs sm:text-sm font-bold transition flex items-center gap-2 shadow-lg shadow-[#3DDC84]/25"
            >
              <Sparkles size={16} />
              <span>Launch Evaluator / Recruiter Test Mode</span>
            </button>
          </div>
          <p className="text-[11px] text-slate-500">
            Evaluator mode enables the complete interactive 6-step form with all dynamic role question branches.
          </p>
        </div>
      </div>
    );
  }

  // If application was already submitted
  if (submission) {
    return (
      <div id="application-wizard" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ApplicationSuccessCard submission={submission} onReset={handleReset} />
      </div>
    );
  }

  const primaryTeamCategory = TEAMS_LIST.find((t) => t.id === formData.primaryTeam)?.category || 'Technical';

  return (
    <div id="application-wizard" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-left">
      <div className="rounded-3xl bg-[#0A0D0B] border border-[#3DDC84]/25 shadow-2xl p-6 sm:p-8 space-y-8">
        
        {/* Wizard Top Header */}
        <div className="border-b border-white/10 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#3DDC84] font-bold">
                Android Club Recruitment Portal
              </span>
              <span className="px-2 py-0.5 rounded-full bg-[#3DDC84]/15 text-[#3DDC84] text-[10px] font-mono font-bold">
                Step {currentStep} of 6
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
              {STEPS[currentStep - 1].title}
            </h3>
          </div>

          {/* Progress Indicator */}
          <div className="w-full sm:w-48 space-y-1.5">
            <div className="flex justify-between text-[11px] font-mono text-slate-400">
              <span>Progress</span>
              <span className="text-[#3DDC84] font-bold">
                {Math.round((currentStep / 6) * 100)}%
              </span>
            </div>
            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#3DDC84] to-[#00FF87]"
                initial={{ width: 0 }}
                animate={{ width: `${(currentStep / 6) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </div>

        {/* Stepper Dots (Horizontal Bar) */}
        <div className="hidden sm:grid grid-cols-6 gap-2">
          {STEPS.map((step) => {
            const Icon = step.icon;
            const isDone = currentStep > step.number;
            const isCurrent = currentStep === step.number;

            return (
              <button
                key={step.number}
                type="button"
                onClick={() => {
                  if (currentStep > step.number) setCurrentStep(step.number);
                }}
                disabled={currentStep < step.number}
                className={`p-2 rounded-xl text-left border transition flex flex-col items-start gap-1 ${
                  isCurrent
                    ? 'bg-[#101512] border-[#3DDC84] text-white shadow-md shadow-[#3DDC84]/10'
                    : isDone
                    ? 'bg-[#050706] border-[#3DDC84]/30 text-slate-300 hover:border-[#3DDC84]'
                    : 'bg-transparent border-white/5 text-slate-600 opacity-60 cursor-not-allowed'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="text-[10px] font-mono font-bold">
                    0{step.number}
                  </span>
                  {isDone ? (
                    <CheckCircle2 size={13} className="text-[#3DDC84]" />
                  ) : (
                    <Icon size={13} className={isCurrent ? 'text-[#3DDC84]' : 'text-slate-500'} />
                  )}
                </div>
                <span className="text-[11px] font-semibold truncate w-full">
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Form Body Steps */}
        <div className="space-y-6 min-h-[380px]">
          {/* STEP 1: Personal Information */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <p className="text-xs text-slate-400">
                Please provide your official contact details. Communications will be sent to your verified VIT Bhopal email.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                    Full Name <span className="text-[#3DDC84]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => updateField('fullName', e.target.value)}
                    placeholder="e.g. Aryan Sharma"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#050706] border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-[#3DDC84]"
                  />
                  {errors.fullName && (
                    <span className="text-[11px] text-red-400 mt-1 block">{errors.fullName}</span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                    Registration Number <span className="text-[#3DDC84]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.regNumber}
                    onChange={(e) => updateField('regNumber', e.target.value.toUpperCase())}
                    placeholder="e.g. 23BCSE102 or 22BCE10056"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#050706] border border-white/10 text-xs sm:text-sm text-white font-mono uppercase focus:outline-none focus:border-[#3DDC84]"
                  />
                  {errors.regNumber && (
                    <span className="text-[11px] text-red-400 mt-1 block">{errors.regNumber}</span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                    College Email (@vitbhopal.ac.in) <span className="text-[#3DDC84]">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.collegeEmail}
                    onChange={(e) => updateField('collegeEmail', e.target.value)}
                    placeholder="name.23bcse102@vitbhopal.ac.in"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#050706] border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-[#3DDC84]"
                  />
                  {errors.collegeEmail && (
                    <span className="text-[11px] text-red-400 mt-1 block">{errors.collegeEmail}</span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                    Personal Email <span className="text-[#3DDC84]">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.personalEmail}
                    onChange={(e) => updateField('personalEmail', e.target.value)}
                    placeholder="personal@gmail.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#050706] border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-[#3DDC84]"
                  />
                  {errors.personalEmail && (
                    <span className="text-[11px] text-red-400 mt-1 block">{errors.personalEmail}</span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                    WhatsApp / Phone <span className="text-[#3DDC84]">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) => updateField('phoneNumber', e.target.value)}
                    placeholder="10-digit number"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#050706] border border-white/10 text-xs sm:text-sm text-white font-mono focus:outline-none focus:border-[#3DDC84]"
                  />
                  {errors.phoneNumber && (
                    <span className="text-[11px] text-red-400 mt-1 block">{errors.phoneNumber}</span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                    Gender <span className="text-[#3DDC84]">*</span>
                  </label>
                  <select
                    value={formData.gender}
                    onChange={(e) => updateField('gender', e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#050706] border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-[#3DDC84]"
                  >
                    <option value="">-- Select Gender --</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other / Prefer not to say</option>
                  </select>
                  {errors.gender && (
                    <span className="text-[11px] text-red-400 mt-1 block">{errors.gender}</span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                    Residence Status <span className="text-[#3DDC84]">*</span>
                  </label>
                  <select
                    value={formData.residenceType}
                    onChange={(e) =>
                      updateField('residenceType', e.target.value as 'Hosteller' | 'Day Scholar' | '')
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#050706] border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-[#3DDC84]"
                  >
                    <option value="">-- Select Residence --</option>
                    <option value="Hosteller">Hosteller (Campus Hostel)</option>
                    <option value="Day Scholar">Day Scholar / Nearby</option>
                  </select>
                  {errors.residenceType && (
                    <span className="text-[11px] text-red-400 mt-1 block">{errors.residenceType}</span>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                  Current City / Hometown <span className="text-[#3DDC84]">*</span>
                </label>
                <input
                  type="text"
                  value={formData.currentCity}
                  onChange={(e) => updateField('currentCity', e.target.value)}
                  placeholder="e.g. Bhopal, Indore, Pune, Delhi, Bengaluru"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#050706] border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-[#3DDC84]"
                />
                {errors.currentCity && (
                  <span className="text-[11px] text-red-400 mt-1 block">{errors.currentCity}</span>
                )}
              </div>
            </div>
          )}

          {/* STEP 2: Academic Information */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <div className="p-3.5 rounded-xl bg-[#101512] border border-[#3DDC84]/20 text-xs text-slate-300">
                ⚡ <strong>Eligibility Requirement:</strong> The current recruitment cycle targets the <strong>2025 Batch (Academic Year 2025–26)</strong> and <strong>2026 Batch</strong>.
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                  Target Batch <span className="text-[#3DDC84]">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    '2025 Batch (Academic Year 2025–26)',
                    '2026 Batch',
                  ].map((batchOption) => {
                    const isSelected = formData.batch === batchOption;
                    return (
                      <button
                        key={batchOption}
                        type="button"
                        onClick={() => updateField('batch', batchOption as any)}
                        className={`p-4 rounded-xl border text-left transition ${
                          isSelected
                            ? 'bg-[#101512] border-[#3DDC84] text-white ring-1 ring-[#3DDC84]'
                            : 'bg-[#050706] border-white/10 text-slate-300 hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs sm:text-sm font-bold">{batchOption}</span>
                          {isSelected && <CheckCircle2 size={16} className="text-[#3DDC84]" />}
                        </div>
                        <span className="text-[11px] text-slate-400 block mt-1">
                          Verified eligible candidate track
                        </span>
                      </button>
                    );
                  })}
                </div>
                {errors.batch && (
                  <span className="text-[11px] text-red-400 mt-1.5 block">{errors.batch}</span>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                    Degree & Branch / Specialization <span className="text-[#3DDC84]">*</span>
                  </label>
                  <select
                    value={formData.degreeBranch}
                    onChange={(e) => updateField('degreeBranch', e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#050706] border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-[#3DDC84]"
                  >
                    <option value="B.Tech Computer Science & Engineering">B.Tech Computer Science & Engineering (Core)</option>
                    <option value="B.Tech CSE with AI & ML">B.Tech CSE with AI & ML</option>
                    <option value="B.Tech CSE with Cyber Security">B.Tech CSE with Cyber Security</option>
                    <option value="B.Tech CSE with Cloud Computing">B.Tech CSE with Cloud Computing</option>
                    <option value="B.Tech CSE with Health Informatics">B.Tech CSE with Health Informatics</option>
                    <option value="B.Tech Electronics & Communication">B.Tech Electronics & Communication (ECE)</option>
                    <option value="B.Tech Aerospace Engineering">B.Tech Aerospace Engineering</option>
                    <option value="B.Tech Mechanical Engineering">B.Tech Mechanical Engineering</option>
                    <option value="MCA / Other Tech Program">MCA / Other Tech Program</option>
                  </select>
                  {errors.degreeBranch && (
                    <span className="text-[11px] text-red-400 mt-1 block">{errors.degreeBranch}</span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                    Current Semester <span className="text-[#3DDC84]">*</span>
                  </label>
                  <select
                    value={formData.currentSemester}
                    onChange={(e) => updateField('currentSemester', e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#050706] border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-[#3DDC84]"
                  >
                    {['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4', 'Semester 5', 'Semester 6', 'Semester 7', 'Semester 8'].map((sem) => (
                      <option key={sem} value={sem}>{sem}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                    Current CGPA / Grade (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.cgpa}
                    onChange={(e) => updateField('cgpa', e.target.value)}
                    placeholder="e.g. 8.85"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#050706] border border-white/10 text-xs sm:text-sm text-white font-mono focus:outline-none focus:border-[#3DDC84]"
                  />
                  <span className="text-[10px] text-slate-500 mt-1 block">
                    We evaluate skills and enthusiasm over pure marks.
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                    Institution
                  </label>
                  <div className="px-3.5 py-2.5 rounded-xl bg-[#050706] border border-white/10 text-xs sm:text-sm text-slate-300 font-medium flex items-center justify-between">
                    <span>{formData.college}</span>
                    <span className="text-[#3DDC84] text-[10px] font-mono font-bold">✔ Verified</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Team & Role Selection */}
          {currentStep === 3 && (
            <div className="space-y-5">
              <p className="text-xs text-slate-400">
                Choose your Primary Team preference. All role-specific questions in the next step will adapt to this choice. You can optionally pick a Secondary Team.
              </p>

              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-2">
                  Primary Team Preference (1st Choice) <span className="text-[#3DDC84]">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {TEAMS_LIST.map((team) => {
                    const isSelected = formData.primaryTeam === team.id;
                    return (
                      <button
                        key={team.id}
                        type="button"
                        onClick={() => {
                          updateField('primaryTeam', team.id);
                          // Clear secondary if same
                          if (formData.secondaryTeam === team.id) {
                            updateField('secondaryTeam', '');
                          }
                        }}
                        className={`p-3 rounded-xl border text-left transition flex items-start justify-between gap-2 ${
                          isSelected
                            ? 'bg-[#101512] border-[#3DDC84] text-white ring-1 ring-[#3DDC84]'
                            : 'bg-[#050706] border-white/10 text-slate-300 hover:border-white/20'
                        }`}
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs sm:text-sm font-bold text-white">
                              {team.name}
                            </span>
                            <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-white/5 text-slate-400">
                              {team.category}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                            {team.tagline}
                          </p>
                        </div>
                        {isSelected && <CheckCircle2 size={16} className="text-[#3DDC84] shrink-0 mt-0.5" />}
                      </button>
                    );
                  })}
                </div>
                {errors.primaryTeam && (
                  <span className="text-[11px] text-red-400 mt-1.5 block">{errors.primaryTeam}</span>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-2">
                  Secondary Team Preference (Optional 2nd Choice)
                </label>
                <select
                  value={formData.secondaryTeam}
                  onChange={(e) => updateField('secondaryTeam', e.target.value as TeamId | '')}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#050706] border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-[#3DDC84]"
                >
                  <option value="">-- No secondary choice / Only Primary --</option>
                  {TEAMS_LIST.filter((t) => t.id !== formData.primaryTeam).map((team) => (
                    <option key={team.id} value={team.id}>
                      {team.name} ({team.category})
                    </option>
                  ))}
                </select>
                {errors.secondaryTeam && (
                  <span className="text-[11px] text-red-400 mt-1 block">{errors.secondaryTeam}</span>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                  Why do you want to join this particular team? <span className="text-[#3DDC84]">*</span>
                </label>
                <textarea
                  rows={4}
                  value={formData.whyJoinTeam}
                  onChange={(e) => updateField('whyJoinTeam', e.target.value)}
                  placeholder="Tell us what drives your passion, any past projects, and what you hope to build or accomplish with the Android Club..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#050706] border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#3DDC84] resize-y"
                />
                <div className="flex justify-between items-center text-[10px] text-slate-500 mt-1">
                  <span>Minimum 25 characters</span>
                  <span>{formData.whyJoinTeam.length} characters</span>
                </div>
                {errors.whyJoinTeam && (
                  <span className="text-[11px] text-red-400 mt-1 block">{errors.whyJoinTeam}</span>
                )}
              </div>
            </div>
          )}

          {/* STEP 4: Role-Specific Questions */}
          {currentStep === 4 && (
            <RoleQuestionsStep
              primaryTeamId={formData.primaryTeam}
              roleResponses={formData.roleResponses}
              onChangeResponse={updateRoleResponse}
              errors={errors}
            />
          )}

          {/* STEP 5: Skills, Experience & Portfolio Links */}
          {currentStep === 5 && (
            <div className="space-y-5">
              {/* Skill Tag Picker */}
              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                  Select or Add Relevant Skills <span className="text-[#3DDC84]">*</span>
                </label>
                <p className="text-[11px] text-slate-400 mb-2.5">
                  Click on suggested tags or type and press Enter to add custom skills.
                </p>

                {/* Selected Skills Chips */}
                <div className="flex flex-wrap gap-2 p-3 rounded-2xl bg-[#050706] border border-white/10 min-h-[48px] mb-3">
                  {formData.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#3DDC84]/15 border border-[#3DDC84]/30 text-[#3DDC84] font-mono text-xs"
                    >
                      <span>{skill}</span>
                      <button
                        type="button"
                        onClick={() => removeSkill(skill)}
                        className="hover:text-white transition"
                      >
                        <X size={12} />
                      </button>
                    </span>
                  ))}
                  {formData.skills.length === 0 && (
                    <span className="text-xs text-slate-500 italic py-1">
                      No skills added yet. Select from below or type to add.
                    </span>
                  )}
                </div>

                {/* Add Custom Skill Input */}
                <div className="flex gap-2 mb-4">
                  <input
                    type="text"
                    value={newSkillInput}
                    onChange={(e) => setNewSkillInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        addSkill(newSkillInput);
                      }
                    }}
                    placeholder="Type custom skill (e.g. OpenCV, Figma, Docker, Blender) and press Add"
                    className="flex-1 px-3.5 py-2 rounded-xl bg-[#050706] border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-[#3DDC84]"
                  />
                  <button
                    type="button"
                    onClick={() => addSkill(newSkillInput)}
                    className="px-4 py-2 rounded-xl bg-[#101512] hover:bg-[#3DDC84] text-white hover:text-black border border-[#3DDC84]/30 text-xs font-bold transition flex items-center gap-1.5"
                  >
                    <Plus size={14} />
                    <span>Add</span>
                  </button>
                </div>

                {/* Suggested Suggestions Based on Category */}
                <div className="space-y-2">
                  <span className="text-[10px] uppercase font-mono text-slate-500 font-bold block">
                    Suggested for {primaryTeamCategory} Tracks:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {SUGGESTED_SKILLS[primaryTeamCategory]?.map((s) => {
                      const isAdded = formData.skills.includes(s);
                      return (
                        <button
                          key={s}
                          type="button"
                          onClick={() => (isAdded ? removeSkill(s) : addSkill(s))}
                          className={`px-2.5 py-1 rounded-lg text-xs font-mono transition ${
                            isAdded
                              ? 'bg-[#3DDC84] text-black font-semibold'
                              : 'bg-white/5 text-slate-300 hover:bg-white/10'
                          }`}
                        >
                          {isAdded ? `✓ ${s}` : `+ ${s}`}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {errors.skills && (
                  <span className="text-[11px] text-red-400 mt-2 block">{errors.skills}</span>
                )}
              </div>

              {/* Past Experience */}
              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                  Prior Experience / Hackathons / Campus Involvements (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.pastExperience}
                  onChange={(e) => updateField('pastExperience', e.target.value)}
                  placeholder="Share any hackathons participated, previous clubs, internships, open source contributions or school/college projects..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#050706] border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#3DDC84] resize-y"
                />
              </div>

              {/* Social / Portfolio Links */}
              <div className="space-y-3 pt-2 border-t border-white/5">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold block">
                  Online Profiles & Portfolio
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">
                      GitHub Profile URL
                    </label>
                    <input
                      type="url"
                      value={formData.githubUrl}
                      onChange={(e) => updateField('githubUrl', e.target.value)}
                      placeholder="https://github.com/username"
                      className="w-full px-3.5 py-2 rounded-xl bg-[#050706] border border-white/10 text-xs text-white focus:outline-none focus:border-[#3DDC84]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-400 mb-1">
                      LinkedIn Profile URL
                    </label>
                    <input
                      type="url"
                      value={formData.linkedinUrl}
                      onChange={(e) => updateField('linkedinUrl', e.target.value)}
                      placeholder="https://linkedin.com/in/username"
                      className="w-full px-3.5 py-2 rounded-xl bg-[#050706] border border-white/10 text-xs text-white focus:outline-none focus:border-[#3DDC84]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-400 mb-1">
                      Portfolio / Behance / Google Drive URL
                    </label>
                    <input
                      type="url"
                      value={formData.portfolioUrl}
                      onChange={(e) => updateField('portfolioUrl', e.target.value)}
                      placeholder="https://behance.net/username or my-portfolio.com"
                      className="w-full px-3.5 py-2 rounded-xl bg-[#050706] border border-white/10 text-xs text-white focus:outline-none focus:border-[#3DDC84]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-400 mb-1">
                      Other Profile (LeetCode / CodeChef / Kaggle / X)
                    </label>
                    <input
                      type="url"
                      value={formData.otherProfileUrl}
                      onChange={(e) => updateField('otherProfileUrl', e.target.value)}
                      placeholder="https://leetcode.com/username"
                      className="w-full px-3.5 py-2 rounded-xl bg-[#050706] border border-white/10 text-xs text-white focus:outline-none focus:border-[#3DDC84]"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 6: Review & Final Submission */}
          {currentStep === 6 && (
            <ReviewAndSubmit
              formData={formData}
              onJumpToStep={(stepNum) => setCurrentStep(stepNum)}
              onToggleAgreement={(agreed) => updateField('agreementAccepted', agreed)}
              agreementAccepted={formData.agreementAccepted}
              error={errors.agreement}
            />
          )}
        </div>

        {/* Wizard Controls Footer */}
        <div className="border-t border-white/10 pt-6 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentStep === 1}
            className={`px-5 py-2.5 rounded-xl border text-xs font-bold transition flex items-center gap-1.5 ${
              currentStep === 1
                ? 'opacity-30 border-white/5 text-slate-600 cursor-not-allowed'
                : 'bg-white/5 hover:bg-white/10 border-white/10 text-white'
            }`}
          >
            <ArrowLeft size={14} />
            <span>Previous Step</span>
          </button>

          <div className="flex items-center gap-2">
            {currentStep < 6 ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-2.5 rounded-xl bg-[#3DDC84] hover:bg-[#00FF87] text-black text-xs sm:text-sm font-bold transition flex items-center gap-2 shadow-lg shadow-[#3DDC84]/20"
              >
                <span>Continue to Step {currentStep + 1}</span>
                <ArrowRight size={15} />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="px-7 py-3 rounded-xl bg-[#3DDC84] hover:bg-[#00FF87] text-black text-xs sm:text-sm font-black transition flex items-center gap-2 shadow-xl shadow-[#3DDC84]/30"
              >
                <Sparkles size={16} />
                <span>Submit Official Application</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
