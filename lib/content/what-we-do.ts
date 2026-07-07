import { FileTextIcon, GraduationCapIcon, HandshakeIcon, PackageIcon } from "@/components/icons";
import type { ComponentType, SVGProps } from "react";

export type Service = {
  slug: string;
  title: string;
  description: string;
  detail: string;
  sectors: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

// Single source of truth for the four services — reused by the
// homepage teaser and the full /what-we-do page.
export const SERVICES: Service[] = [
  {
    slug: "tools-products",
    title: "Tools & Products",
    description:
      "Creation and dissemination of tools and products that enhance local governance, learning, and institutional efficiency.",
    detail:
      "DevSolve is actively involved in creating and disseminating tools and products tailored to enhance local governance capacities, learning, skill development, and institutional efficiency — built to be used, not just published.",
    sectors: "Local Governance · Data & Evidence · Emerging Tech",
    Icon: PackageIcon,
  },
  {
    slug: "advisory-consultancy",
    title: "Advisory & Consultancy",
    description:
      "Consultancy and advisory support for governments and organisations addressing complex development issues.",
    detail:
      "DevSolve provides consultancy and advisory services to support organisations and governments in addressing complex development issues, drawing on interdisciplinary research and field experience.",
    sectors: "International Development · Climate & Growth · Disaster Management",
    Icon: HandshakeIcon,
  },
  {
    slug: "publications-media",
    title: "Publications & Media",
    description:
      "Print, digital, audio, and visual publications — often leveraging AI and blockchain for accessibility and reach.",
    detail:
      "Publication initiatives span multiple formats — print, digital, audio, and visual media — often leveraging advanced technologies such as artificial intelligence and blockchain to enhance accessibility and engagement.",
    sectors: "Emerging Tech · Sustainable Development Goals",
    Icon: FileTextIcon,
  },
  {
    slug: "capacity-building-training",
    title: "Capacity Building & Training",
    description:
      "Online, offline, and blended training modalities with continuous handholding for sustained learning and impact.",
    detail:
      "A strong focus is placed on capacity building through diverse training modalities — online, offline, and blended — along with continuous handholding support to ensure sustained learning, effective implementation, and long-term impact.",
    sectors: "Skills & Entrepreneurship · AI-Driven Leadership",
    Icon: GraduationCapIcon,
  },
];

// The three priorities named for DevSolve's initial years — previously
// unused brief content, shown only on the full /what-we-do page.
export const INITIAL_FOCUS = [
  "Capacity development tools and services for rural and urban local governments, in India and globally.",
  "Tools for skill building across various professions and streams.",
  "Educational tools for students of various levels and categories, with innovative approaches.",
];

// "The Near Future" — the first-year programme and how it will run.
export const NEAR_FUTURE_INTRO =
  "Tailored for students, local government functionaries, professionals, and organisations, we address evolving needs, foster innovation, and strengthen the ability to navigate complex challenges effectively in diverse contexts. The programme for the first year will be the development of capacity development tools and services for rural and urban local governments in India and globally.";

export const NEAR_FUTURE_FEATURES = [
  "Mainly in English and Hindi — other languages as per demand.",
  "Universal as well as tailor-made for specific areas, states, and groups.",
  "Interactive, with the incorporation of new and innovative technologies.",
  "Online, offline, and blended.",
  "Exposure visits.",
];

// Phase 1 (Year 1, 2026–27) — seven courses for Indian local governments.
export const PHASE_1_COURSES = [
  "Foundation Course for Panchayat elected representatives.",
  "Foundation Course for Urban elected representatives.",
  "Level 1 Course for Panchayat elected representatives — Gram Panchayat Development Plan and Sustainable Development Goals.",
  "Specialised course for Panchayat functionaries (elected representatives and officials) integrating AI and new technologies for development planning and governance.",
  "Level 1 Course for Urban elected representatives — knowing your municipality for governance and development planning.",
  "Foundation Course on Climate Change and Disaster Management for local government functionaries — elected representatives and officials.",
  "Level 2 Course for Panchayat elected representatives — facilitation and handholding for nine thematic areas as per the Localising SDG framework.",
  "Level 2 Course for Urban elected representatives and officers — new vistas in urban development.",
];

export const PHASE_1_TOOLS =
  "Tools — a data management and monitoring tool for an elected representative.";

// Research agenda for the year — seven themes with their strands.
export const RESEARCH_AGENDA: { theme: string; items: string[] }[] = [
  {
    theme: "Policy Analysis and Public Affairs",
    items: [
      "Conduct evidence-based policy analysis at local, national, and global levels.",
      "Study decentralisation, local governance, and public service delivery systems.",
      "Analyse policy impacts on socio-economic development and institutional performance.",
    ],
  },
  {
    theme: "Global Leadership and International Relations",
    items: [
      "Examine leadership in global governance and multilateral institutions.",
      "Study international cooperation, diplomacy, and crisis management.",
      "Research transnational challenges such as climate change, migration, and public health.",
      "Promote comparative studies on development models and global best practices.",
    ],
  },
  {
    theme: "Innovation and Technology Management",
    items: [
      "Explore the role of AI, blockchain, and data systems in governance and development.",
      "Study digital transformation in public institutions and service delivery.",
      "Develop technology-enabled tools and platforms for capacity building.",
      "Analyse the impact of emerging technologies on leadership and organisational change.",
    ],
  },
  {
    theme: "Sustainable Development and Environmental Leadership",
    items: [
      "Research leadership strategies for climate resilience and environmental sustainability.",
      "Study localising the Sustainable Development Goals (SDGs).",
      "Explore natural resource management and community-based conservation models.",
    ],
  },
  {
    theme: "Capacity Building, Skills and Education Systems",
    items: [
      "Study leadership development models and competency frameworks.",
      "Research education systems, life skills, and employability.",
      "Develop training methodologies and learning innovations.",
    ],
  },
  {
    theme: "Action Research and Field Engagement",
    items: [
      "Undertake field-based and participatory research initiatives.",
      "Pilot innovative models and scalable development solutions.",
      "Engage with communities for contextual and practice-oriented insights.",
      "Link research outcomes with real-world implementation and policy action.",
    ],
  },
  {
    theme: "Partnerships and Collaborative Research",
    items: [
      "Build collaborations with universities, governments, and international agencies.",
      "Promote interdisciplinary and cross-sectoral research initiatives.",
      "Facilitate knowledge exchange and joint innovation platforms.",
    ],
  },
];

export const RESEARCH_AGENDA_CLOSING =
  "Through multidisciplinary research projects, collaborative partnerships, and knowledge dissemination activities, DevSolve aims to generate new insights, influence public discourse, and inspire evidence-based leadership practices that contribute to positive societal impact and sustainable development.";
