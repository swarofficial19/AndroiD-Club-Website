import React from 'react';
import { Coins, Sparkles, Trophy, Gift, ArrowRight, ShieldCheck, Flame } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';

export const DroidCoins: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'PARTICIPATE',
      description: 'Attend Android Club events and activities.',
      icon: <Sparkles size={24} className="text-[#3DDC84]" />,
      detail: 'Register and check-in at club hackathons, bootcamps, and coding tussles.',
    },
    {
      number: '02',
      title: 'EARN',
      description: 'Collect Droid Coins through participation.',
      icon: <Coins size={24} className="text-[#00FF87]" />,
      detail: 'Earn digital token milestones credited for active workshop involvement.',
    },
    {
      number: '03',
      title: 'REDEEM',
      description: 'Redeem your earned coins for official Android Club merchandise and swag.',
      icon: <Gift size={24} className="text-[#3DDC84]" />,
      detail: 'Unlock exclusive stickers, developer tees, premium badges, and event perks.',
    },
  ];

  return (
    <section id="droid-coins" className="py-24 bg-transparent relative border-t border-[#3DDC84]/15 overflow-hidden">
      {/* Background glow meshes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#3DDC84]/15 via-[#00FF87]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Special Feature Hero Box */}
        <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-gradient-to-b from-[#101512] via-[#0A0D0B] to-[#050706] border border-[#3DDC84]/35 shadow-2xl glow-card relative overflow-hidden">
          
          {/* Subtle circuit grid */}
          <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />

          {/* Top Status & Badge */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#000000]/80 border border-[#3DDC84]/40 text-xs font-mono text-[#00FF87]">
              <Flame size={14} className="text-[#3DDC84]" />
              <span>OFFICIAL DIGITAL REWARDS</span>
              <span className="text-slate-600">·</span>
              <span className="text-white">SDC ECOSYSTEM</span>
            </div>

            {/* Prominent COMING SOON - 2026 Badge */}
            <div className="px-4 py-1.5 rounded-full bg-[#3DDC84]/15 border border-[#3DDC84]/50 text-xs font-mono font-bold text-[#00FF87] tracking-wider uppercase shadow-[0_0_15px_-3px_rgba(61,220,132,0.4)]">
              COMING SOON – 2026
            </div>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
            
            {/* Left Column: Heading & Description */}
            <div className="lg:col-span-8 text-left space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                INTRODUCING DROID COINS
              </h2>

              <p className="text-lg sm:text-xl font-bold font-mono text-[#3DDC84]">
                Earn. Engage. Redeem.
              </p>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-sans">
                Droid Coins are the official digital reward currency of Android Club. Members can earn Droid Coins by attending events and participating in club activities, creating an engaging reward experience for our community.
              </p>

              <div className="p-3.5 rounded-2xl bg-[#000000]/70 border border-[#3DDC84]/20 inline-block text-xs text-slate-400 font-mono">
                <span className="text-[#00FF87]">Note: </span>
                Official student loyalty initiative launching for all VIT Bhopal club members. Showcase preview only.
              </div>
            </div>

            {/* Right Column: 3D Glowing Coin Emblem */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative">
                {/* Outer Orbit Rings */}
                <div className="absolute inset-0 -m-6 rounded-full border border-[#3DDC84]/20 animate-spin opacity-40 [animation-duration:20s]" />
                <div className="absolute inset-0 -m-3 rounded-full border border-dashed border-[#00FF87]/30" />

                {/* The Droid Coin */}
                <motion.div
                  animate={{ 
                    rotateY: [0, 180, 360],
                    y: [-4, 4, -4]
                  }}
                  transition={{ 
                    rotateY: { duration: 10, repeat: Infinity, ease: 'linear' },
                    y: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
                  }}
                  className="w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-gradient-to-br from-[#3DDC84] via-[#10B981] to-[#042817] p-1.5 shadow-[0_0_50px_rgba(61,220,132,0.4)] flex items-center justify-center cursor-default"
                >
                  <div className="w-full h-full rounded-full bg-[#050806] border-2 border-[#3DDC84]/60 flex flex-col items-center justify-center text-center p-4 relative overflow-hidden">
                    {/* Coin Reflection Sheen */}
                    <div className="absolute -top-10 -left-10 w-24 h-24 bg-white/20 rounded-full blur-xl pointer-events-none" />

                    {/* Android Icon on Coin */}
                    <svg
                      width="52"
                      height="52"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-[#3DDC84] drop-shadow-[0_0_10px_#3DDC84] mb-1"
                    >
                      <path
                        d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993.0001.5511-.4483.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5847 8.4234 13.8447 8.08 12 8.08c-1.8448 0-3.5847.3434-5.1368.8697L4.8409 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396"
                        fill="currentColor"
                      />
                    </svg>

                    <span className="font-mono font-extrabold text-sm tracking-wider text-white">
                      DROID COIN
                    </span>
                    <span className="font-mono text-[10px] text-[#00FF87] tracking-widest">
                      VIT BHOPAL
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>

          </div>

          {/* Three Process Steps: PARTICIPATE -> EARN -> REDEEM */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[#3DDC84]/20">
            {steps.map((step, idx) => (
              <div
                key={step.number}
                className="p-6 rounded-2xl bg-[#000000]/70 border border-[#3DDC84]/25 text-left flex flex-col justify-between hover:border-[#3DDC84]/60 transition-colors group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-[#3DDC84] px-2.5 py-1 rounded bg-[#3DDC84]/10 border border-[#3DDC84]/20">
                      STEP {step.number}
                    </span>
                    <div className="p-2 rounded-xl bg-[#101512] border border-white/5 group-hover:scale-110 transition-transform">
                      {step.icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-extrabold text-white tracking-tight mb-2 group-hover:text-[#00FF87] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    {step.description}
                  </p>
                </div>

                <p className="text-[11px] text-slate-400 font-mono pt-3 border-t border-white/5">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
