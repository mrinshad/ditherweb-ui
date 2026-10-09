import { forwardRef } from "react";
import { cn } from "../lib/utils";

export type BadgeVariant =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "destructive"
  | "info"
  | "outline"
  | "retro"
  | "dot"
  | "flat";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "border border-border bg-surface text-surface-foreground",
  primary: "bg-primary text-primary-foreground border border-primary",
  secondary: "bg-secondary text-secondary-foreground border border-border",
  success: "bg-success text-success-foreground border border-success",
  warning: "bg-warning text-warning-foreground border border-warning",
  destructive: "bg-destructive text-destructive-foreground border border-destructive",
  info: "bg-info text-info-foreground border border-info",
  outline: "border-2 border-border-strong text-foreground bg-transparent",
  retro: "bevel-inset bg-surface-sunken text-foreground border-none",
  dot: "border border-border bg-surface text-surface-foreground gap-1.5",
  flat: "border border-border/60 bg-muted/30 text-muted-foreground font-normal tracking-normal",
};

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center font-mono text-xs font-semibold px-2 py-0.5 rounded-none uppercase tracking-wider select-none",
          variantStyles[variant],
          className,
        )}
        {...props}
      >
        {variant === "dot" && (
          <span
            className="h-1.5 w-1.5 rounded-full bg-success animate-pulse shrink-0 inline-block"
            aria-hidden="true"
          />
        )}
        {children}
      </span>
    );
  },
);

Badge.displayName = "Badge";

export { Badge };
