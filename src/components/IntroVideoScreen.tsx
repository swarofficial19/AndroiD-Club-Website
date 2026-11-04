import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroVideoScreenProps {
  onComplete: () => void;
}

export const IntroVideoScreen: React.FC<IntroVideoScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // 3.5 seconds auto-fade out as requested ("for 3-4 seconds and then the video itself fades")
  useEffect(() => {
    const totalDuration = 3500; // 3.5 seconds
    const intervalTime = 40;
    const increment = 100 / (totalDuration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 300);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  // High-performance cybernetic particle canvas effect for video aesthetic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle field
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
      color: string;
    }> = [];

    const colors = ['#3DDC84', '#00FF87', '#10B981', '#ffffff'];

    for (let i = 0; i < 70; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.7 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let scanlineY = 0;

    const render = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
      ctx.fillRect(0, 0, width, height);

      // Draw subtle grid
      ctx.strokeStyle = 'rgba(61, 220, 132, 0.05)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw and update particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#00FF87';
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
      });

      // Video scanline laser beam
      scanlineY = (scanlineY + 3.5) % height;
      ctx.fillStyle = 'rgba(61, 220, 132, 0.08)';
      ctx.fillRect(0, scanlineY, width, 3);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#000000] overflow-hidden select-none"
    >
      {/* Background Interactive Video Effect Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-80"
      />

      {/* Cinematic Vignette & Scanlines */}
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.6)_51%)] bg-[length:100%_4px] pointer-events-none opacity-40" />

      {/* Cinematic Center Content: Displays just "Android Club" */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
        {/* Subtle Video Transmission Header */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-[#101512]/90 border border-[#3DDC84]/30 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-[#00FF87] animate-ping" />
          <span className="text-[11px] font-mono tracking-widest text-[#3DDC84] uppercase font-bold">
            SDC · VIT BHOPAL
          </span>
        </motion.div>

        {/* Displaying just "Android Club" in appropriate fonts as requested */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* Ambient Glow */}
          <div className="absolute -inset-8 bg-gradient-to-r from-[#00FF87]/20 via-[#3DDC84]/25 to-transparent blur-3xl pointer-events-none rounded-full" />

          <h1 className="relative text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-white leading-none">
            <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
              Android
            </span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF87] via-[#3DDC84] to-[#10B981] drop-shadow-[0_0_40px_rgba(61,220,132,0.8)]">
              Club
            </span>
          </h1>
        </motion.div>

        {/* Cinematic Underline & Audio Waveform / Progress */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: '100%', opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="h-[2px] max-w-md bg-gradient-to-r from-transparent via-[#00FF87] to-transparent mt-6 mb-4 shadow-[0_0_15px_#00FF87]"
        />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-xs sm:text-sm font-mono text-[#3DDC84]/90 tracking-widest uppercase font-semibold"
        >
          If it&apos;s Android, it&apos;s us!
        </motion.p>
      </div>

      {/* Video Progress Bar at Bottom */}
      <div className="absolute bottom-8 inset-x-8 max-w-md mx-auto z-10 flex flex-col gap-1.5 items-center">
        <div className="w-full flex items-center justify-between text-[10px] font-mono text-slate-400">
          <span className="text-[#3DDC84]">INITIALIZING SHOWCASE</span>
          <span className="font-bold text-white">{Math.min(100, Math.round(progress))}%</span>
        </div>
        <div className="w-full h-1 bg-[#101512] rounded-full overflow-hidden border border-[#3DDC84]/30">
          <motion.div
            className="h-full bg-gradient-to-r from-[#00FF87] to-[#3DDC84] shadow-[0_0_10px_#00FF87]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Optional Skip button in top corner for instant testing */}
      <button
        onClick={onComplete}
        className="absolute top-6 right-6 z-20 px-3 py-1.5 rounded-xl bg-[#0A0D0B]/80 hover:bg-[#161D18] border border-[#3DDC84]/30 text-xs font-mono text-slate-400 hover:text-[#00FF87] transition-all cursor-pointer backdrop-blur-md"
      >
        Skip Intro ›
      </button>
    </motion.div>
  );
};
