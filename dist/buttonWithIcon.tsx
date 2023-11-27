import React from "react";
import { cn } from "../utils/utils";
import Button, { buttonVariants } from "./button";
import { VariantProps } from "class-variance-authority";

export interface ButtonWithIconProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  icon?: any;
  label: string;
  iconposition?: "leading" | "trailing";
}

function ButtonWithIcon(props: ButtonWithIconProps) {
  const { icon, iconposition = "leading", label, className } = props;

  return (
    <Button
      className={cn(
        iconposition === "leading"
          ? "flex items-center"
          : "flex flex-row-reverse items-center",
        className
      )}
      {...props}
    >
      {icon} {label}
    </Button>
  );
}

export default ButtonWithIcon;
