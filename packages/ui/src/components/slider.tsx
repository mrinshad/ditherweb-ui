import { forwardRef } from "react";
import { cn } from "../lib/utils";

export interface SliderProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  invalid?: boolean;
}

const Slider = forwardRef<HTMLInputElement, SliderProps>(
  ({ className, disabled, min = 0, max = 100, step = 1, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type="range"
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        className={cn("retro-slider", className)}
        {...props}
      />
    );
  },
);

Slider.displayName = "Slider";

export { Slider };
