import type { Metadata } from "next";
import Footer from "@/components/sections/footer";
import { Navbar } from "@/components/structure/navbar";
import { BackLink } from "@/components/ui/back-link";
import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";
import { IndexList } from "@/components/ui/index-list";
import { IndexRow } from "@/components/ui/index-row";
import { FOCUS_AREAS } from "@/lib/content/focus-areas";
import {
  OBJECTIVES,
  ORIGIN_STORY,
  WHY_WE_ARE_HERE,
} from "@/lib/content/who-we-are";
import { siteUrl } from "@/lib/site";

const TITLE = "Who Are We";
const DESCRIPTION =
  "The story behind DevSolve, why it exists, its key areas of work, and the objectives guiding its founding years.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${siteUrl}/about` },
  openGraph: {
    title: `${TITLE} | DevSolve`,
    description: DESCRIPTION,
    url: `${siteUrl}/about`,
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pb-24">
        <Container>
          <div className="pt-10 md:pt-14">
            <BackLink />
          </div>

          <h1 className="mt-8 max-w-2xl text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Who Are We
          </h1>

          <div className="mt-8 max-w-2xl space-y-5">
            {ORIGIN_STORY.map((paragraph) => (
              <p
                key={paragraph.slice(0, 20)}
                className="text-lg leading-relaxed text-ink-soft"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-16 max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-ink md:text-3xl">
              Our key areas of work
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-ink-soft">
              DevSolve distinguishes itself through its interdisciplinary
              approach and thematic focus on these areas:
            </p>
            <IndexList className="mt-6">
              {FOCUS_AREAS.map((area, i) => (
                <IndexRow
                  key={area.slug}
                  number={String(i + 1)}
                  icon={area.Icon}
                  title={area.name}
                  description={area.detail}
                />
              ))}
            </IndexList>
          </div>

          <div id="why-are-we-here" className="mt-16 max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-ink md:text-3xl">
              Why Are We Here
            </h2>
            <div className="mt-5 space-y-5">
              {WHY_WE_ARE_HERE.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 20)}
                  className="text-lg leading-relaxed text-ink-soft"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-16 max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-ink md:text-3xl">
              Our Objectives
            </h2>
            <ol className="mt-6 list-none space-y-5">
              {OBJECTIVES.map((objective, i) => (
                <li key={objective.slice(0, 20)} className="flex gap-4">
                  <span className="mt-0.5 shrink-0 text-lg font-bold text-brand">
                    {i + 1}
                  </span>
                  <span className="text-lg leading-relaxed text-ink-soft">
                    {objective}
                  </span>
                </li>
              ))}
            </ol>
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
