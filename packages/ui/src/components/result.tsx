import { forwardRef } from "react";
import { cn } from "../lib/utils";

export type ResultVariant = "success" | "error" | "warning" | "info";

export interface ResultProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  variant?: ResultVariant;
  title?: React.ReactNode;
  description?: React.ReactNode;
  extra?: React.ReactNode;
}

const variantStyles: Record<ResultVariant, { border: string; badge: string; label: string }> = {
  success: {
    border: "border-2 border-success/40 bg-success/5",
    badge: "border border-success text-success bg-success/10",
    label: "[SUCCESS]",
  },
  error: {
    border: "border-2 border-destructive/40 bg-destructive/5",
    badge: "border border-destructive text-destructive bg-destructive/10",
    label: "[ERROR]",
  },
  warning: {
    border: "border-2 border-warning/40 bg-warning/5",
    badge: "border border-warning text-warning-foreground bg-warning/20",
    label: "[WARNING]",
  },
  info: {
    border: "border-2 border-info/40 bg-info/5",
    badge: "border border-info text-info bg-info/10",
    label: "[INFO]",
  },
};

const Result = forwardRef<HTMLDivElement, ResultProps>(
  (
    {
      className,
      variant = "info",
      title,
      description,
      extra,
      children,
      role,
      ...props
    },
    ref,
  ) => {
    const computedRole =
      role || (variant === "error" || variant === "warning" ? "alert" : "status");
    const config = variantStyles[variant];

    return (
      <div
        ref={ref}
        role={computedRole}
        className={cn(
          "rounded-none p-6 font-mono shadow-hard-sm",
          config.border,
          className,
        )}
        {...props}
      >
        <div className="flex flex-col items-center text-center space-y-3">
          <span
            className={cn(
              "px-2 py-0.5 text-xs font-bold uppercase tracking-widest",
              config.badge,
            )}
          >
            {config.label}
          </span>

          {title && <ResultTitle>{title}</ResultTitle>}
          {description && <ResultDescription>{description}</ResultDescription>}
          {children}
          {extra && <ResultAction>{extra}</ResultAction>}
        </div>
      </div>
    );
  },
);
Result.displayName = "Result";

export type ResultTitleProps = React.HTMLAttributes<HTMLHeadingElement>;

const ResultTitle = forwardRef<HTMLHeadingElement, ResultTitleProps>(
  ({ className, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        className={cn("text-lg font-bold tracking-tight text-foreground uppercase", className)}
        {...props}
      />
    );
  },
);
ResultTitle.displayName = "ResultTitle";

export type ResultDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;

const ResultDescription = forwardRef<HTMLParagraphElement, ResultDescriptionProps>(
  ({ className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn("text-xs text-muted-foreground max-w-md leading-relaxed", className)}
        {...props}
      />
    );
  },
);
ResultDescription.displayName = "ResultDescription";

export type ResultActionProps = React.HTMLAttributes<HTMLDivElement>;

const ResultAction = forwardRef<HTMLDivElement, ResultActionProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("pt-2 flex flex-wrap items-center justify-center gap-2", className)}
        {...props}
      />
    );
  },
);
ResultAction.displayName = "ResultAction";

export {
  Result,
  ResultTitle,
  ResultDescription,
  ResultAction,
};
