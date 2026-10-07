import { forwardRef } from "react";
import { cn } from "../lib/utils";

export type FlexDirection = "row" | "col" | "row-reverse" | "col-reverse";
export type FlexWrap = "nowrap" | "wrap" | "wrap-reverse";
export type FlexGap = "none" | "xs" | "sm" | "md" | "lg" | "xl";
export type FlexAlign = "start" | "center" | "end" | "stretch" | "baseline";
export type FlexJustify =
  | "start"
  | "center"
  | "end"
  | "between"
  | "around"
  | "evenly";

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: FlexDirection;
  wrap?: FlexWrap;
  gap?: FlexGap;
  align?: FlexAlign;
  justify?: FlexJustify;
  inline?: boolean;
}

const directionStyles: Record<FlexDirection, string> = {
  row: "flex-row",
  col: "flex-col",
  "row-reverse": "flex-row-reverse",
  "col-reverse": "flex-col-reverse",
};

const wrapStyles: Record<FlexWrap, string> = {
  nowrap: "flex-nowrap",
  wrap: "flex-wrap",
  "wrap-reverse": "flex-wrap-reverse",
};

const gapStyles: Record<FlexGap, string> = {
  none: "gap-0",
  xs: "gap-1",
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
  xl: "gap-8",
};

const alignStyles: Record<FlexAlign, string> = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
  baseline: "items-baseline",
};

const justifyStyles: Record<FlexJustify, string> = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
};

const Flex = forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      className,
      direction = "row",
      wrap = "nowrap",
      gap = "none",
      align,
      justify,
      inline = false,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          inline ? "inline-flex" : "flex",
          directionStyles[direction],
          wrapStyles[wrap],
          gapStyles[gap],
          align && alignStyles[align],
          justify && justifyStyles[justify],
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Flex.displayName = "Flex";

export { Flex };
