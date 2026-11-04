import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Sparkles, Send, ArrowRight } from 'lucide-react';
import { AndroidLogo } from '../AndroidLogo';

interface JoinClubModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JoinClubModal: React.FC<JoinClubModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    studentId: '',
    year: '2nd Year',
    branch: 'Computer Science & Engineering',
    domain: 'Android Development',
    motivation: '',
    github: '',
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.studentId) return;
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#0A0D0B] border border-[#3DDC84]/25 shadow-2xl shadow-[#3DDC84]/10 p-6 sm:p-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 text-slate-400 hover:text-[#3DDC84] hover:bg-[#3DDC84]/10 transition"
        >
          <X size={20} />
        </button>

        {/* Modal Brand */}
        <div className="flex items-center gap-3 mb-4">
          <AndroidLogo size={24} />
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Join Android Club
            </h3>
            <p className="text-xs text-[#3DDC84] font-mono">
              Campus Member Recruitment & Onboarding
            </p>
          </div>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#3DDC84]/20 text-[#3DDC84] flex items-center justify-center border border-[#3DDC84]/30">
              <CheckCircle2 size={32} />
            </div>
            <h4 className="text-2xl font-bold text-white">Application Received!</h4>
            <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Welcome, <strong className="text-white">{formData.name}</strong>! Your demo registration for the <strong className="text-[#3DDC84]">{formData.domain}</strong> track has been logged.
            </p>
            <div className="p-4 rounded-2xl bg-[#050706] border border-[#3DDC84]/20 text-xs text-slate-300 text-left max-w-md mx-auto space-y-2 font-mono">
              <p className="text-[#3DDC84]">✔ Discord orientation channel access link sent to {formData.email}</p>
              <p>✔ Weekly meetups: Wednesdays & Fridays at 5:00 PM</p>
              <p>✔ Student ID verified: {formData.studentId}</p>
            </div>
            <div className="pt-2">
              <button
                onClick={resetForm}
                className="px-6 py-2.5 rounded-xl bg-[#3DDC84] hover:bg-[#00FF87] text-black text-xs font-bold transition shadow-lg shadow-[#3DDC84]/25"
              >
                Back to Website
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <p className="text-xs text-slate-300 leading-relaxed">
              Become part of a student-led collective building production-grade mobile software, winning hackathons, and learning by building.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Aryan Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#050706] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#3DDC84]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  College Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name.roll@college.edu"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#050706] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#3DDC84]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Roll / Student ID *
                </label>
                <input
                  type="text"
                  required
                  placeholder="23BCSE102"
                  value={formData.studentId}
                  onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#050706] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#3DDC84]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Year of Study
                </label>
                <select
                  value={formData.year}
                  onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#050706] border border-white/10 text-xs text-white focus:outline-none focus:border-[#3DDC84]"
                >
                  <option value="1st Year">1st Year (Freshman)</option>
                  <option value="2nd Year">2nd Year (Sophomore)</option>
                  <option value="3rd Year">3rd Year (Junior)</option>
                  <option value="4th Year">4th Year (Senior)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Primary Domain
                </label>
                <select
                  value={formData.domain}
                  onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#050706] border border-white/10 text-xs text-white focus:outline-none focus:border-[#3DDC84]"
                >
                  <option value="Android Development">Android Development</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Research & Development (RnD)">Research & Development (RnD)</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                GitHub or Portfolio URL (Optional)
              </label>
              <input
                type="url"
                placeholder="https://github.com/your-username"
                value={formData.github}
                onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-[#050706] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#3DDC84]"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                What drives you to join? What do you want to build?
              </label>
              <textarea
                rows={3}
                placeholder="Tell us what you're excited to learn, any past experiments, or problems you want to solve..."
                value={formData.motivation}
                onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-[#050706] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#3DDC84] resize-none"
              />
            </div>

            <div className="p-3 rounded-xl bg-[#3DDC84]/10 border border-[#3DDC84]/20 text-[11px] text-[#3DDC84]">
              ⚡ Membership is 100% free for all university students. No prior experience is required—enthusiasm and curiosity come first.
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#3DDC84] hover:bg-[#00FF87] text-black text-xs font-bold transition flex items-center justify-center gap-2 shadow-lg shadow-[#3DDC84]/25"
            >
              Submit Membership Application <ArrowRight size={14} />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
