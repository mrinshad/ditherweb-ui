import { forwardRef } from "react";
import { cn } from "../lib/utils";

export type InputVariant = "default" | "inset" | "flat" | "terminal" | "ghost";
export type InputSize = "sm" | "md" | "lg";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  variant?: InputVariant;
  inputSize?: InputSize;
  invalid?: boolean;
}

const variantStyles: Record<InputVariant, string> = {
  default: "bevel-inset bg-background text-foreground",
  inset: "bevel-inset bg-background text-foreground",
  flat: "border border-border bg-background text-foreground focus-visible:border-primary",
  terminal: "bg-black text-[#00ff66] border border-[#00ff66]/60 placeholder:text-[#00ff66]/40 focus-visible:outline-[#00ff66]",
  ghost: "bg-transparent border-none text-foreground shadow-none focus-visible:ring-1 focus-visible:ring-primary",
};

const sizeStyles: Record<InputSize, string> = {
  sm: "px-2 py-1 text-xs",
  md: "px-3 py-1.5 text-sm",
  lg: "px-4 py-2 text-base",
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = "text",
      variant = "default",
      inputSize = "md",
      invalid = false,
      disabled,
      ...props
    },
    ref,
  ) => {
    return (
      <input
        ref={ref}
        type={type}
        disabled={disabled}
        aria-invalid={invalid || undefined}
        className={cn(
          "flex w-full font-mono rounded-none",
          "placeholder:text-muted-foreground",
          "focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-1",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          variantStyles[variant],
          sizeStyles[inputSize],
          invalid && "border-destructive focus-visible:outline-destructive text-destructive",
          className,
        )}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";

export { Input };
