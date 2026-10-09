import { forwardRef } from "react";
import { cn } from "../lib/utils";

export type SkeletonVariant =
  | "default"
  | "text"
  | "heading"
  | "circular"
  | "avatar"
  | "button"
  | "card"
  | "input";

export type SkeletonPattern = "bayer" | "checker" | "fine" | "dense";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: SkeletonVariant;
  pattern?: SkeletonPattern;
  animate?: boolean;
}

const variantStyles: Record<SkeletonVariant, string> = {
  default: "h-6 w-full",
  text: "h-4 w-full",
  heading: "h-7 w-3/4",
  circular: "rounded-full shrink-0 h-10 w-10",
  avatar: "h-10 w-10 shrink-0 border border-border/40",
  button: "h-8 w-24 border border-border/40",
  card: "h-32 w-full border border-border/40",
  input: "h-8 w-full border border-border/40",
};

const patternStyles: Record<SkeletonPattern, string> = {
  bayer: "bg-dither-medium",
  checker: "dither-check",
  fine: "bg-dither-fine",
  dense: "bg-dither-coarse",
};

const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  (
    {
      className,
      variant = "default",
      pattern = "bayer",
      animate = true,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        role="status"
        aria-label="Loading..."
        className={cn(
          "bg-muted rounded-none",
          patternStyles[pattern],
          animate ? "retro-skeleton" : "border border-border/50",
          variantStyles[variant],
          className,
        )}
        {...props}
      />
    );
  },
);

Skeleton.displayName = "Skeleton";

export { Skeleton };
