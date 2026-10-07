export interface ServiceRow {
  num: string;
  title: string;
  subtitle: string;
  description: string;
}

export const servicesList: ServiceRow[] = [
  {
    num: "01",
    title: "Website Development",
    subtitle: "React · Next.js · WordPress · SEO-ready builds",
    description: "Ultra-fast, responsive websites designed for high conversions, accessibility, and search engine visibility.",
  },
  {
    num: "02",
    title: "Mobile App Development",
    subtitle: "Flutter · React Native · Android & iOS",
    description: "Native and cross-platform mobile apps built for silky smooth 60fps performance and offline capability.",
  },
  {
    num: "03",
    title: "POS & Business Systems",
    subtitle: "Billing · Inventory · Reports · Multi-user",
    description: "Custom point-of-sale, billing, inventory control, and real-time sales reporting systems for retail & hospitality.",
  },
  {
    num: "04",
    title: "E-commerce Solutions",
    subtitle: "Online stores · eSewa & Khalti · Order management",
    description: "High-converting online store platforms with integrated Nepali payment gateways and inventory sync.",
  },
  {
    num: "05",
    title: "UI/UX Design",
    subtitle: "Research · Wireframes · Design systems · Prototypes",
    description: "Human-centered digital design, interactive Figma prototypes, and consistent design token systems.",
  },
  {
    num: "06",
    title: "Cloud, Hosting & Support",
    subtitle: "Domains · SSL · Servers · Maintenance & backups",
    description: "Reliable cloud infrastructure setup, 24/7 uptime monitoring, automated backups, and SLA-backed maintenance.",
  },
];
