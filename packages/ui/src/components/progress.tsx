import { forwardRef } from "react";
import { cn } from "../lib/utils";

export interface ProgressProps
  extends React.ProgressHTMLAttributes<HTMLProgressElement> {
  value?: number;
  max?: number;
  variant?: "default" | "stepped" | "success" | "warning" | "destructive";
}

const variantStyles: Record<NonNullable<ProgressProps["variant"]>, string> = {
  default: "",
  stepped: "retro-progress-stepped",
  success: "retro-progress-success",
  warning: "retro-progress-warning",
  destructive: "retro-progress-destructive",
};

const Progress = forwardRef<HTMLProgressElement, ProgressProps>(
  ({ className, value, max = 100, variant = "default", ...props }, ref) => {
    const isIndeterminate = value === undefined;

    return (
      <progress
        ref={ref}
        value={value}
        max={max}
        data-indeterminate={isIndeterminate ? "true" : undefined}
        className={cn(
          "retro-progress",
          variantStyles[variant],
          className,
        )}
        {...props}
      />
    );
  },
);

Progress.displayName = "Progress";

export { Progress };
