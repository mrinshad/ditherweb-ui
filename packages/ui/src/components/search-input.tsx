"use client";

import { forwardRef, useState } from "react";
import { cn } from "../lib/utils";

export interface SearchInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  invalid?: boolean;
  clearable?: boolean;
  onClear?: () => void;
}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  (
    {
      className,
      invalid = false,
      disabled = false,
      clearable = true,
      value,
      defaultValue,
      onChange,
      onClear,
      ...props
    },
    ref,
  ) => {
    const isControlled = value !== undefined;
    const [uncontrolledValue, setUncontrolledValue] = useState(
      defaultValue !== undefined ? String(defaultValue) : "",
    );

    const currentValue = isControlled ? String(value ?? "") : uncontrolledValue;
    const hasContent = currentValue.length > 0;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) {
        setUncontrolledValue(e.target.value);
      }
      onChange?.(e);
    };

    const handleClear = () => {
      if (!isControlled) {
        setUncontrolledValue("");
      }
      onClear?.();
    };

    return (
      <div className="relative flex w-full items-center">
        <input
          ref={ref}
          type="search"
          value={value}
          defaultValue={defaultValue}
          disabled={disabled}
          onChange={handleChange}
          aria-invalid={invalid || undefined}
          className={cn(
            "bevel-inset flex w-full bg-background px-3 py-1.5 text-sm font-mono text-foreground rounded-none",
            "placeholder:text-muted-foreground",
            "focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-1",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            // Hide default browser search cancel button so our retro button is clean
            "[&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden",
            clearable && hasContent && "pr-10",
            invalid && "border-destructive focus-visible:outline-destructive text-destructive",
            className,
          )}
          {...props}
        />
        {clearable && hasContent && !disabled && (
          <button
            type="button"
            aria-label="Clear search"
            onClick={handleClear}
            className={cn(
              "absolute right-1 px-1.5 py-0.5 font-mono text-xs font-bold leading-none select-none",
              "bevel-raised bg-bevel-face text-muted-foreground hover:text-foreground shadow-hard-sm",
              "focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-1",
              "active:bevel-pressed",
            )}
          >
            ✕
          </button>
        )}
      </div>
    );
  },
);

SearchInput.displayName = "SearchInput";

export { SearchInput };
