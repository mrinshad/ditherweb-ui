import { forwardRef } from "react";
import { cn } from "../lib/utils";

export type LinkVariant = "default" | "subtle" | "underline";

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: LinkVariant;
}

const variantStyles: Record<LinkVariant, string> = {
  default:
    "text-primary font-mono font-medium underline underline-offset-4 decoration-1 hover:decoration-2 hover:opacity-85 active:opacity-70",
  subtle:
    "text-muted-foreground font-mono hover:text-foreground hover:underline underline-offset-4",
  underline:
    "text-foreground font-mono font-bold underline underline-offset-4 decoration-2 hover:text-primary",
};

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      className,
      variant = "default",
      target,
      rel,
      children,
      ...props
    },
    ref,
  ) => {
    const computedRel =
      target === "_blank" ? rel || "noopener noreferrer" : rel;

    return (
      <a
        ref={ref}
        target={target}
        rel={computedRel}
        className={cn(
          "inline-flex items-center gap-1 cursor-pointer transition-colors transition-opacity select-text",
          "focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2",
          variantStyles[variant],
          className,
        )}
        {...props}
      >
        {children}
      </a>
    );
  },
);

Link.displayName = "Link";

export { Link };
