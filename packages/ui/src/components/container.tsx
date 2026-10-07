import { forwardRef } from "react";
import { cn } from "../lib/utils";

export type ContainerSize = "sm" | "md" | "lg" | "xl" | "full";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: ContainerSize;
  centered?: boolean;
}

const sizeStyles: Record<ContainerSize, string> = {
  sm: "max-w-screen-sm",
  md: "max-w-screen-md",
  lg: "max-w-screen-lg",
  xl: "max-w-7xl",
  full: "max-w-full",
};

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      className,
      size = "lg",
      centered = true,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "w-full px-4 sm:px-6 lg:px-8",
          sizeStyles[size],
          centered && "mx-auto",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Container.displayName = "Container";

export { Container };
