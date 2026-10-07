"use client";

import { forwardRef, useEffect, useRef } from "react";
import { cn } from "../lib/utils";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  indeterminate?: boolean;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      checked,
      defaultChecked,
      indeterminate = false,
      disabled = false,
      children,
      id,
      ...props
    },
    ref,
  ) => {
    const internalRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      const el = internalRef.current;
      if (el) {
        el.indeterminate = indeterminate;
      }
    }, [indeterminate]);

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
            ref={(node) => {
              internalRef.current = node;
              if (typeof ref === "function") {
                ref(node);
              } else if (ref) {
                ref.current = node;
              }
            }}
            id={id}
            type="checkbox"
            checked={checked}
            defaultChecked={defaultChecked}
            disabled={disabled}
            className="sr-only peer"
            {...props}
          />
          {/* Retro 16x16 Bevel Checkbox Box */}
          <span
            className={cn(
              "bevel-inset inline-flex h-4 w-4 shrink-0 items-center justify-center bg-background",
              "peer-focus-visible:outline-2 peer-focus-visible:outline-ring peer-focus-visible:outline-offset-2",
              "peer-disabled:cursor-not-allowed",
              "[&>svg]:hidden peer-checked:[&>svg]:block",
            )}
            aria-hidden="true"
          >
            {indeterminate ? (
              <span className="h-0.5 w-2 bg-foreground" />
            ) : (
              <svg
                className="h-3 w-3 stroke-foreground"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 6L4.5 9L10 2.5"
                  strokeWidth="2"
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                />
              </svg>
            )}
          </span>
        </span>
        {children && <span>{children}</span>}
      </label>
    );
  },
);

Checkbox.displayName = "Checkbox";

export { Checkbox };
