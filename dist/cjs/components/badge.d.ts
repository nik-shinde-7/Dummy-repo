import * as React from "react";
import { type VariantProps } from "class-variance-authority";
declare const badgeVariants: (props?: ({
    variant?: "default" | "secondary" | "destructive" | "outline" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
}
declare function Badge({ className, variant, ...props }: BadgeProps): React.JSX.Element;
export default Badge;
