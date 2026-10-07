import { forwardRef } from "react";
import { cn } from "../lib/utils";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "info" | "success" | "warning" | "destructive";
}

const variantStyles: Record<NonNullable<AlertProps["variant"]>, string> = {
  default: "border-2 border-border border-l-4 border-l-primary bg-card text-card-foreground",
  info: "border-2 border-info/40 border-l-4 border-l-info bg-info/10 text-foreground",
  success: "border-2 border-success/40 border-l-4 border-l-success bg-success/10 text-foreground",
  warning: "border-2 border-warning/40 border-l-4 border-l-warning bg-warning/10 text-foreground",
  destructive: "border-2 border-destructive/40 border-l-4 border-l-destructive bg-destructive/10 text-foreground",
};

const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = "default", role, ...props }, ref) => {
    const computedRole =
      role || (variant === "destructive" || variant === "warning" ? "alert" : "status");

    return (
      <div
        ref={ref}
        role={computedRole}
        className={cn(
          "relative w-full rounded-none p-4 font-mono shadow-hard-sm",
          variantStyles[variant],
          className,
        )}
        {...props}
      />
    );
  },
);
Alert.displayName = "Alert";

export type AlertTitleProps = React.HTMLAttributes<HTMLHeadingElement>;

const AlertTitle = forwardRef<HTMLHeadingElement, AlertTitleProps>(
  ({ className, ...props }, ref) => {
    return (
      <h5
        ref={ref}
        className={cn("mb-1 font-semibold text-small leading-tight tracking-tight", className)}
        {...props}
      />
    );
  },
);
AlertTitle.displayName = "AlertTitle";

export type AlertDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;

const AlertDescription = forwardRef<HTMLParagraphElement, AlertDescriptionProps>(
  ({ className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn("text-small text-muted-foreground leading-relaxed", className)}
        {...props}
      />
    );
  },
);
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
