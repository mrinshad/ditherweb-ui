import { forwardRef } from "react";
import { cn } from "../lib/utils";

export type CodeProps = React.HTMLAttributes<HTMLElement>;

const Code = forwardRef<HTMLElement, CodeProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <code
        ref={ref}
        className={cn(
          "bevel-inset inline-block px-1.5 py-0.5 font-mono text-xs text-foreground bg-surface-sunken select-text",
          className,
        )}
        {...props}
      >
        {children}
      </code>
    );
  },
);

Code.displayName = "Code";

export { Code };
