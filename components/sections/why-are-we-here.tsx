import { WarliSun } from "@/components/art/warli-motifs";
import { ArtFrame } from "@/components/ui/art-frame";
import { CtaLink } from "@/components/ui/cta-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { SplitSection } from "@/components/ui/split-section";

export default function WhyAreWeHere() {
  return (
    <SplitSection
      id="why-are-we-here"
      reverse
      visual={
        <ArtFrame
          art={<WarliSun className="h-full w-full" />}
          caption="A new day for local leadership — Warli folk art"
        />
      }
    >
      <SectionHeading
        index="2"
        title="Why Are We Here"
        description="The world is changing fast. Good development now needs informed, capable, and forward-thinking leadership — leaders who understand new knowledge and new technologies, and who help every generation take part in governance."
      />
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
        By promoting a knowledge-based society, leaders can enable citizens to
        participate more actively in governance, improve decision-making, and
        ensure that development is both sustainable and equitable.
      </p>
      <CtaLink href="/about#why-are-we-here" variant="underline" className="mt-6">
        Read More →
      </CtaLink>
    </SplitSection>
  );
}
