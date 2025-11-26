"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SlideDeckProps {
    slides: React.ReactNode[];
}

export const SlideDeck = ({ slides }: SlideDeckProps) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, [slides.length]);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }, [slides.length]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight" || e.key === "Space") {
                nextSlide();
            } else if (e.key === "ArrowLeft") {
                prevSlide();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [nextSlide, prevSlide]);

    return (
        <div className="relative w-full h-screen bg-black overflow-hidden text-white">
            {/* Progress Bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-neutral-900 z-50">
                <motion.div
                    className="h-full bg-blue-500"
                    initial={{ width: "0%" }}
                    animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                    transition={{ duration: 0.3 }}
                />
            </div>

            {/* Navigation Controls */}
            <div className="absolute bottom-8 right-8 flex gap-4 z-50">
                <button
                    onClick={prevSlide}
                    className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <span className="self-center text-neutral-400 font-mono">
                    {currentSlide + 1} / {slides.length}
                </span>
                <button
                    onClick={nextSlide}
                    className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            {/* Slides */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="w-full h-full"
                >
                    {slides[currentSlide]}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};
