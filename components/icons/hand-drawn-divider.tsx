import type { SVGProps } from "react";

// A gently irregular horizontal line — stands in for the crisp
// border-t rule between sections, giving the page a hand-ruled,
// less machine-made edge.
export function HandDrawnDivider(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 800 10"
      preserveAspectRatio="none"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      {...props}
    >
      <path d="M0 5.5 Q 60 2 130 6 T 260 5 T 390 7 T 520 4 T 650 6 T 800 5" />
    </svg>
  );
}
