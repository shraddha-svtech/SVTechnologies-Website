"use client";

import React from "react";
import { companyConfig } from "@/data/company";

export const GallerySection: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-[#f4f1ea]">
      <div className="w-[min(1240px,92%)] mx-auto">
        <span className="eyebrow">Gallery</span>
        <h2 className="display text-[clamp(2rem,4vw,3.2rem)] mb-12 text-[#131311]">
         Life at SV
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {companyConfig.gallery.map((item) => (
            <div
              key={item.title}
              className={`rounded-2xl aspect-[4/3] relative overflow-hidden flex items-end p-6 text-white transition-all duration-350 cursor-pointer hover:scale-[0.98] bg-gradient-to-br ${item.style} after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-b after:from-transparent after:via-transparent after:to-black/60`}
            >
              <small className="absolute top-5 left-6 z-10 text-[0.72rem] tracking-[0.12em] uppercase opacity-85 font-mono">
                {item.label}
              </small>
              <span className="relative z-10 font-heading font-semibold text-base">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
