import Link from "next/link";
import { cn } from "@/lib/utils";

const VARIANT_CLASSES = {
  primary:
    "border border-brand bg-brand px-6 py-3 text-base font-medium text-surface transition-colors hover:bg-transparent hover:text-brand",
  secondary:
    "border border-rule px-6 py-3 text-base font-medium text-ink transition-colors hover:border-brand hover:text-brand",
  dark: "border border-surface px-6 py-3 text-base font-medium text-surface transition-colors hover:bg-surface hover:text-brand",
  underline:
    "text-base font-medium text-brand italic underline decoration-brand-30 underline-offset-4 transition-colors hover:decoration-brand",
} as const;

export function CtaLink({
  href,
  variant = "primary",
  icon,
  className,
  children,
}: {
  href: string;
  variant?: keyof typeof VARIANT_CLASSES;
  icon?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}) {
  const classes = cn(
    "inline-flex items-center gap-2",
    VARIANT_CLASSES[variant],
    className,
  );
  const content = (
    <>
      {icon}
      {children}
    </>
  );

  // Internal app routes/anchors go through next/link for prefetching;
  // everything else (tel:, mailto:, external https://) is a plain <a>.
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

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
