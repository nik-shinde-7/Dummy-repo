import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-secondary text-primary hover:text-white hover:bg-primary dis ring-1 disabled:hover:bg-secondary ring-secondary",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "text-secondary hover:text-primary hover:bg-secondary ring-1 disabled:hover:bg-secondary ring-secondary",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        danger:
          "bg-warning/90 hover:bg-warning ring-1 disabled:hover:bg-warning ring-warning",
        warning:
          "bg-warning/90 hover:bg-warning ring-1 disabled:hover:bg-warning ring-warning",
        success:
          "bg-success/90 hover:bg-success ring-1 disabled:hover:bg-success ring-success",
        defaultDark:
          "bg-tertiary-900 text-white hover:bg-tertiary-800 ring-1 disabled:hover:bg-tertiary-900 ring-tertiary-900",
        primaryBlue:
          "bg-primary-dark-700 text-white hover:bg-primary-dark-800 ring-1 disabled:hover:bg-primary-dark-900 ring-primary-dark-900",
        white:
          "bg-white text-primary-dark-900 hover:bg-muted-200 ring-1 disabled:hover:bg-muted-200 ring-muted-200",
        gray: "bg-white text-muted-700 hover:bg-muted-200 ring-1 disabled:hover:bg-muted-200 ring-muted-200",
        blueGhost:
          "text-V2MBPrimaryBlue-700 hover:bg-muted-200 disabled:hover:bg-muted-200 ",
        mutedGhost:
          "text-muted-700 hover:bg-muted-200 disabled:hover:bg-muted-200 ",
        primaryError:
          "text-white bg-error-500 hover:bg-error-600 ring-1 disabled:hover:bg-error-500 ring-error-500",
        secondaryError:
          "text-error-500 bg-error-50 hover:bg-error-25 disabled:hover:bg-muted-200",
        tertiaryError:
          "text-error-500 bg-white hover:bg-error-50 ring-1 disabled:hover:bg-muted-200 ring-error-300",
        errorLink: "text-error-500 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        md: "h-10 rounded-md px-5",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-md px-10",
        "2xl": "h-16 rounded-md px-12",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, onClick, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        onClick={onClick}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export default Button;
