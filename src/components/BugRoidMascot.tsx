import React from 'react';
import { motion } from 'framer-motion';

/**
 * BigBugRoidMascot
 * Replaces the previous speech-bubble mascot with a large, animated BugRoid
 * performing dynamic, randomized hand movements without any text display,
 * filling the empty space in the Hero section with futuristic Android energy.
 */
export const BugRoidMascot: React.FC = () => {
  return (
    <div className="relative w-full max-w-md lg:max-w-lg h-[460px] sm:h-[500px] rounded-3xl bg-[#0A0D0B]/70 border border-[#3DDC84]/25 p-6 sm:p-10 flex flex-col items-center justify-center glow-card overflow-hidden shadow-2xl shadow-black select-none group hover:border-[#3DDC84]/50 transition-all duration-500 backdrop-blur-sm">
      {/* Cybernetic Grid & Ambient Concentric Rings in Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="w-[360px] h-[360px] rounded-full border border-[#3DDC84]/15 animate-ping opacity-20" />
        <div className="w-[440px] h-[440px] rounded-full border border-[#00FF87]/10" />
        <div className="w-[520px] h-[520px] rounded-full border border-[#3DDC84]/5" />
        {/* Subtle radial green halo */}
        <div className="w-72 h-72 rounded-full bg-[#3DDC84]/10 filter blur-3xl" />
      </div>

      {/* Decorative Cyber Corner Accents */}
      <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#3DDC84]/40" />
      <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#3DDC84]/40" />
      <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#3DDC84]/40" />
      <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#3DDC84]/40" />

      {/* Big BugRoid Animated Mascot Figure */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <motion.div
          animate={{
            y: [-6, 8, -6],
            rotate: [-1, 1, -1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative w-64 h-72 sm:w-72 sm:h-80 flex flex-col items-center justify-center drop-shadow-[0_0_40px_rgba(61,220,132,0.45)] group-hover:scale-105 transition-transform duration-500"
        >
          {/* Vector BugRoid with Rich Dynamic Movement */}
          <svg
            viewBox="0 0 160 175"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Gradients */}
            <defs>
              <linearGradient id="bigBugroidGrad" x1="80" y1="15" x2="80" y2="165" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00FF87" />
                <stop offset="0.4" stopColor="#3DDC84" />
                <stop offset="0.85" stopColor="#2CB868" />
                <stop offset="1" stopColor="#1E824C" />
              </linearGradient>
              <radialGradient id="eyePupilGrad" cx="50%" cy="50%" r="50%">
                <stop stopColor="#00FF87" />
                <stop offset="100%" stopColor="#052E16" />
              </radialGradient>
              <filter id="mascotGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Antenna Left with dynamic twitch */}
            <motion.line
              x1="62"
              y1="34"
              x2="46"
              y2="12"
              stroke="#3DDC84"
              strokeWidth="5.5"
              strokeLinecap="round"
              animate={{ rotate: [-8, 10, -5, 12, -8] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
              style={{ transformOrigin: '62px 34px' }}
            />
            <circle cx="45" cy="11" r="4" fill="#00FF87" filter="url(#mascotGlow)" />

            {/* Antenna Right with independent dynamic twitch */}
            <motion.line
              x1="98"
              y1="34"
              x2="114"
              y2="12"
              stroke="#3DDC84"
              strokeWidth="5.5"
              strokeLinecap="round"
              animate={{ rotate: [8, -12, 6, -10, 8] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
              style={{ transformOrigin: '98px 34px' }}
            />
            <circle cx="115" cy="11" r="4" fill="#00FF87" filter="url(#mascotGlow)" />

            {/* Android Head (Half Circle Dome) */}
            <path
              d="M 38 54 A 42 42 0 0 1 122 54 Z"
              fill="url(#bigBugroidGrad)"
              stroke="#00FF87"
              strokeWidth="2.5"
            />

            {/* Left Eye with Randomized/Natural Blinking */}
            <motion.g
              animate={{ scaleY: [1, 1, 0.08, 1, 1, 1, 0.08, 1] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                times: [0, 0.42, 0.45, 0.48, 0.72, 0.75, 0.78, 1],
              }}
              style={{ transformOrigin: '63px 43px' }}
            >
              <circle cx="63" cy="43" r="5" fill="#03120A" />
              <circle cx="64" cy="42" r="2.2" fill="#00FF87" />
            </motion.g>

            {/* Right Eye with Randomized/Natural Blinking */}
            <motion.g
              animate={{ scaleY: [1, 1, 0.08, 1, 1, 1, 0.08, 1] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                times: [0, 0.42, 0.45, 0.48, 0.72, 0.75, 0.78, 1],
              }}
              style={{ transformOrigin: '97px 43px' }}
            >
              <circle cx="97" cy="43" r="5" fill="#03120A" />
              <circle cx="98" cy="42" r="2.2" fill="#00FF87" />
            </motion.g>

            {/* LEFT ARM: Dynamic random hand movements (waving, reaching, gesturing) */}
            <motion.g
              animate={{
                rotate: [
                  -8,   // resting
                  -45,  // mid wave
                  -75,  // high friendly wave
                  -30,  // gesture forward
                  -65,  // secondary wave
                  -15,  // relaxed
                  -50,  // salute gesture
                  -8,   // back to rest
                ],
              }}
              transition={{
                duration: 5.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{ transformOrigin: '25px 68px' }}
            >
              <rect
                x="16"
                y="62"
                width="16"
                height="46"
                rx="8"
                fill="url(#bigBugroidGrad)"
                stroke="#00FF87"
                strokeWidth="2"
              />
              {/* Hand Palm Accent Ring */}
              <circle cx="24" cy="100" r="3" fill="#00FF87" opacity="0.8" />
            </motion.g>

            {/* Main Torso / Body */}
            <path
              d="M 36 60 H 124 V 114 A 16 16 0 0 1 108 130 H 52 A 16 16 0 0 1 36 114 Z"
              fill="url(#bigBugroidGrad)"
              stroke="#00FF87"
              strokeWidth="2.5"
            />
            {/* Tech chest badge / circuit pattern */}
            <line x1="60" y1="88" x2="100" y2="88" stroke="#00FF87" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="3 3" />
            <circle cx="80" cy="88" r="4" fill="#00FF87" fillOpacity="0.6" />

            {/* RIGHT ARM: Independent dynamic random hand movements */}
            <motion.g
              animate={{
                rotate: [
                  12,   // initial
                  55,   // wave up
                  20,   // gesture
                  68,   // big wave
                  40,   // beckon
                  15,   // low
                  60,   // cheerful wave
                  12,   // rest
                ],
              }}
              transition={{
                duration: 4.6,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.4,
              }}
              style={{ transformOrigin: '135px 68px' }}
            >
              <rect
                x="128"
                y="62"
                width="16"
                height="46"
                rx="8"
                fill="url(#bigBugroidGrad)"
                stroke="#00FF87"
                strokeWidth="2"
              />
              {/* Hand Palm Accent Ring */}
              <circle cx="136" cy="100" r="3" fill="#00FF87" opacity="0.8" />
            </motion.g>

            {/* Left Leg */}
            <rect
              x="52"
              y="130"
              width="16"
              height="34"
              rx="8"
              fill="url(#bigBugroidGrad)"
              stroke="#00FF87"
              strokeWidth="2"
            />

            {/* Right Leg */}
            <rect
              x="92"
              y="130"
              width="16"
              height="34"
              rx="8"
              fill="url(#bigBugroidGrad)"
              stroke="#00FF87"
              strokeWidth="2"
            />
          </svg>
        </motion.div>
      </div>

      {/* Futuristic Ambient Floor Lighting Effect */}
      <div className="absolute bottom-5 w-44 h-4 rounded-full bg-[#00FF87]/20 blur-md pointer-events-none" />
    </div>
  );
};
