"use client";

import * as React from "react";
import { cn } from "../lib/utils";

// ============================================================================
// Ditherweb — Pagination Primitive
// Accessible page navigation controls with retro stepper aesthetics
// ============================================================================

export type PaginationProps = React.ComponentPropsWithoutRef<"nav">;

export const Pagination = React.forwardRef<HTMLElement, PaginationProps>(
  ({ className, ...props }, ref) => (
    <nav
      ref={ref}
      role="navigation"
      aria-label="Pagination"
      className={cn("mx-auto flex w-full justify-center select-none", className)}
      {...props}
    />
  )
);
Pagination.displayName = "Pagination";

export type PaginationContentProps = React.ComponentPropsWithoutRef<"ul">;

export const PaginationContent = React.forwardRef<HTMLUListElement, PaginationContentProps>(
  ({ className, ...props }, ref) => (
    <ul
      ref={ref}
      className={cn("flex flex-wrap items-center gap-1 font-mono text-xs", className)}
      {...props}
    />
  )
);
PaginationContent.displayName = "PaginationContent";

export type PaginationItemProps = React.ComponentPropsWithoutRef<"li">;

export const PaginationItem = React.forwardRef<HTMLLIElement, PaginationItemProps>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={cn("inline-flex", className)} {...props} />
  )
);
PaginationItem.displayName = "PaginationItem";

export interface PaginationLinkProps extends React.ComponentPropsWithoutRef<"button"> {
  isActive?: boolean;
  asChild?: boolean;
}

export const PaginationLink = React.forwardRef<HTMLButtonElement, PaginationLinkProps>(
  ({ className, isActive = false, disabled = false, asChild = false, children, ...props }, ref) => {
    const baseClasses = cn(
      "inline-flex min-w-[28px] h-7 px-2 items-center justify-center font-mono text-xs uppercase font-medium transition-transform focus-visible:outline-2 focus-visible:outline-ring disabled:opacity-40 disabled:cursor-not-allowed",
      isActive
        ? "bevel-inset bg-muted font-bold text-primary shadow-none border border-border"
        : "bevel-raised bg-bevel-face text-foreground hover:bg-muted active:translate-y-px",
      className
    );

    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<
        React.HTMLAttributes<HTMLElement> & { ref?: React.Ref<HTMLElement> }
      >;
      return React.cloneElement(child, {
        ref: ref as React.Ref<HTMLElement>,
        className: cn(baseClasses, child.props.className),
        "aria-current": isActive ? "page" : undefined,
        "aria-disabled": disabled,
      });
    }

    return (
      <button
        ref={ref}
        type="button"
        aria-current={isActive ? "page" : undefined}
        aria-disabled={disabled}
        disabled={disabled}
        className={baseClasses}
        {...props}
      >
        {children}
      </button>
    );
  }
);
PaginationLink.displayName = "PaginationLink";

export type PaginationPreviousProps = PaginationLinkProps;

export const PaginationPrevious = React.forwardRef<HTMLButtonElement, PaginationPreviousProps>(
  ({ className, children, ...props }, ref) => (
    <PaginationLink
      ref={ref}
      aria-label="Go to previous page"
      className={cn("gap-1 px-2.5", className)}
      {...props}
    >
      {children ?? "< Prev"}
    </PaginationLink>
  )
);
PaginationPrevious.displayName = "PaginationPrevious";

export type PaginationNextProps = PaginationLinkProps;

export const PaginationNext = React.forwardRef<HTMLButtonElement, PaginationNextProps>(
  ({ className, children, ...props }, ref) => (
    <PaginationLink
      ref={ref}
      aria-label="Go to next page"
      className={cn("gap-1 px-2.5", className)}
      {...props}
    >
      {children ?? "Next >"}
    </PaginationLink>
  )
);
PaginationNext.displayName = "PaginationNext";

export type PaginationEllipsisProps = React.ComponentPropsWithoutRef<"span">;

export const PaginationEllipsis = React.forwardRef<HTMLSpanElement, PaginationEllipsisProps>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      aria-hidden="true"
      className={cn("flex h-7 w-7 items-center justify-center font-mono text-xs text-muted-foreground select-none", className)}
      {...props}
    >
      …
      <span className="sr-only">More pages</span>
    </span>
  )
);
PaginationEllipsis.displayName = "PaginationEllipsis";
