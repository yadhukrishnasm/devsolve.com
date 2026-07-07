import {
  BuildingIcon,
  CpuIcon,
  GraduationCapIcon,
  LeafIcon,
} from "@/components/icons";
import type { ComponentType, SVGProps } from "react";

// "How Do We Manage" — governance structure, described without any
// personal names or references.
export const GOVERNANCE = [
  {
    name: "Governing Body",
    description:
      "A Governing Body with not more than 15 members and a minimum of seven, including the seven Executive Committee members. It shall be composed of personalities from various thematic fields across India.",
  },
  {
    name: "Executive Committee",
    description:
      "An Executive Committee comprising the Chairperson of the Governing Body, the Director of the Institute, and any other five members of the Governing Body.",
  },
];

export type Hub = {
  name: string;
  description: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

// The four Hubs of Action DevSolve begins with.
export const HUBS: Hub[] = [
  {
    name: "Local Governance",
    description:
      "Decentralisation, rural and urban local governance, localising the Sustainable Development Goals, and technologies for local planning and data management.",
    Icon: BuildingIcon,
  },
  {
    name: "Education and Life Skills",
    description:
      "Life skills, critical thinking, and employability competencies.",
    Icon: GraduationCapIcon,
  },
  {
    name: "Innovation and Incubation",
    description: "New and emerging technologies for development.",
    Icon: CpuIcon,
  },
  {
    name: "Climate Change and Disaster Management",
    description:
      "Environmental sustainability, resilience building, and preparedness for climate-related risks.",
    Icon: LeafIcon,
  },
];

export const HUBS_DETAIL =
  "To initiate its activities, DevSolve will establish these four specialised hubs, each addressing critical domains of development and governance. The Local Governance Hub will focus on decentralisation processes, strengthening both rural and urban local bodies, and promoting the localisation of Sustainable Development Goals (SDGs). It will also emphasise the use of technology for local planning and data-driven decision-making. The Education and Life Skills Hub will aim to enhance learning outcomes by integrating life skills, critical thinking, and employability competencies. The Innovation and Incubation Hub will concentrate on leveraging new and emerging technologies to design development solutions and support entrepreneurial initiatives. Lastly, the Climate Change and Disaster Management Hub will address environmental sustainability, resilience building, and preparedness strategies to mitigate and manage climate-related risks and disasters effectively.";
