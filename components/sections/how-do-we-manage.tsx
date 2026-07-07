import { WarliVillage } from "@/components/art/warli-motifs";
import { ArtFrame } from "@/components/ui/art-frame";
import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { TeaserCard } from "@/components/ui/teaser-card";
import { HUBS } from "@/lib/content/how-we-manage";

export default function HowDoWeManage() {
  return (
    <SectionShell id="how-do-we-manage">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <SectionHeading
              index="5"
              title="How Do We Manage"
              description="DevSolve is guided by a Governing Body and an Executive Committee, and works through four Hubs of Action."
            />
            <CtaLink href="/how-we-work" variant="underline" className="mt-6">
              Read More →
            </CtaLink>
          </div>
          <ArtFrame
            aspect="aspect-[3/2]"
            art={<WarliVillage className="h-full w-full" />}
            caption="A village that runs itself — Warli folk art"
          />
        </div>

        <p className="mt-12 text-lg font-semibold text-ink">
          Our four Hubs of Action
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {HUBS.map((hub) => (
            <TeaserCard
              key={hub.name}
              icon={hub.Icon}
              title={hub.name}
              description={hub.description}
              href="/how-we-work"
            />
          ))}
        </div>
      </Container>
    </SectionShell>
  );
}
