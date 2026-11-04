import React, { useState } from 'react';
import { ArrowUp, Mail, MapPin, Send, CheckCircle2, AlertCircle, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { AndroidLogo } from './AndroidLogo';
import { CLUB_IDENTITY } from '../data/club';

export const Footer: React.FC = () => {
  // Newsletter state
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [subscribedEmails, setSubscribedEmails] = useState<string[]>([]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Domains', href: '#domains' },
    { label: 'Events', href: '#events' },
    { label: 'Learning Hub', href: '#blogs' },
    { label: 'Droid Coins', href: '#droid-coins' },
    { label: 'Team', href: '#team' },
    { label: 'Sponsors', href: '#sponsors' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();

    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setStatus('error');
      setFeedbackMessage('Please enter a valid email address.');
      return;
    }

    if (subscribedEmails.includes(trimmed.toLowerCase())) {
      setStatus('error');
      setFeedbackMessage('This email is already registered in the preview list.');
      return;
    }

    setStatus('loading');
    setTimeout(() => {
      setSubscribedEmails([...subscribedEmails, trimmed.toLowerCase()]);
      setStatus('success');
      setFeedbackMessage(`Subscribed ${trimmed}! (Note: Client-side demonstration mode; connect mailing service for automated dispatches).`);
      setEmail('');
    }, 600);
  };

  return (
    <footer className="bg-transparent border-t border-[#3DDC84]/15 pt-16 pb-12 relative text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter Strip */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-[#0A0D0B] border border-[#3DDC84]/20 flex flex-col lg:flex-row items-center justify-between gap-6 glow-card">
          <div className="max-w-xl text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#00FF87] mb-1">
              <Mail size={14} /> CLUB NEWSLETTER & EVENT NOTICES
            </div>
            <h4 className="text-xl font-bold text-white tracking-tight">
              Stay updated with Android Club hackathons and workshops
            </h4>
            <p className="text-xs text-slate-400 mt-1">
              Receive notifications for upcoming coding sprints, Android bootcamps, and technical articles at VIT Bhopal.
            </p>
          </div>

          <form onSubmit={handleNewsletterSubmit} className="w-full lg:w-auto flex flex-col sm:flex-row gap-2 shrink-0">
            <div className="relative">
              <input
                type="email"
                placeholder="developer@vitbhopal.ac.in"
                value={email}
                disabled={status === 'loading'}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                className="w-full sm:w-72 px-4 py-2.5 rounded-xl bg-[#000000] border border-[#3DDC84]/30 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#3DDC84] focus:ring-1 focus:ring-[#3DDC84]"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={status === 'loading'}
              className="px-5 py-2.5 rounded-xl bg-[#3DDC84] hover:bg-[#00FF87] text-black text-xs font-bold transition flex items-center justify-center gap-1.5 disabled:opacity-50"
            >
              {status === 'loading' ? (
                'Subscribing...'
              ) : (
                <>
                  <span>Subscribe</span>
                  <Send size={13} />
                </>
              )}
            </motion.button>
          </form>
        </div>

        {/* Feedback message for newsletter */}
        {feedbackMessage && (
          <div className={`-mt-8 mb-10 p-3.5 rounded-xl text-xs flex items-start gap-2 ${
            status === 'success' 
              ? 'bg-[#3DDC84]/15 border border-[#3DDC84]/30 text-[#00FF87]' 
              : 'bg-rose-500/15 border border-rose-500/30 text-rose-300'
          }`}>
            {status === 'success' ? <CheckCircle2 size={16} className="shrink-0 mt-0.5" /> : <AlertCircle size={16} className="shrink-0 mt-0.5" />}
            <span>{feedbackMessage}</span>
          </div>
        )}

        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#3DDC84]/15">
          
          {/* Column 1: Brand, Tagline & Address */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <AndroidLogo size={28} />
              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-extrabold tracking-tight text-white text-lg">
                    ANDROID
                  </span>
                  <span className="font-bold text-xs tracking-wider text-[#3DDC84] font-mono">
                    CLUB
                  </span>
                </div>
                <p className="text-[10px] text-slate-500 font-mono">
                  {CLUB_IDENTITY.subName} · {CLUB_IDENTITY.institution}
                </p>
              </div>
            </div>

            <p className="text-sm font-semibold text-[#00FF87] font-mono">
              &ldquo;{CLUB_IDENTITY.tagline}&rdquo;
            </p>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              &ldquo;{CLUB_IDENTITY.philosophy}&rdquo; — {CLUB_IDENTITY.evolutionStory}
            </p>

            <div className="text-xs text-slate-400 font-mono space-y-2 pt-2">
              <p className="flex items-start gap-2 text-slate-300">
                <MapPin size={14} className="text-[#3DDC84] shrink-0 mt-0.5" />
                <span>{CLUB_IDENTITY.address}</span>
              </p>
              <p className="flex items-center gap-2 text-slate-300">
                <Mail size={14} className="text-[#3DDC84] shrink-0" />
                <a href={`mailto:${CLUB_IDENTITY.email}`} className="hover:text-[#00FF87] transition">
                  {CLUB_IDENTITY.email}
                </a>
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#3DDC84]">
              Website Sections
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-400 hover:text-[#00FF87] transition-colors flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#3DDC84] rounded py-0.5"
                >
                  <span className="text-[#3DDC84]">›</span>
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Community Motto & Back-to-Top */}
          <div className="md:col-span-3 space-y-4 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#3DDC84] mb-2">
                Community Motto
              </h4>
              <p className="text-xs text-slate-300 italic mb-3 font-mono">
                &ldquo;{CLUB_IDENTITY.motto}&rdquo;
              </p>
              <p className="text-[11px] text-slate-500 font-mono">
                &ldquo;{CLUB_IDENTITY.communityMessage}&rdquo;
              </p>
            </div>

            {/* Back to Top Button */}
            <div>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={scrollToTop}
                className="w-full sm:w-auto px-4 py-2 rounded-xl bg-[#0A0D0B] hover:bg-[#101512] text-[#3DDC84] hover:text-[#00FF87] text-xs font-medium border border-[#3DDC84]/25 transition inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#3DDC84]"
              >
                <span>Back to top</span>
                <ArrowUp size={13} />
              </motion.button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright specified in Requirement 1 */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            {CLUB_IDENTITY.copyright}
          </div>
          <div className="flex items-center gap-1.5 text-slate-400">
            <span>{CLUB_IDENTITY.institution}</span>
            <span>·</span>
            <span className="text-[#3DDC84] font-semibold">{CLUB_IDENTITY.tagline}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
