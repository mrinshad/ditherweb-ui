import * as React from "react";
import { cn } from "../lib/utils";

// ============================================================================
// Ditherweb — Button88x31 Primitive
// Iconic 88×31 early-web badge format
// ============================================================================

export interface Button88x31Props extends React.HTMLAttributes<HTMLElement> {
  href?: string;
  external?: boolean;
  src?: string;
  alt?: string;
  label?: string;
  value?: string;
  variant?: "bevel" | "outline" | "flat";
  as?: "a" | "div" | "span" | "button";
}

export const Button88x31 = React.forwardRef<HTMLElement, Button88x31Props>(
  (
    {
      className,
      href,
      external = false,
      src,
      alt = "88x31 Button",
      label,
      value,
      variant = "bevel",
      as,
      children,
      ...props
    },
    ref
  ) => {
    // If href is provided, default to anchor tag unless explicitly overridden
    const Component = (as || (href ? "a" : "div")) as React.ElementType;

    const linkProps = href
      ? {
          href,
          target: external ? "_blank" : undefined,
          rel: external ? "noopener noreferrer" : undefined,
        }
      : {};

    const variantStyles = {
      bevel: "bevel-raised shadow-hard-sm active:bevel-pressed",
      outline: "border border-border bg-surface",
      flat: "border border-border-strong bg-background",
    };

    return (
      <Component
        ref={ref}
        {...linkProps}
        className={cn(
          "inline-flex items-center justify-center select-none overflow-hidden font-mono",
          "w-[88px] h-[31px] min-w-[88px] max-w-[88px] min-h-[31px] max-h-[31px] box-border p-0 leading-none",
          "focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-1",
          variantStyles[variant],
          className
        )}
        {...props}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            width={88}
            height={31}
            className="w-[88px] h-[31px] object-cover image-rendering-pixelated pointer-events-none select-none block"
            loading="lazy"
          />
        ) : label && value ? (
          <div className="flex w-full h-full text-[9px] font-bold uppercase tracking-tighter">
            <div className="flex-1 bg-muted text-muted-foreground flex items-center justify-center px-1 text-center truncate border-r border-border/80">
              {label}
            </div>
            <div className="flex-1 bg-primary text-primary-foreground flex items-center justify-center px-1 text-center truncate">
              {value}
            </div>
          </div>
        ) : children ? (
          <div className="w-full h-full flex flex-col items-center justify-center text-center text-[9px] font-bold leading-tight px-1 uppercase truncate bg-surface text-foreground">
            {children}
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-center text-[9px] font-bold uppercase tracking-wider bg-surface text-foreground px-1 truncate">
            {alt}
          </div>
        )}
      </Component>
    );
  }
);
Button88x31.displayName = "Button88x31";
