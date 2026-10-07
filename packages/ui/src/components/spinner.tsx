import { forwardRef } from "react";
import { cn } from "../lib/utils";

export interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: "sm" | "md" | "lg";
  label?: string;
}

const sizeStyles: Record<NonNullable<SpinnerProps["size"]>, string> = {
  sm: "retro-spinner-sm",
  md: "retro-spinner-md",
  lg: "retro-spinner-lg",
};

const Spinner = forwardRef<HTMLSpanElement, SpinnerProps>(
  ({ className, size = "md", label = "Loading...", ...props }, ref) => {
    return (
      <span
        ref={ref}
        role="status"
        aria-label={label}
        className={cn("retro-spinner", sizeStyles[size], className)}
        {...props}
      >
        <span className="sr-only">{label}</span>
      </span>
    );
  },
);

Spinner.displayName = "Spinner";

export { Spinner };
