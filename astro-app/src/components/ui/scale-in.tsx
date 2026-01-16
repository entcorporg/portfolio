import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import * as React from "react";

interface ScaleInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function ScaleIn({ children, className, delay = 0 }: ScaleInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.3,
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
