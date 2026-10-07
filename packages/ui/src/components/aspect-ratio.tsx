import { forwardRef } from "react";
import { cn } from "../lib/utils";

export interface AspectRatioProps
  extends React.HTMLAttributes<HTMLDivElement> {
  ratio?: number | string;
}

const AspectRatio = forwardRef<HTMLDivElement, AspectRatioProps>(
  ({ className, ratio = 16 / 9, style, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        style={{
          aspectRatio: typeof ratio === "number" ? `${ratio}` : ratio,
          ...style,
        }}
        className={cn("relative w-full overflow-hidden", className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);

AspectRatio.displayName = "AspectRatio";

export { AspectRatio };
