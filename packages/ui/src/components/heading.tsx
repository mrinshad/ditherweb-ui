import { forwardRef } from "react";
import { cn } from "../lib/utils";

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
export type HeadingSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "display";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel;
  size?: HeadingSize;
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
  ({ className, level = 2, size, children, ...props }, ref) => {
    const Component = `h${level}` as const;
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
