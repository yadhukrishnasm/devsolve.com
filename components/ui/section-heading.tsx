import { cn } from "@/lib/utils";

// A plain, easy-to-read section heading: a simple number, the section
// question as the title, and an optional plain-language description.
export function SectionHeading({
  index,
  title,
  description,
  tone = "light",
  className,
}: {
  index?: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="flex items-baseline gap-4">
        {index && (
          <span
            className={cn(
              "text-3xl font-bold md:text-4xl",
              tone === "dark" ? "text-brand-30" : "text-brand",
            )}
          >
            {index}
          </span>
        )}
        <h2
          className={cn(
            "text-3xl font-bold tracking-tight md:text-4xl",
            tone === "dark" ? "text-surface" : "text-ink",
          )}
        >
          {title}
        </h2>
      </div>
      {description && (
        <p
          className={cn(
            "mt-5 max-w-2xl text-lg leading-relaxed md:text-xl",
            tone === "dark" ? "text-brand-30/90" : "text-ink-soft",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
