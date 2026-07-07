import {
  BarChartIcon,
  BuildingIcon,
  CpuIcon,
  GlobeIcon,
  LeafIcon,
  LightbulbIcon,
  ShieldAlertIcon,
  SparkleIcon,
  TargetIcon,
} from "@/components/icons";
import type { ComponentType, SVGProps } from "react";

export type FocusArea = {
  slug: string;
  name: string;
  description: string;
  detail: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

// Single source of truth for the nine focus areas — the homepage
// teaser shows a slice with the short `description`; the full
// /focus-areas page shows all nine with the longer `detail` too.
export const FOCUS_AREAS: FocusArea[] = [
  {
    slug: "sustainable-development-goals",
    name: "Sustainable Development Goals",
    description: "Localising the SDGs into planning, budgets, and delivery.",
    detail:
      "Research on localising the Sustainable Development Goals — helping local governments and institutions turn global targets into budgets, plans, and delivery mechanisms that fit their own context.",
    Icon: TargetIcon,
  },
  {
    slug: "new-emerging-technologies",
    name: "New & Emerging Technologies",
    description: "Technology for development — applied, not theoretical.",
    detail:
      "Exploring the role of AI, blockchain, and data systems in governance and development, and studying digital transformation in public institutions and service delivery.",
    Icon: CpuIcon,
  },
  {
    slug: "ai-driven-local-leadership",
    name: "AI-Driven Local Leadership",
    description: "Equipping local leaders with AI-era decision-making tools.",
    detail:
      "Developing technology-enabled tools and platforms for capacity building, and analysing how emerging technologies reshape leadership and organisational change at the local level.",
    Icon: SparkleIcon,
  },
  {
    slug: "decentralisation-local-governance",
    name: "Decentralisation & Local Governance",
    description: "Strengthening panchayats, municipalities, and local bodies.",
    detail:
      "Studying decentralisation, local governance, and public service delivery systems — and analysing policy impacts on socio-economic development and institutional performance.",
    Icon: BuildingIcon,
  },
  {
    slug: "data-evidence-driven-governance",
    name: "Data & Evidence-Driven Governance",
    description: "Turning data and evidence into better public decisions.",
    detail:
      "Conducting evidence-based policy analysis at local, national, and global levels, so decisions are grounded in data rather than assumption.",
    Icon: BarChartIcon,
  },
  {
    slug: "skills-social-entrepreneurship",
    name: "Skills & Social Entrepreneurship",
    description: "Building livelihoods through skills and enterprise.",
    detail:
      "Researching education systems, life skills, and employability, and developing training methodologies and learning innovations for social entrepreneurship.",
    Icon: LightbulbIcon,
  },
  {
    slug: "international-development-leadership",
    name: "International Development Leadership",
    description: "Leadership for global governance and multilateral work.",
    detail:
      "Examining leadership in global governance and multilateral institutions, international cooperation and diplomacy, and comparative studies on development models worldwide.",
    Icon: GlobeIcon,
  },
  {
    slug: "climate-proofing-growth-governance",
    name: "Climate-Proofing Growth & Governance",
    description: "Embedding climate resilience into growth and policy.",
    detail:
      "Researching leadership strategies for climate resilience and environmental sustainability, including natural resource management and community-based conservation models.",
    Icon: LeafIcon,
  },
  {
    slug: "disaster-management-decision-making",
    name: "Disaster Management & Decision-Making",
    description: "Leadership frameworks for crisis and disaster response.",
    detail:
      "Building decision-making and leadership frameworks for crisis and disaster management, drawing on transnational research into public health, climate, and migration shocks.",
    Icon: ShieldAlertIcon,
  },
];
