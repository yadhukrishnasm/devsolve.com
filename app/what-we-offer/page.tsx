import type { Metadata } from "next";
import Footer from "@/components/sections/footer";
import { Navbar } from "@/components/structure/navbar";
import { BackLink } from "@/components/ui/back-link";
import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";
import { IndexList } from "@/components/ui/index-list";
import { IndexRow } from "@/components/ui/index-row";
import {
  LEARNING_FORMATS,
  OFFER_DETAIL,
  OFFERS,
} from "@/lib/content/what-we-offer";
import { siteUrl } from "@/lib/site";

const TITLE = "What Do We Offer";
const DESCRIPTION =
  "DevSolve's offerings: courses and trainings, learning tools, an innovations space, consultancy, research, publications, and capacity building.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${siteUrl}/what-we-offer` },
  openGraph: {
    title: `${TITLE} | DevSolve`,
    description: DESCRIPTION,
    url: `${siteUrl}/what-we-offer`,
    type: "website",
  },
};

export default function WhatWeOfferPage() {
  return (
    <>
      <Navbar />
      <main className="pb-24">
        <Container>
          <div className="pt-10 md:pt-14">
            <BackLink />
          </div>

          <h1 className="mt-8 max-w-2xl text-4xl font-bold tracking-tight text-ink md:text-5xl">
            What Do We Offer
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            {OFFER_DETAIL}
          </p>

          <div className="mt-14 max-w-3xl">
            <IndexList>
              {OFFERS.map((offer, i) => (
                <IndexRow
                  key={offer.name}
                  number={String(i + 1)}
                  icon={offer.Icon}
                  title={offer.name}
                  description={offer.description}
                />
              ))}
            </IndexList>
          </div>

          <div className="mt-16 max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-ink md:text-3xl">
              Ways you can learn with us
            </h2>
            <ul className="mt-6 list-none space-y-3">
              {LEARNING_FORMATS.map((format) => (
                <li key={format} className="flex gap-3">
                  <span className="mt-0.5 shrink-0 font-bold text-brand">—</span>
                  <span className="text-lg leading-relaxed text-ink-soft">
                    {format}
                  </span>
                </li>
              ))}
            </ul>
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
