"use client";

import React from "react";
import { Header } from "@/components/shared/header";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { ImpactSection } from "@/components/sections/impact-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { TeamSection } from "@/components/sections/team-section";
import { CareersSection } from "@/components/sections/careers-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/shared/footer";
import { ProcessSection } from "@/components/sections/process-section";
import { ProjectsSection } from "@/components/sections/projects-section";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f4f1ea] text-[#131311] flex flex-col font-sans">
      {/* Navigation Header */}
      <Header />

      {/* Main Page Flow */}
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <ProcessSection />
        {/* <ImpactSection /> */}

        <GallerySection />
        <TeamSection />
        {/* <CareersSection /> */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
