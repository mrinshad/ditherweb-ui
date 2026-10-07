import { forwardRef } from "react";
import { cn } from "../lib/utils";

export type SpacerSize = "xs" | "sm" | "md" | "lg" | "xl" | "auto";

export interface SpacerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: SpacerSize;
}

const sizeStyles: Record<SpacerSize, string> = {
  xs: "w-1 h-1 shrink-0",
  sm: "w-2 h-2 shrink-0",
  md: "w-4 h-4 shrink-0",
  lg: "w-6 h-6 shrink-0",
  xl: "w-8 h-8 shrink-0",
  auto: "flex-1 self-stretch",
};

const Spacer = forwardRef<HTMLDivElement, SpacerProps>(
  ({ className, size = "auto", ...props }, ref) => {
    return (
      <div
        ref={ref}
        aria-hidden="true"
        className={cn(sizeStyles[size], className)}
        {...props}
      />
    );
  },
);

Spacer.displayName = "Spacer";

export { Spacer };
