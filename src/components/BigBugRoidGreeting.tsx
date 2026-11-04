import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BigBugRoidGreetingProps {
  onComplete: () => void;
}

export const BigBugRoidGreeting: React.FC<BigBugRoidGreetingProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'appear' | 'greeting' | 'takeoff'>('appear');

  useEffect(() => {
    // Phase 1: Appear & start waving Hi
    const greetTimer = setTimeout(() => {
      setPhase('greeting');
    }, 400);

    // Phase 2: Start takeoff to bottom right
    const takeoffTimer = setTimeout(() => {
      setPhase('takeoff');
    }, 2800);

    // Phase 3: Transition complete
    const finishTimer = setTimeout(() => {
      onComplete();
    }, 3600);

    return () => {
      clearTimeout(greetTimer);
      clearTimeout(takeoffTimer);
      clearTimeout(finishTimer);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setPhase('takeoff');
    setTimeout(() => {
      onComplete();
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-[90] pointer-events-none flex items-center justify-center overflow-hidden">
      {/* Semi-transparent dark backdrop that fades as BugRoid minimizes */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: phase === 'takeoff' ? 0 : 0.8 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-black/85 backdrop-blur-md"
      />

      {/* Giant BugRoid & Greeting Wrapper */}
      <motion.div
        initial={{ scale: 0.2, opacity: 0, y: 80 }}
        animate={
          phase === 'takeoff'
            ? {
                scale: 0.18,
                x: '42vw',
                y: '42vh',
                rotate: 15,
                opacity: 0,
              }
            : {
                scale: 1,
                opacity: 1,
                x: 0,
                y: 0,
                rotate: 0,
              }
        }
        transition={
          phase === 'takeoff'
            ? {
                duration: 0.85,
                ease: [0.32, 0, 0.67, 0],
              }
            : {
                type: 'spring',
                stiffness: 120,
                damping: 18,
              }
        }
        className="relative z-10 flex flex-col items-center justify-center select-none"
      >
        {/* Futuristic Speech Bubble Greeting */}
        <AnimatePresence>
          {phase === 'greeting' && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8, y: -10 }}
              transition={{ duration: 0.35 }}
              className="pointer-events-auto mb-6 px-6 py-4 rounded-3xl bg-[#0A0D0B]/95 border-2 border-[#3DDC84] shadow-[0_0_35px_rgba(61,220,132,0.6)] text-center max-w-sm sm:max-w-md backdrop-blur-xl"
            >
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00FF87] animate-ping" />
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#00FF87]">
                  SYSTEM PROTOCOL · GREETING
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                HI DEVELOPER! 👋
              </h2>
              <p className="text-xs sm:text-sm font-mono text-slate-300 mt-1.5 leading-relaxed">
                Welcome to <span className="text-[#3DDC84] font-bold">Android Club VIT Bhopal</span>! I am{' '}
                <span className="text-[#00FF87] font-bold">BugRoid</span>, taking flight to guide you all over HQ! 🚀
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Big BugRoid Mascot Container */}
        <div className="relative w-72 h-80 sm:w-96 sm:h-[420px] md:w-[480px] md:h-[520px] flex items-center justify-center filter drop-shadow-[0_0_40px_rgba(61,220,132,0.85)]">
          {/* Thruster Flames during takeoff */}
          {phase === 'takeoff' && (
            <div className="absolute -bottom-8 flex items-center justify-center gap-8 pointer-events-none">
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: [2, 4, 3], opacity: [0.8, 1, 0.9] }}
                transition={{ duration: 0.15, repeat: Infinity }}
                className="w-6 h-24 bg-gradient-to-b from-[#00FF87] via-[#3DDC84] to-transparent rounded-full blur-[2px]"
              />
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: [3, 2, 4], opacity: [1, 0.8, 0.9] }}
                transition={{ duration: 0.15, repeat: Infinity }}
                className="w-6 h-24 bg-gradient-to-b from-[#00FF87] via-[#3DDC84] to-transparent rounded-full blur-[2px]"
              />
            </div>
          )}

          {/* BugRoid Vector Graphics */}
          <svg
            viewBox="0 0 160 170"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Left Antenna */}
            <motion.line
              x1="62"
              y1="34"
              x2="48"
              y2="14"
              stroke="#3DDC84"
              strokeWidth="5"
              strokeLinecap="round"
              animate={{ rotate: [-8, 10, -8] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
              style={{ transformOrigin: '62px 34px' }}
            />
            <circle cx="47" cy="13" r="4.5" fill="#00FF87" />

            {/* Right Antenna */}
            <motion.line
              x1="98"
              y1="34"
              x2="112"
              y2="14"
              stroke="#3DDC84"
              strokeWidth="5"
              strokeLinecap="round"
              animate={{ rotate: [8, -10, 8] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut', delay: 0.15 }}
              style={{ transformOrigin: '98px 34px' }}
            />
            <circle cx="113" cy="13" r="4.5" fill="#00FF87" />

            {/* Head Dome */}
            <path
              d="M 40 54 A 40 40 0 0 1 120 54 Z"
              fill="url(#bigBugroidGrad)"
              stroke="#00FF87"
              strokeWidth="3"
            />

            {/* Eyes */}
            <circle cx="63" cy="43" r="5" fill="#000000" />
            <circle cx="64" cy="42" r="2" fill="#00FF87" />

            <circle cx="97" cy="43" r="5" fill="#000000" />
            <circle cx="98" cy="42" r="2" fill="#00FF87" />

            {/* Left Arm Moving & Waving Hi */}
            <motion.rect
              x="18"
              y="62"
              width="14"
              height="44"
              rx="7"
              fill="url(#bigBugroidGrad)"
              stroke="#00FF87"
              strokeWidth="2"
              animate={{
                rotate: [-20, -75, -20, -75, -20],
              }}
              transition={{
                duration: 1.1,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{ transformOrigin: '25px 68px' }}
            />

            {/* Torso */}
            <path
              d="M 38 60 H 122 V 110 A 14 14 0 0 1 108 124 H 52 A 14 14 0 0 1 38 110 Z"
              fill="url(#bigBugroidGrad)"
              stroke="#00FF87"
              strokeWidth="3"
            />

            {/* Torso Center Reactor Core */}
            <motion.circle
              cx="80"
              cy="90"
              r="7"
              fill="#000000"
              stroke="#00FF87"
              strokeWidth="2"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
            <circle cx="80" cy="90" r="3" fill="#00FF87" />

            {/* Right Arm Moving & Waving Hi */}
            <motion.rect
              x="128"
              y="62"
              width="14"
              height="44"
              rx="7"
              fill="url(#bigBugroidGrad)"
              stroke="#00FF87"
              strokeWidth="2"
              animate={{
                rotate: [20, 75, 20, 75, 20],
              }}
              transition={{
                duration: 1.1,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.1,
              }}
              style={{ transformOrigin: '135px 68px' }}
            />

            {/* Left Leg */}
            <rect
              x="54"
              y="124"
              width="14"
              height="28"
              rx="7"
              fill="url(#bigBugroidGrad)"
              stroke="#00FF87"
              strokeWidth="2"
            />

            {/* Right Leg */}
            <rect
              x="92"
              y="124"
              width="14"
              height="28"
              rx="7"
              fill="url(#bigBugroidGrad)"
              stroke="#00FF87"
              strokeWidth="2"
            />

            <defs>
              <linearGradient id="bigBugroidGrad" x1="80" y1="20" x2="80" y2="160" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00FF87" />
                <stop offset="0.6" stopColor="#3DDC84" />
                <stop offset="1" stopColor="#1E824C" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Skip button during greeting */}
        <button
          onClick={handleSkip}
          className="pointer-events-auto mt-4 px-4 py-1.5 rounded-full bg-[#101512]/90 border border-[#3DDC84]/40 text-xs font-mono text-[#3DDC84] hover:text-[#00FF87] hover:border-[#00FF87] transition cursor-pointer"
        >
          Skip Greeting ›
        </button>
      </motion.div>
    </div>
  );
};
