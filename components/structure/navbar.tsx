import Link from "next/link";
import { DevSolveMark } from "@/components/icons";
import { HandDrawnDivider } from "@/components/icons/hand-drawn-divider";

const NAV_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/what-we-offer", label: "What We Offer" },
  { href: "/how-we-work", label: "How We Work" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-surface">
      <div className="mx-auto flex min-h-20 w-full max-w-7xl items-center justify-between gap-4 px-6 py-4 md:px-10">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <DevSolveMark className="h-6 w-6 text-brand" />
          <span className="text-lg font-bold tracking-tight text-brand">
            DevSolve
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex lg:gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium whitespace-nowrap text-ink-soft transition-colors hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#contact"
          className="shrink-0 border border-brand px-5 py-2 text-base font-medium whitespace-nowrap text-brand transition-colors hover:bg-brand hover:text-surface"
        >
          Contact Us
        </Link>
      </div>
      <HandDrawnDivider className="h-2 w-full text-rule" />
    </header>
  );
}
