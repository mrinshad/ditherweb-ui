"use client";

import * as React from "react";
import { cn } from "../lib/utils";

// ============================================================================
// Ditherweb — DescriptionList Primitive
// Semantic key-value list with horizontal/stacked layouts & retro styling
// ============================================================================

export type DescriptionListLayout = "horizontal" | "stacked";

interface DescriptionListContextValue {
  layout: DescriptionListLayout;
  dense: boolean;
  divided: boolean;
}

const DescriptionListContext = React.createContext<DescriptionListContextValue>({
  layout: "horizontal",
  dense: false,
  divided: false,
});

export interface DescriptionListProps extends React.HTMLAttributes<HTMLDListElement> {
  /**
   * Layout orientation of term and details.
   * - "horizontal": Term on left, details on right (responsive collapses on mobile).
   * - "stacked": Term stacked directly above details.
   */
  layout?: DescriptionListLayout;
  /**
   * If true, adds dividers between description items.
   */
  divided?: boolean;
  /**
   * If true, reduces spacing for high-density information.
   */
  dense?: boolean;
  /**
   * If true, alternates subtle zebra backgrounds across items.
   */
  striped?: boolean;
}

export const DescriptionList = React.forwardRef<HTMLDListElement, DescriptionListProps>(
  (
    {
      className,
      layout = "horizontal",
      divided = true,
      dense = false,
      striped = false,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <DescriptionListContext.Provider value={{ layout, dense, divided }}>
        <dl
          ref={ref}
          data-layout={layout}
          data-dense={dense}
          data-divided={divided}
          data-striped={striped}
          className={cn(
            "w-full font-mono text-xs text-foreground bevel-raised bg-surface border-2 border-border p-3",
            divided && "divide-y divide-border/60",
            className
          )}
          {...props}
        >
          {children}
        </dl>
      </DescriptionListContext.Provider>
    );
  }
);
DescriptionList.displayName = "DescriptionList";

export type DescriptionItemProps = React.HTMLAttributes<HTMLDivElement>;

export const DescriptionItem = React.forwardRef<HTMLDivElement, DescriptionItemProps>(
  ({ className, children, ...props }, ref) => {
    const { layout, dense } = React.useContext(DescriptionListContext);

    return (
      <div
        ref={ref}
        className={cn(
          layout === "horizontal"
            ? "grid grid-cols-1 sm:grid-cols-3 sm:gap-4 items-baseline"
            : "flex flex-col gap-1",
          dense ? "py-1.5" : "py-2.5",
          "[dl[data-striped=true]_&:nth-child(even)]:bg-muted/20 px-2 -mx-2",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
DescriptionItem.displayName = "DescriptionItem";

export type DescriptionTermProps = React.HTMLAttributes<HTMLElement>;

export const DescriptionTerm = React.forwardRef<HTMLElement, DescriptionTermProps>(
  ({ className, ...props }, ref) => {
    return (
      <dt
        ref={ref}
        className={cn(
          "font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground select-none",
          className
        )}
        {...props}
      />
    );
  }
);
DescriptionTerm.displayName = "DescriptionTerm";

export type DescriptionDetailsProps = React.HTMLAttributes<HTMLElement>;

export const DescriptionDetails = React.forwardRef<HTMLElement, DescriptionDetailsProps>(
  ({ className, ...props }, ref) => {
    const { layout } = React.useContext(DescriptionListContext);

    return (
      <dd
        ref={ref}
        className={cn(
          "font-mono text-xs text-foreground font-medium break-words",
          layout === "horizontal" && "sm:col-span-2",
          className
        )}
        {...props}
      />
    );
  }
);
DescriptionDetails.displayName = "DescriptionDetails";
