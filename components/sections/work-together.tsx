import { WarliDancers } from "@/components/art/warli-motifs";
import { ArtFrame } from "@/components/ui/art-frame";
import { CtaLink } from "@/components/ui/cta-link";
import { IndexList } from "@/components/ui/index-list";
import { IndexRow } from "@/components/ui/index-row";
import { SectionHeading } from "@/components/ui/section-heading";
import { SplitSection } from "@/components/ui/split-section";
import { INTERFACES, WORK_TOGETHER_INTRO } from "@/lib/content/work-together";

export default function WorkTogether() {
  return (
    <SplitSection
      id="work-together"
      reverse
      visual={
        <div>
          <p className="text-lg font-semibold text-ink">Ways to connect</p>
          <IndexList className="mt-4">
            {INTERFACES.slice(0, 6).map((name, i) => (
              <IndexRow
                key={name}
                number={String(i + 1)}
                title={name}
                href="/how-we-work"
              />
            ))}
          </IndexList>
          <CtaLink href="/how-we-work" variant="underline" className="mt-6">
            See all the ways →
          </CtaLink>
        </div>
      }
    >
      <SectionHeading
        index="6"
        title="How Can We Work Together"
        description={WORK_TOGETHER_INTRO}
      />
      <CtaLink href="/how-we-work#work-together" variant="underline" className="mt-6">
        Read More →
      </CtaLink>
      <ArtFrame
        className="mt-10 max-w-sm"
        aspect="aspect-[3/2]"
        art={<WarliDancers className="h-full w-full" />}
        caption="Hands joined in one rhythm — Warli folk art"
      />
    </SplitSection>
  );
}
