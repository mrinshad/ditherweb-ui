"use client";

import {
  createContext,
  forwardRef,
  useContext,
  useState,
} from "react";
import { cn } from "../lib/utils";

type ToggleGroupType = "single" | "multiple";

interface ToggleGroupContextValue {
  type: ToggleGroupType;
  value: string | string[];
  onItemSelect: (itemValue: string) => void;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
}

const ToggleGroupContext = createContext<ToggleGroupContextValue | null>(null);

export interface ToggleGroupSingleProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "defaultValue" | "onChange"> {
  type: "single";
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
}

export interface ToggleGroupMultipleProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "defaultValue" | "onChange"> {
  type: "multiple";
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
}

export type ToggleGroupProps =
  | ToggleGroupSingleProps
  | ToggleGroupMultipleProps;

const ToggleGroup = forwardRef<HTMLDivElement, ToggleGroupProps>(
  (
    {
      className,
      type = "single",
      value: controlledValue,
      defaultValue,
      onValueChange,
      disabled = false,
      size = "md",
      children,
      ...props
    },
    ref,
  ) => {
    const isControlled = controlledValue !== undefined;
    const [uncontrolledValue, setUncontrolledValue] = useState<
      string | string[]
    >(() => {
      if (defaultValue !== undefined) return defaultValue;
      return type === "single" ? "" : [];
    });

    const currentValue = isControlled ? controlledValue! : uncontrolledValue;

    const onItemSelect = (itemValue: string) => {
      if (type === "single") {
        const nextValue = currentValue === itemValue ? "" : itemValue;
        if (!isControlled) {
          setUncontrolledValue(nextValue);
        }
        (onValueChange as ((val: string) => void) | undefined)?.(nextValue);
      } else {
        const currentList = Array.isArray(currentValue) ? currentValue : [];
        const nextList = currentList.includes(itemValue)
          ? currentList.filter((v) => v !== itemValue)
          : [...currentList, itemValue];
        if (!isControlled) {
          setUncontrolledValue(nextList);
        }
        (onValueChange as ((val: string[]) => void) | undefined)?.(nextList);
      }
    };

    return (
      <ToggleGroupContext.Provider
        value={{
          type,
          value: currentValue,
          onItemSelect,
          disabled,
          size,
        }}
      >
        <div
          ref={ref}
          role="group"
          className={cn("inline-flex items-center gap-1", className)}
          {...props}
        >
          {children}
        </div>
      </ToggleGroupContext.Provider>
    );
  },
);

ToggleGroup.displayName = "ToggleGroup";

export interface ToggleGroupItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
}

const sizeStyles: Record<"sm" | "md" | "lg", string> = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-3 py-1 text-sm",
  lg: "px-4 py-1.5 text-base",
};

const ToggleGroupItem = forwardRef<HTMLButtonElement, ToggleGroupItemProps>(
  ({ className, value, disabled = false, children, onClick, ...props }, ref) => {
    const context = useContext(ToggleGroupContext);
    if (!context) {
      throw new Error("ToggleGroupItem must be used within a ToggleGroup");
    }

    const isSelected =
      context.type === "single"
        ? context.value === value
        : Array.isArray(context.value) && context.value.includes(value);

    const isDisabled = context.disabled || disabled;
    const size = context.size || "md";

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!isDisabled) {
        context.onItemSelect(value);
      }
      onClick?.(e);
    };

    return (
      <button
        ref={ref}
        type="button"
        role="button"
        value={value}
        aria-pressed={isSelected}
        disabled={isDisabled}
        onClick={handleClick}
        className={cn(
          "inline-flex items-center justify-center font-mono font-medium rounded-none select-none transition-transform",
          "focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-1 z-10",
          "disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed",
          isSelected
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

ToggleGroupItem.displayName = "ToggleGroupItem";

export { ToggleGroup, ToggleGroupItem };
