import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export type RadioProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">;

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ className, disabled = false, children, id, ...props }, ref) => {
    return (
      <label
        htmlFor={id}
        className={cn(
          "inline-flex items-center gap-2 font-mono text-sm font-medium text-foreground",
          "cursor-pointer select-none min-h-6",
          disabled && "opacity-50 cursor-not-allowed",
          className,
        )}
      >
        <span className="relative inline-flex items-center justify-center">
          <input
            ref={ref}
            id={id}
            type="radio"
            disabled={disabled}
            className="sr-only peer"
            {...props}
          />
          {/* Retro 16x16 Bevel Radio Well */}
          <span
            className={cn(
              "bevel-inset inline-flex h-4 w-4 shrink-0 items-center justify-center bg-background",
              "peer-focus-visible:outline-2 peer-focus-visible:outline-ring peer-focus-visible:outline-offset-2",
              "peer-disabled:cursor-not-allowed",
              "[&>span]:hidden peer-checked:[&>span]:block",
            )}
            aria-hidden="true"
          >
            <span className="h-1.5 w-1.5 bg-foreground" />
          </span>
        </span>
        {children && <span>{children}</span>}
      </label>
    );
  },
);

Radio.displayName = "Radio";

export { Radio };
