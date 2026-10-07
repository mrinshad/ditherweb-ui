import { forwardRef } from "react";
import { cn } from "../lib/utils";

export type BoxElement =
  | "div"
  | "section"
  | "article"
  | "main"
  | "aside"
  | "header"
  | "footer";

export interface BoxProps extends React.HTMLAttributes<HTMLElement> {
  as?: BoxElement;
}

const Box = forwardRef<HTMLElement, BoxProps>(
  ({ className, as: Component = "div", children, ...props }, ref) => {
    return (
      <Component
        ref={ref as React.Ref<HTMLDivElement>}
        className={cn(className)}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

Box.displayName = "Box";

export { Box };
