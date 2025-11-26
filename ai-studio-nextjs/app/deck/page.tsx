"use client";

import React from "react";
import { SlideDeck } from "@/app/components/deck/SlideDeck";
import { getSlides } from "./slides-data";
import { Printer, Download } from "lucide-react";
import Link from "next/link";

export default function DeckPage() {
    const slides = getSlides();

    return (
        <>
            <div className="fixed top-4 right-4 z-50 flex gap-2">
                <a
                    href="/api/deck-pdf-puppeteer"
                    download="BuildItFast-Deck.pdf"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full border border-blue-500 transition-all backdrop-blur-sm text-sm font-medium"
                >
                    <Download className="w-4 h-4" />
                    <span>Download PDF</span>
                </a>
                <Link
                    href="/deck/print"
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 bg-neutral-900/50 hover:bg-neutral-800 text-neutral-400 hover:text-white rounded-full border border-neutral-800 transition-all backdrop-blur-sm text-sm"
                >
                    <Printer className="w-4 h-4" />
                    <span>Print</span>
                </Link>
            </div>
            <SlideDeck slides={slides} />
        </>
    );
}
