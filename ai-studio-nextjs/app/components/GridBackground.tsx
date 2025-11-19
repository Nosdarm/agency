'use client';

import { useEffect, useRef } from 'react';

export function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gridSize = 32;
      const centerX = canvas.width / 2;
      const centerY = 0;

      // Draw grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.lineWidth = 1;

      // Vertical lines
      for (let x = 0; x <= canvas.width; x += gridSize) {
        const distanceFromCenter = Math.abs(x - centerX);
        const maxDistance = canvas.width / 2;
        const opacity = Math.max(0, 1 - distanceFromCenter / maxDistance);

        ctx.strokeStyle = `rgba(255, 255, 255, ${0.03 * opacity})`;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y <= canvas.height; y += gridSize) {
        const distanceFromTop = Math.abs(y - centerY);
        const maxDistance = canvas.height;
        const opacity = Math.max(0, 1 - distanceFromTop / maxDistance);

        ctx.strokeStyle = `rgba(255, 255, 255, ${0.03 * opacity})`;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    drawGrid();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <>
      {/* Grid Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{ background: 'transparent' }}
      />

      {/* Spotlight Effect */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-gradient-to-br from-violet-700/10 via-fuchsia-600/5 to-cyan-500/5 blur-3xl rounded-full"
        />
      </div>
    </>
  );
}
