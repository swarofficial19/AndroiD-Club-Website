import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, Sparkles, Users, Award, Calendar, HeartHandshake, Instagram, Linkedin, Youtube, Globe } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { CLUB_STATISTICS, SOCIAL_STATISTICS } from '../data/statistics';
import { CLUB_IDENTITY } from '../data/club';
import { fadeIn, staggerContainer } from '../utils/motion';
import { BugRoidMascot } from './BugRoidMascot';

interface HeroProps {
  onOpenJoinModal: () => void;
  onExploreProjects: () => void;
}

// Reusable Count-Up Component for Statistics
const AnimatedNumber: React.FC<{ value: string; isYear?: boolean }> = ({ value, isYear = false }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [displayValue, setDisplayValue] = useState(0);

  const numericMatch = value.match(/\d[\d,]*/);
  const rawNumber = numericMatch ? parseInt(numericMatch[0].replace(/,/g, ''), 10) : 0;
  const suffix = value.replace(/\d[\d,]*/, '');

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const duration = isYear ? 1200 : 1600; // ms

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setDisplayValue(Math.floor(ease * rawNumber));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplayValue(rawNumber);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, rawNumber, isYear]);

  const formatted = isYear ? displayValue.toString() : displayValue.toLocaleString('en-US');

  return (
    <span ref={ref} className="font-mono tabular-nums text-white">
      {formatted}
      <span className="text-[#3DDC84]">{suffix}</span>
    </span>
  );
};

export const Hero: React.FC<HeroProps> = ({ onOpenJoinModal, onExploreProjects }) => {
  const getStatIcon = (id: string) => {
    switch (id) {
      case 'founded':
        return <Calendar size={20} className="text-[#3DDC84]" />;
      case 'core-members':
        return <Users size={20} className="text-[#00FF87]" />;
      case 'enthusiasts':
        return <HeartHandshake size={20} className="text-[#3DDC84]" />;
      case 'events':
        return <Award size={20} className="text-[#00FF87]" />;
      default:
        return <Sparkles size={20} className="text-[#3DDC84]" />;
    }
  };

  const getSocialIcon = (id: string) => {
    switch (id) {
      case 'instagram':
        return <Instagram size={18} className="text-[#3DDC84]" />;
      case 'linkedin':
        return <Linkedin size={18} className="text-[#00FF87]" />;
      case 'youtube':
        return <Youtube size={18} className="text-[#3DDC84]" />;
      case 'community':
      default:
        return <Globe size={18} className="text-[#00FF87]" />;
    }
  };

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onExploreProjects();
    }
  };

  return (
    <section 
      id="home"
      className="relative min-h-[92vh] pt-28 pb-16 flex flex-col justify-center overflow-hidden bg-transparent"
    >
      {/* Background Subtle Green Glow Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.08, 1],
          opacity: [0.15, 0.22, 0.15] 
        }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-[#3DDC84]/20 via-[#00FF87]/15 to-transparent rounded-full blur-3xl pointer-events-none" 
      />
      <div className="absolute top-20 -left-28 w-96 h-96 bg-[#3DDC84]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-28 w-96 h-96 bg-[#00FF87]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Starting of Website: Centered Welcome & Tagline */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-4xl mx-auto mb-10 sm:mb-14 space-y-3"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#101512] border border-[#3DDC84]/30 text-xs font-mono text-[#3DDC84] shadow-[0_0_15px_rgba(61,220,132,0.15)]"
          >
            <span className="w-2 h-2 rounded-full bg-[#00FF87] animate-pulse" />
            <span>VIT BHOPAL UNIVERSITY · SDC</span>
          </motion.div>

          {/* Big Centered "Welcome to ANDROID CLUB" with smooth fade-in */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] [text-wrap:balance]"
          >
            Welcome to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF87] via-[#3DDC84] to-[#10B981] drop-shadow-[0_0_35px_rgba(61,220,132,0.4)]">
              ANDROID CLUB
            </span>
          </motion.h1>

          {/* Official Tagline Just Below */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-1 pt-1"
          >
            <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#3DDC84] tracking-tight font-mono">
              &ldquo;IF IT&apos;S ANDROID, IT&apos;S US!&rdquo;
            </p>
            <p className="text-sm sm:text-base font-semibold text-slate-300 font-mono tracking-wider uppercase">
              Exploration. Discovery. Development.
            </p>
          </motion.div>
        </motion.div>

        {/* Hero Top Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16"
        >
          
          {/* Left Column: Introduction & CTAs */}
          <div className="lg:col-span-7 text-left space-y-6">

            {/* Club Introduction */}
            <motion.p 
              variants={fadeIn('up', 0.4)}
              className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed [text-wrap:balance]"
            >
              We are the Android Club of VIT Bhopal – a passionate community of developers, designers and technology enthusiasts exploring the world of Android and beyond. From building innovative applications to researching emerging technologies, we turn ideas into experiences.
            </motion.p>

            {/* Motto Badge */}
            <motion.div
              variants={fadeIn('up', 0.45)}
              className="p-3 rounded-2xl bg-[#0A0D0B] border border-[#3DDC84]/20 inline-block text-xs text-slate-300 font-mono"
            >
              <span className="text-[#00FF87] font-bold">Motto: </span>
              &ldquo;{CLUB_IDENTITY.motto}&rdquo;
            </motion.div>

            {/* CTA Buttons: Explore Our Journey and Join Our Community */}
            <motion.div 
              variants={fadeIn('up', 0.5)}
              className="pt-2 flex flex-wrap items-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={scrollToAbout}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00FF87] to-[#3DDC84] hover:brightness-110 text-black font-bold text-sm transition-all duration-200 shadow-[0_0_25px_-5px_rgba(61,220,132,0.5)] inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3DDC84]"
              >
                <span>Explore Our Journey</span>
                <ArrowRight size={16} strokeWidth={2.5} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenJoinModal}
                className="px-6 py-3.5 rounded-xl bg-[#0A0D0B] hover:bg-[#101512] text-white font-semibold text-sm border border-[#3DDC84]/25 hover:border-[#3DDC84]/50 transition-all duration-200 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3DDC84]"
              >
                Join Our Community
              </motion.button>
            </motion.div>

            {/* Technology Badges in Black & Green */}
            <motion.div 
              variants={fadeIn('up', 0.6)}
              className="pt-3 flex flex-wrap items-center gap-2 text-xs"
            >
              <span className="text-slate-500 font-mono text-[11px]">DOMAINS:</span>
              {[
                'Android Development',
                'Web Development',
                'Research & Development (RnD)',
                'UI/UX Design',
              ].map((domain, idx) => (
                <span 
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-[#0A0D0B] border border-[#3DDC84]/20 text-[#3DDC84] font-mono text-[11px] hover:border-[#00FF87] hover:bg-[#3DDC84]/5 transition"
                >
                  {domain}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Interactive Android Mascot BugRoid */}
          <motion.div 
            variants={fadeIn('left', 0.3)}
            className="lg:col-span-5 flex justify-center"
          >
            <BugRoidMascot />
          </motion.div>
        </motion.div>

        {/* Section 3: Official Club Statistics Section */}
        <div id="stats" className="pt-10 border-t border-[#3DDC84]/20 space-y-8">
          
          {/* Header & Story Callout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-4 text-left">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-[#3DDC84] shadow-[0_0_6px_#3DDC84]" />
                <span className="text-xs uppercase tracking-wider text-[#3DDC84] font-semibold font-mono">
                  Official Club Figures
                </span>
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Empowering Campus Innovators
              </h2>
            </div>
            <div className="lg:col-span-8 p-4 rounded-2xl bg-[#0A0D0B] border border-[#3DDC84]/20 text-xs text-slate-300 leading-relaxed text-left font-mono">
              <span className="text-[#00FF87] font-semibold">Our Journey: </span>
              {CLUB_IDENTITY.evolutionStory}
            </div>
          </div>

          {/* 4 Main Authentic Figures */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {CLUB_STATISTICS.map((stat, idx) => (
              <motion.div 
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="p-5 sm:p-6 rounded-2xl bg-[#0A0D0B] border border-[#3DDC84]/20 transition-all duration-300 text-left glow-card hover:border-[#3DDC84]/50 hover:shadow-[0_0_25px_-5px_rgba(61,220,132,0.3)]"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-[#3DDC84]/10 border border-[#3DDC84]/20">
                    {getStatIcon(stat.id)}
                  </div>
                  <span className="text-xs font-mono uppercase text-[#3DDC84]/70 tracking-wider">
                    {stat.id}
                  </span>
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono tabular-nums mb-1">
                  <AnimatedNumber value={stat.value} isYear={stat.id === 'founded'} />
                </div>

                <div className="text-sm font-bold text-slate-200">
                  {stat.label}
                </div>

                <div className="text-xs text-slate-400 mt-1 leading-relaxed">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Community Social Statistics Area */}
          <div className="p-6 rounded-3xl bg-[#0A0D0B] border border-[#3DDC84]/20 text-left space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#3DDC84]/15 pb-3">
              <div>
                <span className="text-xs font-mono text-[#3DDC84] font-semibold uppercase tracking-wider">
                  Community Network
                </span>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Social Followers & Member Reach
                </h3>
              </div>
              <span className="text-xs text-slate-400 font-mono">
                Across Instagram, LinkedIn, YouTube & Campus Events
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {SOCIAL_STATISTICS.map((soc) => (
                <div 
                  key={soc.id}
                  className="p-4 rounded-2xl bg-[#101512] border border-[#3DDC84]/15 flex items-center justify-between hover:border-[#3DDC84]/40 transition group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#000000] border border-[#3DDC84]/20 group-hover:bg-[#3DDC84]/10 transition">
                      {getSocialIcon(soc.id)}
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-mono">{soc.platform}</p>
                      <p className="text-xl font-extrabold text-white font-mono">{soc.followers}</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-[#3DDC84] px-2 py-0.5 rounded bg-[#3DDC84]/10">
                    {soc.sublabel}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
