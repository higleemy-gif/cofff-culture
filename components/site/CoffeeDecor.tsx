"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { Coffee, Bean } from "lucide-react";

import { cn } from "@/lib/utils";

// Resolved inside this client component so server components only need to pass
// a plain string (React cannot pass function components across the RSC
// boundary).
const ICONS = {
  coffee: Coffee,
  bean: Bean,
} as const;

type CoffeeDecorProps = {
  variant: keyof typeof ICONS;
  /** Tailwind classes controlling position, size and colour/opacity. */
  className?: string;
  /** Parallax travel in pixels across the element's scroll range. */
  drift?: number;
  /** Base rotation in degrees (the centre of the scroll-linked tilt). */
  rotate?: number;
  /** Degrees of rotation swept across the scroll range (the "animation"). */
  spin?: number;
};

/**
 * A faint, decorative coffee motif that drifts gently as it scrolls through
 * the viewport. Purely presentational: aria-hidden and pointer-events-none so
 * it never interferes with content or assistive tech. Colour and opacity are
 * supplied by the caller via className (always within the palette). Honours
 * prefers-reduced-motion by holding still.
 */
export function CoffeeDecor({
  variant,
  className,
  drift = 36,
  rotate = 0,
  spin = 20,
}: CoffeeDecorProps) {
  const Icon = ICONS[variant];
  const ref = useRef<HTMLSpanElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Vertical parallax plus a scroll-linked tilt so the mug turns as it passes
  // through the viewport. Both are eased with a spring for a smooth feel.
  const yRaw = useTransform(scrollYProgress, [0, 1], [drift, -drift]);
  const rotateRaw = useTransform(
    scrollYProgress,
    [0, 1],
    [rotate - spin, rotate + spin],
  );
  const y = useSpring(yRaw, { stiffness: 60, damping: 20, mass: 0.4 });
  const rotateValue = useSpring(rotateRaw, {
    stiffness: 60,
    damping: 20,
    mass: 0.4,
  });

  return (
    <span
      ref={ref}
      aria-hidden="true"
      className={cn("pointer-events-none absolute block", className)}
    >
      <motion.span
        className="block h-full w-full origin-center"
        style={
          prefersReducedMotion ? { rotate } : { y, rotate: rotateValue }
        }
      >
        <Icon className="h-full w-full" strokeWidth={1} />
      </motion.span>
    </span>
  );
}
