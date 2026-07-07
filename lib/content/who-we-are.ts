import { BookOpenIcon, CpuIcon, GraduationCapIcon, HandshakeIcon } from "@/components/icons";

export const PILLARS = [
  {
    name: "Research & Knowledge",
    icon: BookOpenIcon,
    description:
      "Evidence-based policy analysis and action research across local, national, and global governance.",
  },
  {
    name: "Training & Capacity Building",
    icon: GraduationCapIcon,
    description:
      "Online, offline, and blended learning with continuous handholding for sustained impact.",
  },
  {
    name: "Technology & Innovation",
    icon: CpuIcon,
    description:
      "AI, data systems, and digital tools built for local governance and development delivery.",
  },
  {
    name: "Advisory & Consulting",
    icon: HandshakeIcon,
    description:
      "Consultancy support for governments and organisations addressing complex development issues.",
  },
] as const;

// Full origin story — the homepage shows a short version; /about shows
// this in full.
export const ORIGIN_STORY = [
  "A few of us — the young, the middle-aged, and the old — sat over cups of tea and coffee, several times, over a period, and then zeroed in on this: build up a forward-looking and pioneering institution committed to nurturing leadership excellence, strengthening institutional capacities, and advancing research, training, and innovation, both within India and in the international arena.",
  "It is a global institute in evolution, dedicated to providing development solutions through knowledge, skills, and advanced technologies. DevSolve operates as a hybrid — part research institute, part training academy, part technology lab, and part advisory practice.",
];

// "Why Are We Here" — previously unused essay text, shown only on the
// full /about page to keep the homepage light.
export const WHY_WE_ARE_HERE = [
  "Again, we thought — are we making sense? The contemporary global landscape is undergoing a significant transformation in its approach to sustainable development, emphasising the urgent need for informed, capable, and forward-thinking leadership.",
  "This shift is closely linked to the rapid expansion of knowledge systems and technological advancements, often described as a knowledge revolution, which has the potential to reshape structures of governance, redistribute power, and deepen democratic processes. In such a context, leadership cannot remain static; it must evolve to understand and engage with these emerging dynamics.",
  "Effective leaders are expected not only to possess technical expertise but also to foster inclusive environments where both younger and older generations are empowered with relevant knowledge and skills. By promoting a knowledge-based society, leaders can enable citizens to participate more actively in governance, improve decision-making processes, and ensure that development initiatives are both sustainable and equitable. This transition ultimately strengthens institutional capacity and enhances the quality of democratic governance.",
];

// Objectives i–ix, verbatim from the founding brief.
export const OBJECTIVES = [
  "A forward-looking and pioneering institution committed to nurturing leadership excellence, strengthening institutional capacities, and advancing research, training, and innovation both within India and in the global arena.",
  "Create a dynamic platform where knowledge generation and leadership development intersect, enabling individuals and organisations to respond effectively to evolving development challenges.",
  "By fostering interdisciplinary learning and evidence-based practices, the institute aims to cultivate leaders who are not only technically competent but also socially responsive and ethically grounded.",
  "It seeks to bridge the gap between theory and practice through structured training programmes, applied research, and collaborative initiatives.",
  "Positioned to play a critical role in driving innovative and transformative leadership models that respond to complex challenges at local, regional, and global levels.",
  "By integrating cutting-edge technologies with both global best practices and context-specific local knowledge, DevSolve aims to offer comprehensive and adaptive solutions for development.",
  "Its approach emphasises innovation, inclusivity, and scalability, ensuring that interventions remain relevant and impactful across different sectors.",
  "It will act as a knowledge hub, facilitating the exchange of ideas, tools, and methodologies that support effective governance and sustainable development.",
  "DevSolve seeks to redefine capacity building and leadership development in a rapidly changing world.",
];
