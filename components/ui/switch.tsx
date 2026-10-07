import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export type SwitchProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">;

const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, disabled = false, children, id, ...props }, ref) => {
    return (
      <label
        htmlFor={id}
        className={cn(
          "inline-flex items-center gap-3 font-mono text-sm font-medium text-foreground",
          "cursor-pointer select-none min-h-6",
          disabled && "opacity-50 cursor-not-allowed",
          className,
        )}
      >
        <span className="relative inline-flex items-center">
          <input
            ref={ref}
            id={id}
            type="checkbox"
            role="switch"
            disabled={disabled}
            className="sr-only peer"
            {...props}
          />
          {/* Retro Mechanical Sliding Channel */}
          <span
            className={cn(
              "bevel-inset relative inline-flex h-6 w-11 shrink-0 items-center bg-muted transition-colors",
              "peer-focus-visible:outline-2 peer-focus-visible:outline-ring peer-focus-visible:outline-offset-2",
              "peer-disabled:cursor-not-allowed",
              "peer-checked:bg-secondary",
            )}
            aria-hidden="true"
          >
            {/* Retro Track Labels */}
            <span className="flex w-full justify-between px-1.5 font-mono text-[9px] font-bold text-muted-foreground select-none">
              <span>0</span>
              <span>1</span>
            </span>

            {/* Retro Tactile Thumb */}
            <span
              className={cn(
                "bevel-raised absolute left-0.5 top-0.5 h-4.5 w-4.5 bg-bevel-face",
                "transition-transform duration-100",
                "peer-checked:translate-x-5",
              )}
            />
          </span>
        </span>
        {children && <span>{children}</span>}
      </label>
    );
  },
);

Switch.displayName = "Switch";

export { Switch };
