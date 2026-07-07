import type { ReactNode } from "react";
import { HandDrawnDivider } from "@/components/icons/hand-drawn-divider";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

// Two-column editorial layout — text content on one side, a visual
// or list on the other, alternating sides per section via `reverse`.
// Every section on the page uses this same rhythm instead of a
// centered card grid.
export function SplitSection({
  id,
  reverse = false,
  visual,
  className,
  children,
}: {
  id?: string;
  reverse?: boolean;
  visual: ReactNode;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("relative py-20 md:py-28", className)}>
      <HandDrawnDivider className="absolute top-0 left-0 h-2.5 w-full text-rule" />
      <Container>
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div className={cn(reverse && "md:order-2")}>{children}</div>
          <div className={cn(reverse && "md:order-1")}>{visual}</div>
        </div>
      </Container>
    </section>
  );
}
