import { forwardRef } from "react";
import { cn } from "../lib/utils";

export interface GroupBoxProps
  extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {
  legend?: React.ReactNode;
  variant?: "default" | "groove" | "raised";
}

const variantStyles: Record<NonNullable<GroupBoxProps["variant"]>, string> = {
  default: "border-2 border-border bg-card/40",
  groove: "bevel-groove bg-card/40",
  raised: "bevel-raised bg-bevel-face shadow-hard-sm",
};

export type GroupBoxLegendProps = React.HTMLAttributes<HTMLLegendElement>;

const GroupBoxLegend = forwardRef<HTMLLegendElement, GroupBoxLegendProps>(
  ({ className, ...props }, ref) => {
    return (
      <legend
        ref={ref}
        className={cn(
          "px-2 font-mono text-xs font-bold uppercase tracking-wider text-foreground select-none",
          className,
        )}
        {...props}
      />
    );
  },
);
GroupBoxLegend.displayName = "GroupBoxLegend";

const GroupBox = forwardRef<HTMLFieldSetElement, GroupBoxProps>(
  ({ className, variant = "default", legend, children, disabled, ...props }, ref) => {
    return (
      <fieldset
        ref={ref}
        disabled={disabled}
        className={cn(
          "rounded-none p-4 font-mono text-foreground",
          "disabled:opacity-60 disabled:cursor-not-allowed",
          variantStyles[variant],
          className,
        )}
        {...props}
      >
        {legend && <GroupBoxLegend>{legend}</GroupBoxLegend>}
        {children}
      </fieldset>
    );
  },
);

GroupBox.displayName = "GroupBox";

export { GroupBox, GroupBoxLegend };
