"use client";

import { forwardRef, useRef, useImperativeHandle } from "react";
import { cn } from "../lib/utils";

export interface NumberInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  invalid?: boolean;
}

const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  ({ className, invalid = false, disabled, min, max, step, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    const handleStep = (direction: "up" | "down") => {
      if (disabled || !inputRef.current) return;
      const el = inputRef.current;
      try {
        if (direction === "up") {
          el.stepUp();
        } else {
          el.stepDown();
        }
      } catch {
        const cur = Number(el.value) || 0;
        const s = Number(step) || 1;
        el.value = String(direction === "up" ? cur + s : cur - s);
      }

      const nativeSetter = Object.getOwnPropertyDescriptor(
        HTMLInputElement.prototype,
        "value",
      )?.set;
      if (nativeSetter) {
        nativeSetter.call(el, el.value);
      }
      el.dispatchEvent(new Event("input", { bubbles: true }));
      el.dispatchEvent(new Event("change", { bubbles: true }));
    };

    return (
      <div className="relative inline-flex items-center w-full">
        <input
          ref={inputRef}
          type="number"
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          aria-invalid={invalid || undefined}
          className={cn(
            "bevel-inset flex w-full bg-background pl-3 pr-7 py-1.5 text-sm font-mono text-foreground rounded-none retro-number-input",
            "placeholder:text-muted-foreground",
            "focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-1",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            invalid && "border-destructive focus-visible:outline-destructive text-destructive",
            className,
          )}
          {...props}
        />
        <div className="retro-number-stepper">
          <button
            type="button"
            tabIndex={-1}
            disabled={disabled}
            onClick={() => handleStep("up")}
            aria-label="Increase value"
            className="retro-stepper-btn"
          >
            <svg width="7" height="4" viewBox="0 0 7 4" fill="currentColor">
              <path d="M3.5 0L7 4H0z" />
            </svg>
          </button>
          <button
            type="button"
            tabIndex={-1}
            disabled={disabled}
            onClick={() => handleStep("down")}
            aria-label="Decrease value"
            className="retro-stepper-btn"
          >
            <svg width="7" height="4" viewBox="0 0 7 4" fill="currentColor">
              <path d="M0 0h7L3.5 4z" />
            </svg>
          </button>
        </div>
      </div>
    );
  },
);

NumberInput.displayName = "NumberInput";

export { NumberInput };
