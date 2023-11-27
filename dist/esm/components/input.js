import { __assign, __rest } from "tslib";
import { cn } from "../utils/utils";
import * as React from "react";
var Input = React.forwardRef(function (_a, ref) {
    var className = _a.className, type = _a.type, props = __rest(_a, ["className", "type"]);
    return (React.createElement("div", { className: "flex flex-col" },
        React.createElement("input", __assign({ type: type, className: cn("flex h-10 w-full rounded-md border border-primary-light bg-primary px-3 py-2 text-sm file:border-0 file:bg-secondary file:rounded-md file:text-sm file:font-medium placeholder:text-white focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50", className, props.disabled && "bg-disabled", props.isValid === "error" && "border-error-500"), ref: ref }, props)),
        React.createElement("div", { className: "flex ".concat(props.isValid ? "justify-between" : "justify-end") },
            props.isValid && (React.createElement("div", { className: "".concat(props.isValid === "error" ? "text-error-500" : "text-muted-500", " text-xs mt-1 ml-2") }, "Try Again")),
            props.counterText && (React.createElement("div", { className: "".concat(props.isValid === "error" ? "text-error-500" : "text-muted-500", " text-xs mt-1 mr-2") },
                props.counterText,
                "/60")))));
});
Input.displayName = "Input";
export default Input;
//# sourceMappingURL=input.js.map