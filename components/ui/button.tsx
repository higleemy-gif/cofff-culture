import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

// Restyled to the Academy palette. No default shadcn slate colours, radius
// capped at 4px (rounded-[4px]), no shadow beyond the permitted subtle one.
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[4px] text-[15px] font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-[18px] [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Primary — espresso background, white text.
        primary:
          "bg-espresso text-white hover:bg-espresso/90 active:bg-espresso",
        // Ghost — transparent, espresso text, 1px espresso border.
        ghost:
          "border border-espresso bg-transparent text-espresso hover:bg-espresso hover:text-white",
        // Caramel — used for the enquiry form submit.
        caramel:
          "bg-caramel text-white hover:bg-caramel/90 active:bg-caramel",
      },
      size: {
        default: "px-5 py-2.5",
        lg: "px-6 py-3",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
