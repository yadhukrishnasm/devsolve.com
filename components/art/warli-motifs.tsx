import type { SVGProps } from "react";

// Warli-style mural motifs (Maharashtra tribal folk art) — simple
// line drawings used as the artwork for each section of the site.

// Rising sun with rays and birds — "Why Are We Here".
export function WarliSun(props: SVGProps<SVGSVGElement>) {
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
      <circle cx="120" cy="95" r="30" />
      <circle cx="120" cy="95" r="20" strokeWidth="1.2" opacity="0.5" />
      {/* rays */}
      <path d="M120 50 L120 34" />
      <path d="M120 140 L120 156" />
      <path d="M75 95 L59 95" />
      <path d="M165 95 L181 95" />
      <path d="M88 63 L77 52" />
      <path d="M152 63 L163 52" />
      <path d="M88 127 L77 138" />
      <path d="M152 127 L163 138" />
      <path d="M103 54 L97 39" strokeWidth="1.4" opacity="0.7" />
      <path d="M137 54 L143 39" strokeWidth="1.4" opacity="0.7" />
      <path d="M103 136 L97 151" strokeWidth="1.4" opacity="0.7" />
      <path d="M137 136 L143 151" strokeWidth="1.4" opacity="0.7" />
      {/* birds */}
      <path d="M40 44 Q46 38 52 44 Q58 38 64 44" strokeWidth="1.6" />
      <path d="M176 36 Q182 30 188 36 Q194 30 200 36" strokeWidth="1.6" />
      <path d="M196 66 Q201 61 206 66 Q211 61 216 66" strokeWidth="1.4" opacity="0.7" />
      {/* ground */}
      <path d="M20 180 Q 70 176 120 180 T 220 180" strokeWidth="1.4" opacity="0.6" />
      <path d="M50 180 L50 170 M60 180 L60 166 M70 180 L70 171" strokeWidth="1.4" opacity="0.6" />
      <path d="M170 180 L170 170 M180 180 L180 166 M190 180 L190 171" strokeWidth="1.4" opacity="0.6" />
    </svg>
  );
}

// Tree of growth with birds and a tending figure — "What Do We Do".
export function WarliTree(props: SVGProps<SVGSVGElement>) {
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
      {/* trunk and branches */}
      <path d="M130 190 L130 70" />
      <path d="M130 100 L100 68" />
      <path d="M130 100 L160 68" />
      <path d="M130 130 L92 104" />
      <path d="M130 130 L168 104" />
      <path d="M130 70 L130 38" />
      {/* leaf clusters */}
      <circle cx="100" cy="68" r="4" />
      <circle cx="160" cy="68" r="4" />
      <circle cx="92" cy="104" r="4" />
      <circle cx="168" cy="104" r="4" />
      <circle cx="130" cy="38" r="4" />
      <path d="M112 52 Q118 46 124 52" strokeWidth="1.6" opacity="0.7" />
      <path d="M138 52 Q144 46 150 52" strokeWidth="1.6" opacity="0.7" />
      {/* bird on branch */}
      <path d="M158 60 Q163 55 168 60 Q173 55 178 60" strokeWidth="1.6" />
      {/* tending figure */}
      <circle cx="62" cy="130" r="4" />
      <path d="M56 152 L62 137 L68 152" />
      <path d="M62 140 L50 146" />
      <path d="M62 140 L76 134" />
      <path d="M76 134 L88 122" strokeWidth="1.6" />
      <path d="M62 152 L54 168" />
      <path d="M62 152 L70 168" />
      {/* ground and sprouts */}
      <path d="M20 185 Q 70 181 120 185 T 220 185" strokeWidth="1.4" opacity="0.6" />
      <path d="M40 185 L40 175 M48 185 L48 171 M56 185 L56 176" strokeWidth="1.4" opacity="0.6" />
      <path d="M188 185 L188 175 M196 185 L196 171 M204 185 L204 176" strokeWidth="1.4" opacity="0.6" />
    </svg>
  );
}

// A village of huts — "How Do We Manage" (the institution as a village).
export function WarliVillage(props: SVGProps<SVGSVGElement>) {
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
      {/* large hut */}
      <path d="M85 120 L120 80 L155 120 Z" />
      <path d="M92 120 L92 160 L148 160 L148 120" />
      <path d="M114 160 L114 138 L126 138 L126 160" />
      <path d="M120 80 L120 66" />
      <circle cx="120" cy="62" r="3" />
      {/* left hut */}
      <path d="M28 138 L52 112 L76 138 Z" strokeWidth="1.8" />
      <path d="M33 138 L33 166 L71 166 L71 138" strokeWidth="1.8" />
      <path d="M47 166 L47 150 L57 150 L57 166" strokeWidth="1.6" />
      {/* right hut */}
      <path d="M164 138 L188 112 L212 138 Z" strokeWidth="1.8" />
      <path d="M169 138 L169 166 L207 166 L207 138" strokeWidth="1.8" />
      <path d="M183 166 L183 150 L193 150 L193 166" strokeWidth="1.6" />
      {/* sun and birds */}
      <circle cx="40" cy="42" r="12" strokeWidth="1.8" />
      <path d="M40 26 L40 20 M40 58 L40 64 M24 42 L18 42 M56 42 L62 42" strokeWidth="1.4" />
      <path d="M150 38 Q155 33 160 38 Q165 33 170 38" strokeWidth="1.6" />
      <path d="M180 52 Q185 47 190 52 Q195 47 200 52" strokeWidth="1.4" opacity="0.7" />
      {/* ground */}
      <path d="M14 186 Q 70 182 120 186 T 226 186" strokeWidth="1.4" opacity="0.6" />
    </svg>
  );
}

// Chain of dancing figures holding hands — "How Can We Work Together".
export function WarliDancers(props: SVGProps<SVGSVGElement>) {
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
      {/* five figures, hands linked */}
      {[40, 80, 120, 160, 200].map((x, i) => {
        const y = i % 2 === 0 ? 78 : 86;
        return (
          <g key={x}>
            <circle cx={x} cy={y} r="4.5" />
            <path d={`M${x - 6} ${y + 26} L${x} ${y + 8} L${x + 6} ${y + 26}`} />
            <path d={`M${x} ${y + 26} L${x - 8} ${y + 44}`} />
            <path d={`M${x} ${y + 26} L${x + 8} ${y + 44}`} />
          </g>
        );
      })}
      {/* linked arms — rising and falling between neighbours */}
      <path d="M40 88 L60 72 L80 96" />
      <path d="M80 96 L100 72 L120 88" />
      <path d="M120 88 L140 72 L160 96" />
      <path d="M160 96 L180 72 L200 88" />
      {/* outer arms raised */}
      <path d="M40 88 L26 70" />
      <path d="M200 88 L214 70" />
      {/* sun above */}
      <circle cx="120" cy="30" r="10" strokeWidth="1.8" />
      <path d="M120 16 L120 10 M120 44 L120 50 M106 30 L100 30 M134 30 L140 30" strokeWidth="1.4" />
      {/* ground */}
      <path d="M14 156 Q 70 152 120 156 T 226 156" strokeWidth="1.4" opacity="0.6" />
      {/* drummers' dots — rhythm marks */}
      <circle cx="50" cy="170" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="90" cy="174" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="130" cy="170" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="170" cy="174" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}
