import { forwardRef } from "react";
import { cn } from "../lib/utils";

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  decorative?: boolean;
}

const Separator = forwardRef<HTMLDivElement, SeparatorProps>(
  (
    {
      className,
      orientation = "horizontal",
      decorative = true,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        role={decorative ? "none" : "separator"}
        aria-orientation={decorative ? undefined : orientation}
        aria-hidden={decorative ? true : undefined}
        className={cn(
          "shrink-0",
          orientation === "horizontal"
            ? "h-px w-full border-t border-border shadow-[0_1px_0_var(--bevel-light)]"
            : "h-full w-px border-l border-border shadow-[1px_0_0_var(--bevel-light)]",
          className,
        )}
        {...props}
      />
    );
  },
);

Separator.displayName = "Separator";

export { Separator };
