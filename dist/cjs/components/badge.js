"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var class_variance_authority_1 = require("class-variance-authority");
var utils_1 = require("../utils/utils");
var badgeVariants = (0, class_variance_authority_1.cva)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
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
    var className = _a.className, variant = _a.variant, props = tslib_1.__rest(_a, ["className", "variant"]);
    return (React.createElement("div", tslib_1.__assign({ className: (0, utils_1.cn)(badgeVariants({ variant: variant }), className) }, props)));
}
exports.default = Badge;
//# sourceMappingURL=badge.js.map