import { forwardRef } from "react";
import { cn } from "../lib/utils";

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
export type HeadingSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "display";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel;
  size?: HeadingSize;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "div";
}

const defaultSizeForLevel: Record<HeadingLevel, HeadingSize> = {
  1: "2xl",
  2: "xl",
  3: "lg",
  4: "md",
  5: "sm",
  6: "xs",
};

const sizeStyles: Record<HeadingSize, string> = {
  xs: "text-xs font-bold leading-normal",
  sm: "text-sm font-bold leading-snug",
  md: "text-base font-bold leading-snug",
  lg: "text-lg font-bold leading-snug tracking-tight",
  xl: "text-xl font-bold leading-tight tracking-tight sm:text-2xl",
  "2xl": "text-2xl font-bold leading-tight tracking-tight sm:text-3xl",
  display: "text-3xl font-bold leading-none tracking-tight sm:text-4xl lg:text-5xl",
};

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level = 2, size, as, children, ...props }, ref) => {
    const Component = (as || `h${level}`) as React.ElementType;
    const computedSize = size || defaultSizeForLevel[level];

    return (
      <Component
        ref={ref}
        className={cn(
          "font-mono uppercase text-foreground select-text",
          sizeStyles[computedSize],
          className,
        )}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

Heading.displayName = "Heading";

export { Heading };
