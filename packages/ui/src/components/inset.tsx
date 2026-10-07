import { forwardRef } from "react";
import { cn } from "../lib/utils";

export interface InsetProps extends React.HTMLAttributes<HTMLDivElement> {
  deep?: boolean;
}

const Inset = forwardRef<HTMLDivElement, InsetProps>(
  ({ className, deep = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bevel-inset bg-background text-foreground rounded-none",
          deep && "shadow-inset",
          className,
        )}
        {...props}
      />
    );
  },
);

Inset.displayName = "Inset";

export { Inset };
