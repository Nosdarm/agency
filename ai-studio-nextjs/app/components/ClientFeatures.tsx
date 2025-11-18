"use client";

import { Card3D } from "./Card3D";
import {
  Clock,
  Code2,
  Gauge,
  Lock,
  Rocket,
  Shield,
} from "lucide-react";

const brand = {
  primary: "from-violet-600 via-fuchsia-600 to-cyan-500",
};

const features = [
  {
    icon: Code2,
    title: "Full Development Cycle",
    desc: "Complete MVP development: design, web, mobile, testing. We use AI to accelerate, but code is written by senior developers.",
  },
  {
    icon: Rocket,
    title: "MVP in 2–4 Weeks",
    desc: "From $5,000. Backend and frontend templates, ready design system, CI. Weekly demos with real progress.",
  },
  {
    icon: Shield,
    title: "Clear Boundaries",
    desc: "Fixed-price, SOW/DoD, feature freeze. Changes handled through transparent change requests.",
  },
  {
    icon: Gauge,
    title: "Production-Ready Products",
    desc: "Tech stack for your needs: React/Vite, Next.js, FastAPI/NestJS, PostgreSQL, Stripe, Redis.",
  },
  {
    icon: Lock,
    title: "Security Basics",
    desc: "Auth, roles, validation, logging. Minimum — JWT/OAuth + industry best practices.",
  },
  {
    icon: Clock,
    title: "Fast Start",
    desc: "Specification within 48h after call. Deploy to Vercel/Render/Fly/Hetzner.",
  },
];

export function ClientFeatures() {
  return (
    <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {features.map((f, i) => (
        <Card3D key={i} className="group">
          <article className="relative rounded-xl sm:rounded-2xl border border-white/5 bg-white/5 hover:bg-white/[0.07] transition p-4 sm:p-6 flex flex-col h-full">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className={`p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-gradient-to-tr ${brand.primary} text-white/95 shadow flex-shrink-0`}>
                <f.icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h3 className="text-white font-medium text-base sm:text-lg">{f.title}</h3>
            </div>
            <p className="text-neutral-300 mt-2 sm:mt-3 text-sm sm:text-base leading-relaxed flex-1">{f.desc}</p>
          </article>
        </Card3D>
      ))}
    </div>
  );
}
