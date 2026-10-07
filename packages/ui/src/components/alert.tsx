import { forwardRef } from "react";
import { cn } from "../lib/utils";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "info" | "success" | "warning" | "destructive";
}

const variantStyles: Record<NonNullable<AlertProps["variant"]>, string> = {
  default: "border-2 border-border bg-card text-card-foreground",
  info: "border-2 border-info bg-card text-foreground",
  success: "border-2 border-success bg-card text-foreground",
  warning: "border-2 border-warning bg-card text-foreground",
  destructive: "border-2 border-destructive bg-card text-foreground",
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
