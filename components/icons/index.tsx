import type { SVGProps } from "react";

// Custom line-icon set — 24x24 viewBox, stroke-based, single weight.
// Every icon takes the same props as a plain <svg>, so size/color are
// controlled via className (e.g. "h-5 w-5 text-ink-muted").
type IconProps = SVGProps<SVGSVGElement>;

function Icon({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {children}
    </svg>
  );
}

export function TargetIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="0.75" fill="currentColor" />
    </Icon>
  );
}

export function CpuIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="6" y="6" width="12" height="12" rx="1.5" />
      <rect x="9.5" y="9.5" width="5" height="5" rx="0.5" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
    </Icon>
  );
}

export function SparkleIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 3.5c.6 3.2 1.7 4.3 4.9 4.9-3.2.6-4.3 1.7-4.9 4.9-.6-3.2-1.7-4.3-4.9-4.9 3.2-.6 4.3-1.7 4.9-4.9Z" />
      <path d="M18.5 14.5c.35 1.7.9 2.25 2.5 2.5-1.6.25-2.15.8-2.5 2.5-.35-1.7-.9-2.25-2.5-2.5 1.6-.25 2.15-.8 2.5-2.5Z" />
    </Icon>
  );
}

export function BuildingIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 21h16" />
      <path d="M5 21v-8M9.5 21v-8M14.5 21v-8M19 21v-8" />
      <path d="M3 10 12 4l9 6Z" />
    </Icon>
  );
}

export function BarChartIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 20V10M12 20V4M20 20v-6" />
      <path d="M2.5 20h19" />
    </Icon>
  );
}

export function LightbulbIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M9 18h6" />
      <path d="M10 21h4" />
      <path d="M12 3a6.5 6.5 0 0 0-3.8 11.8c.6.45 1.05 1.1 1.2 1.7h5.2c.15-.6.6-1.25 1.2-1.7A6.5 6.5 0 0 0 12 3Z" />
    </Icon>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.4 2.3 3.6 5.2 3.6 8.5s-1.2 6.2-3.6 8.5c-2.4-2.3-3.6-5.2-3.6-8.5s1.2-6.2 3.6-8.5Z" />
    </Icon>
  );
}

export function LeafIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M19 5c.6 7-3 13-13 14C5 11.5 10 6.5 19 5Z" />
      <path d="M6 19c2-3 4.5-5.5 8-8" />
    </Icon>
  );
}

export function ShieldAlertIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 3.5 5 6v6c0 4.4 3 7.5 7 8.5 4-1 7-4.1 7-8.5V6Z" />
      <path d="M12 8.5v4.2" />
      <circle cx="12" cy="15.3" r="0.6" fill="currentColor" />
    </Icon>
  );
}

export function HandshakeIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M2.5 12 7 8.5l3 2.2 3-2.5 5.5 4" />
      <path d="M9.5 14 12 16l1.7-1.4" />
      <path d="M13.5 12.5 16 15l2-1.7" />
      <path d="M2.5 12v3.5l3 2M21.5 13.5V17l-3 2" />
    </Icon>
  );
}

export function CompassIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m14.8 9.2-1.6 4.4-4.4 1.6 1.6-4.4 4.4-1.6Z" />
    </Icon>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="9" cy="8.5" r="3" />
      <path d="M3.5 19c.6-3.2 2.7-5 5.5-5s4.9 1.8 5.5 5" />
      <circle cx="17" cy="9.5" r="2.3" />
      <path d="M15.8 14.2c2.2.2 3.8 1.9 4.2 4.3" />
    </Icon>
  );
}

export function BookOpenIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 6.5c-1.6-1.3-3.6-2-6.5-2v12.5c2.9 0 4.9.7 6.5 2 1.6-1.3 3.6-2 6.5-2V4.5c-2.9 0-4.9.7-6.5 2Z" />
      <path d="M12 6.5v12.5" />
    </Icon>
  );
}

export function GraduationCapIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M2 9.5 12 5l10 4.5-10 4.5-10-4.5Z" />
      <path d="M6.5 11.7v4.3c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5v-4.3" />
      <path d="M20.5 9.5v5.5" />
    </Icon>
  );
}

export function PuzzleIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M9 4.5h4v2a1.5 1.5 0 0 0 3 0v-2h3v4h-1.5a1.5 1.5 0 0 0 0 3H19v4h-3.5" />
      <path d="M9 4.5H5v4h1.5a1.5 1.5 0 0 1 0 3H5v4h4" />
      <path d="M9 11.5v8h4.5a1.5 1.5 0 0 1 0 3H9" />
    </Icon>
  );
}

export function PackageIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 3 20 7v10l-8 4-8-4V7Z" />
      <path d="M4 7 12 11l8-4" />
      <path d="M12 11v10" />
    </Icon>
  );
}

export function FileTextIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M7 3.5h7l3 3v14H7Z" />
      <path d="M14 3.5v3h3" />
      <path d="M9.5 13h5M9.5 16h5" />
    </Icon>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </Icon>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 21.5c4-4.2 7-7.9 7-11.5a7 7 0 1 0-14 0c0 3.6 3 7.3 7 11.5Z" />
      <circle cx="12" cy="10" r="2.3" />
    </Icon>
  );
}

export function PlusIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 5v14M5 12h14" />
    </Icon>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 6.5h16M4 12h16M4 17.5h16" />
    </Icon>
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M7 17 17 7" />
      <path d="M8.5 7H17v8.5" />
    </Icon>
  );
}

export { DevSolveMark } from "@/components/icons/mark";
