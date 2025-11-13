"use client";

import { useEffect, useRef, useState } from "react";

export function AnimatedGridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const updateSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateSize();
    window.addEventListener("resize", updateSize);

    // Grid settings
    const gridSize = 50; // Grid cell size
    const glowRadius = 200; // Glow effect radius
    const dotRadius = 1.5; // Dot size

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw grid dots
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          // Calculate distance from mouse
          const dx = mousePos.x - x;
          const dy = mousePos.y - y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Calculate opacity based on distance from mouse
          let opacity = 0.15;
          if (distance < glowRadius) {
            opacity = 0.6 - (distance / glowRadius) * 0.45;
          }

          // Draw dot
          ctx.beginPath();
          ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(139, 92, 246, ${opacity})`; // Violet color
          ctx.fill();

          // Draw glow effect near mouse
          if (distance < glowRadius) {
            const glowOpacity = (1 - distance / glowRadius) * 0.3;
            ctx.beginPath();
            ctx.arc(x, y, dotRadius * 2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(167, 139, 250, ${glowOpacity})`;
            ctx.fill();
          }
        }
      }

      // Draw connecting lines near mouse
      ctx.strokeStyle = "rgba(139, 92, 246, 0.1)";
      ctx.lineWidth = 1;

      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          const dx = mousePos.x - x;
          const dy = mousePos.y - y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < glowRadius * 0.7) {
            const opacity = (1 - distance / (glowRadius * 0.7)) * 0.3;
            ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;

            // Draw horizontal line
            if (x + gridSize < canvas.width) {
              ctx.beginPath();
              ctx.moveTo(x, y);
              ctx.lineTo(x + gridSize, y);
              ctx.stroke();
            }

            // Draw vertical line
            if (y + gridSize < canvas.height) {
              ctx.beginPath();
              ctx.moveTo(x, y);
              ctx.lineTo(x, y + gridSize);
              ctx.stroke();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", updateSize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePos.x, mousePos.y]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ background: "transparent" }}
    />
  );
}
