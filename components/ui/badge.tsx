import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "destructive"
    | "info"
    | "outline";
}

const variantStyles: Record<NonNullable<BadgeProps["variant"]>, string> = {
  default: "border border-border bg-surface text-surface-foreground",
  primary: "bg-primary text-primary-foreground border border-primary",
  secondary: "bg-secondary text-secondary-foreground border border-border",
  success: "bg-success text-success-foreground border border-success",
  warning: "bg-warning text-warning-foreground border border-warning",
  destructive: "bg-destructive text-destructive-foreground border border-destructive",
  info: "bg-info text-info-foreground border border-info",
  outline: "border-2 border-border-strong text-foreground bg-transparent",
};

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center font-mono text-xs font-semibold px-2 py-0.5 rounded-none uppercase tracking-wider select-none",
          variantStyles[variant],
          className,
        )}
        {...props}
      />
    );
  },
);

Badge.displayName = "Badge";

export { Badge };
