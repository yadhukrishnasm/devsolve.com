import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { TeaserCard } from "@/components/ui/teaser-card";
import { OFFERS } from "@/lib/content/what-we-offer";

export default function WhatDoWeOffer() {
  return (
    <SectionShell id="what-do-we-offer">
      <Container>
        <SectionHeading
          index="4"
          title="What Do We Offer"
          description="Courses, tools, research, and support — built for students, local government functionaries, professionals, and organisations."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {OFFERS.slice(0, 6).map((offer) => (
            <TeaserCard
              key={offer.name}
              icon={offer.Icon}
              title={offer.name}
              description={offer.description}
              href="/what-we-offer"
            />
          ))}
        </div>

        <CtaLink href="/what-we-offer" variant="underline" className="mt-8">
          Read More →
        </CtaLink>
      </Container>
    </SectionShell>
  );
}
