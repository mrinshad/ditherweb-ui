import { forwardRef } from "react";
import { cn } from "../lib/utils";

export type KbdProps = React.HTMLAttributes<HTMLElement>;

const Kbd = forwardRef<HTMLElement, KbdProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <kbd
        ref={ref}
        className={cn(
          "bevel-raised inline-flex items-center justify-center min-w-[20px] px-1.5 py-0.5",
          "bg-bevel-face text-foreground shadow-hard-sm",
          "font-mono text-[11px] font-bold select-none leading-none tracking-tight",
          className,
        )}
        {...props}
      >
        {children}
      </kbd>
    );
  },
);

Kbd.displayName = "Kbd";

export { Kbd };
