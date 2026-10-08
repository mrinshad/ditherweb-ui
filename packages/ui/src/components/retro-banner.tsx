import * as React from "react";
import { cn } from "../lib/utils";

// ============================================================================
// Ditherweb — RetroBanner Primitive
// Classic early-web horizontal site banner / ad banner format
// ============================================================================

export interface RetroBannerProps extends React.ComponentPropsWithoutRef<"aside"> {
  format?: "standard" | "compact" | "full";
  variant?: "dither" | "bevel" | "outline" | "solid";
  href?: string;
  external?: boolean;
}

export const RetroBanner = React.forwardRef<HTMLElement, RetroBannerProps>(
  (
    {
      className,
      format = "standard",
      variant = "dither",
      href,
      external = false,
      children,
      ...props
    },
    ref
  ) => {
    const formatStyles = {
      standard: "w-full max-w-[468px] min-h-[60px] p-2 sm:p-2.5",
      compact: "w-full max-w-[320px] min-h-[50px] p-2",
      full: "w-full min-h-[70px] p-3 sm:p-4",
    };

    const variantStyles = {
      dither: "border-2 border-border bg-surface dither-bg-coarse text-foreground shadow-hard-sm",
      bevel: "bevel-raised bg-surface text-foreground shadow-hard-sm",
      outline: "border-2 border-border bg-background text-foreground",
      solid: "border-2 border-primary bg-primary text-primary-foreground",
    };

    const content = (
      <aside
        ref={ref}
        aria-label="Site Banner"
        className={cn(
          "font-mono select-none flex flex-wrap items-center justify-between gap-2 overflow-hidden",
          formatStyles[format],
          variantStyles[variant],
          href && "hover:border-primary cursor-pointer transition-colors",
          className
        )}
        {...props}
      >
        {children}
      </aside>
    );

    if (href) {
      return (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="inline-block no-underline focus-visible:outline-2 focus-visible:outline-primary"
        >
          {content}
        </a>
      );
    }

    return content;
  }
);
RetroBanner.displayName = "RetroBanner";

export interface RetroBannerTitleProps extends React.ComponentPropsWithoutRef<"h3"> {
  as?: "h2" | "h3" | "h4" | "div";
}

export const RetroBannerTitle = React.forwardRef<HTMLHeadingElement, RetroBannerTitleProps>(
  ({ className, as: Component = "h3", ...props }, ref) => (
    <Component
      ref={ref as never}
      className={cn("font-bold text-xs sm:text-sm uppercase tracking-wide text-foreground truncate", className)}
      {...props}
    />
  )
);
RetroBannerTitle.displayName = "RetroBannerTitle";

export type RetroBannerSubtitleProps = React.ComponentPropsWithoutRef<"p">;

export const RetroBannerSubtitle = React.forwardRef<HTMLParagraphElement, RetroBannerSubtitleProps>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-[10px] sm:text-[11px] text-muted-foreground truncate", className)}
      {...props}
    />
  )
);
RetroBannerSubtitle.displayName = "RetroBannerSubtitle";

export type RetroBannerActionProps = React.ComponentPropsWithoutRef<"div">;

export const RetroBannerAction: React.FC<RetroBannerActionProps> = ({
  className,
  ...props
}) => (
  <div
    className={cn("ml-auto shrink-0 flex items-center gap-1.5", className)}
    {...props}
  />
);
RetroBannerAction.displayName = "RetroBannerAction";
