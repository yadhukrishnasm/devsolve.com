import Link from "next/link";

// Small "return to homepage" link used at the top of every full
// content subpage (/about, /focus-areas, /what-we-do).
export function BackLink({ href = "/" }: { href?: string }) {
  return (
    <Link
      href={href}
      className="font-mono inline-block text-xs font-medium tracking-wide text-brand uppercase underline decoration-brand-30 underline-offset-4 transition-colors hover:decoration-brand"
    >
      ← Back home
    </Link>
  );
}
