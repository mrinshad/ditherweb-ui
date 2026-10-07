import { forwardRef } from "react";
import { cn } from "../lib/utils";
import { Spinner, type SpinnerProps } from "./spinner";

export interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> {
  text?: React.ReactNode;
  size?: SpinnerProps["size"];
  inline?: boolean;
}

const Loading = forwardRef<HTMLDivElement, LoadingProps>(
  (
    {
      className,
      text = "Loading...",
      size = "md",
      inline = false,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        role="status"
        aria-live="polite"
        className={cn(
          "font-mono text-xs text-muted-foreground",
          inline
            ? "inline-flex items-center gap-2"
            : "flex flex-col items-center justify-center p-4 gap-2 text-center",
          className,
        )}
        {...props}
      >
        <Spinner size={size} label={typeof text === "string" ? text : undefined} />
        {text && <span>{text}</span>}
        {children}
      </div>
    );
  },
);

Loading.displayName = "Loading";

export { Loading };
