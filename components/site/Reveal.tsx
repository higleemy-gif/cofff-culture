"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Optional delay in seconds for lightly sequencing sibling reveals. */
  delay?: number;
  as?: "div" | "section" | "li" | "article";
};

/**
 * Restrained scroll reveal: fade + 8px upward translate, 400ms, triggered
 * once when the element enters the viewport. Honours prefers-reduced-motion.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  const MotionTag = motion[as];

  if (prefersReducedMotion) {
    const StaticTag = as;
    return <StaticTag className={className}>{children}</StaticTag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.4, ease: "easeOut", delay }}
    >
      {children}
    </MotionTag>
  );
}
