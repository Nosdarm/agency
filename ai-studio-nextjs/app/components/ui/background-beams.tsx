"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";

export const BackgroundBeams = ({ className }: { className?: string }) => {
    const beamsRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = beamsRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let beams: Beam[] = [];
        const beamCount = 7; // Number of beams

        class Beam {
            x: number;
            y: number;
            width: number;
            speed: number;
            opacity: number;
            height: number;
            color: string;

            constructor(canvasWidth: number, canvasHeight: number) {
                this.x = Math.random() * canvasWidth;
                this.y = Math.random() * canvasHeight;
                this.width = Math.random() * 2 + 0.5; // Thin beams
                this.height = canvasHeight;
                this.speed = Math.random() * 0.5 + 0.1; // Slow movement
                this.opacity = Math.random() * 0.5 + 0.1;
                this.color = `rgba(255, 255, 255, ${this.opacity})`;
            }

            update(canvasWidth: number) {
                this.x += this.speed;
                if (this.x > canvasWidth) {
                    this.x = 0;
                }
            }

            draw(ctx: CanvasRenderingContext2D) {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.rect(this.x, 0, this.width, this.height);
                ctx.fill();

                // Add a glow effect
                ctx.shadowBlur = 10;
                ctx.shadowColor = "white";
            }
        }

        const init = () => {
            beams = [];
            for (let i = 0; i < beamCount; i++) {
                beams.push(new Beam(canvas.width, canvas.height));
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw gradient background
            const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
            gradient.addColorStop(0, "rgba(0, 0, 0, 0)");
            gradient.addColorStop(1, "rgba(0, 0, 0, 0.2)");
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            beams.forEach((beam) => {
                beam.update(canvas.width);
                beam.draw(ctx);
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        animate();

        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div
            className={cn(
                "fixed inset-0 z-0 pointer-events-none flex items-center justify-center bg-neutral-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]",
                className
            )}
        >
            <canvas
                ref={beamsRef}
                className="absolute inset-0 h-full w-full opacity-30"
            />
        </div>
    );
};
