import { forwardRef } from "react";
import { cn } from "../lib/utils";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  animate?: boolean;
}

const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, animate = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="status"
        aria-label="Loading..."
        className={cn(
          "bg-muted bg-dither-medium rounded-none",
          animate ? "retro-skeleton" : "border border-border/50",
          className,
        )}
        {...props}
      />
    );
  },
);

Skeleton.displayName = "Skeleton";

export { Skeleton };
