import { WarliTree } from "@/components/art/warli-motifs";
import { ArtFrame } from "@/components/ui/art-frame";
import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { TeaserCard } from "@/components/ui/teaser-card";
import { SERVICES } from "@/lib/content/what-we-do";

export default function WhatDoWeDo() {
  return (
    <SectionShell id="what-do-we-do">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <SectionHeading
              index="3"
              title="What Do We Do"
              description="We empower local government functionaries, students, and young people with the knowledge, skills, and competencies needed to navigate the complexities of today's and tomorrow's world."
            />
            <CtaLink href="/what-we-do" variant="underline" className="mt-6">
              Read More →
            </CtaLink>
          </div>
          <ArtFrame
            aspect="aspect-[3/2]"
            art={<WarliTree className="h-full w-full" />}
            caption="Tending what grows — Warli folk art"
          />
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <TeaserCard
              key={service.slug}
              icon={service.Icon}
              title={service.title}
              description={service.description}
              href="/what-we-do"
            />
          ))}
        </div>
      </Container>
    </SectionShell>
  );
}
