"use client";

import React, { useState } from "react";
import Link from "next/link";
import { projectsList } from "@/data/projects";
import Image from "next/image";

export const ProjectsSection: React.FC = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="work" className="py-28 bg-[#f4f1ea]">
      <div className="w-[min(1240px,92%)] mx-auto">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="eyebrow">Our work</span>
            <h2 className="display text-[clamp(2rem,4vw,3.2rem)] text-[#131311]">
              Software we&apos;ve shipped.
            </h2>
          </div>
          <div className="md:max-w-[340px]">
            <p className="text-[#6d6a61] mb-5 text-base">
              Websites and products built by SV Technologies for real
              businesses.
            </p>
            <Link href="#contact" className="arrow-link">
              Start your project <span className="arr">→</span>
            </Link>
          </div>
        </div>

        {/* Expanding panels */}
        <div className="flex flex-col gap-3 lg:h-[540px] lg:flex-row">
          {projectsList.map((project, i) => {
            const isActive = i === active;

            return (
              <div
                key={project.num}
                role="button"
                tabIndex={0}
                aria-expanded={isActive}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActive(i);
                  }
                }}
                className={`group relative min-w-0 cursor-pointer overflow-hidden rounded-3xl outline-none transition-all duration-500 ease-out focus-visible:ring-2 focus-visible:ring-[#0943c2] ${
                  isActive
                    ? "h-[360px] bg-[#131311] text-white lg:h-auto lg:flex-[4]"
                    : "h-[84px] border border-[#131311]/10 bg-white text-[#131311] hover:border-[#131311]/30 lg:h-auto lg:flex-[1]"
                }`}
              >
                {/* Background visual (active only) */}
                <div
                  aria-hidden="true"
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                >
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b3967] to-[#0b45ff]/60" />
                  <span className="font-heading absolute -right-4 -top-10 select-none text-[12rem] font-semibold leading-none text-white/[0.06] lg:text-[16rem]">
                    {project.num}
                  </span>
                </div>

                {/* Collapsed label */}
                <div
                  className={`absolute inset-0 flex items-center gap-4 px-6 transition-opacity duration-300 lg:flex-col lg:justify-between lg:px-0 lg:py-7 ${
                    isActive
                      ? "pointer-events-none opacity-0"
                      : "opacity-100 delay-200"
                  }`}
                >
                  <span className="font-heading text-sm text-[#6d6a61] sm:text-base">
                    {project.num}
                  </span>
                  <h3 className="font-heading text-lg font-semibold sm:text-xl lg:rotate-180 lg:[writing-mode:vertical-rl]">
                    {project.title}
                  </h3>
                </div>

                {/* Expanded content */}
                <div
                  className={`absolute inset-0 flex min-w-[300px] flex-col justify-between p-6 transition-opacity duration-500 sm:p-8 lg:min-w-[460px] lg:p-10 ${
                    isActive
                      ? "opacity-100 delay-200"
                      : "pointer-events-none opacity-0"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-heading text-sm text-white/60 sm:text-base">
                      {project.num}
                    </span>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
                      {project.category}
                    </span>
                  </div>

                  <div>
                    {project.imgUrl &&  <Image src={project.imgUrl} alt="thumbnail" width={500} height={300} className="rounded-xl mb-3"/>}

                    <h3 className="font-heading text-3xl font-semibold sm:text-4xl lg:text-5xl">
                      {project.title}
                    </h3>
                    <p className="mt-3 max-w-md text-sm text-white/60 sm:text-base">
                      {project.subtitle}
                    </p>

                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        tabIndex={isActive ? 0 : -1}
                        onClick={(e) => e.stopPropagation()}
                        className="mt-6 inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-medium text-[#131311] no-underline transition-colors duration-300 hover:bg-[#444] hover:text-white"
                      >
                        Visit website <span aria-hidden="true">↗</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};