import * as React from "react";
import { cn } from "../lib/utils";

// ============================================================================
// Ditherweb — WebDirectory Primitive
// Early web portal categorized link index (Yahoo! / DMOZ pattern)
// ============================================================================

export type WebDirectoryProps = React.ComponentPropsWithoutRef<"nav">;

export const WebDirectory = React.forwardRef<HTMLElement, WebDirectoryProps>(
  ({ className, children, ...props }, ref) => (
    <nav
      ref={ref}
      aria-label="Web Directory"
      className={cn("font-mono select-none space-y-6 w-full", className)}
      {...props}
    >
      {children}
    </nav>
  )
);
WebDirectory.displayName = "WebDirectory";

export type WebDirectoryHeaderProps = React.ComponentPropsWithoutRef<"header">;

export const WebDirectoryHeader = React.forwardRef<HTMLElement, WebDirectoryHeaderProps>(
  ({ className, ...props }, ref) => (
    <header
      ref={ref}
      className={cn("border-b-2 border-border pb-3 space-y-1", className)}
      {...props}
    />
  )
);
WebDirectoryHeader.displayName = "WebDirectoryHeader";

export interface WebDirectoryGridProps extends React.ComponentPropsWithoutRef<"div"> {
  cols?: 1 | 2 | 3;
}

export const WebDirectoryGrid = React.forwardRef<HTMLDivElement, WebDirectoryGridProps>(
  ({ className, cols = 3, ...props }, ref) => {
    const colStyles = {
      1: "grid-cols-1",
      2: "grid-cols-1 md:grid-cols-2",
      3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    };

    return (
      <div
        ref={ref}
        className={cn("grid gap-6 items-start", colStyles[cols], className)}
        {...props}
      />
    );
  }
);
WebDirectoryGrid.displayName = "WebDirectoryGrid";

export type WebDirectoryCategoryProps = React.ComponentPropsWithoutRef<"section">;

export const WebDirectoryCategory = React.forwardRef<HTMLElement, WebDirectoryCategoryProps>(
  ({ className, ...props }, ref) => (
    <section
      ref={ref}
      className={cn("space-y-2.5", className)}
      {...props}
    />
  )
);
WebDirectoryCategory.displayName = "WebDirectoryCategory";

export interface WebDirectoryTitleProps extends React.ComponentPropsWithoutRef<"h3"> {
  count?: number;
  icon?: React.ReactNode;
}

export const WebDirectoryTitle = React.forwardRef<HTMLHeadingElement, WebDirectoryTitleProps>(
  ({ className, count, icon, children, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("text-xs font-bold uppercase tracking-wide text-foreground flex items-center gap-1.5 border-b border-border/80 pb-1", className)}
      {...props}
    >
      {icon && <span aria-hidden="true">{icon}</span>}
      <span className="text-primary">{children}</span>
      {count !== undefined && (
        <span className="text-[10px] text-muted-foreground font-normal">({count})</span>
      )}
    </h3>
  )
);
WebDirectoryTitle.displayName = "WebDirectoryTitle";

export type WebDirectoryListProps = React.ComponentPropsWithoutRef<"ul">;

export const WebDirectoryList = React.forwardRef<HTMLUListElement, WebDirectoryListProps>(
  ({ className, ...props }, ref) => (
    <ul
      ref={ref}
      className={cn("space-y-2 list-none p-0 m-0 text-xs", className)}
      {...props}
    />
  )
);
WebDirectoryList.displayName = "WebDirectoryList";

export type WebDirectoryItemProps = React.ComponentPropsWithoutRef<"li">;

export const WebDirectoryItem = React.forwardRef<HTMLLIElement, WebDirectoryItemProps>(
  ({ className, ...props }, ref) => (
    <li
      ref={ref}
      className={cn("space-y-0.5", className)}
      {...props}
    />
  )
);
WebDirectoryItem.displayName = "WebDirectoryItem";

export interface WebDirectoryLinkProps extends React.ComponentPropsWithoutRef<"a"> {
  isNew?: boolean;
}

export const WebDirectoryLink = React.forwardRef<HTMLAnchorElement, WebDirectoryLinkProps>(
  ({ className, isNew = false, children, ...props }, ref) => (
    <div className="flex items-center gap-1.5">
      <span className="text-muted-foreground select-none" aria-hidden="true">├─</span>
      <a
        ref={ref}
        className={cn(
          "text-primary underline hover:text-accent font-semibold transition-colors focus-visible:outline-1 focus-visible:outline-primary",
          className
        )}
        {...props}
      >
        {children}
      </a>
      {isNew && (
        <span className="bg-amber-400 text-black px-1 text-[9px] font-black uppercase tracking-tighter">
          NEW!
        </span>
      )}
    </div>
  )
);
WebDirectoryLink.displayName = "WebDirectoryLink";

export type WebDirectoryDescriptionProps = React.ComponentPropsWithoutRef<"p">;

export const WebDirectoryDescription = React.forwardRef<HTMLParagraphElement, WebDirectoryDescriptionProps>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("pl-5 text-[11px] text-muted-foreground leading-relaxed", className)}
      {...props}
    />
  )
);
WebDirectoryDescription.displayName = "WebDirectoryDescription";

export type WebDirectorySubcategoriesProps = React.ComponentPropsWithoutRef<"div">;

export const WebDirectorySubcategories = React.forwardRef<HTMLDivElement, WebDirectorySubcategoriesProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("pl-5 pt-0.5 flex flex-wrap items-center gap-2 text-[10px] text-muted-foreground", className)}
      {...props}
    />
  )
);
WebDirectorySubcategories.displayName = "WebDirectorySubcategories";
