export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  type: string;
  period: string;
  location: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  impact: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "maheshwari-silk-mills",
    role: "Excel Automation & Operations Executive",
    company: "Maheshwari Silk Mills",
    type: "Part-time",
    period: "Apr 2026 – Jun 2026",
    location: "Surat, Gujarat, India",
    summary:
      "Spearheaded operational automation for wholesale and manufacturing inventory management, replacing manual paper and spreadsheet reconciliations with structured Excel/VBA automation.",
    responsibilities: [
      "Built and optimized Excel/VBA inventory and stock-management workflows, including the centralized TOTAL STOCK reporting pipeline and operational dashboards.",
      "Automated recurring stock balance calculations and daily reporting routines across 200+ active product listings to eliminate repetitive manual entry.",
      "Structured product data, transactional ledgers, and inventory movement records to support accurate Monthly MIS-style operational reporting.",
      "Collaborated directly with warehouse staff to ensure data validation schemas matched physical inventory movement workflows.",
    ],
    technologies: ["Excel VBA", "VBA Macros", "Advanced Formulas", "MIS Reporting", "Inventory Management"],
    impact: [
      "Eliminated daily manual calculation errors across 200+ product lines",
      "Cut end-of-day stock reconciliation time significantly via automated macros",
      "Delivered real-time stock visibility for management decision-making",
    ],
  },
];
