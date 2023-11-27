"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { cn } from "../utils/utils";

export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  checkboxType: "default" | "radio" | "circle";
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-[18px] w-[18px] bg-white shrink-0 hover:border-primary-dark-600 hover:bg-primary-dark-300 border border-muted-300 ring-offset-background focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary-dark-300 data-[state=checked]:border-primary-dark-600",
      className,
      `${
        props.checkboxType === "radio"
          ? "rounded-full"
          : props.checkboxType === "circle"
          ? "rounded-full data-[state=checked]:bg-primary-dark-600"
          : "rounded-sm"
      }`,
      props.disabled
        ? "cursor-not-allowed bg-muted-300 hover:bg-muted-300 hover:border-none"
        : ""
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      {props.checkboxType === "radio" ? (
        <span className="w-2 h-2 bg-primary-dark-600 rounded-full"></span>
      ) : (
        <Check
          className={cn(
            "bg-primary-dark-300 text-primary-dark-600 rounded-sm",
            props.checkboxType === "circle"
              ? "rounded-full text-white h-3 w-3 bg-primary-dark-600 "
              : "rounded-sm h-4 w-4"
          )}
        />
      )}
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
