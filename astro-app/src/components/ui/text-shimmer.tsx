import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextShimmerProps {
  children: string;
  className?: string;
  duration?: number;
}

export function TextShimmer({
  children,
  className,
  duration = 3,
}: TextShimmerProps) {
  return (
    <motion.span
      className={cn(
        "inline-block bg-linear-to-r from-primary via-primary/60 to-primary bg-size-[200%_100%] bg-clip-text text-transparent",
        className
      )}
      style={{ willChange: "background-position" }}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {children}
    </motion.span>
  );
}
