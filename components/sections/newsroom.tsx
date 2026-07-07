import { FileTextIcon } from "@/components/icons";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { TeaserCard } from "@/components/ui/teaser-card";

const PLACEHOLDER_UPDATES = ["Programme launches", "Publications & briefs", "Media coverage"];

export default function Newsroom() {
  return (
    <SectionShell id="newsroom">
      <Container>
        <SectionHeading title="Stories — Far, Far from Fictions" />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {PLACEHOLDER_UPDATES.map((label) => (
            <TeaserCard
              key={label}
              icon={FileTextIcon}
              title={label}
              description="Coming soon"
            />
          ))}
        </div>
      </Container>
    </SectionShell>
  );
}
