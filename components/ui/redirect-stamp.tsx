import { ArrowUpRightIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

// A hand-stamped postmark — dashed rotated ring around a solid brand
// dot with the redirect arrow. The consistent "this leads somewhere"
// mark used on every clickable card and row.
export function RedirectStamp({
  size = "md",
  className,
}: {
  size?: "sm" | "md";
  className?: string;
}) {
  const outer = size === "sm" ? "h-8 w-8" : "h-11 w-11";
  const inner = size === "sm" ? "h-6 w-6" : "h-8 w-8";
  const icon = size === "sm" ? "h-3 w-3" : "h-3.5 w-3.5";

  return (
    <span className={cn("relative inline-flex shrink-0 items-center justify-center", outer, className)}>
      <span
        className={cn(
          "absolute -rotate-6 rounded-full border border-dashed border-rule transition-transform duration-300 group-hover:rotate-0 group-hover:border-brand",
          outer,
        )}
      />
      <span
        className={cn(
          "flex items-center justify-center rounded-full bg-brand text-surface transition-transform duration-300 group-hover:scale-110",
          inner,
        )}
      >
        <ArrowUpRightIcon className={icon} />
      </span>
    </span>
  );
}
