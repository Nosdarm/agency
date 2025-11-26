'use client';

import { useEffect, useRef } from 'react';

export function ShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const drawGradientMesh = () => {
      const { width, height } = canvas;

      // Clear canvas
      ctx.fillStyle = '#020617'; // slate-950
      ctx.fillRect(0, 0, width, height);

      // Create animated gradient mesh
      const gradient1 = ctx.createRadialGradient(
        width * 0.3 + Math.sin(time * 0.5) * 200,
        height * 0.3 + Math.cos(time * 0.3) * 200,
        0,
        width * 0.3,
        height * 0.3,
        width * 0.6
      );
      gradient1.addColorStop(0, 'rgba(139, 92, 246, 0.15)'); // violet
      gradient1.addColorStop(1, 'rgba(139, 92, 246, 0)');

      const gradient2 = ctx.createRadialGradient(
        width * 0.7 + Math.cos(time * 0.4) * 150,
        height * 0.6 + Math.sin(time * 0.6) * 150,
        0,
        width * 0.7,
        height * 0.6,
        width * 0.5
      );
      gradient2.addColorStop(0, 'rgba(217, 70, 239, 0.1)'); // fuchsia
      gradient2.addColorStop(1, 'rgba(217, 70, 239, 0)');

      const gradient3 = ctx.createRadialGradient(
        width * 0.5 + Math.sin(time * 0.7) * 100,
        height * 0.8 + Math.cos(time * 0.5) * 100,
        0,
        width * 0.5,
        height * 0.8,
        width * 0.4
      );
      gradient3.addColorStop(0, 'rgba(34, 211, 238, 0.08)'); // cyan
      gradient3.addColorStop(1, 'rgba(34, 211, 238, 0)');

      // Draw gradients
      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, width, height);

      ctx.globalCompositeOperation = 'screen';
      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = gradient3;
      ctx.fillRect(0, 0, width, height);

      ctx.globalCompositeOperation = 'source-over';

      // Add subtle grid overlay
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.lineWidth = 1;

      const gridSize = 50;
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

      time += 0.01;
      animationFrameId = requestAnimationFrame(drawGradientMesh);
    };

    drawGradientMesh();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ background: '#020617' }}
    />
  );
}
