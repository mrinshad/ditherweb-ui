import { forwardRef } from "react";
import { cn } from "../lib/utils";

export interface NumberInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  invalid?: boolean;
}

const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  ({ className, invalid = false, disabled, min, max, step, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type="number"
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        aria-invalid={invalid || undefined}
        className={cn(
          "bevel-inset flex w-full bg-background px-3 py-1.5 text-sm font-mono text-foreground rounded-none",
          "placeholder:text-muted-foreground",
          "focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-1",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          invalid && "border-destructive focus-visible:outline-destructive text-destructive",
          className,
        )}
        {...props}
      />
    );
  },
);

NumberInput.displayName = "NumberInput";

export { NumberInput };
