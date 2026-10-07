import { TechItem } from "@/types";

export const techStackData: TechItem[] = [
  // Frontend
  { name: "React", category: "frontend", iconName: "Atom", description: "Declarative UI component library", proficiency: 98 },
  { name: "Next.js", category: "frontend", iconName: "Zap", description: "The React framework for high-performance web", proficiency: 99 },
  { name: "TypeScript", category: "frontend", iconName: "Code", description: "Type-safe JavaScript at enterprise scale", proficiency: 96 },
  { name: "Tailwind CSS", category: "frontend", iconName: "Paintbrush", description: "Utility-first CSS framework", proficiency: 98 },
  { name: "Framer Motion", category: "frontend", iconName: "Activity", description: "Production-ready motion library for React", proficiency: 92 },
  { name: "React Native", category: "frontend", iconName: "Smartphone", description: "Cross-platform mobile apps for iOS & Android", proficiency: 90 },

  // Backend
  { name: "Node.js", category: "backend", iconName: "Server", description: "Event-driven asynchronous runtime", proficiency: 95 },
  { name: "Go (Golang)", category: "backend", iconName: "Cpu", description: "High-concurrency microservices & networking", proficiency: 90 },
  { name: "Python / Django", category: "backend", iconName: "Terminal", description: "AI, data engineering & robust web frameworks", proficiency: 94 },
  { name: "NestJS", category: "backend", iconName: "Layers", description: "Progressive Node.js framework for scalable backends", proficiency: 91 },
  { name: "GraphQL", category: "backend", iconName: "Network", description: "Flexible query language for APIs", proficiency: 88 },

  // Database
  { name: "PostgreSQL", category: "database", iconName: "Database", description: "Enterprise open-source relational DB", proficiency: 97 },
  { name: "MongoDB", category: "database", iconName: "FileSpreadsheet", description: "Document-oriented NoSQL database", proficiency: 92 },
  { name: "Redis", category: "database", iconName: "Flame", description: "In-memory key-value cache & pub/sub", proficiency: 94 },
  { name: "Pgvector", category: "database", iconName: "Binary", description: "Vector similarity search for AI apps", proficiency: 89 },
  { name: "MySQL", category: "database", iconName: "Table", description: "Relational DB management system", proficiency: 90 },

  // Cloud
  { name: "AWS", category: "cloud", iconName: "Cloud", description: "Amazon Web Services cloud ecosystem", proficiency: 96 },
  { name: "Google Cloud", category: "cloud", iconName: "Globe2", description: "GCP cloud computing & AI platform", proficiency: 92 },
  { name: "Microsoft Azure", category: "cloud", iconName: "Shield", description: "Enterprise Microsoft cloud infrastructure", proficiency: 88 },
  { name: "Vercel", category: "cloud", iconName: "Triangle", description: "Frontend cloud platform for Next.js", proficiency: 98 },
  { name: "Cloudflare", category: "cloud", iconName: "Lock", description: "Edge computing, CDN & DDoS protection", proficiency: 94 },

  // DevOps
  { name: "Docker", category: "devops", iconName: "Box", description: "Containerized application packaging", proficiency: 96 },
  { name: "Kubernetes", category: "devops", iconName: "Boxes", description: "Automated container orchestration", proficiency: 90 },
  { name: "GitHub Actions", category: "devops", iconName: "GitBranch", description: "Automated CI/CD pipelines", proficiency: 95 },
  { name: "Terraform", category: "devops", iconName: "Compass", description: "Declarative Infrastructure as Code", proficiency: 88 },
  { name: "Prometheus & Grafana", category: "devops", iconName: "BarChart3", description: "Real-time metrics & observability", proficiency: 90 },
];
