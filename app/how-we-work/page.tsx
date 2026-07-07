import type { Metadata } from "next";
import Footer from "@/components/sections/footer";
import { Navbar } from "@/components/structure/navbar";
import { BackLink } from "@/components/ui/back-link";
import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";
import { IndexList } from "@/components/ui/index-list";
import { IndexRow } from "@/components/ui/index-row";
import { GOVERNANCE, HUBS, HUBS_DETAIL } from "@/lib/content/how-we-manage";
import {
  INTERFACES,
  WORK_TOGETHER_DETAIL,
  WORK_TOGETHER_INTRO,
} from "@/lib/content/work-together";
import { siteUrl } from "@/lib/site";

const TITLE = "How We Work";
const DESCRIPTION =
  "How DevSolve is managed — its Governing Body, Executive Committee, and four Hubs of Action — and the many ways to work together with us.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${siteUrl}/how-we-work` },
  openGraph: {
    title: `${TITLE} | DevSolve`,
    description: DESCRIPTION,
    url: `${siteUrl}/how-we-work`,
    type: "website",
  },
};

export default function HowWeWorkPage() {
  return (
    <>
      <Navbar />
      <main className="pb-24">
        <Container>
          <div className="pt-10 md:pt-14">
            <BackLink />
          </div>

          <h1 className="mt-8 max-w-2xl text-4xl font-bold tracking-tight text-ink md:text-5xl">
            How Do We Manage
          </h1>

          <div className="mt-10 grid max-w-3xl gap-6 sm:grid-cols-2">
            {GOVERNANCE.map((body) => (
              <div
                key={body.name}
                className="border border-dashed border-rule p-6"
              >
                <p className="text-xl font-semibold text-ink">{body.name}</p>
                <p className="mt-3 text-base leading-relaxed text-ink-soft">
                  {body.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-ink md:text-3xl">
              Hubs of Action
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-ink-soft">
              To begin with, DevSolve will have four Hubs:
            </p>
            <IndexList className="mt-6">
              {HUBS.map((hub, i) => (
                <IndexRow
                  key={hub.name}
                  number={String(i + 1)}
                  icon={hub.Icon}
                  title={hub.name}
                  description={hub.description}
                />
              ))}
            </IndexList>
            <p className="mt-8 text-lg leading-relaxed text-ink-soft">
              {HUBS_DETAIL}
            </p>
          </div>

          <div id="work-together" className="mt-16 max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-ink md:text-3xl">
              How Can We Work Together
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              {WORK_TOGETHER_INTRO}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              {WORK_TOGETHER_DETAIL}
            </p>
            <IndexList className="mt-8">
              {INTERFACES.map((name, i) => (
                <IndexRow key={name} number={String(i + 1)} title={name} />
              ))}
            </IndexList>
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
