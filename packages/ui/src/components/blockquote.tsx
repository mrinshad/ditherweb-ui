import { forwardRef } from "react";
import { cn } from "../lib/utils";

export type BlockquoteProps = React.BlockquoteHTMLAttributes<HTMLQuoteElement>;

const Blockquote = forwardRef<HTMLQuoteElement, BlockquoteProps>(
  ({ className, children, cite, ...props }, ref) => {
    return (
      <blockquote
        ref={ref}
        cite={cite}
        className={cn(
          "pl-4 border-l-4 border-primary/80 bg-surface/40 py-2.5 pr-4",
          "font-mono text-sm text-foreground italic leading-relaxed select-text",
          className,
        )}
        {...props}
      >
        {children}
      </blockquote>
    );
  },
);

Blockquote.displayName = "Blockquote";

export { Blockquote };
