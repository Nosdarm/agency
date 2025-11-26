"use client";

import React from "react";
import { Slide } from "@/app/components/deck/Slide";
import { BackgroundBeams } from "@/app/components/ui/background-beams";
import { GridBackground } from "@/app/components/deck/GridBackground";
import { Check, User, Code, Bug, FileText, Shield, Github, FileCode, Figma, Cloud } from "lucide-react";
import Image from "next/image";

// Tech logos as SVG components
const ReactLogo = () => (
    <svg viewBox="-10.5 -9.45 21 18.9" className="w-10 h-10">
        <circle cx="0" cy="0" r="2" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="10" ry="4.5" />
            <ellipse rx="10" ry="4.5" transform="rotate(60)" />
            <ellipse rx="10" ry="4.5" transform="rotate(120)" />
        </g>
    </svg>
);

const NextLogo = () => (
    <svg viewBox="0 0 180 180" className="w-10 h-10">
        <circle cx="90" cy="90" r="85" fill="white" />
        <path d="M149.508 157.52L69.142 54H54v71.97h12.114V69.384l73.885 95.461a90.304 90.304 0 009.509-7.325zM115 54h12v72h-12z" fill="black" />
    </svg>
);

const TypeScriptLogo = () => (
    <svg viewBox="0 0 400 400" className="w-10 h-10">
        <rect fill="#3178C6" width="400" height="400" rx="50" />
        <path fill="white" d="M87 200v17h52v148h36V217h52v-17H87zM288 186q-17 0-29.5 6t-19 15.5-9.5 20-3 21.5q0 23 11 39t35 26q18 8 32 13t22.5 11.5 11 13 3.5 17.5q0 19-13 29t-36 10q-17 0-32-6t-24-15l-22 26q14 13 35.5 21t45.5 8q20 0 37-7t28.5-19 18-28 6.5-34q0-25-12-42t-37-28q-18-8-31.5-13T292 276t-10-12.5-3-16.5q0-15 11-23.5t29-8.5q26 0 49 17l18-26q-13-11-33.5-17.5T288 186z" />
    </svg>
);

const TailwindLogo = () => (
    <svg viewBox="0 0 54 33" className="w-10 h-6">
        <path fill="#38BDF8" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" />
    </svg>
);

const PythonLogo = () => (
    <svg viewBox="0 0 256 255" className="w-10 h-10">
        <defs>
            <linearGradient id="py1" x1="12.959%" y1="12.039%" x2="79.639%" y2="78.201%">
                <stop offset="0%" stopColor="#387EB8" />
                <stop offset="100%" stopColor="#366994" />
            </linearGradient>
            <linearGradient id="py2" x1="19.128%" y1="20.579%" x2="90.742%" y2="88.429%">
                <stop offset="0%" stopColor="#FFE052" />
                <stop offset="100%" stopColor="#FFC331" />
            </linearGradient>
        </defs>
        <path fill="url(#py1)" d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13z" />
        <path fill="url(#py2)" d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.131 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13z" />
    </svg>
);

const PostgresLogo = () => (
    <svg viewBox="0 0 128 128" className="w-10 h-10">
        <path fill="#336791" d="M93.809 92.112c.785-6.533.55-7.492 5.416-6.433l1.235.108c3.742.17 8.637-.602 11.513-1.938 6.191-2.873 9.861-7.668 3.758-6.409-13.924 2.873-14.881-1.842-14.881-1.842 14.703-21.815 20.849-49.508 15.545-56.287-14.47-18.489-39.517-9.746-39.936-9.52l-.134.025c-2.751-.571-5.83-.912-9.289-.968-6.301-.104-11.082 1.652-14.535 4.41 0 0-44.19-18.209-42.139 22.917.437 8.759 12.578 66.293 27.07 48.951 5.295-6.337 10.411-11.692 10.411-11.692 2.541 1.71 5.573 2.583 8.776 2.271l.248-.022c-.078.796-.042 1.575.098 2.497-3.757 4.199-2.653 4.936-10.166 6.482-7.602 1.566-3.136 4.355-.221 5.084 3.535.884 11.712 2.136 17.238-5.598l-.22.882c1.474 1.18 1.375 8.477 1.583 13.69.208 5.214.558 10.079 1.621 12.948 1.063 2.868 2.317 10.256 12.191 8.14 8.252-1.764 14.561-4.309 15.136-27.985z" />
        <path fill="#fff" d="M75.458 125.256c-4.367.901-7.227.563-9.053-1.396-2.972-3.187-2.858-9.431-2.663-17.946.132-5.773.283-12.308-.63-16.31-.547-2.395-1.472-3.73-2.913-4.199-1.048-.341-2.007-.054-2.118-.016l-.224.065c-1.036.302-3.043.889-5.37.963-.498.015-.975.018-1.43.012l.154 8.047c.138 7.237.214 11.221-.64 12.732-.772 1.368-2.153 2.149-3.984 2.249-2.585.137-4.805-1.016-6.139-3.187-1.182-1.924-1.917-4.612-2.187-7.985l-1.59-50.406c.02-4.441.424-7.765 1.208-9.91.67-1.83 1.724-3.105 3.137-3.79 1.376-.668 2.935-.833 4.635-.491 2.152.434 4.032 1.545 5.58 3.301 1.396 1.583 2.565 3.7 3.479 6.299.773 2.2 1.331 4.724 1.655 7.506.183 1.584.289 3.237.316 4.917l.157-.039c2.16-.533 4.75-.755 7.693-.66 2.867.092 5.884.565 8.971 1.406 3.114.847 5.838 1.944 8.095 3.261 2.126 1.24 3.928 2.767 5.351 4.539.698.869 1.295 1.821 1.773 2.84.468.993.83 2.032 1.072 3.087.217.941.369 1.944.454 2.986.078.946.108 1.95.087 2.985-.016.827-.06 1.624-.134 2.364l.219-.022c1.993-.195 4.37.213 7.07 1.214 2.607.967 4.62 2.149 5.986 3.521 1.442 1.449 1.856 2.901 1.233 4.32-1.003 2.283-5.078 3.593-8.225 4.153-1.429.255-2.697.384-3.782.389l-.114.004c-1.33.014-2.146-.044-2.795-.134-.307.247-.649.503-1.023.77.318 3.386.391 6.391.219 8.934-.168 2.478-.478 4.476-.92 5.936-.466 1.54-1.105 2.645-1.901 3.287-.861.694-1.815.895-2.836.6-1.07-.309-1.815-1.111-2.214-2.384-.389-1.24-.506-2.807-.347-4.66.151-1.751.452-3.638.893-5.606l.16-.706-1.041-.046c-.158.94-.376 1.924-.651 2.927-.379 1.381-.885 2.767-1.506 4.129-.593 1.3-1.254 2.525-1.966 3.648-.711 1.121-1.387 2.037-2.011 2.723-.667.734-1.353 1.265-2.04 1.577-.631.286-1.29.347-1.959.18-1.049-.263-1.674-.88-1.855-1.835-.209-1.099.073-2.459.837-4.044.77-1.598 1.838-3.314 3.175-5.105l.122-.163-2.299-3.592z" />
    </svg>
);

const DockerLogo = () => (
    <svg viewBox="0 0 128 128" className="w-10 h-10">
        <path fill="#2396ED" d="M124.8 52.1c-4.3-2.5-10-2.8-14.8-1.4-.6-5.2-4-9.7-8-12.9l-1.6-1.3-1.4 1.6c-2.7 3.1-3.5 8.3-3.1 12.3.3 2.9 1.2 5.9 3 8.3-1.4.8-2.9 1.9-4.3 2.4-2.8 1-5.9 2-8.9 2H79V49H66V24H41v12H28V24H15v25H2v12H0v11c0 13.8 6.1 26 16.9 34.4 9.4 7.3 22.8 10.6 37.4 10.6 33.2 0 60.5-13.5 74.5-44.1 5.1.6 13.5.7 17.8-5.4l.9-1.5-1.7-1.4zm-97.7-.5h10v10h-10v-10zm13 0h10v10h-10v-10zm0-13h10v10h-10V38.6zm13 13h10v10h-10v-10zm0-13h10v10h-10V38.6zm-26 13h10v10H27v-10zm13 26h10v10H40v-10zm13 0h10v10H53v-10zm13 0h10v10H66v-10zm13-26h10v10H79v-10z" />
    </svg>
);

const AWSLogo = () => (
    <svg viewBox="0 0 128 128" className="w-10 h-10">
        <path fill="#F7A80D" d="M38.089 77.466l-11.4 4.896 10.559 4.514 12.241-4.514-11.4-4.896zm-4.579 21.639l-.197-9.593-10.755 4.514v9.202l10.952-4.123zm21.047-8.857l-10.559 4.514v9.202l10.559-4.123v-9.593zM63.95 77.657l-11.593-4.705-10.364 4.514 11.206 4.896 10.751-4.705zm4.771 21.257l-.004-9.202-10.755 4.705.004 9.011 10.755-4.514zm17.478-16.743l-10.751 4.705v9.202l10.751-4.514v-9.393zM89.971 77.466l-11.4 4.896 10.559 4.514 12.241-4.514-11.4-4.896zm-4.578 21.639l-.197-9.593-10.755 4.514v9.202l10.952-4.123zm21.047-8.857l-10.559 4.514v9.202l10.559-4.123v-9.593z" />
        <path fill="#F7A80D" d="M64 38.571L52.407 33.866l-10.364 4.514L53.249 43.276 64 38.571zM68.771 59.828l-.004-9.202-10.755 4.705.004 9.011 10.755-4.514zm17.478-16.743l-10.751 4.705v9.202l10.751-4.514v-9.393z" />
        <path fill="#F7A80D" d="M64.143 59.828l-.004-9.202-10.755 4.705.004 9.011 10.755-4.514z" />
    </svg>
);

const OpenAILogo = () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path fill="#10A37F" d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-4 3.754 6.046 6.046 0 0 0 .74 6.286 5.985 5.985 0 0 0 .516 4.91 6.046 6.046 0 0 0 6.51 2.9 6.065 6.065 0 0 0 10.275-2.17 5.985 5.985 0 0 0 4-3.754 6.046 6.046 0 0 0-.74-6.286zM12 20.25a2.625 2.625 0 1 1 0-5.25 2.625 2.625 0 0 1 0 5.25z" />
    </svg>
);

const ClaudeLogo = () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path fill="#D97757" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
    </svg>
);

const SupabaseLogo = () => (
    <svg viewBox="0 0 109 113" className="w-10 h-10">
        <path fill="#3ECF8E" d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874l-43.151 54.347z" />
        <path fill="#3ECF8E" fillOpacity=".2" d="M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874l-43.151 54.347z" />
        <path fill="#3ECF8E" d="M45.317 2.071c2.86-3.601 8.657-1.628 8.726 2.97l.442 67.251H9.83c-8.19 0-12.759-9.46-7.665-15.875L45.317 2.072z" />
    </svg>
);

const RedisLogo = () => (
    <svg viewBox="0 0 128 128" className="w-10 h-10">
        <path fill="#A41E11" d="M121.8 93.1c-6.7 3.5-41.4 17.7-48.8 21.6-7.4 3.9-11.5 3.8-17.3 1.3S14 99.4 7.2 96.2c-3.4-1.6-5.1-2.9-5.1-4.2V79.8s48-10.5 55.8-13.2c7.8-2.8 10.4-2.9 17-.5s46.1 9.5 52.6 11.9v12.5c0 1.3-1.5 2.7-5.7 4.6z" />
        <path fill="#D82C20" d="M121.8 80.5C115.1 84 80.4 98.3 73 102.1c-7.4 3.9-11.5 3.8-17.3 1.3-5.8-2.5-41.7-16.6-48.5-19.8C.5 80.4-.5 78.3.3 76.7l.3-.1c6.8-3.2 41.4-16.5 49.2-19.3 7.8-2.8 10.4-2.9 17-.5s41.1 15.6 47.6 18c.5.2.9.4 1.3.5 3.5 1.4 7.3 2.5 6.1 5.2z" />
        <path fill="#A41E11" d="M121.8 72.5c-6.7 3.5-41.4 17.7-48.8 21.6-7.4 3.9-11.5 3.8-17.3 1.3S14 78.8 7.2 75.6c-3.4-1.6-5.1-2.9-5.1-4.2V59.2s48-10.5 55.8-13.2c7.8-2.8 10.4-2.9 17-.5s46.1 9.5 52.6 11.9v12.5c0 1.3-1.5 2.7-5.7 4.6z" />
        <path fill="#D82C20" d="M121.8 59.8C115.1 63.3 80.4 77.6 73 81.4c-7.4 3.9-11.5 3.8-17.3 1.3-5.8-2.5-41.7-16.6-48.5-19.8C.5 59.7-.5 57.6.3 56l.3-.1c6.8-3.2 41.4-16.5 49.2-19.3 7.8-2.8 10.4-2.9 17-.5s41.1 15.6 47.6 18c.5.2.9.4 1.3.5 3.5 1.5 7.3 2.6 6.1 5.2z" />
        <path fill="#A41E11" d="M121.8 51c-6.7 3.5-41.4 17.7-48.8 21.6-7.4 3.9-11.5 3.8-17.3 1.3S14 57.3 7.2 54.1c-3.4-1.6-5.1-2.9-5.1-4.2V37.7s48-10.5 55.8-13.2c7.8-2.8 10.4-2.9 17-.5s46.1 9.5 52.6 11.9V48.4c0 1.3-1.5 2.7-5.7 4.6z" />
        <path fill="#D82C20" d="M121.8 38.3C115.1 41.8 80.4 56.1 73 59.9c-7.4 3.9-11.5 3.8-17.3 1.3-5.8-2.5-41.7-16.6-48.5-19.8C.5 38.2-.5 36.1.3 34.5l.3-.1c6.8-3.2 41.4-16.5 49.2-19.3 7.8-2.8 10.4-2.9 17-.5s41.1 15.6 47.6 18c.5.2.9.4 1.3.5 3.5 1.5 7.3 2.5 6.1 5.2z" />
    </svg>
);

const LangChainLogo = () => (
    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white font-bold text-lg">
        🦜
    </div>
);

const PineconeLogo = () => (
    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-400 to-cyan-600 flex items-center justify-center text-white font-bold text-lg">
        🌲
    </div>
);

const CursorLogo = () => (
    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-violet-700 flex items-center justify-center text-white font-bold text-sm">
        ⌨️
    </div>
);

export const getSlides = () => [
    // Slide 1: The Hook - BIG TYPOGRAPHY
    <div key="hook" className="relative w-full h-full min-h-screen flex flex-col page-break-after-always">
        <div className="absolute inset-0 z-0 bg-black">
            <BackgroundBeams />
        </div>
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-16 flex-1">
            <div className="mb-6 relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-lg blur opacity-25 animate-pulse"></div>
                <Image src="/images/logo-icon.png" alt="Logo" width={60} height={60} priority className="relative" />
            </div>
            <h1 className="text-[5rem] md:text-[6rem] lg:text-[7rem] font-black bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500 leading-[0.9] tracking-tighter">
                Your MVP.
            </h1>
            <h1 className="text-[5rem] md:text-[6rem] lg:text-[7rem] font-black bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 leading-[0.9] tracking-tighter">
                Live.
            </h1>
            <h1 className="text-[5rem] md:text-[6rem] lg:text-[7rem] font-black bg-clip-text text-transparent bg-gradient-to-b from-blue-400 to-blue-600 leading-[0.9] tracking-tighter mb-8">
                30 Days.
            </h1>
            <p className="text-xl md:text-2xl text-neutral-500 max-w-2xl mx-auto font-light">
                Most startups die waiting for code. We build fast so you can start selling.
            </p>
        </div>
    </div>,

    // Slide 2: The Pain - BIG TYPOGRAPHY
    <div key="pain" className="min-h-screen flex flex-col page-break-after-always bg-black relative overflow-hidden">
        <GridBackground />
        <div className="flex-1 flex flex-col items-center justify-center text-center px-8 relative z-10">
            <p className="text-2xl md:text-3xl text-neutral-500 mb-4 font-light">Traditional agencies charge you for hours.</p>
            <p className="text-3xl md:text-4xl text-neutral-300 mb-6">We charge you for</p>
            <h1 className="text-[6rem] md:text-[8rem] lg:text-[10rem] font-black text-blue-500 leading-none tracking-tighter">
                DONE.
            </h1>
            <p className="text-xl md:text-2xl text-neutral-500 mt-8 max-w-xl">
                Fixed price. Guaranteed launch date. No surprises.
            </p>
        </div>
    </div>,

    // Slide 3: Virtual Squad - with Container
    <div key="virtual-squad" className="min-h-screen flex flex-col page-break-after-always bg-black relative">
        <GridBackground />
        <div className="flex-1 flex flex-col items-center justify-center p-8 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Your Virtual Squad</h2>
            <p className="text-neutral-500 mb-6">One Human Brain. Three AI Agents. Working in Parallel.</p>

            {/* CONTAINER - 80% width gray background */}
            <div className="w-[90%] max-w-5xl bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 rounded-3xl p-8">

                {/* Main Flow Grid - Fixed widths for precise positioning */}
                <div className="grid grid-cols-7 gap-2 items-start mb-4">
                    {/* Col 1: Client */}
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-xl bg-neutral-900 border-2 border-neutral-700 flex items-center justify-center mb-2">
                            <span className="text-3xl">👤</span>
                        </div>
                        <span className="text-xs font-bold text-white">Client</span>
                    </div>

                    {/* Col 2: Arrow → */}
                    <div className="flex items-center justify-center h-16">
                        <div className="flex items-center w-full">
                            <div className="h-0.5 flex-1 bg-gradient-to-r from-neutral-700 to-emerald-500"></div>
                            <span className="text-emerald-500 text-xl">→</span>
                        </div>
                    </div>

                    {/* Col 3: Senior Architect */}
                    <div className="flex flex-col items-center relative">
                        <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border-2 border-emerald-500 flex items-center justify-center mb-2 shadow-lg shadow-emerald-500/20">
                            <User className="w-10 h-10 text-emerald-400" />
                        </div>
                        <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-xs">🧠</div>
                        <span className="text-xs font-bold text-emerald-400">Architect</span>
                        <span className="text-[10px] text-neutral-500">Human</span>
                        {/* Arrow UP from feedback loop */}
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
                            <span className="text-emerald-400 text-lg">↑</span>
                        </div>
                    </div>

                    {/* Col 4: Arrow → */}
                    <div className="flex items-center justify-center h-20">
                        <div className="flex items-center w-full">
                            <div className="h-0.5 flex-1 bg-gradient-to-r from-emerald-500 to-purple-500"></div>
                            <span className="text-purple-500 text-xl">→</span>
                        </div>
                    </div>

                    {/* Col 5: AI Cluster */}
                    <div className="flex flex-col items-center">
                        <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-purple-500/20 to-violet-600/10 border-2 border-purple-500 flex items-center justify-center mb-2 relative">
                            <div className="flex gap-0.5">
                                <Code className="w-5 h-5 text-purple-400" />
                                <Bug className="w-5 h-5 text-purple-400" />
                                <FileText className="w-5 h-5 text-purple-400" />
                            </div>
                            <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                        </div>
                        <span className="text-xs font-bold text-purple-400">AI Cluster</span>
                        <span className="text-[10px] text-neutral-500">×3 Parallel</span>
                    </div>

                    {/* Col 6: Arrow → */}
                    <div className="flex items-center justify-center h-20">
                        <div className="flex items-center w-full">
                            <div className="h-0.5 flex-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>
                            <span className="text-blue-500 text-xl">→</span>
                        </div>
                    </div>

                    {/* Col 7: Code Review */}
                    <div className="flex flex-col items-center relative">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 border-2 border-blue-500 flex items-center justify-center mb-2">
                            <Shield className="w-8 h-8 text-blue-400" />
                        </div>
                        <span className="text-xs font-bold text-blue-400">Review</span>
                        <span className="text-[10px] text-neutral-500">Quality</span>
                        {/* Arrow DOWN to feedback loop */}
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
                            <span className="text-blue-400 text-lg">↓</span>
                        </div>
                    </div>
                </div>

                {/* Feedback Loop Bar */}
                <div className="grid grid-cols-7 gap-2 mt-10 mb-6">
                    <div></div>
                    <div></div>
                    {/* Loop spans from Architect (col 3) to Review (col 7) */}
                    <div className="col-span-5 flex items-center">
                        <div className="w-full h-8 rounded-full bg-gradient-to-r from-emerald-500/10 via-purple-500/10 to-blue-500/10 border border-neutral-800 flex items-center justify-center">
                            <span className="text-xs text-neutral-400">🔄 Iterate until perfect</span>
                        </div>
                    </div>
                </div>

                {/* Output Row */}
                <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-neutral-900/80 border border-neutral-800">
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-neutral-400">Approved</span>
                    </div>
                    <span className="text-green-500 text-2xl">→</span>
                    <div className="flex flex-col items-center">
                        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-green-500/30 to-green-600/20 border-2 border-green-500 flex items-center justify-center shadow-lg shadow-green-500/30">
                            <span className="text-4xl">🚀</span>
                        </div>
                        <span className="text-sm font-bold text-green-400 mt-2">Production MVP</span>
                    </div>
                </div>

                {/* AI Agents Detail */}
                <div className="bg-neutral-900/60 backdrop-blur-sm border border-purple-500/30 rounded-xl p-4">
                    <div className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-3 text-center">
                        ⚡ AI Agents work in PARALLEL — 3x faster
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                        <div className="flex items-center gap-2 bg-purple-500/10 rounded-lg p-2">
                            <Code className="w-6 h-6 text-purple-400" />
                            <div>
                                <div className="text-xs font-bold text-purple-300">AI Dev</div>
                                <div className="text-[10px] text-neutral-500">Code</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 bg-purple-500/10 rounded-lg p-2">
                            <Bug className="w-6 h-6 text-purple-400" />
                            <div>
                                <div className="text-xs font-bold text-purple-300">AI QA</div>
                                <div className="text-[10px] text-neutral-500">Tests</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 bg-purple-500/10 rounded-lg p-2">
                            <FileText className="w-6 h-6 text-purple-400" />
                            <div>
                                <div className="text-xs font-bold text-purple-300">AI Docs</div>
                                <div className="text-[10px] text-neutral-500">Guides</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Trust message */}
                <div className="mt-4 text-center">
                    <p className="text-sm text-neutral-400">
                        You pay for a <span className="text-emerald-400 font-bold">human expert</span> who commands a powerful AI team.
                    </p>
                </div>
            </div>
        </div>
    </div>,

    // Slide 4: Tech Stack - with Container
    <div key="stack" className="min-h-screen flex flex-col page-break-after-always bg-black relative">
        <GridBackground />
        <div className="flex-1 flex flex-col items-center justify-center p-8 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Enterprise-Grade Tech Stack</h2>
            <p className="text-neutral-500 mb-6">Startup Speed.</p>

            {/* CONTAINER */}
            <div className="w-[90%] max-w-5xl bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 rounded-3xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Frontend & Mobile */}
                    <div className="bg-neutral-900/60 backdrop-blur-sm border border-neutral-800 rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                                <Code className="w-5 h-5 text-blue-400" />
                            </div>
                            <h3 className="text-lg font-bold text-blue-400">Frontend & Mobile</h3>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            {[
                                { logo: <ReactLogo />, name: "React" },
                                { logo: <NextLogo />, name: "Next.js" },
                                { logo: <TypeScriptLogo />, name: "TypeScript" },
                                { logo: <TailwindLogo />, name: "Tailwind" },
                            ].map((tech) => (
                                <div key={tech.name} className="flex flex-col items-center gap-2 p-3 rounded-xl bg-neutral-800/50 border border-neutral-700/50 hover:border-blue-500/30 transition-colors">
                                    {tech.logo}
                                    <span className="text-[10px] text-neutral-400">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Backend & Cloud */}
                    <div className="bg-neutral-900/60 backdrop-blur-sm border border-neutral-800 rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                                <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-green-400">Backend & Cloud</h3>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            {[
                                { logo: <PythonLogo />, name: "Python" },
                                { logo: <PostgresLogo />, name: "Postgres" },
                                { logo: <RedisLogo />, name: "Redis" },
                                { logo: <DockerLogo />, name: "Docker" },
                                { logo: <AWSLogo />, name: "AWS" },
                                { logo: <SupabaseLogo />, name: "Supabase" },
                            ].map((tech) => (
                                <div key={tech.name} className="flex flex-col items-center gap-2 p-3 rounded-xl bg-neutral-800/50 border border-neutral-700/50 hover:border-green-500/30 transition-colors">
                                    {tech.logo}
                                    <span className="text-[10px] text-neutral-400">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* AI & Automation */}
                    <div className="bg-neutral-900/60 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-purple-400">AI & Automation</h3>
                                    <span className="text-[10px] text-purple-400/60 uppercase tracking-widest">The Magic</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                {[
                                    { logo: <OpenAILogo />, name: "GPT-4o" },
                                    { logo: <ClaudeLogo />, name: "Claude" },
                                    { logo: <LangChainLogo />, name: "LangChain" },
                                    { logo: <PineconeLogo />, name: "Pinecone" },
                                    { logo: <CursorLogo />, name: "Cursor" },
                                ].map((tech) => (
                                    <div key={tech.name} className="flex flex-col items-center gap-2 p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 hover:border-purple-500/40 transition-colors">
                                        {tech.logo}
                                        <span className="text-[10px] text-purple-300">{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom tagline */}
                <div className="mt-6 text-center">
                    <p className="text-neutral-500 text-sm">
                        We choose the <span className="text-white font-medium">right tool</span> for your specific goal.
                    </p>
                </div>
            </div>
        </div>
    </div>,

    // Slide 5: The Proof - FULL BLEED IMAGE
    <div key="proof" className="min-h-screen flex flex-col page-break-after-always relative overflow-hidden">
        {/* Full Bleed Background Image */}
        <div className="absolute inset-0">
            <Image
                src="/images/Forch.jpg"
                alt="Forch Project"
                fill
                priority
                className="object-cover"
            />
            {/* Gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        {/* Content - positioned on left */}
        <div className="relative z-10 flex-1 flex items-center p-12 md:p-16">
            <div className="max-w-xl">
                <div className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-4">Case Study</div>
                <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                    Forch
                </h1>
                <p className="text-2xl text-neutral-300 mb-8">DeFi Trading Platform</p>

                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <p className="text-xl text-white font-bold">Built & Launched in 5 Weeks</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        <p className="text-lg text-neutral-400">Real-time Analytics</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                        <p className="text-lg text-neutral-400">Bank-Grade Security</p>
                    </div>
                </div>
            </div>
        </div>
    </div>,

    // Slide 6: The Deliverables
    <div key="deliverables" className="min-h-screen flex flex-col page-break-after-always bg-black relative">
        <GridBackground />
        <Slide title="What You Get" subtitle="Everything you need to own and scale your product" layout="center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full relative z-10">
                {/* Source Code */}
                <div className="bg-neutral-900/60 backdrop-blur-sm border border-neutral-800 rounded-2xl p-6 flex gap-4 hover:border-blue-500/30 transition-colors">
                    <div className="w-14 h-14 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                        <Github className="w-7 h-7 text-blue-400" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-1">Source Code</h3>
                        <p className="text-neutral-400">Full ownership. Clean GitHub repo with complete Git history.</p>
                    </div>
                </div>

                {/* Documentation */}
                <div className="bg-neutral-900/60 backdrop-blur-sm border border-neutral-800 rounded-2xl p-6 flex gap-4 hover:border-green-500/30 transition-colors">
                    <div className="w-14 h-14 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center shrink-0">
                        <FileCode className="w-7 h-7 text-green-400" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-1">Documentation</h3>
                        <p className="text-neutral-400">API docs (Swagger) & setup guide for your team.</p>
                    </div>
                </div>

                {/* Design Assets */}
                <div className="bg-neutral-900/60 backdrop-blur-sm border border-neutral-800 rounded-2xl p-6 flex gap-4 hover:border-purple-500/30 transition-colors">
                    <div className="w-14 h-14 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center shrink-0">
                        <Figma className="w-7 h-7 text-purple-400" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-1">Design Assets</h3>
                        <p className="text-neutral-400">Figma files with components & style guide.</p>
                    </div>
                </div>

                {/* Deployment */}
                <div className="bg-neutral-900/60 backdrop-blur-sm border border-neutral-800 rounded-2xl p-6 flex gap-4 hover:border-orange-500/30 transition-colors">
                    <div className="w-14 h-14 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center shrink-0">
                        <Cloud className="w-7 h-7 text-orange-400" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-1">Live Deployment</h3>
                        <p className="text-neutral-400">Production-ready on Vercel/AWS with CI/CD pipeline.</p>
                    </div>
                </div>
            </div>
        </Slide>
    </div>,

    // Slide 7: The Offer - BIG PRICE TYPOGRAPHY
    <div key="offer" className="min-h-screen flex flex-col page-break-after-always bg-black relative overflow-hidden">
        <GridBackground />
        <div className="flex-1 flex flex-col items-center justify-center p-8 relative z-10">
            <div className="text-sm font-bold text-neutral-500 uppercase tracking-widest mb-4">The "Launchpad" Package</div>

            {/* GIANT PRICE */}
            <div className="text-[10rem] md:text-[14rem] lg:text-[18rem] font-black text-blue-500 leading-none tracking-tighter">
                $5,900
            </div>

            <div className="text-2xl md:text-3xl text-neutral-400 font-bold uppercase tracking-widest mt-4 mb-8">Fixed Price</div>

            <div className="inline-block bg-blue-500/20 border border-blue-500/40 rounded-full px-8 py-3 mb-12">
                <span className="text-xl text-blue-400 font-bold">4 Weeks Guaranteed Delivery</span>
            </div>

            {/* Features in a row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl">
                <div className="flex items-center gap-3 bg-neutral-900/60 rounded-xl p-4 border border-neutral-800">
                    <Check className="w-5 h-5 text-green-500 shrink-0" />
                    <span className="text-sm text-white">Full Web App</span>
                </div>
                <div className="flex items-center gap-3 bg-neutral-900/60 rounded-xl p-4 border border-neutral-800">
                    <Check className="w-5 h-5 text-green-500 shrink-0" />
                    <span className="text-sm text-white">Mobile-Ready</span>
                </div>
                <div className="flex items-center gap-3 bg-neutral-900/60 rounded-xl p-4 border border-neutral-800">
                    <Check className="w-5 h-5 text-green-500 shrink-0" />
                    <span className="text-sm text-white">Payments & Auth</span>
                </div>
                <div className="flex items-center gap-3 bg-neutral-900/60 rounded-xl p-4 border border-neutral-800">
                    <Check className="w-5 h-5 text-green-500 shrink-0" />
                    <span className="text-sm text-white">Admin Dashboard</span>
                </div>
            </div>
        </div>
    </div>,
];
