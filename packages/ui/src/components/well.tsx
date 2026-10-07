import { forwardRef } from "react";
import { cn } from "../lib/utils";

export interface WellProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "sunken" | "code";
}

const variantStyles: Record<NonNullable<WellProps["variant"]>, string> = {
  default: "bg-surface-sunken text-foreground",
  sunken: "bg-background text-foreground shadow-inset",
  code: "bg-background text-foreground font-mono text-xs overflow-x-auto",
};

const Well = forwardRef<HTMLDivElement, WellProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bevel-inset p-3 rounded-none text-sm font-mono",
          variantStyles[variant],
          className,
        )}
        {...props}
      />
    );
  },
);

Well.displayName = "Well";

export { Well };
