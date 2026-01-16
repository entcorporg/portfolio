import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all " +
    "disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 " +
    "shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] " +
    "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const buttonShineVariants = cva(
  "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all [&_svg:not([class*='size-'])]:size-4 " +
    "shrink-0 [&_svg]:shrink-0 [&_svg]:pointer-events-none disabled:pointer-events-none disabled:opacity-50 overflow-hidden " +
    "outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 " +
    "active:scale-[0.98] cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        outline:
          "border bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

const shineGradients: Record<
  NonNullable<VariantProps<typeof buttonShineVariants>["variant"]>,
  string
> = {
  default:
    "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)",
  destructive:
    "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)",
  outline:
    "linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.1), transparent)",
  secondary:
    "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
  ghost: "linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.1), transparent)",
  link: "linear-gradient(90deg, transparent, transparent, transparent)",
};

function ButtonShine({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonShineVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";
  const shineGradient = shineGradients[variant ?? "default"];

  if (asChild) {
    return (
      <Comp
        data-slot="button"
        data-variant={variant}
        data-size={size}
        className={cn(buttonShineVariants({ variant, size, className }))}
        {...props}
      />
    );
  }

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonShineVariants({ variant, size, className }))}
      {...props}
    >
      <span
        className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg] transition-transform group-hover:translate-x-full"
        style={{
          background: shineGradient,
          transitionDuration: "0.6s",
        }}
      />
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </Comp>
  );
}

export { Button, ButtonShine, buttonVariants, buttonShineVariants };
