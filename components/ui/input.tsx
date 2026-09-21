import * as React from "react";

import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

// Base input is palette-neutral. On the dark EnquiryCTA band the caller passes
// classes for transparent background + white text via className.
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          "flex h-11 w-full rounded-[4px] border border-hairline bg-white px-3.5 py-2 text-[15px] text-body transition-colors placeholder:text-muted focus-visible:outline-none focus-visible:border-caramel disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
