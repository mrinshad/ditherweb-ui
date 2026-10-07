import { forwardRef } from "react";
import { cn } from "../lib/utils";

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "card" | "dashed";
}

const variantStyles: Record<NonNullable<EmptyStateProps["variant"]>, string> = {
  default: "bg-transparent",
  card: "border-2 border-border bg-card shadow-hard",
  dashed: "border-2 border-dashed border-border bg-muted/20",
};

const EmptyState = forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="region"
        className={cn(
          "flex flex-col items-center justify-center p-8 text-center font-mono rounded-none",
          variantStyles[variant],
          className,
        )}
        {...props}
      />
    );
  },
);
EmptyState.displayName = "EmptyState";

export type EmptyStateIconProps = React.HTMLAttributes<HTMLDivElement>;

const EmptyStateIcon = forwardRef<HTMLDivElement, EmptyStateIconProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("mb-3 flex items-center justify-center text-muted-foreground", className)}
        {...props}
      />
    );
  },
);
EmptyStateIcon.displayName = "EmptyStateIcon";

export type EmptyStateTitleProps = React.HTMLAttributes<HTMLHeadingElement>;

const EmptyStateTitle = forwardRef<HTMLHeadingElement, EmptyStateTitleProps>(
  ({ className, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        className={cn("text-base font-bold uppercase tracking-wide text-foreground", className)}
        {...props}
      />
    );
  },
);
EmptyStateTitle.displayName = "EmptyStateTitle";

export type EmptyStateDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;

const EmptyStateDescription = forwardRef<HTMLParagraphElement, EmptyStateDescriptionProps>(
  ({ className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn("mt-1 max-w-sm text-xs text-muted-foreground leading-relaxed", className)}
        {...props}
      />
    );
  },
);
EmptyStateDescription.displayName = "EmptyStateDescription";

export type EmptyStateActionProps = React.HTMLAttributes<HTMLDivElement>;

const EmptyStateAction = forwardRef<HTMLDivElement, EmptyStateActionProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("mt-4 flex flex-wrap items-center justify-center gap-2", className)}
        {...props}
      />
    );
  },
);
EmptyStateAction.displayName = "EmptyStateAction";

export {
  EmptyState,
  EmptyStateIcon,
  EmptyStateTitle,
  EmptyStateDescription,
  EmptyStateAction,
};
