import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import * as React from "react";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
}: FadeInProps) {
  const directionOffset = {
    up: { y: 24 },
    down: { y: -24 },
    left: { x: 24 },
    right: { x: -24 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directionOffset[direction] }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.4,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      style={{ willChange: "transform, opacity" }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
