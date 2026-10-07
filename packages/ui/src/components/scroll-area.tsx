import { forwardRef } from "react";
import { cn } from "../lib/utils";

export type ScrollAreaOrientation = "vertical" | "horizontal" | "both";

export interface ScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: ScrollAreaOrientation;
}

const orientationStyles: Record<ScrollAreaOrientation, string> = {
  vertical: "overflow-y-auto overflow-x-hidden",
  horizontal: "overflow-x-auto overflow-y-hidden",
  both: "overflow-auto",
};

const ScrollArea = forwardRef<HTMLDivElement, ScrollAreaProps>(
  (
    {
      className,
      orientation = "vertical",
      tabIndex = 0,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        tabIndex={tabIndex}
        role="region"
        className={cn(
          "bevel-inset relative w-full bg-surface-sunken",
          "focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-1",
          orientationStyles[orientation],
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

ScrollArea.displayName = "ScrollArea";

export { ScrollArea };
