'use client';

import React, { useEffect, useRef } from 'react';

// --- CONFIGURATION ---
// Brand Colors: Neon Magenta & Neon Cyan
const LASER_COLORS = [
  '#FF2EC9', // Magenta
  '#3DFFFF', // Cyan
  '#20FF9F', // Green (rare accent)
];

const BEAM_COUNT = 15; // Number of lasers active at once
const BEAM_SPEED_MIN = 2;
const BEAM_SPEED_MAX = 8;
const BEAM_LENGTH_MIN = 100;
const BEAM_LENGTH_MAX = 400;

interface Beam {
  x: number;
  y: number;
  speed: number;
  length: number;
  width: number;
  color: string;
  opacity: number;
  delay: number; // Ticks to wait before respawning
}

export function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const beams = useRef<Beam[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initBeams();
    };

    const initBeams = () => {
      beams.current = [];
      for (let i = 0; i < BEAM_COUNT; i++) {
        resetBeam(i, true);
      }
    };

    const resetBeam = (index: number, initial = false) => {
      const isHorizontal = Math.random() > 0.3; // Mostly horizontal beams for speed feel
      
      beams.current[index] = {
        // Start off-screen
        x: initial ? Math.random() * canvas.width : -500, 
        y: Math.random() * canvas.height,
        speed: (Math.random() * (BEAM_SPEED_MAX - BEAM_SPEED_MIN)) + BEAM_SPEED_MIN,
        length: (Math.random() * (BEAM_LENGTH_MAX - BEAM_LENGTH_MIN)) + BEAM_LENGTH_MIN,
        width: Math.random() * 2 + 0.5, // Thin, sharp lines
        color: LASER_COLORS[Math.floor(Math.random() * LASER_COLORS.length)],
        opacity: Math.random() * 0.5 + 0.1, // Semi-transparent ghosts
        delay: initial ? 0 : Math.random() * 100 // Stagger respawns
      };
    };

    const animate = () => {
      // 1. Clear with a slight fade trail for "motion blur" feel
      // Use Deep Void Purple base color to match theme
      ctx.fillStyle = 'rgba(5, 0, 21, 0.2)'; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 2. Set Blend Mode for glowing effect
      ctx.globalCompositeOperation = 'lighter';

      // 3. Update & Draw Beams
      beams.current.forEach((beam, i) => {
        if (beam.delay > 0) {
          beam.delay--;
          return;
        }

        // Move
        beam.x += beam.speed;

        // Reset if off-screen
        if (beam.x > canvas.width + beam.length) {
          resetBeam(i);
        }

        // Draw Laser
        const gradient = ctx.createLinearGradient(beam.x, beam.y, beam.x - beam.length, beam.y);
        gradient.addColorStop(0, beam.color); // Bright head
        gradient.addColorStop(1, 'transparent'); // Fading tail

        ctx.fillStyle = gradient;
        ctx.beginPath();
        // Draw a thin rectangle
        ctx.rect(beam.x - beam.length, beam.y, beam.length, beam.width);
        ctx.globalAlpha = beam.opacity;
        ctx.fill();
        ctx.globalAlpha = 1.0;
      });

      // Restore blend mode
      ctx.globalCompositeOperation = 'source-over';

      // 4. Optional: Subtle Vignette to focus center
      const grad = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width
      );
      grad.addColorStop(0, 'rgba(5, 0, 21, 0)');
      grad.addColorStop(1, 'rgba(5, 0, 21, 0.8)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-ghost-bg-dark">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}