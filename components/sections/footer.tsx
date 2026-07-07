import Link from "next/link";
import { DevSolveMark, MailIcon, MapPinIcon } from "@/components/icons";
import { HandDrawnDivider } from "@/components/icons/hand-drawn-divider";
import { contactEmail, contactEmailHref, registeredOfficeAddress } from "@/lib/contact";

const FOOTER_LINKS = [
  { href: "/about", label: "Who Are We" },
  { href: "/about#why-are-we-here", label: "Why Are We Here" },
  { href: "/what-we-do", label: "What Do We Do" },
  { href: "/what-we-offer", label: "What Do We Offer" },
  { href: "/how-we-work", label: "How Do We Manage" },
  { href: "/how-we-work#work-together", label: "Working Together" },
  { href: "/#contact", label: "Contact Us" },
];

export default function Footer() {
  return (
    <footer className="relative pt-14 pb-14">
      <HandDrawnDivider className="absolute top-0 left-0 h-2.5 w-full text-rule" />
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <div className="flex items-center gap-2">
              <DevSolveMark className="h-6 w-6 text-brand" />
              <span className="text-lg font-bold tracking-tight text-brand">
                DevSolve
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              A global institute for leadership excellence, institutional
              capacity building, and development solutions through
              knowledge, skills, and technology.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-8 gap-y-2 text-base sm:grid-cols-4 md:justify-items-end">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-ink-muted transition-colors hover:text-brand"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="relative mt-10 flex flex-col gap-4 pt-8 text-sm text-ink-muted sm:flex-row sm:items-start sm:justify-between">
          <HandDrawnDivider className="absolute top-0 left-0 h-2 w-full text-rule" />
          <div className="flex items-start gap-2 max-w-md">
            <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
            <span>{registeredOfficeAddress}</span>
          </div>
          <a
            href={contactEmailHref}
            className="flex items-center gap-2 transition-colors hover:text-brand"
          >
            <MailIcon className="h-4 w-4 shrink-0 text-brand" />
            {contactEmail}
          </a>
        </div>

        <p className="mt-8 text-xs text-ink-muted/70">
          © {new Date().getFullYear()} DevSolve. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
