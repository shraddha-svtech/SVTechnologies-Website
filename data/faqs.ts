import { FAQItem } from "@/types";

export const faqsData: FAQItem[] = [
  {
    id: "faq-1",
    category: "General & Pricing",
    question: "How much does custom software development cost?",
    answer: "Project pricing varies based on scope, technical complexity, team composition, and delivery timelines. Typically, focused MVP products range from $10,000 to $25,000, while complex multi-platform enterprise systems range from $35,000 to $100,000+. We provide fixed-price milestone agreements or dedicated team time-and-materials engagement models with transparent billing."
  },
  {
    id: "faq-2",
    category: "General & Pricing",
    question: "How long does software development typically take?",
    answer: "A standard MVP development lifecycle takes between 6 to 12 weeks. Larger enterprise platforms or complex AI integrations take 3 to 6 months. We deploy in bi-weekly iterative sprints so you can test working software increment by increment."
  },
  {
    id: "faq-3",
    category: "Technology & Security",
    question: "What technology stacks do you specialize in?",
    answer: "We specialize in modern enterprise technology stacks: Next.js 15, React, TypeScript, Node.js, Go, Python, PostgreSQL, MongoDB, AWS, Google Cloud, Docker, and Kubernetes. For AI projects, we utilize PyTorch, OpenAI APIs, LangChain, and Pgvector."
  },
  {
    id: "faq-4",
    category: "Technology & Security",
    question: "How do you ensure data security and compliance?",
    answer: "Security is built into our software development lifecycle (DevSecOps). We enforce OWASP Top 10 guidelines, TLS 1.3 encryption at rest and in transit, Role-Based Access Control (RBAC), regular automated dependency vulnerability scans, and adhere strictly to SOC 2 Type II, HIPAA, and GDPR standards."
  },
  {
    id: "faq-5",
    category: "Process & Operations",
    question: "Who owns the Intellectual Property (IP) of the software?",
    answer: "You own 100% of the intellectual property, source code, design assets, and database schemas upon completion. SV Technologies Pvt. Ltd. transfers all legal IP rights to your organization upon project delivery."
  },
  {
    id: "faq-6",
    category: "Process & Operations",
    question: "Do you provide ongoing maintenance, support, and updates?",
    answer: "Yes! We offer SLA-backed 24/7 maintenance and support packages that include automated infrastructure monitoring, security patching, database optimization, bug fixes, and continuous minor feature enhancements."
  },
  {
    id: "faq-7",
    category: "Process & Operations",
    question: "How do we communicate and track progress during development?",
    answer: "We maintain transparent daily and weekly communication using Slack or Microsoft Teams, Jira / Linear sprint boards, bi-weekly Zoom/Google Meet video demos, and automated GitHub CI/CD build previews."
  }
];
