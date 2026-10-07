"use client";

import React from "react";
import { companyConfig } from "@/data/company";

export const ImpactSection: React.FC = () => {
  return (
    <section id="impact" className="py-18 bg-[#f4f1ea]">
      <div className="w-[min(1240px,92%)] mx-auto">
        <span className="eyebrow">Proof, not promises</span>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#131311]/14 mt-10">
          {companyConfig.metrics.map((m) => (
            <div
              key={m.label}
              className="p-8 sm:p-10 border-r border-b border-[#131311]/14"
            >
              <b className="font-heading text-[clamp(2.4rem,4vw,3.4rem)] block text-[#0943c2] tracking-tight leading-none">
                {m.value}
              </b>
              <small className="text-[#6d6a61] uppercase tracking-wider text-[0.75rem] font-semibold block mt-3">
                {m.label}
              </small>
              <p className="mt-2.5 text-sm text-[#6d6a61] leading-relaxed">
                {m.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
