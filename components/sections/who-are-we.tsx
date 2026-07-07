import { PookalamMotif } from "@/components/art/pookalam-motif";
import { ArtFrame } from "@/components/ui/art-frame";
import { CtaLink } from "@/components/ui/cta-link";
import { IndexList } from "@/components/ui/index-list";
import { IndexRow } from "@/components/ui/index-row";
import { SectionHeading } from "@/components/ui/section-heading";
import { SplitSection } from "@/components/ui/split-section";
import { ORIGIN_STORY } from "@/lib/content/who-we-are";
import { FOCUS_AREAS } from "@/lib/content/focus-areas";

export default function WhoAreWe() {
  return (
    <SplitSection
      id="who-are-we"
      visual={
        <div>
          <p className="text-lg font-semibold text-ink">
            Our key areas of work
          </p>
          <IndexList className="mt-4">
            {FOCUS_AREAS.slice(0, 5).map((area, i) => (
              <IndexRow
                key={area.slug}
                number={String(i + 1)}
                title={area.name}
                href="/about"
              />
            ))}
          </IndexList>
          <CtaLink href="/about" variant="underline" className="mt-6">
            See all nine areas →
          </CtaLink>
        </div>
      }
    >
      <SectionHeading
        index="1"
        title="Who Are We"
        description={ORIGIN_STORY[0]}
      />
      <CtaLink href="/about" variant="underline" className="mt-6">
        Read More →
      </CtaLink>
      <ArtFrame
        className="mt-10 max-w-sm"
        aspect="aspect-[3/2]"
        art={<PookalamMotif className="h-full w-full" />}
        caption="Pookalam — a welcome laid in flowers"
      />
    </SplitSection>
  );
}
