"use client";

import React, { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { getSlides } from "../slides-data";

function PrintContent() {
    const slides = getSlides();
    const searchParams = useSearchParams();
    const isPdfMode = searchParams.get("pdf") === "true";

    useEffect(() => {
        // Only auto-trigger print dialog if not in PDF mode (Puppeteer)
        if (!isPdfMode) {
            const timer = setTimeout(() => {
                window.print();
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [isPdfMode]);

    return (
        <>
            {/* Print instructions - hidden in PDF mode */}
            {!isPdfMode && (
                <div className="fixed top-4 right-4 z-50 print:hidden no-print bg-neutral-900 p-4 rounded-lg border border-neutral-800 shadow-xl max-w-sm">
                    <h3 className="font-bold text-white mb-2">Print to PDF</h3>
                    <p className="text-sm text-neutral-400 mb-4">
                        The print dialog should open automatically. If not, press Ctrl+P (Cmd+P).
                        <br /><br />
                        <strong>Settings:</strong>
                    </p>
                    <ul className="list-disc list-inside text-sm text-neutral-400 mb-4">
                        <li>Layout: Landscape</li>
                        <li>Background graphics: Checked</li>
                        <li>Margins: None</li>
                    </ul>
                    <button
                        onClick={() => window.print()}
                        className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white rounded font-bold transition-colors"
                    >
                        Open Print Dialog
                    </button>
                </div>
            )}

            <div className="flex flex-col">
                {slides.map((slide, index) => (
                    <div key={index} className="slide-wrapper page-break-after-always">
                        {slide}
                    </div>
                ))}
            </div>
        </>
    );
}

export default function PrintDeckPage() {
    return (
        <div className="w-full bg-black text-white">
            <style jsx global>{`
        @page {
          size: A4 landscape;
          margin: 0;
        }

        @media print {
          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            background: black !important;
          }

          .page-break-after-always {
            page-break-after: always;
            break-after: page;
            height: 100vh;
            width: 100vw;
            overflow: hidden;
          }

          /* Force background colors */
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          .no-print {
            display: none !important;
          }
        }

        /* For Puppeteer rendering */
        html, body {
          margin: 0;
          padding: 0;
          background: black;
          overflow-x: hidden;
        }

        .slide-wrapper {
          width: 100vw;
          min-height: 100vh;
          overflow: hidden;
        }
      `}</style>

            <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
                <PrintContent />
            </Suspense>
        </div>
    );
}
