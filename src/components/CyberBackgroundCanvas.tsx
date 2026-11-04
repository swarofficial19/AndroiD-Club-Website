import React, { useEffect, useRef } from 'react';

/**
 * CyberBackgroundCanvas
 * Renders the full-site background matching the intro video aesthetic:
 * - Dynamic glowing particles (Android green, mint, emerald, pure white)
 * - Subtle cybernetic coordinate grid
 * - Traveling horizontal laser scanline beam
 * - Constellation line linkages between close particles
 * - Soft radial vignette to preserve high contrast and readability
 */
export const CyberBackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

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
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseAlpha: number;
      alpha: number;
      color: string;
      pulseSpeed: number;
    }

    const particles: Particle[] = [];
    const colors = ['#3DDC84', '#00FF87', '#10B981', '#34D399', '#ffffff'];
    const particleCount = Math.min(85, Math.floor((width * height) / 18000) + 40);

    for (let i = 0; i < particleCount; i++) {
      const baseAlpha = Math.random() * 0.6 + 0.25;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 2 + 1,
        baseAlpha,
        alpha: baseAlpha,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulseSpeed: Math.random() * 0.03 + 0.01,
      });
    }

    let scanlineY = 0;
    let time = 0;

    const render = () => {
      time += 0.02;

      // Dark futuristic clearing
      ctx.fillStyle = 'rgba(0, 0, 0, 0.35)';
      ctx.fillRect(0, 0, width, height);

      // Subtle cybernetic grid (40px spacing)
      ctx.strokeStyle = 'rgba(61, 220, 132, 0.035)';
      ctx.lineWidth = 1;
      const gridSize = 48;
      
      ctx.beginPath();
      for (let x = 0; x < width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Traveling laser scanline beam
      scanlineY = (scanlineY + 2.2) % height;
      const grad = ctx.createLinearGradient(0, scanlineY - 4, 0, scanlineY + 4);
      grad.addColorStop(0, 'rgba(61, 220, 132, 0)');
      grad.addColorStop(0.5, 'rgba(61, 220, 132, 0.07)');
      grad.addColorStop(1, 'rgba(61, 220, 132, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, scanlineY - 4, width, 8);

      // Draw faint connections between nearby particles
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 85) {
            const lineAlpha = (1 - dist / 85) * 0.12;
            ctx.strokeStyle = `rgba(61, 220, 132, ${lineAlpha})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw glowing particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        p.alpha = p.baseAlpha + Math.sin(time * 2 + p.x) * 0.15;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0.1, Math.min(1, p.alpha));
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#00FF87';
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    // Initial background paint
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, width, height);

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
      />
      {/* Ambient Radial Vignette & Glow */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 25%, rgba(61, 220, 132, 0.04) 0%, transparent 60%), radial-gradient(circle at 50% 85%, rgba(0, 255, 135, 0.03) 0%, rgba(0, 0, 0, 0.45) 80%)',
        }}
      />
    </div>
  );
};
