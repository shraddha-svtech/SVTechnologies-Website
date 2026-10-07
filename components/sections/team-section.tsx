"use client";

import React from "react";
import { companyConfig } from "@/data/company";

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="pt-18 pb-24 pt-0 bg-[#f4f1ea]">
      <div className="w-[min(1240px,92%)] mx-auto">
        <span className="eyebrow">People</span>
        <h2 className="display text-[clamp(2rem,4vw,3.2rem)] mb-12 text-[#131311]">
          The team behind the code.
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {companyConfig.team.map((m) => (
            <div
              key={m.name}
              className="bg-white rounded-2xl p-7 text-center transition-all duration-300 border border-transparent hover:-translate-y-1.5 hover:border-[#131311]/14 shadow-sm"
            >
              <div
                className={`w-20 h-20 rounded-full mx-auto mb-4 grid place-items-center text-white font-heading font-bold text-xl bg-gradient-to-br ${m.gradient}`}
              >
                {m.initials}
              </div>
              <b className="font-heading text-[#131311] block text-base font-bold">
                {m.name}
              </b>
              <span className="text-[#6d6a61] text-xs mt-0.5 block">
                {m.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
