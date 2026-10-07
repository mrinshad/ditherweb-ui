import { forwardRef } from "react";
import { cn } from "../lib/utils";

export interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "raised" | "inset" | "flat";
}

const variantStyles: Record<NonNullable<PanelProps["variant"]>, string> = {
  default: "border-2 border-border bg-card shadow-hard text-card-foreground",
  raised: "bevel-raised bg-bevel-face shadow-hard text-foreground",
  inset: "bevel-inset bg-background text-foreground",
  flat: "bevel-flat bg-bevel-face text-foreground",
};

const Panel = forwardRef<HTMLDivElement, PanelProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-none font-mono",
          variantStyles[variant],
          className,
        )}
        {...props}
      />
    );
  },
);
Panel.displayName = "Panel";

export type PanelHeaderProps = React.HTMLAttributes<HTMLDivElement>;

const PanelHeader = forwardRef<HTMLDivElement, PanelHeaderProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-col space-y-1.5 p-4 border-b border-border", className)}
        {...props}
      />
    );
  },
);
PanelHeader.displayName = "PanelHeader";

export type PanelTitleProps = React.HTMLAttributes<HTMLHeadingElement>;

const PanelTitle = forwardRef<HTMLHeadingElement, PanelTitleProps>(
  ({ className, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        className={cn("text-heading font-semibold leading-none tracking-tight", className)}
        {...props}
      />
    );
  },
);
PanelTitle.displayName = "PanelTitle";

export type PanelDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;

const PanelDescription = forwardRef<HTMLParagraphElement, PanelDescriptionProps>(
  ({ className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn("text-small text-muted-foreground", className)}
        {...props}
      />
    );
  },
);
PanelDescription.displayName = "PanelDescription";

export type PanelContentProps = React.HTMLAttributes<HTMLDivElement>;

const PanelContent = forwardRef<HTMLDivElement, PanelContentProps>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("p-4", className)} {...props} />;
  },
);
PanelContent.displayName = "PanelContent";

export type PanelFooterProps = React.HTMLAttributes<HTMLDivElement>;

const PanelFooter = forwardRef<HTMLDivElement, PanelFooterProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex items-center p-4 border-t border-border", className)}
        {...props}
      />
    );
  },
);
PanelFooter.displayName = "PanelFooter";

export {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelDescription,
  PanelContent,
  PanelFooter,
};
