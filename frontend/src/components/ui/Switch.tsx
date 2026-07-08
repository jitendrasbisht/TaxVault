import * as React from "react";
import { cn } from "@/lib/cn";

export interface SwitchProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, ...props }, ref) => {
    return (
      <label className="inline-flex cursor-pointer items-center">
        <input
          ref={ref}
          type="checkbox"
          className="peer sr-only"
          {...props}
        />
        <div
          className={cn(
            "h-6 w-11 rounded-full bg-slate-300 transition-colors peer-checked:bg-blue-600 peer-focus:ring-2 peer-focus:ring-blue-500 after:absolute after:ml-0.5 after:mt-0.5 after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-transform peer-checked:after:translate-x-5",
            className
          )}
        />
      </label>
    );
  }
);

Switch.displayName = "Switch";

export { Switch };