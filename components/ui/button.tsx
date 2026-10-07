import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "default"
    | "primary"
    | "secondary"
    | "destructive"
    | "ghost"
    | "outline";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
}

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  default:
    "bevel-raised active:bevel-pressed bg-bevel-face text-foreground select-none",
  primary:
    "bg-primary text-primary-foreground border border-border-strong shadow-hard active:translate-y-px active:shadow-none",
  secondary:
    "bg-secondary text-secondary-foreground border border-border shadow-hard-sm active:translate-y-px active:shadow-none hover:bg-muted",
  destructive:
    "bg-destructive text-destructive-foreground border border-destructive shadow-hard active:translate-y-px active:shadow-none",
  ghost:
    "bg-transparent hover:bg-muted text-foreground active:bg-surface",
  outline:
    "border-2 border-border-strong bg-transparent text-foreground hover:bg-muted active:bg-surface",
};

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "px-2.5 py-1 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-2.5 text-base",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "md",
      type = "button",
      loading = false,
      disabled = false,
      children,
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        className={cn(
          "inline-flex items-center justify-center font-mono font-medium rounded-none transition-transform",
          "focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2",
          "disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed",
          variantStyles[variant],
          sizeStyles[size],
          className,
        )}
        {...props}
      >
        {loading ? (
          <span className="inline-flex items-center gap-2">
            <span
              className="inline-block h-3 w-3 animate-spin border-2 border-current border-t-transparent"
              aria-hidden="true"
            />
            <span>Loading...</span>
          </span>
        ) : (
          children
        )}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button };
