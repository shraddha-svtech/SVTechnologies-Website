import { ProcessStep } from "@/types";

export const developmentProcessSteps: ProcessStep[] = [
  {
    stepNumber: 1,
    phase: "Phase 01",
    title: "Discovery & Requirements",
    description: "We deep-dive into your business goals, target audience, existing technical ecosystem, and project constraints through stakeholder workshops.",
    deliverables: [
      "Software Requirement Specification (SRS)",
      "Technical Architecture Blueprint",
      "Project Scope & Budget Estimate",
      "Risk Mitigation Strategy"
    ],
    duration: "1 - 2 Weeks",
    iconName: "Search"
  },
  {
    stepNumber: 2,
    phase: "Phase 02",
    title: "Strategy & Architecture",
    description: "Our system architects design microservices schemas, cloud topology, security protocols, and tech stack choices optimized for performance and budget.",
    deliverables: [
      "System Architecture Diagram",
      "Database Entity Relationship Schema",
      "API Contract Specifications",
      "Sprint Milestones & Timeline Roadmap"
    ],
    duration: "1 - 2 Weeks",
    iconName: "Layers"
  },
  {
    stepNumber: 3,
    phase: "Phase 03",
    title: "UI/UX Design & Prototyping",
    description: "We transform requirements into intuitive wireframes, interactive Figma prototypes, and an enterprise design system aligned with your brand identity.",
    deliverables: [
      "Wireframes & User Flow Maps",
      "Clickable Interactive Prototype",
      "Figma Component Design System",
      "Usability Test Sign-off"
    ],
    duration: "2 - 3 Weeks",
    iconName: "Palette"
  },
  {
    stepNumber: 4,
    phase: "Phase 04",
    title: "Agile Engineering & Development",
    description: "Our engineering squads write clean, modular, tested code in 2-week bi-weekly sprints with continuous integration and weekly demo calls.",
    deliverables: [
      "Bi-Weekly Production Build Demos",
      "Clean TypeScript / React / Backend Code",
      "Automated Unit & Integration Tests",
      "Continuous Integration (CI) Pipeline"
    ],
    duration: "4 - 12 Weeks",
    iconName: "Code2"
  },
  {
    stepNumber: 5,
    phase: "Phase 05",
    title: "Testing & Quality Assurance",
    description: "Rigorous QA testing including unit testing, automated E2E testing, penetration security testing, load testing, and cross-browser validation.",
    deliverables: [
      "Automated End-to-End Test Suite",
      "Security & Penetration Test Report",
      "Load & Stress Test Benchmark",
      "WCAG Accessibility Compliance Audit"
    ],
    duration: "2 - 3 Weeks",
    iconName: "CheckCircle2"
  },
  {
    stepNumber: 6,
    phase: "Phase 06",
    title: "Deployment & Launch",
    description: "Seamless production launch on cloud infrastructure (AWS/GCP/Vercel) using automated zero-downtime deployment pipelines.",
    deliverables: [
      "Live Production Cloud Deployment",
      "Production SSL & CDN Optimization",
      "Monitoring & Alerting Setup (Datadog/Grafana)",
      "Handover & Administrative Training"
    ],
    duration: "1 Week",
    iconName: "Rocket"
  },
  {
    stepNumber: 7,
    phase: "Phase 07",
    title: "Support & Scaling",
    description: "Post-launch maintenance, 24/7 SLA monitoring, feature enhancements, and continuous optimization to ensure continuous business success.",
    deliverables: [
      "24/7 SLA Uptime Guarantee",
      "Monthly Security & Performance Audits",
      "Continuous Minor Feature Updates",
      "Dedicated Account Manager"
    ],
    duration: "Ongoing",
    iconName: "ShieldCheck"
  }
];
