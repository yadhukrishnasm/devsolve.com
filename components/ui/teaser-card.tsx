import type { ComponentType, SVGProps } from "react";
import Link from "next/link";
import { RedirectStamp } from "@/components/ui/redirect-stamp";
import { cn } from "@/lib/utils";

// Internal app routes go through next/link for prefetching; everything
// else (mailto:, tel:, external https://) is a plain <a>.

// An icon-led card with a clear title and a short plain-language
// description, sized identically across every grid for symmetry.
export function TeaserCard({
  icon: Icon,
  title,
  description,
  href,
  className,
}: {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description?: string;
  href?: string;
  className?: string;
}) {
  const content = (
    <>
      <div className="w-full">
        <Icon className="h-10 w-10 shrink-0 text-brand" strokeWidth={1.2} />
        <span className="mt-4 line-clamp-2 block w-full text-lg leading-snug font-semibold break-words text-ink">
          {title}
        </span>
        {description && (
          <span className="mt-2 line-clamp-3 block w-full text-base leading-relaxed break-words text-ink-soft">
            {description}
          </span>
        )}
      </div>
      {href && <RedirectStamp size="sm" className="mt-4" />}
    </>
  );

  const classes = cn(
    "flex min-h-60 w-full flex-col items-start justify-between border border-dashed border-rule p-6 transition-colors duration-300",
    href && "group hover:border-brand",
    className,
  );

  if (href?.startsWith("/")) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
        className={classes}
      >
        {content}
      </a>
    );
  }

  return <div className={classes}>{content}</div>;
}
