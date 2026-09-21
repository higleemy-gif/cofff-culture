import type { ReactNode } from "react";
import { Bean } from "lucide-react";

import { cn } from "@/lib/utils";

type EyebrowProps = {
  children: ReactNode;
  /** Optional overrides, e.g. a lighter colour on the dark band. */
  className?: string;
};

/**
 * Small uppercase section label with a coffee-bean marker. Used across every
 * section for a consistent, understated coffee motif.
 */
export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <p
      className={cn(
        "flex items-center gap-2 text-[12px] font-medium uppercase tracking-eyebrow text-caramel",
        className,
      )}
    >
      <Bean className="size-3.5 shrink-0" strokeWidth={2} aria-hidden="true" />
      <span>{children}</span>
    </p>
  );
}
