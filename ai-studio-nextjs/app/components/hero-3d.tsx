"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CardBody, CardContainer, CardItem, useMouseEnter } from "./ui/3d-card";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Hero3D() {
    return (
        <CardContainer containerClassName="py-0">
            <CardBody className="bg-black/50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] border-white/[0.1] w-auto sm:w-[35rem] h-auto rounded-xl p-6 border">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                    Forch DeFi Dashboard
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                    High-frequency analytics interface
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4 relative h-60">
                    <ImageSequence />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                    <CardItem
                        translateZ={20}
                        as={Link}
                        href="#"
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                        View Case
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                        Live Demo
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
}

function ImageSequence() {
    const [isMouseEntered, , mouseX] = useMouseEnter();
    const [activeImage, setActiveImage] = useState(1);

    useEffect(() => {
        if (!isMouseEntered) {
            setActiveImage(1); // Reset to first image when mouse leaves
            return;
        }

        // Map mouseX (-1 to 1) to image index (1 to 7)
        // Shift range to 0 to 2, then divide by 2 to get 0 to 1
        const normalized = (mouseX + 1) / 2;
        // Map 0-1 to 1-7
        const index = Math.min(Math.max(Math.ceil(normalized * 7), 1), 7);
        setActiveImage(index);
    }, [isMouseEntered, mouseX]);

    const images = [
        "/images/Forch.png",
        "/images/Forch2.png",
        "/images/Forch3.png",
        "/images/Forch4.png",
        "/images/Forch5.png",
        "/images/Forch6.png",
        "/images/Forch7.png",
    ];

    return (
        <div className="relative w-full h-full">
            {images.map((src, idx) => (
                <Image
                    key={src}
                    src={src}
                    height="1000"
                    width="1000"
                    className={cn(
                        "absolute inset-0 h-60 w-full object-cover rounded-xl transition-opacity duration-75", // Fast transition for smooth scrubbing
                        activeImage === idx + 1 ? "opacity-100 z-10" : "opacity-0 z-0"
                    )}
                    alt={`Forch Dashboard View ${idx + 1}`}
                    priority={idx === 0} // Prioritize the first image
                />
            ))}
        </div>
    );
}
