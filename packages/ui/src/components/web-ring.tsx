import * as React from "react";
import { cn } from "../lib/utils";

// ============================================================================
// Ditherweb — WebRing Primitive
// Early-web collection navigation linking related personal websites
// ============================================================================

export interface WebRingProps extends React.ComponentPropsWithoutRef<"nav"> {
  variant?: "default" | "compact" | "vintage" | "borderless";
  ringName?: string;
  currentSite?: string;
  prevUrl?: string;
  nextUrl?: string;
  randomUrl?: string;
  hubUrl?: string;
}

export const WebRing = React.forwardRef<HTMLElement, WebRingProps>(
  (
    {
      className,
      variant = "default",
      ringName,
      currentSite,
      prevUrl,
      nextUrl,
      randomUrl,
      hubUrl,
      children,
      ...props
    },
    ref
  ) => {
    const variantStyles = {
      default: "bevel-raised bg-surface p-3 text-foreground",
      compact: "bevel-flat bg-surface p-2 text-foreground text-xs",
      vintage: "border-2 border-dashed border-border bg-background p-3 text-foreground",
      borderless: "bg-transparent p-2 text-foreground",
    };

    const hasQuickProps = Boolean(ringName || prevUrl || nextUrl || hubUrl || randomUrl);

    return (
      <nav
        ref={ref}
        aria-label={ringName ? `${ringName} Navigation` : "WebRing Navigation"}
        className={cn(
          "font-mono select-none max-w-full inline-block",
          variantStyles[variant],
          className
        )}
        {...props}
      >
        {children ? (
          children
        ) : hasQuickProps ? (
          <div className="flex flex-col items-center gap-2 text-center">
            {ringName && <WebRingTitle>{ringName}</WebRingTitle>}
            {currentSite && <WebRingSite name={currentSite} />}
            <WebRingNavigation>
              {prevUrl && <WebRingLink direction="prev" href={prevUrl}>[« Previous]</WebRingLink>}
              {randomUrl && <WebRingLink direction="random" href={randomUrl}>[? Random]</WebRingLink>}
              {hubUrl && <WebRingLink direction="hub" href={hubUrl}>[Ring Hub]</WebRingLink>}
              {nextUrl && <WebRingLink direction="next" href={nextUrl}>[Next »]</WebRingLink>}
            </WebRingNavigation>
          </div>
        ) : null}
      </nav>
    );
  }
);
WebRing.displayName = "WebRing";

export type WebRingHeaderProps = React.ComponentPropsWithoutRef<"div">;

export const WebRingHeader = React.forwardRef<HTMLDivElement, WebRingHeaderProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center justify-between gap-2 border-b border-border/60 pb-1.5 mb-2 text-xs", className)}
      {...props}
    />
  )
);
WebRingHeader.displayName = "WebRingHeader";

export interface WebRingTitleProps extends React.ComponentPropsWithoutRef<"div"> {
  as?: "h3" | "h4" | "h5" | "div";
}

export const WebRingTitle = React.forwardRef<HTMLDivElement, WebRingTitleProps>(
  ({ className, as: Component = "h4", ...props }, ref) => (
    <Component
      ref={ref as never}
      className={cn("font-bold text-xs uppercase tracking-wide text-foreground", className)}
      {...props}
    />
  )
);
WebRingTitle.displayName = "WebRingTitle";

export interface WebRingSiteProps extends React.ComponentPropsWithoutRef<"div"> {
  name?: string;
  memberIndex?: number;
  totalMembers?: number;
}

export const WebRingSite = React.forwardRef<HTMLDivElement, WebRingSiteProps>(
  ({ className, name, memberIndex, totalMembers, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("text-[11px] text-muted-foreground font-medium", className)}
      {...props}
    >
      {children || (
        <span>
          Current Site: <strong className="text-foreground">{name}</strong>
          {memberIndex !== undefined && totalMembers !== undefined && (
            <span className="ml-1 text-[10px]">({memberIndex}/{totalMembers})</span>
          )}
        </span>
      )}
    </div>
  )
);
WebRingSite.displayName = "WebRingSite";

export type WebRingNavigationProps = React.ComponentPropsWithoutRef<"div">;

export const WebRingNavigation = React.forwardRef<HTMLDivElement, WebRingNavigationProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-wrap items-center justify-center gap-2 pt-1 font-mono text-xs", className)}
      {...props}
    />
  )
);
WebRingNavigation.displayName = "WebRingNavigation";

export interface WebRingLinkProps extends React.ComponentPropsWithoutRef<"a"> {
  direction?: "prev" | "next" | "random" | "hub" | "list";
}

export const WebRingLink = React.forwardRef<HTMLAnchorElement, WebRingLinkProps>(
  ({ className, direction, children, ...props }, ref) => {
    const ariaLabels: Record<NonNullable<WebRingLinkProps["direction"]>, string> = {
      prev: "Previous site in ring",
      next: "Next site in ring",
      random: "Random site in ring",
      hub: "WebRing hub homepage",
      list: "List all sites in ring",
    };

    return (
      <a
        ref={ref}
        aria-label={direction ? ariaLabels[direction] : undefined}
        className={cn(
          "text-primary hover:underline hover:text-accent font-bold px-1 py-0.5 transition-colors focus-visible:outline-2 focus-visible:outline-primary",
          className
        )}
        {...props}
      >
        {children}
      </a>
    );
  }
);
WebRingLink.displayName = "WebRingLink";
