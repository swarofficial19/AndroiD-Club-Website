import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

/**
 * FlyingBugRoid Companion
 * - Smoothly follows the movement of the user's mouse cursor across the entire website
 * - Pure fun visual companion: NO text, NO speech bubbles, NO guides, NO popups displayed
 * - Has dynamic banking angle based on cursor velocity, twin animated thruster flames,
 *   eye blinking, and antenna twitching
 * - Non-intrusive (pointer-events-none) so all page interactions remain 100% effortless
 */
export const FlyingBugRoid: React.FC = () => {
  // Mouse coordinates motion values
  const mouseX = useMotionValue(
    typeof window !== 'undefined' ? window.innerWidth * 0.85 : 500
  );
  const mouseY = useMotionValue(
    typeof window !== 'undefined' ? window.innerHeight * 0.75 : 500
  );

  // Smooth trailing spring physics for fluid movement
  const springConfig = { damping: 24, stiffness: 180, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Dynamic tilt/banking angle based on velocity
  const [tilt, setTilt] = useState(0);
  const [isMoving, setIsMoving] = useState(false);
  const lastPosRef = useRef({ x: 0, y: 0, time: Date.now() });
  const idleTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Initial center-ish position
    if (typeof window !== 'undefined') {
      mouseX.set(window.innerWidth - 120);
      mouseY.set(window.innerHeight - 120);
      lastPosRef.current = { x: window.innerWidth - 120, y: window.innerHeight - 120, time: Date.now() };
    }

    const handlePointerMove = (e: MouseEvent) => {
      // Offset slightly to the bottom-right of cursor (+20px, +20px) so pointer remains visible
      const targetX = e.clientX + 22;
      const targetY = e.clientY + 22;

      mouseX.set(targetX);
      mouseY.set(targetY);

      // Compute horizontal velocity for banking tilt
      const now = Date.now();
      const dt = Math.max(1, now - lastPosRef.current.time);
      const dx = targetX - lastPosRef.current.x;
      const vx = (dx / dt) * 15; // Scaled velocity

      // Clamp tilt angle between -28 and +28 degrees
      const clampedTilt = Math.max(-28, Math.min(28, vx));
      setTilt(clampedTilt);
      setIsMoving(true);

      lastPosRef.current = { x: targetX, y: targetY, time: now };

      // Reset tilt and thrusters when idle
      if (idleTimeoutRef.current) clearTimeout(idleTimeoutRef.current);
      idleTimeoutRef.current = setTimeout(() => {
        setTilt(0);
        setIsMoving(false);
      }, 150);
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      if (idleTimeoutRef.current) clearTimeout(idleTimeoutRef.current);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        x: smoothX,
        y: smoothY,
      }}
      className="fixed top-0 left-0 z-50 pointer-events-none select-none"
    >
      {/* Mascot Container with Banking Rotation and Floating Bob */}
      <motion.div
        animate={{
          rotate: tilt,
          y: isMoving ? 0 : [-3, 4, -3],
        }}
        transition={{
          rotate: { type: 'spring', damping: 15, stiffness: 220 },
          y: { duration: 2.2, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="relative w-16 h-18 sm:w-20 sm:h-22 filter drop-shadow-[0_0_16px_rgba(61,220,132,0.65)]"
      >
        {/* Glow Halo */}
        <div className="absolute inset-0 rounded-full bg-[#00FF87]/20 blur-md pointer-events-none" />

        {/* BugRoid Vector */}
        <svg
          viewBox="0 0 160 170"
          className="w-full h-full relative z-10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="flyBugroidGrad" x1="80" y1="20" x2="80" y2="160" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00FF87" />
              <stop offset="0.6" stopColor="#3DDC84" />
              <stop offset="1" stopColor="#1E824C" />
            </linearGradient>
            <linearGradient id="thrusterFire" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00FF87" />
              <stop offset="50%" stopColor="#3DDC84" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>

          {/* Antenna Left */}
          <motion.line
            x1="62"
            y1="34"
            x2="48"
            y2="14"
            stroke="#3DDC84"
            strokeWidth="5"
            strokeLinecap="round"
            animate={{ rotate: [-6, 6, -6] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '62px 34px' }}
          />
          <circle cx="47" cy="13" r="3.5" fill="#00FF87" />

          {/* Antenna Right */}
          <motion.line
            x1="98"
            y1="34"
            x2="112"
            y2="14"
            stroke="#3DDC84"
            strokeWidth="5"
            strokeLinecap="round"
            animate={{ rotate: [6, -6, 6] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.15 }}
            style={{ transformOrigin: '98px 34px' }}
          />
          <circle cx="113" cy="13" r="3.5" fill="#00FF87" />

          {/* Android Head (Half Circle Dome) */}
          <path
            d="M 40 54 A 40 40 0 0 1 120 54 Z"
            fill="url(#flyBugroidGrad)"
            stroke="#00FF87"
            strokeWidth="2.5"
          />

          {/* Left Eye with Blinking Animation */}
          <motion.g
            animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
            transition={{ duration: 2.8, repeat: Infinity, times: [0, 0.45, 0.5, 0.55, 1] }}
            style={{ transformOrigin: '63px 43px' }}
          >
            <circle cx="63" cy="43" r="4.5" fill="#03120A" />
            <circle cx="64" cy="42" r="1.8" fill="#00FF87" />
          </motion.g>

          {/* Right Eye with Blinking Animation */}
          <motion.g
            animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
            transition={{ duration: 2.8, repeat: Infinity, times: [0, 0.45, 0.5, 0.55, 1] }}
            style={{ transformOrigin: '97px 43px' }}
          >
            <circle cx="97" cy="43" r="4.5" fill="#03120A" />
            <circle cx="98" cy="42" r="1.8" fill="#00FF87" />
          </motion.g>

          {/* Left Arm (Slightly trailing / flying pose) */}
          <motion.rect
            x="18"
            y="62"
            width="14"
            height="44"
            rx="7"
            fill="url(#flyBugroidGrad)"
            stroke="#00FF87"
            strokeWidth="1.5"
            animate={{ rotate: isMoving ? [-25, -15, -25] : [-8, 8, -8] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '25px 68px' }}
          />

          {/* Main Torso / Body */}
          <path
            d="M 38 60 H 122 V 110 A 14 14 0 0 1 108 124 H 52 A 14 14 0 0 1 38 110 Z"
            fill="url(#flyBugroidGrad)"
            stroke="#00FF87"
            strokeWidth="2.5"
          />

          {/* Right Arm (Waving playfully) */}
          <motion.rect
            x="128"
            y="62"
            width="14"
            height="44"
            rx="7"
            fill="url(#flyBugroidGrad)"
            stroke="#00FF87"
            strokeWidth="1.5"
            animate={{ rotate: isMoving ? [25, 15, 25] : [35, -5, 35] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '135px 68px' }}
          />

          {/* Left Leg */}
          <rect
            x="54"
            y="124"
            width="14"
            height="28"
            rx="7"
            fill="url(#flyBugroidGrad)"
            stroke="#00FF87"
            strokeWidth="1.5"
          />

          {/* Right Leg */}
          <rect
            x="92"
            y="124"
            width="14"
            height="28"
            rx="7"
            fill="url(#flyBugroidGrad)"
            stroke="#00FF87"
            strokeWidth="1.5"
          />

          {/* Thruster Flames (under Left and Right feet) */}
          <motion.polygon
            points="55,152 61,168 67,152"
            fill="url(#thrusterFire)"
            animate={{
              scaleY: isMoving ? [1.2, 1.9, 1.3] : [0.8, 1.2, 0.8],
              opacity: isMoving ? [0.9, 1, 0.9] : [0.5, 0.8, 0.5],
            }}
            transition={{ duration: 0.18, repeat: Infinity }}
            style={{ transformOrigin: '61px 152px' }}
          />
          <motion.polygon
            points="93,152 99,168 105,152"
            fill="url(#thrusterFire)"
            animate={{
              scaleY: isMoving ? [1.2, 1.9, 1.3] : [0.8, 1.2, 0.8],
              opacity: isMoving ? [0.9, 1, 0.9] : [0.5, 0.8, 0.5],
            }}
            transition={{ duration: 0.18, repeat: Infinity, delay: 0.05 }}
            style={{ transformOrigin: '99px 152px' }}
          />
        </svg>
      </motion.div>
    </motion.div>
  );
};
