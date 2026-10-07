import { forwardRef } from "react";
import { cn } from "../lib/utils";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  invalid?: boolean;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, invalid = false, disabled, multiple, ...props }, ref) => {
    return (
      <select
        ref={ref}
        disabled={disabled}
        multiple={multiple}
        aria-invalid={invalid || undefined}
        className={cn(
          "bevel-inset flex w-full bg-background px-3 py-1.5 text-sm font-mono text-foreground rounded-none",
          !multiple && "retro-select",
          "focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-1",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          invalid && "border-destructive focus-visible:outline-destructive text-destructive",
          className,
        )}
        {...props}
      >
        {children}
      </select>
    );
  },
);

Select.displayName = "Select";

export { Select };
