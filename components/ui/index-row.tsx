import type { ComponentType, SVGProps } from "react";
import { RedirectStamp } from "@/components/ui/redirect-stamp";
import { cn } from "@/lib/utils";

// A numbered hairline-divided row — the editorial replacement for the
// illustrated/icon card grids. Meant to be wrapped in a
// `divide-y divide-rule border-t border-rule` list container.
export function IndexRow({
  number,
  icon: Icon,
  title,
  description,
  meta,
  href,
  className,
}: {
  number: string;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description?: string;
  meta?: string;
  href?: string;
  className?: string;
}) {
  const content = (
    <>
      <span className="w-8 shrink-0 pt-0.5 text-lg font-bold text-brand">
        {number}
      </span>
      {Icon && <Icon className="mt-1 h-6 w-6 shrink-0 text-brand" />}
      <div className="min-w-0 flex-1">
        <p className="text-lg leading-snug font-semibold text-ink">{title}</p>
        {description && (
          <p className="mt-1.5 text-base leading-relaxed text-ink-soft">
            {description}
          </p>
        )}
        {meta && <p className="mt-2 text-sm text-ink-muted">{meta}</p>}
      </div>
      {href && <RedirectStamp size="sm" />}
    </>
  );

  const classes = cn("flex items-start gap-4 py-5", href && "group", className);

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return <div className={classes}>{content}</div>;
}
