import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedGradientProps {
  className?: string;
  children?: React.ReactNode;
}

export function AnimatedGradient({
  className,
  children,
}: AnimatedGradientProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{ willChange: "background" }}
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, rgba(120,119,198,0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 0%, rgba(120,119,198,0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 100%, rgba(120,119,198,0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 100%, rgba(120,119,198,0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 0%, rgba(120,119,198,0.3) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      {children}
    </div>
  );
}
