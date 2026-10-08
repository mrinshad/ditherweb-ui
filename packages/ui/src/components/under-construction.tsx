import * as React from "react";
import { cn } from "../lib/utils";

// ============================================================================
// Ditherweb — UnderConstruction Primitive
// Classic 1990s site/page maintenance and development indicator
// ============================================================================

export interface UnderConstructionProps extends React.ComponentPropsWithoutRef<"aside"> {
  variant?: "stripes" | "bevel" | "simple" | "compact";
  title?: string;
  message?: string;
  estimatedDate?: string;
}

export const UnderConstruction = React.forwardRef<HTMLElement, UnderConstructionProps>(
  (
    {
      className,
      variant = "stripes",
      title,
      message,
      estimatedDate,
      children,
      ...props
    },
    ref
  ) => {
    const isCompound = Boolean(children);

    return (
      <aside
        ref={ref}
        aria-label={title || "Under Construction Notice"}
        className={cn(
          "font-mono select-none rounded-none text-foreground overflow-hidden max-w-full",
          variant === "stripes" && "border-2 border-border bg-surface shadow-hard",
          variant === "bevel" && "bevel-raised bg-surface p-4 shadow-hard",
          variant === "simple" && "border-2 border-border bg-background p-4",
          variant === "compact" && "border border-border bg-surface p-3 text-xs",
          className
        )}
        {...props}
      >
        {variant === "stripes" && (
          <div
            className="h-3 w-full retro-hazard-stripes border-b border-border"
            aria-hidden="true"
          />
        )}

        <div className={cn(variant === "stripes" ? "p-4 space-y-3" : "space-y-3")}>
          {isCompound ? (
            children
          ) : (
            <div className="flex flex-col items-center text-center space-y-2">
              <UnderConstructionIcon />
              <UnderConstructionTitle>{title || "PAGE UNDER CONSTRUCTION"}</UnderConstructionTitle>
              <UnderConstructionMessage>
                {message || "Pardon our virtual dust! This sector is currently being constructed."}
              </UnderConstructionMessage>
              {estimatedDate && (
                <UnderConstructionEstimatedDate date={estimatedDate} />
              )}
            </div>
          )}
        </div>

        {variant === "stripes" && (
          <div
            className="h-3 w-full retro-hazard-stripes border-t border-border"
            aria-hidden="true"
          />
        )}
      </aside>
    );
  }
);
UnderConstruction.displayName = "UnderConstruction";

export interface UnderConstructionIconProps extends React.ComponentPropsWithoutRef<"div"> {
  size?: "sm" | "md" | "lg";
}

export const UnderConstructionIcon: React.FC<UnderConstructionIconProps> = ({
  className,
  size = "md",
  ...props
}) => {
  const sizeMap = {
    sm: "w-6 h-6 text-sm",
    md: "w-8 h-8 text-lg",
    lg: "w-12 h-12 text-2xl",
  };

  return (
    <div
      aria-hidden="true"
      className={cn(
        "inline-flex items-center justify-center bevel-raised bg-amber-400 text-black font-black select-none",
        sizeMap[size],
        className
      )}
      {...props}
    >
      🚧
    </div>
  );
};
UnderConstructionIcon.displayName = "UnderConstructionIcon";

export interface UnderConstructionTitleProps extends React.ComponentPropsWithoutRef<"h3"> {
  as?: "h2" | "h3" | "h4" | "div";
}

export const UnderConstructionTitle = React.forwardRef<HTMLHeadingElement, UnderConstructionTitleProps>(
  ({ className, as: Component = "h3", ...props }, ref) => (
    <Component
      ref={ref as never}
      className={cn("font-bold text-sm uppercase tracking-wider text-foreground", className)}
      {...props}
    />
  )
);
UnderConstructionTitle.displayName = "UnderConstructionTitle";

export type UnderConstructionMessageProps = React.ComponentPropsWithoutRef<"p">;

export const UnderConstructionMessage = React.forwardRef<HTMLParagraphElement, UnderConstructionMessageProps>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-xs text-muted-foreground leading-relaxed max-w-md", className)}
      {...props}
    />
  )
);
UnderConstructionMessage.displayName = "UnderConstructionMessage";

export interface UnderConstructionEstimatedDateProps extends React.ComponentPropsWithoutRef<"div"> {
  date: string;
}

export const UnderConstructionEstimatedDate: React.FC<UnderConstructionEstimatedDateProps> = ({
  className,
  date,
  ...props
}) => (
  <div
    className={cn(
      "inline-flex items-center gap-1.5 bevel-inset bg-background px-2.5 py-1 text-[11px] text-muted-foreground",
      className
    )}
    {...props}
  >
    <span className="font-bold text-foreground">Target Launch:</span>
    <time>{date}</time>
  </div>
);
UnderConstructionEstimatedDate.displayName = "UnderConstructionEstimatedDate";

export type UnderConstructionActionProps = React.ComponentPropsWithoutRef<"div">;

export const UnderConstructionAction: React.FC<UnderConstructionActionProps> = ({
  className,
  ...props
}) => (
  <div
    className={cn("pt-2 flex justify-center items-center gap-3", className)}
    {...props}
  />
);
UnderConstructionAction.displayName = "UnderConstructionAction";
