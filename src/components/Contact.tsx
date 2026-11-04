import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Sparkles, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { CLUB_IDENTITY } from '../data/club';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitting, setSubmitting] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email format (e.g. name@college.edu).';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please specify a subject.';
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter a message.';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmittedMessage(
        `Thank you, ${formData.name}! Your inquiry regarding "${formData.subject}" has been successfully logged on this client form.`
      );
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }, 600);
  };

  return (
    <section id="contact" className="py-24 bg-transparent relative border-t border-[#3DDC84]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16 text-left"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101512] border border-[#3DDC84]/30 text-xs font-semibold text-[#3DDC84] mb-3 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3DDC84]" />
            <span>GET IN TOUCH</span>
            <span className="text-slate-500">·</span>
            <span>VIT BHOPAL</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
            LET&apos;S BUILD SOMETHING TOGETHER
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed [text-wrap:balance]">
            Have an idea for a mobile app? Want to collaborate on a hackathon, deliver a guest workshop, or join our community? Reach out to Android Club at VIT Bhopal.
          </p>
        </motion.div>

        {/* Two-Column Grid: Contact Information on Left, Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Official Contact Cards */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="p-7 rounded-3xl bg-[#0A0D0B] border border-[#3DDC84]/25 glow-card space-y-6 shadow-xl">
              
              <div>
                <p className="text-[11px] uppercase font-mono text-[#3DDC84] font-semibold mb-1">
                  Institution
                </p>
                <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <Building2 size={18} className="text-[#00FF87]" />
                  {CLUB_IDENTITY.institution}
                </h4>
                <div className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed font-sans">
                  <MapPin size={16} className="text-[#3DDC84] shrink-0 mt-0.5" />
                  <span>{CLUB_IDENTITY.address}</span>
                </div>
              </div>

              <div className="pt-5 border-t border-[#3DDC84]/15">
                <p className="text-[11px] uppercase font-mono text-[#3DDC84] font-semibold mb-1">
                  Official Club Email
                </p>
                <a
                  href={`mailto:${CLUB_IDENTITY.email}`}
                  className="text-sm sm:text-base font-semibold text-white hover:text-[#00FF87] transition flex items-center gap-2 font-mono"
                >
                  <Mail size={16} className="text-[#3DDC84]" />
                  <span>{CLUB_IDENTITY.email}</span>
                </a>
              </div>

              <div className="pt-5 border-t border-[#3DDC84]/15">
                <p className="text-[11px] uppercase font-mono text-slate-400 font-semibold mb-2">
                  Student Development Cell (SDC)
                </p>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  Android Club operates as part of the student technical development ecosystem at VIT Bhopal University, fostering peer-led engineering and research.
                </p>
              </div>

            </div>

            <div className="p-4 rounded-2xl bg-[#0A0D0B] border border-[#3DDC84]/20 text-xs text-slate-400 font-mono">
              ⚡ Club philosophy: &ldquo;{CLUB_IDENTITY.philosophy}&rdquo;
            </div>
          </div>

          {/* Right Column: Contact Form with Validation */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-8 rounded-3xl bg-[#0A0D0B] border border-[#3DDC84]/25 text-left glow-card shadow-xl">
              
              <h3 className="text-xl font-bold text-white mb-1.5 flex items-center gap-2">
                <Sparkles size={18} className="text-[#00FF87]" />
                Send a Message
              </h3>
              <p className="text-xs text-slate-400 mb-6 font-sans">
                Fill in the details below. Our student coordination team monitors community correspondence.
              </p>

              {submittedMessage && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 mb-6 rounded-2xl bg-[#3DDC84]/15 border border-[#3DDC84]/35 flex items-start gap-3 text-xs text-slate-200"
                >
                  <CheckCircle2 size={18} className="text-[#00FF87] shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-bold text-white">Inquiry Received</p>
                    <p className="text-slate-300 leading-relaxed">{submittedMessage}</p>
                    <p className="text-[11px] text-[#3DDC84] font-mono mt-1">
                      (Client-side preview form. For formal university queries, email androidclub@vitbhopal.ac.in directly.)
                    </p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Aryan Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-[#000000] border text-xs text-white placeholder-slate-500 focus:outline-none transition ${
                        errors.name ? 'border-rose-500' : 'border-[#3DDC84]/25 focus:border-[#3DDC84] focus:ring-1 focus:ring-[#3DDC84]'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-rose-400 mt-1 font-mono">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. aryan@vitbhopal.ac.in"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-[#000000] border text-xs text-white placeholder-slate-500 focus:outline-none transition ${
                        errors.email ? 'border-rose-500' : 'border-[#3DDC84]/25 focus:border-[#3DDC84] focus:ring-1 focus:ring-[#3DDC84]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-400 mt-1 font-mono">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Subject / Topic *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Hackathon Inquiry / Project Mentorship"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-[#000000] border text-xs text-white placeholder-slate-500 focus:outline-none transition ${
                      errors.subject ? 'border-rose-500' : 'border-[#3DDC84]/25 focus:border-[#3DDC84] focus:ring-1 focus:ring-[#3DDC84]'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-[11px] text-rose-400 mt-1 font-mono">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your inquiry or question..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-[#000000] border text-xs text-white placeholder-slate-500 focus:outline-none transition resize-none ${
                      errors.message ? 'border-rose-500' : 'border-[#3DDC84]/25 focus:border-[#3DDC84] focus:ring-1 focus:ring-[#3DDC84]'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-rose-400 mt-1 font-mono">{errors.message}</p>
                  )}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 rounded-xl bg-[#3DDC84] hover:bg-[#00FF87] disabled:opacity-50 text-black text-xs font-bold transition flex items-center justify-center gap-2 shadow-lg shadow-[#3DDC84]/25"
                >
                  {submitting ? (
                    'Logging Message...'
                  ) : (
                    <>
                      <Send size={14} /> Send Message
                    </>
                  )}
                </motion.button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
