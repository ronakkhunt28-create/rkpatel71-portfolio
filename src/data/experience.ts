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
      "Worked on Excel/VBA inventory reporting and stock-reconciliation workflows for wholesale operations.",
    responsibilities: [
      "Built and optimized Excel/VBA inventory and stock-management workflows, including the centralized TOTAL STOCK reporting pipeline and operational dashboards.",
      "Automated recurring stock balance calculations and daily reporting routines to reduce repetitive manual entry.",
      "Structured product data, transactional ledgers, and inventory movement records to support accurate Monthly MIS-style operational reporting.",
      "Maintained structured product, stock, and transaction records for reporting.",
    ],
    technologies: ["Excel VBA", "VBA Macros", "Advanced Formulas", "MIS Reporting", "Inventory Management"],
    impact: [
      "Added validation to inventory reporting workflows",
      "Used macros to support recurring reconciliation",
      "Prepared stock summaries for operational reporting; impact was not independently measured",
    ],
  },
];
