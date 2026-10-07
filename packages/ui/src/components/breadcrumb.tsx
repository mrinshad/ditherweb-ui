"use client";

import * as React from "react";
import { cn } from "../lib/utils";

// ============================================================================
// Ditherweb — Breadcrumb Primitive
// Accessible hierarchical page location with retro path delimiters
// ============================================================================

export interface BreadcrumbProps extends React.ComponentPropsWithoutRef<"nav"> {
  separator?: React.ReactNode;
}

export const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ className, ...props }, ref) => (
    <nav
      ref={ref}
      aria-label="Breadcrumb"
      className={cn("w-full overflow-x-auto", className)}
      {...props}
    />
  )
);
Breadcrumb.displayName = "Breadcrumb";

export type BreadcrumbListProps = React.ComponentPropsWithoutRef<"ol">;

export const BreadcrumbList = React.forwardRef<HTMLOListElement, BreadcrumbListProps>(
  ({ className, ...props }, ref) => (
    <ol
      ref={ref}
      className={cn(
        "flex flex-wrap items-center gap-1.5 break-words font-mono text-xs text-muted-foreground",
        className
      )}
      {...props}
    />
  )
);
BreadcrumbList.displayName = "BreadcrumbList";

export type BreadcrumbItemProps = React.ComponentPropsWithoutRef<"li">;

export const BreadcrumbItem = React.forwardRef<HTMLLIElement, BreadcrumbItemProps>(
  ({ className, ...props }, ref) => (
    <li
      ref={ref}
      className={cn("inline-flex items-center gap-1.5", className)}
      {...props}
    />
  )
);
BreadcrumbItem.displayName = "BreadcrumbItem";

export interface BreadcrumbLinkProps extends React.ComponentPropsWithoutRef<"a"> {
  asChild?: boolean;
}

export const BreadcrumbLink = React.forwardRef<HTMLAnchorElement, BreadcrumbLinkProps>(
  ({ asChild = false, className, children, ...props }, ref) => {
    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<
        React.HTMLAttributes<HTMLElement> & { ref?: React.Ref<HTMLElement> }
      >;
      return React.cloneElement(child, {
        ref: ref as React.Ref<HTMLElement>,
        className: cn(
          "transition-colors hover:text-foreground hover:underline underline-offset-4 decoration-1 focus-visible:outline-2 focus-visible:outline-ring",
          child.props.className,
          className
        ),
        ...props,
      });
    }

    return (
      <a
        ref={ref}
        className={cn(
          "transition-colors hover:text-foreground hover:underline underline-offset-4 decoration-1 focus-visible:outline-2 focus-visible:outline-ring",
          className
        )}
        {...props}
      >
        {children}
      </a>
    );
  }
);
BreadcrumbLink.displayName = "BreadcrumbLink";

export type BreadcrumbPageProps = React.ComponentPropsWithoutRef<"span">;

export const BreadcrumbPage = React.forwardRef<HTMLSpanElement, BreadcrumbPageProps>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("font-bold text-foreground select-none", className)}
      {...props}
    />
  )
);
BreadcrumbPage.displayName = "BreadcrumbPage";

export type BreadcrumbSeparatorProps = React.ComponentPropsWithoutRef<"li">;

export const BreadcrumbSeparator = React.forwardRef<HTMLLIElement, BreadcrumbSeparatorProps>(
  ({ children, className, ...props }, ref) => (
    <li
      ref={ref}
      role="presentation"
      aria-hidden="true"
      className={cn("text-muted-foreground select-none opacity-60 font-mono", className)}
      {...props}
    >
      {children ?? "/"}
    </li>
  )
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

export type BreadcrumbEllipsisProps = React.ComponentPropsWithoutRef<"span">;

export const BreadcrumbEllipsis = React.forwardRef<HTMLSpanElement, BreadcrumbEllipsisProps>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      role="presentation"
      aria-hidden="true"
      className={cn("flex h-4 w-4 items-center justify-center font-mono font-bold select-none", className)}
      {...props}
    >
      …
      <span className="sr-only">More pages</span>
    </span>
  )
);
BreadcrumbEllipsis.displayName = "BreadcrumbEllipsis";
