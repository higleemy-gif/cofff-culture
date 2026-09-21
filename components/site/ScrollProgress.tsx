"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * A slim reading-progress bar fixed to the very top of the viewport.
 * Caramel on the palette, 2px tall, no shadow. Sits above the sticky header.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-caramel"
    />
  );
}
