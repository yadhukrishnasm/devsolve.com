import type { Metadata } from "next";
import Footer from "@/components/sections/footer";
import { Navbar } from "@/components/structure/navbar";
import { BackLink } from "@/components/ui/back-link";
import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";
import { IndexList } from "@/components/ui/index-list";
import { IndexRow } from "@/components/ui/index-row";
import {
  INITIAL_FOCUS,
  NEAR_FUTURE_FEATURES,
  NEAR_FUTURE_INTRO,
  PHASE_1_COURSES,
  PHASE_1_TOOLS,
  RESEARCH_AGENDA,
  RESEARCH_AGENDA_CLOSING,
  SERVICES,
} from "@/lib/content/what-we-do";
import { siteUrl } from "@/lib/site";

const TITLE = "What Do We Do";
const DESCRIPTION =
  "How DevSolve works: tools, advisory, publications, capacity building, the first-year programme, and the research agenda.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${siteUrl}/what-we-do` },
  openGraph: {
    title: `${TITLE} | DevSolve`,
    description: DESCRIPTION,
    url: `${siteUrl}/what-we-do`,
    type: "website",
  },
};

export default function WhatWeDoPage() {
  return (
    <>
      <Navbar />
      <main className="pb-24">
        <Container>
          <div className="pt-10 md:pt-14">
            <BackLink />
          </div>

          <h1 className="mt-8 max-w-2xl text-4xl font-bold tracking-tight text-ink md:text-5xl">
            What Do We Do
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            We empower local government functionaries, students, and young
            people by equipping them with the knowledge, skills, and
            competencies required to effectively navigate the complexities of
            the contemporary and future world. By integrating exposure to
            emerging technologies such as artificial intelligence, data
            systems, and digital governance tools, DevSolve prepares
            individuals who can contribute meaningfully to governance,
            innovation, and sustainable development.
          </p>

          <div className="mt-14 max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-ink md:text-3xl">
              How we do it
            </h2>
            <IndexList className="mt-6">
              {SERVICES.map((service, i) => (
                <IndexRow
                  key={service.slug}
                  number={String(i + 1)}
                  icon={service.Icon}
                  title={service.title}
                  description={service.detail}
                />
              ))}
            </IndexList>
          </div>

          <div className="mt-16 max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-ink md:text-3xl">
              The initial years will focus on
            </h2>
            <ol className="mt-6 list-none space-y-4">
              {INITIAL_FOCUS.map((item, i) => (
                <li key={item.slice(0, 20)} className="flex gap-4">
                  <span className="mt-0.5 shrink-0 text-lg font-bold text-brand">
                    {i + 1}
                  </span>
                  <span className="text-lg leading-relaxed text-ink-soft">
                    {item}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-16 max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-ink md:text-3xl">
              The Near Future
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              {NEAR_FUTURE_INTRO}
            </p>
            <ul className="mt-6 list-none space-y-3">
              {NEAR_FUTURE_FEATURES.map((item) => (
                <li key={item.slice(0, 20)} className="flex gap-3">
                  <span className="mt-0.5 shrink-0 font-bold text-brand">—</span>
                  <span className="text-lg leading-relaxed text-ink-soft">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16 max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-ink md:text-3xl">
              Phase 1 (Year 1, 2026–27)
            </h2>
            <p className="mt-3 text-lg font-semibold text-ink">
              Courses for Indian local governments
            </p>
            <ol className="mt-6 list-none space-y-4">
              {PHASE_1_COURSES.map((course, i) => (
                <li key={course.slice(0, 30)} className="flex gap-4">
                  <span className="mt-0.5 shrink-0 text-lg font-bold text-brand">
                    {i + 1}
                  </span>
                  <span className="text-lg leading-relaxed text-ink-soft">
                    {course}
                  </span>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-lg leading-relaxed font-semibold text-ink">
              {PHASE_1_TOOLS}
            </p>
          </div>

          <div className="mt-16 max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-ink md:text-3xl">
              Research agenda for the year
            </h2>
            <div className="mt-6 space-y-8">
              {RESEARCH_AGENDA.map((section, i) => (
                <div key={section.theme}>
                  <p className="flex gap-4 text-xl font-semibold text-ink">
                    <span className="shrink-0 text-brand">{i + 1}</span>
                    {section.theme}
                  </p>
                  <ul className="mt-3 list-none space-y-2 pl-8">
                    {section.items.map((item) => (
                      <li key={item.slice(0, 20)} className="flex gap-3">
                        <span className="mt-0.5 shrink-0 font-bold text-brand">
                          —
                        </span>
                        <span className="text-lg leading-relaxed text-ink-soft">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-8 text-lg leading-relaxed text-ink-soft">
              {RESEARCH_AGENDA_CLOSING}
            </p>
          </div>

          <div className="mt-16">
            <CtaLink href="/#contact" variant="primary">
              Contact Us
            </CtaLink>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
