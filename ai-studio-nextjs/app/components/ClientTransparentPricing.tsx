"use client";

import { CheckCircle2, Zap } from "lucide-react";
import CountUp from "react-countup";

export function ClientTransparentPricing() {
  return (
    <div className="mt-10 max-w-4xl mx-auto">
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center">
        <div className="inline-flex items-center gap-3 mb-4">
          <Zap className="w-8 h-8 text-violet-400" />
          <span className="text-5xl font-semibold text-white">
            <CountUp start={0} end={2500} duration={2} separator="," prefix="$" />
          </span>
          <span className="text-2xl text-neutral-400">/ week</span>
        </div>
        <p className="text-neutral-300 text-lg mb-6">One week of team work</p>
        <div className="grid md:grid-cols-2 gap-4 text-left">
          <div className="rounded-xl bg-white/[0.03] p-4 border border-white/5">
            <h4 className="text-white font-medium mb-2">Team Includes:</h4>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> UI/UX Designer</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Frontend Developer</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Backend Developer</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> QA Engineer</li>
            </ul>
          </div>
          <div className="rounded-xl bg-white/[0.03] p-4 border border-white/5">
            <h4 className="text-white font-medium mb-2">Project Examples:</h4>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>Simple SaaS: 2 weeks = <strong className="text-white">$5,000</strong></li>
              <li>Marketplace: 4 weeks = <strong className="text-white">$10,000</strong></li>
              <li>Platform + Mobile: 8 weeks = <strong className="text-white">$20,000</strong></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
