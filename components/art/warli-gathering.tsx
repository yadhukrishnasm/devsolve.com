import type { SVGProps } from "react";

// A Warli-style line illustration (Maharashtra tribal folk art) of
// people gathered beneath a tree — the artwork stand-in for the old
// "community gathering under a tree" photograph in the Hero.
export function WarliGathering(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 240 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* tree */}
      <path d="M120 195 L120 75" />
      <path d="M120 108 L95 78" />
      <path d="M120 108 L145 78" />
      <path d="M120 90 L102 55" />
      <path d="M120 90 L138 55" />
      <path d="M120 75 L120 42" />
      <circle cx="95" cy="78" r="3" />
      <circle cx="145" cy="78" r="3" />
      <circle cx="102" cy="55" r="3" />
      <circle cx="138" cy="55" r="3" />
      <circle cx="120" cy="42" r="3" />

      {/* ground */}
      <path d="M14 195 Q 60 192 120 195 T 226 195" strokeWidth="1.4" opacity="0.6" />

      {/* gathered figures */}
      <circle cx="42" cy="150" r="2.7" />
      <path d="M38.2 164.4 L42 155.1 L45.8 164.4" />
      <path d="M42 156.8 L35.2 150.8" />
      <path d="M42 156.8 L48.8 150.8" />
      <path d="M42 164.4 L36.9 173.8" />
      <path d="M42 164.4 L47.1 173.8" />

      <circle cx="66" cy="158" r="3.2" />
      <path d="M61.5 175 L66 164 L70.5 175" />
      <path d="M66 166 L58 169" />
      <path d="M66 166 L74 169" />
      <path d="M66 175 L60 186" />
      <path d="M66 175 L72 186" />

      <circle cx="90" cy="148" r="2.9" />
      <path d="M86 163.3 L90 153.4 L94 163.3" />
      <path d="M90 155.2 L82.8 148.9" />
      <path d="M90 155.2 L97.2 148.9" />
      <path d="M90 163.3 L84.6 173.2" />
      <path d="M90 163.3 L95.4 173.2" />

      <circle cx="150" cy="149" r="2.9" />
      <path d="M145.9 164.3 L150 154.4 L154.1 164.3" />
      <path d="M150 156.2 L142.8 158.9" />
      <path d="M150 156.2 L157.2 158.9" />
      <path d="M150 164.3 L144.6 174.2" />
      <path d="M150 164.3 L155.4 174.2" />

      <circle cx="174" cy="159" r="3.2" />
      <path d="M169.5 176 L174 165 L178.5 176" />
      <path d="M174 167 L166 160" />
      <path d="M174 167 L182 160" />
      <path d="M174 176 L168 187" />
      <path d="M174 176 L180 187" />

      <circle cx="198" cy="151" r="2.7" />
      <path d="M194.2 165.4 L198 156.1 L201.8 165.4" />
      <path d="M198 157.8 L191.2 160.3" />
      <path d="M198 157.8 L204.8 160.3" />
      <path d="M198 165.4 L192.9 174.8" />
      <path d="M198 165.4 L203.1 174.8" />

      <circle cx="120" cy="162" r="3.4" />
      <path d="M115.3 179.8 L120 168.3 L124.7 179.8" />
      <path d="M120 170.4 L111.6 163.1" />
      <path d="M120 170.4 L128.4 163.1" />
      <path d="M120 179.8 L113.7 191.4" />
      <path d="M120 179.8 L126.3 191.4" />
    </svg>
  );
}
