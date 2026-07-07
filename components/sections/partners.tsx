import { BuildingIcon } from "@/components/icons";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";

const PLACEHOLDER_SLOTS = Array.from({ length: 6 });

export default function Partners() {
  return (
    <SectionShell id="partners">
      <Container>
        <SectionHeading title="Who Are Our Well Wishers" />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {PLACEHOLDER_SLOTS.map((_, i) => (
            <div
              key={i}
              className="flex aspect-square flex-col items-center justify-center gap-2 border border-dashed border-rule text-ink-muted"
            >
              <BuildingIcon className="h-8 w-8" strokeWidth={1.2} />
              <span className="text-xs tracking-wide uppercase">
                Partner logo
              </span>
            </div>
          ))}
        </div>
      </Container>
    </SectionShell>
  );
}
