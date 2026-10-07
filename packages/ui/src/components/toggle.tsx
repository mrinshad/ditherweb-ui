"use client";

import { forwardRef, useState } from "react";
import { cn } from "../lib/utils";

export interface ToggleProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
  pressed?: boolean;
  defaultPressed?: boolean;
  onPressedChange?: (pressed: boolean) => void;
  size?: "sm" | "md" | "lg";
}

const sizeStyles: Record<NonNullable<ToggleProps["size"]>, string> = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-3 py-1 text-sm",
  lg: "px-4 py-1.5 text-base",
};

const Toggle = forwardRef<HTMLButtonElement, ToggleProps>(
  (
    {
      className,
      pressed: controlledPressed,
      defaultPressed = false,
      onPressedChange,
      size = "md",
      disabled = false,
      onClick,
      children,
      ...props
    },
    ref,
  ) => {
    const isControlled = controlledPressed !== undefined;
    const [uncontrolledPressed, setUncontrolledPressed] =
      useState(defaultPressed);

    const isPressed = isControlled ? controlledPressed : uncontrolledPressed;

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      const nextPressed = !isPressed;
      if (!isControlled) {
        setUncontrolledPressed(nextPressed);
      }
      onPressedChange?.(nextPressed);
      onClick?.(e);
    };

    return (
      <button
        ref={ref}
        type="button"
        aria-pressed={isPressed}
        disabled={disabled}
        onClick={handleClick}
        className={cn(
          "inline-flex items-center justify-center font-mono font-medium rounded-none select-none transition-transform",
          "focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2",
          "disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed",
          isPressed
            ? "bevel-pressed bg-muted text-primary"
            : "bevel-raised bg-bevel-face text-foreground shadow-hard-sm hover:bg-surface-elevated",
          sizeStyles[size],
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Toggle.displayName = "Toggle";

export { Toggle };
