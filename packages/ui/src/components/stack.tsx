import { forwardRef } from "react";
import { cn } from "../lib/utils";

export type StackDirection = "vertical" | "horizontal";
export type StackGap = "none" | "xs" | "sm" | "md" | "lg" | "xl";
export type StackAlign = "start" | "center" | "end" | "stretch" | "baseline";
export type StackJustify = "start" | "center" | "end" | "between" | "around";

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: StackDirection;
  gap?: StackGap;
  align?: StackAlign;
  justify?: StackJustify;
  wrap?: boolean;
}

const gapStyles: Record<StackGap, string> = {
  none: "gap-0",
  xs: "gap-1",
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
  xl: "gap-8",
};

const alignStyles: Record<StackAlign, string> = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
  baseline: "items-baseline",
};

const justifyStyles: Record<StackJustify, string> = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
};

const Stack = forwardRef<HTMLDivElement, StackProps>(
  (
    {
      className,
      direction = "vertical",
      gap = "md",
      align,
      justify,
      wrap = false,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex",
          direction === "vertical" ? "flex-col" : "flex-row",
          gapStyles[gap],
          align && alignStyles[align],
          justify && justifyStyles[justify],
          wrap && "flex-wrap",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Stack.displayName = "Stack";

export { Stack };
