import { __assign, __rest } from "tslib";
import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../utils/utils";
var badgeVariants = cva("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
            outline: "text-white border border-V2MBPrimaryBlueLight",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
function Badge(_a) {
    var className = _a.className, variant = _a.variant, props = __rest(_a, ["className", "variant"]);
    return (React.createElement("div", __assign({ className: cn(badgeVariants({ variant: variant }), className) }, props)));
}
export default Badge;
//# sourceMappingURL=badge.js.map