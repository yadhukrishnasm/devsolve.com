import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

// A bordered artwork panel with a small print-style caption beneath —
// the shared treatment for the Indic line-art illustrations used in
// place of photography (Hero, Who We Are, ...).
export function ArtFrame({
  art,
  caption,
  aspect = "aspect-[4/3]",
  className,
}: {
  art: ReactNode;
  caption: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <div
        className={cn(
          "relative flex items-center justify-center overflow-hidden border border-rule bg-box-2 p-10 text-brand",
          aspect,
        )}
      >
        {art}
      </div>
      <p className="font-mono mt-3 text-xs tracking-wide text-ink-muted uppercase">
        {caption}
      </p>
    </div>
  );
}
