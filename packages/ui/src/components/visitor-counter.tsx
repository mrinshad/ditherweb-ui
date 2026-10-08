import * as React from "react";
import { cn } from "../lib/utils";

// ============================================================================
// Ditherweb — VisitorCounter Primitive
// Classic digital / odometer hit counter presentation
// ============================================================================

export interface VisitorCounterProps extends React.ComponentPropsWithoutRef<"div"> {
  value: number;
  minDigits?: number;
  variant?: "odometer" | "led" | "lcd" | "classic";
  size?: "sm" | "md" | "lg";
  label?: string;
  labelPosition?: "top" | "left" | "bottom";
}

export const VisitorCounter = React.forwardRef<HTMLDivElement, VisitorCounterProps>(
  (
    {
      className,
      value,
      minDigits = 6,
      variant = "odometer",
      size = "md",
      label,
      labelPosition = "top",
      ...props
    },
    ref
  ) => {
    // Format numeric value with leading zeros (e.g. 0012847)
    const formattedDigits = Math.max(0, Math.floor(value))
      .toString()
      .padStart(minDigits, "0")
      .split("");

    const sizeStyles = {
      sm: {
        digit: "w-4 h-6 text-xs",
        container: "p-0.5",
        label: "text-[9px]",
      },
      md: {
        digit: "w-5 h-7 text-sm",
        container: "p-1",
        label: "text-[10px]",
      },
      lg: {
        digit: "w-7 h-9 text-base",
        container: "p-1.5",
        label: "text-xs",
      },
    };

    const variantContainers = {
      odometer: "bevel-inset bg-black text-white border-2 border-border shadow-inner",
      led: "border-2 border-border/80 retro-counter-led shadow-inner",
      lcd: "border-2 border-border/80 retro-counter-lcd shadow-inner",
      classic: "bevel-inset bg-background text-foreground border-2 border-border",
    };

    const variantDigits = {
      odometer: "retro-odometer-digit",
      led: "font-mono font-black border-r border-green-950/40 last:border-r-0 flex items-center justify-center",
      lcd: "font-mono font-black border-r border-stone-800/20 last:border-r-0 flex items-center justify-center",
      classic: "font-mono font-bold border-r border-border/60 last:border-r-0 flex items-center justify-center bg-muted/40",
    };

    const labelElement = label ? (
      <span className={cn("font-mono font-bold uppercase tracking-wider text-muted-foreground select-none", sizeStyles[size].label)}>
        {label}
      </span>
    ) : null;

    return (
      <div
        ref={ref}
        role="status"
        aria-label={label ? `${label}: ${value}` : `Visitor count: ${value}`}
        className={cn(
          "inline-flex font-mono select-none items-center gap-1.5",
          labelPosition === "top" && "flex-col items-center",
          labelPosition === "bottom" && "flex-col-reverse items-center",
          labelPosition === "left" && "flex-row items-center",
          className
        )}
        {...props}
      >
        {labelElement}

        {/* Screen-reader accessible value */}
        <span className="sr-only">
          {label ? `${label}: ${value}` : `Visitor counter: ${value}`}
        </span>

        {/* Digit segments */}
        <div
          aria-hidden="true"
          className={cn(
            "inline-flex items-center rounded-none overflow-hidden",
            variantContainers[variant],
            sizeStyles[size].container
          )}
        >
          {formattedDigits.map((digit, index) => (
            <span
              key={index}
              className={cn(
                sizeStyles[size].digit,
                variantDigits[variant]
              )}
            >
              {digit}
            </span>
          ))}
        </div>
      </div>
    );
  }
);
VisitorCounter.displayName = "VisitorCounter";
