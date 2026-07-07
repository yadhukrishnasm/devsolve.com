import { UsersIcon } from "@/components/icons";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { TeaserCard } from "@/components/ui/teaser-card";

// Placeholder roster — no names are invented here. Swap each card's
// title for a real name once the team page is finalised.
const CORE_ROLES = [
  "Research & Policy",
  "Training & Capacity Building",
  "Technology & Innovation",
  "Partnerships & Programmes",
];

const ADVISORY_ROLES = [
  "Governance & Public Policy",
  "Academic & Research",
  "Industry & Technology",
];

export default function Team() {
  return (
    <SectionShell id="team">
      <Container>
        <SectionHeading title="Core team and advisory council" />

        <div className="mt-12 space-y-10">
          <div>
            <p className="text-lg font-semibold text-ink">Core Team</p>
            <div className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {CORE_ROLES.map((role) => (
                <TeaserCard
                  key={role}
                  icon={UsersIcon}
                  title={role}
                  description="Profile coming soon"
                />
              ))}
            </div>
          </div>

          <div>
            <p className="text-lg font-semibold text-ink">Advisory Council</p>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {ADVISORY_ROLES.map((role) => (
                <TeaserCard
                  key={role}
                  icon={UsersIcon}
                  title={role}
                  description="Profile coming soon"
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </SectionShell>
  );
}
