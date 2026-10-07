import { forwardRef } from "react";
import { cn } from "../lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, invalid = false, disabled, rows = 4, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        rows={rows}
        disabled={disabled}
        aria-invalid={invalid || undefined}
        className={cn(
          "bevel-inset flex w-full bg-background px-3 py-2 text-sm font-mono text-foreground rounded-none",
          "placeholder:text-muted-foreground",
          "focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-1",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          invalid && "border-destructive focus-visible:outline-destructive text-destructive",
          className,
        )}
        {...props}
      />
    );
  },
);

Textarea.displayName = "Textarea";

export { Textarea };
