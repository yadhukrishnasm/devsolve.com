import type { ReactNode } from "react";
import { HandDrawnDivider } from "@/components/icons/hand-drawn-divider";
import { cn } from "@/lib/utils";

// Standard section wrapper — a hand-drawn top rule plus consistent
// vertical padding, used by every non-split section on the page.
export function SectionShell({
  id,
  dividerClassName,
  className,
  children,
}: {
  id?: string;
  dividerClassName?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("relative py-20 md:py-28", className)}>
      <HandDrawnDivider
        className={cn("absolute top-0 left-0 h-2.5 w-full text-rule", dividerClassName)}
      />
      {children}
    </section>
  );
}
