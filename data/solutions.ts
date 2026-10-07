import { Solution } from "@/types";

export const solutionsData: Solution[] = [
  {
    id: "enterprise-software",
    slug: "enterprise-software",
    title: "Enterprise Software Architecture",
    subtitle: "Scalable digital backbone for multi-location corporate operational growth",
    description: "Multi-tenant software platforms engineered for global compliance, high security, and effortless inter-departmental collaboration.",
    iconName: "Building2",
    impactMetrics: [
      { label: "Operational Efficiency", value: "+45%" },
      { label: "Cost Reduction", value: "30%" },
      { label: "Data Accuracy", value: "99.9%" }
    ],
    keyModules: [
      "Role-Based Access Control (RBAC)",
      "Multi-Currency & Regional Support",
      "Executive Dashboard & Reporting Engine",
      "Enterprise Service Bus Integration"
    ],
    idealFor: ["Global Enterprises", "Holding Companies", "Government Agencies", "Multinational Corporations"]
  },
  {
    id: "erp-systems",
    slug: "erp-systems",
    title: "Enterprise Resource Planning (ERP)",
    subtitle: "Unified supply chain, finance, inventory, and resource management",
    description: "Custom ERP solutions tailored to your operational workflows, eliminating spreadsheet dependency and fragmented legacy systems.",
    iconName: "Layers",
    impactMetrics: [
      { label: "Inventory Accuracy", value: "99.5%" },
      { label: "Order Lead Time", value: "-60%" },
      { label: "Financial Reconciliation", value: "Real-time" }
    ],
    keyModules: [
      "Inventory & Warehouse Management",
      "Financial Accounting & Procurement",
      "Manufacturing Execution System (MES)",
      "Automated Purchase Orders"
    ],
    idealFor: ["Manufacturers", "Distributors", "Logistics Providers", "Large Retailers"]
  },
  {
    id: "crm-systems",
    slug: "crm-systems",
    title: "Customer Relationship Management (CRM)",
    subtitle: "360-degree customer lifecycle management, pipeline tracking, and automation",
    description: "Custom CRM platforms designed to capture leads, track customer journeys, automate email sequences, and boost sales conversion.",
    iconName: "Users",
    impactMetrics: [
      { label: "Sales Conversion Rate", value: "+38%" },
      { label: "Customer Churn Rate", value: "-24%" },
      { label: "Lead Response Time", value: "< 5 mins" }
    ],
    keyModules: [
      "Visual Deal Pipeline & Kanban",
      "Automated Email & SMS Nurturing",
      "Customer Interaction History",
      "Sales Representative Performance Analytics"
    ],
    idealFor: ["B2B SaaS Companies", "Real Estate Agencies", "Financial Services", "Consulting Firms"]
  },
  {
    id: "lms-platforms",
    slug: "learning-management-systems",
    title: "Learning Management Systems (LMS)",
    subtitle: "Interactive digital learning platforms for educational institutions & corporate training",
    description: "Scalable e-learning solutions featuring live virtual classrooms, interactive quizzes, automated grading, and student progress analytics.",
    iconName: "GraduationCap",
    impactMetrics: [
      { label: "Active Student Engagement", value: "3.5x" },
      { label: "Graduation / Completion Rate", value: "+82%" },
      { label: "Administrative Hours Saved", value: "120 hrs/mo" }
    ],
    keyModules: [
      "Course Authoring & Video Streaming",
      "Live Webinar & Zoom Integration",
      "Automated Certificate Generation",
      "Proctored Online Examinations"
    ],
    idealFor: ["Universities & Colleges", "EdTech Startups", "Corporate Training Programs", "Certification Bodies"]
  },
  {
    id: "travel-management",
    slug: "travel-management-platforms",
    title: "Travel Management Platforms",
    subtitle: "End-to-end flight, hotel, tour booking, and itinerary management engines",
    description: "High-volume travel platforms integrating Global Distribution Systems (Amadeus, Sabre), payment gateways, and custom tour builder tools.",
    iconName: "Compass",
    impactMetrics: [
      { label: "Booking Processing Time", value: "< 2 sec" },
      { label: "Direct Booking Growth", value: "+140%" },
      { label: "Multi-Currency Transactions", value: "35+ Currencies" }
    ],
    keyModules: [
      "GDS & OTA API Integration",
      "Dynamic Tour Package Builder",
      "Multi-currency & Multi-lingual Checkout",
      "Agent Commission & Voucher System"
    ],
    idealFor: ["Tour Operators", "DMCs (Destination Management)", "Airlines & Agencies", "Travel Aggregators"]
  },
  {
    id: "healthcare-platforms",
    slug: "healthcare-platforms",
    title: "Healthcare & Telemedicine Platforms",
    subtitle: "HIPAA-compliant patient portals, EHR systems, and virtual consultations",
    description: "Secure digital healthcare systems enabling patient appointment scheduling, teleconsultations, electronic health record (EHR) management, and digital prescriptions.",
    iconName: "HeartPulse",
    impactMetrics: [
      { label: "Patient Wait Time", value: "-75%" },
      { label: "Telehealth Consultation Growth", value: "+210%" },
      { label: "HIPAA & GDPR Compliance", value: "100%" }
    ],
    keyModules: [
      "Secure Encrypted Video Consultations",
      "EHR & Medical History Integration",
      "Online Prescription & Pharmacy Connect",
      "Automated Appointment Reminders"
    ],
    idealFor: ["Hospitals & Clinics", "Telemedicine Startups", "Diagnostic Labs", "Wellness Centers"]
  },
  {
    id: "fintech-applications",
    slug: "fintech-applications",
    title: "FinTech & Banking Platforms",
    subtitle: "Secure payment gateways, digital wallets, microfinance & peer-to-peer lending",
    description: "High-security financial technology platforms with PCI-DSS compliance, real-time transaction processing, fraud detection, and multi-factor authentication.",
    iconName: "Wallet",
    impactMetrics: [
      { label: "Transaction Latency", value: "< 150ms" },
      { label: "Fraud Detection Accuracy", value: "99.98%" },
      { label: "Daily Transaction Capacity", value: "1M+" }
    ],
    keyModules: [
      "Digital Wallet & QR Payment Engine",
      "Automated KYC / AML Verification",
      "Loan Lifecycle & Credit Scoring AI",
      "PCI-DSS Compliant Encryption"
    ],
    idealFor: ["Neo-banks", "Microfinance Institutions", "Payment Gateway Providers", "Remittance Companies"]
  },
  {
    id: "ecommerce-platforms",
    slug: "ecommerce-platforms",
    title: "E-Commerce & Marketplace Engines",
    subtitle: "Headless, high-converting digital storefronts and multi-vendor marketplaces",
    description: "Custom e-commerce platforms engineered for extreme seasonal traffic spikes, instantaneous product filtering, and omnichannel checkout.",
    iconName: "ShoppingBag",
    impactMetrics: [
      { label: "Checkout Conversion Rate", value: "+32%" },
      { label: "Page Load Speed", value: "0.8s" },
      { label: "Cart Abandonment Drop", value: "-28%" }
    ],
    keyModules: [
      "Headless Storefront (Next.js)",
      "Multi-vendor Marketplace Dashboard",
      "AI Product Recommendations",
      "Automated Tax & Shipping Calculation"
    ],
    idealFor: ["D2C Brands", "Multi-vendor Marketplaces", "B2B Wholesalers", "Retail Chains"]
  },
  {
    id: "ai-automation",
    slug: "ai-automation-systems",
    title: "AI Automation & Autonomous Agents",
    subtitle: "Intelligent document processing, custom LLMs, and workflow robotic automation",
    description: "Deploy autonomous AI agents that handle repetitive back-office tasks, summarize multi-page contracts, and handle 80% of customer support queries.",
    iconName: "Bot",
    impactMetrics: [
      { label: "Manual Hours Saved", value: "500+ hrs/mo" },
      { label: "Customer Response Speed", value: "Instant" },
      { label: "Document Processing Error", value: "0.01%" }
    ],
    keyModules: [
      "Custom Enterprise RAG Agent",
      "OCR Document Data Extraction",
      "Automated Workflow Triggers",
      "Human-in-the-loop Guardrails"
    ],
    idealFor: ["Legal & Compliance Firms", "Insurance Companies", "Customer Support Hubs", "Financial Auditors"]
  }
];
