"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SlideProps {
    title: string;
    subtitle?: string;
    children?: React.ReactNode;
    visual?: React.ReactNode;
    layout?: "center" | "split" | "full";
    className?: string;
}

export const Slide = ({
    title,
    subtitle,
    children,
    visual,
    layout = "split",
    className,
}: SlideProps) => {
    return (
        <div
            className={cn(
                "w-full h-full flex flex-col p-12 md:p-24 max-w-7xl mx-auto",
                className
            )}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
            >
                <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400">
                    {title}
                </h1>
                {subtitle && (
                    <h2 className="text-xl md:text-2xl text-neutral-400 mt-4 font-light">
                        {subtitle}
                    </h2>
                )}
            </motion.div>

            <div className="flex-1 flex flex-col md:flex-row gap-12 items-center">
                {layout === "split" && (
                    <>
                        <div className="flex-1 text-lg md:text-xl text-neutral-300 space-y-6">
                            {children}
                        </div>
                        <div className="flex-1 w-full h-full flex items-center justify-center">
                            {visual}
                        </div>
                    </>
                )}

                {layout === "center" && (
                    <div className="w-full text-center items-center justify-center flex flex-col gap-8">
                        <div className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto space-y-6">
                            {children}
                        </div>
                        {visual && <div className="w-full flex justify-center">{visual}</div>}
                    </div>
                )}

                {layout === "full" && (
                    <div className="w-full h-full flex flex-col gap-8">
                        <div className="text-lg md:text-xl text-neutral-300 space-y-6">
                            {children}
                        </div>
                        {visual && <div className="flex-1 w-full">{visual}</div>}
                    </div>
                )}
            </div>
        </div>
    );
};
