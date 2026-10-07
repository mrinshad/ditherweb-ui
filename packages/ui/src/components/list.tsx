import { forwardRef } from "react";
import { cn } from "../lib/utils";

export type ListType = "unordered" | "ordered";
export type ListVariant = "default" | "pixel" | "none";

export interface ListProps
  extends React.HTMLAttributes<HTMLUListElement | HTMLOListElement> {
  type?: ListType;
  variant?: ListVariant;
}

const variantStyles: Record<ListType, Record<ListVariant, string>> = {
  unordered: {
    default: "list-disc pl-5",
    pixel:
      "list-none pl-0 [&>li]:relative [&>li]:pl-4 [&>li]:before:content-['■'] [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:text-[9px] [&>li]:before:text-primary [&>li]:before:top-[3px]",
    none: "list-none pl-0",
  },
  ordered: {
    default: "list-decimal pl-5",
    pixel: "list-decimal pl-5 font-bold [&>li>span]:font-normal",
    none: "list-none pl-0",
  },
};

const List = forwardRef<HTMLUListElement | HTMLOListElement, ListProps>(
  (
    {
      className,
      type = "unordered",
      variant = "default",
      children,
      ...props
    },
    ref,
  ) => {
    const Component = type === "ordered" ? "ol" : "ul";

    return (
      <Component
        ref={ref as React.Ref<HTMLUListElement> & React.Ref<HTMLOListElement>}
        className={cn(
          "font-mono text-sm text-foreground space-y-1.5 select-text",
          variantStyles[type][variant],
          className,
        )}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

List.displayName = "List";

export type ListItemProps = React.LiHTMLAttributes<HTMLLIElement>;

const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <li
        ref={ref}
        className={cn("leading-relaxed", className)}
        {...props}
      >
        {children}
      </li>
    );
  },
);

ListItem.displayName = "ListItem";

export { List, ListItem };
