import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

// Hairline-divided wrapper for a stack of IndexRow items.
export function IndexList({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("divide-y divide-rule border-t border-rule", className)}>
      {children}
    </div>
  );
}
