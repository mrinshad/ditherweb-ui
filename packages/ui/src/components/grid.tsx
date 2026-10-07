import { forwardRef } from "react";
import { cn } from "../lib/utils";

export type GridColumns = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "auto";
export type GridGap = "none" | "xs" | "sm" | "md" | "lg" | "xl";
export type GridAlign = "start" | "center" | "end" | "stretch";

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: GridColumns;
  gap?: GridGap;
  align?: GridAlign;
}

const columnStyles: Record<GridColumns, string> = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
  6: "grid-cols-6",
  7: "grid-cols-7",
  8: "grid-cols-8",
  9: "grid-cols-9",
  10: "grid-cols-10",
  11: "grid-cols-11",
  12: "grid-cols-12",
  auto: "grid-cols-[repeat(auto-fit,minmax(240px,1fr))]",
};

const gapStyles: Record<GridGap, string> = {
  none: "gap-0",
  xs: "gap-1",
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
  xl: "gap-8",
};

const alignStyles: Record<GridAlign, string> = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
};

const Grid = forwardRef<HTMLDivElement, GridProps>(
  (
    {
      className,
      columns = 1,
      gap = "md",
      align,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "grid",
          columnStyles[columns],
          gapStyles[gap],
          align && alignStyles[align],
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Grid.displayName = "Grid";

export { Grid };
