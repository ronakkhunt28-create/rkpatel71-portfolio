export interface EducationItem {
  degree: string;
  institution: string;
  status: string;
  location: string;
  focusAreas: string[];
  description: string;
}

export const educationData: EducationItem = {
  degree: "Bachelor of Commerce (B.Com)",
  institution: "J. Z. Shah Arts & H. P. Desai Commerce College",
  status: "Undergraduate Student",
  location: "Surat, Gujarat, India",
  focusAreas: [
    "Business Operations & Commercial Workflows",
    "AI-Assisted Software Development",
    "Workflow Automation & n8n Integration",
    "APIs, Data Models & Relational Databases",
    "Technology-Driven Operations Management",
  ],
  description:
    "Combines formal commercial and business accounting foundations with self-directed software engineering in Python, FastAPI, agentic workflows, and database systems. This cross-disciplinary grounding provides an intuitive understanding of enterprise business logic, inventory economics, and operational risk.",
};
