import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { AndroidLogo } from './AndroidLogo';
import { CLUB_IDENTITY } from '../data/club';

interface NavbarProps {
  onOpenJoinModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenJoinModal }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Domains', href: '#domains', id: 'domains' },
    { label: 'Events', href: '#events', id: 'events' },
    { label: 'Recruitment', href: '#recruitment', id: 'recruitment' },
    { label: 'Learning Hub', href: '#blogs', id: 'blogs' },
    { label: 'Droid Coins', href: '#droid-coins', id: 'droid-coins' },
    { label: 'Team', href: '#team', id: 'team' },
    { label: 'Sponsors', href: '#sponsors', id: 'sponsors' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPos = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#000000]/90 backdrop-blur-xl border-b border-[#3DDC84]/15 py-3 shadow-lg shadow-black/80' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Lockup */}
          <a 
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="flex items-center gap-2.5 text-decoration-none group cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3DDC84] rounded-xl p-1"
          >
            <AndroidLogo size={28} />
            <div className="flex flex-col text-left">
              <div className="flex items-baseline gap-1.5 leading-none">
                <span className="font-extrabold tracking-tight text-white text-base sm:text-lg">
                  ANDROID
                </span>
                <span className="font-extrabold text-sm sm:text-base tracking-wider text-[#3DDC84] font-mono">
                  CLUB
                </span>
              </div>
              <span className="text-[10px] text-slate-500 font-mono hidden sm:inline leading-tight">
                VIT Bhopal
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-xs font-medium">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`relative py-1 transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3DDC84] rounded-md px-1 ${
                    isActive 
                      ? 'text-white font-semibold' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span 
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#3DDC84] rounded-full shadow-[0_0_10px_#3DDC84]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Header CTAs & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenJoinModal}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#3DDC84] hover:bg-[#00FF87] text-black text-xs font-bold transition-all duration-200 shadow-lg shadow-[#3DDC84]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3DDC84]"
            >
              <span>Join the Club</span>
              <ArrowRight size={13} strokeWidth={2.5} />
            </motion.button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-[#0A0D0B] text-slate-300 hover:text-white hover:bg-[#101512] border border-[#3DDC84]/20 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3DDC84]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </div>

      {/* Responsive Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-[#0A0D0B] border-b border-[#3DDC84]/20 overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-5 space-y-3 text-left">
              <div className="pb-2 border-b border-white/5">
                <span className="text-[11px] font-mono text-[#3DDC84] font-semibold">
                  {CLUB_IDENTITY.subName} · {CLUB_IDENTITY.institution}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.id}
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className={`px-3 py-2 rounded-xl text-xs font-medium block transition-colors ${
                        isActive
                          ? 'bg-[#101512] text-[#3DDC84] font-semibold border border-[#3DDC84]/30'
                          : 'text-slate-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </div>

              <div className="pt-3 border-t border-white/10">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenJoinModal();
                  }}
                  className="w-full py-2.5 rounded-xl bg-[#3DDC84] hover:bg-[#00FF87] text-black text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-lg shadow-[#3DDC84]/20"
                >
                  <span>Join Android Club</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
