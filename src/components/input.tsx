import { cn } from "../utils/utils";
import * as React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  isValid?: "error" | "neutral";
  counterText?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="flex flex-col">
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-primary-light bg-primary px-3 py-2 text-sm file:border-0 file:bg-secondary file:rounded-md file:text-sm file:font-medium placeholder:text-white focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            className,
            props.disabled && "bg-disabled",
            props.isValid === "error" && "border-error-500"
          )}
          ref={ref}
          {...props}
        />
        <div
          className={`flex ${
            props.isValid ? "justify-between" : "justify-end"
          }`}
        >
          {/* Error Text */}
          {props.isValid && (
            <div
              className={`${
                props.isValid === "error" ? "text-error-500" : "text-muted-500"
              } text-xs mt-1 ml-2`}
            >
              Try Again
            </div>
          )}

          {props.counterText && (
            <div
              className={`${
                props.isValid === "error" ? "text-error-500" : "text-muted-500"
              } text-xs mt-1 mr-2`}
            >
              {props.counterText}/60
            </div>
          )}
        </div>
      </div>
    );
  }
);
Input.displayName = "Input";

export default Input;
