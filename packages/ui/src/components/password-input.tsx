"use client";

import { forwardRef, useState } from "react";
import { cn } from "../lib/utils";

export interface PasswordInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  invalid?: boolean;
  showToggle?: boolean;
}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  (
    {
      className,
      invalid = false,
      disabled = false,
      showToggle = true,
      ...props
    },
    ref,
  ) => {
    const [visible, setVisible] = useState(false);

    return (
      <div className="relative flex w-full items-center">
        <input
          ref={ref}
          type={visible ? "text" : "password"}
          disabled={disabled}
          aria-invalid={invalid || undefined}
          className={cn(
            "bevel-inset flex w-full bg-background px-3 py-1.5 text-sm font-mono text-foreground rounded-none",
            "placeholder:text-muted-foreground",
            "focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-1",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            showToggle && "pr-16",
            invalid && "border-destructive focus-visible:outline-destructive text-destructive",
            className,
          )}
          {...props}
        />
        {showToggle && (
          <button
            type="button"
            disabled={disabled}
            aria-label={visible ? "Hide password" : "Show password"}
            onMouseDown={(e) => {
              // Prevent losing focus from input on click
              e.preventDefault();
            }}
            onClick={() => setVisible((prev) => !prev)}
            className={cn(
              "absolute right-1 px-2 py-0.5 font-mono text-[11px] font-bold uppercase select-none",
              "bevel-raised bg-bevel-face text-foreground shadow-hard-sm",
              "focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-1",
              "disabled:opacity-50 disabled:pointer-events-none",
              "active:bevel-pressed",
            )}
          >
            {visible ? "HIDE" : "SHOW"}
          </button>
        )}
      </div>
    );
  },
);

PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
