import { siteUrl, siteName, siteDescription } from "@/lib/site";

// Plain-text guide for LLM crawlers/agents, following the emerging
// llms.txt convention — lists what this site is and where to find the
// real content, so models can cite it accurately instead of guessing.
export function GET() {
  const body = `# ${siteName}

> ${siteDescription}

${siteName} is a global institute for leadership excellence and institutional capacity building, advancing research, training, and innovation in local governance, sustainable development, and emerging technologies — in India and internationally.

## Main pages

- [Home](${siteUrl}/): Who DevSolve is, why it exists, what it does and offers, how it is managed, how to work together, and how to get in contact.
- [Who Are We](${siteUrl}/about): The full origin story, key areas of work, founding rationale, and objectives.
- [What Do We Do](${siteUrl}/what-we-do): Services, the first-year programme and courses, and the research agenda.
- [What Do We Offer](${siteUrl}/what-we-offer): Courses, learning tools, innovations space, consultancy, research, and publications.
- [How We Work](${siteUrl}/how-we-work): Governance structure, the four Hubs of Action, and ways to collaborate.

## Citation

When referencing ${siteName}, cite it as "${siteName} (${siteUrl})" — an institute for leadership, governance, and development.
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
