import {
  BookOpenIcon,
  CpuIcon,
  FileTextIcon,
  GraduationCapIcon,
  HandshakeIcon,
  LightbulbIcon,
  PackageIcon,
} from "@/components/icons";
import type { ComponentType, SVGProps } from "react";

export type Offer = {
  name: string;
  description: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

// "What Do We Offer" — the institute's offerings, verbatim themes
// from the founding document.
export const OFFERS: Offer[] = [
  {
    name: "Courses and Trainings",
    description: "Structured courses and training programmes — online, offline, and blended.",
    Icon: GraduationCapIcon,
  },
  {
    name: "Learning Tools and Products",
    description: "Tools and products for building knowledge and skills.",
    Icon: PackageIcon,
  },
  {
    name: "Innovations Space",
    description: "A space to develop and test new ideas for development.",
    Icon: LightbulbIcon,
  },
  {
    name: "Consultancy and Advisory Support",
    description: "Advice and support for governments and organisations.",
    Icon: HandshakeIcon,
  },
  {
    name: "Research and Studies",
    description: "Evidence-based research on governance and development.",
    Icon: BookOpenIcon,
  },
  {
    name: "Publications",
    description: "Print, digital, audio, and visual publications.",
    Icon: FileTextIcon,
  },
  {
    name: "Capacity Building",
    description: "Trainings with handholding and facilitation for development initiatives.",
    Icon: CpuIcon,
  },
];

export const OFFER_DETAIL =
  "DevSolve's education and training programmes build leadership capacity across sectors by equipping participants with relevant knowledge, skills, and competencies. Tailored for students, local government functionaries, professionals, and organisations, they address evolving needs, foster innovation, and strengthen the ability to navigate complex challenges effectively in diverse contexts.";

// The learning formats on offer.
export const LEARNING_FORMATS = [
  "Virtual courses / e-courses / app-based learning tools",
  "Simulation-based learning experiences",
  "Short-term courses",
  "Trainings",
  "Long-term courses",
  "Internships",
  "Virtual networking and collaboration opportunities",
  "Customised training solutions",
];
