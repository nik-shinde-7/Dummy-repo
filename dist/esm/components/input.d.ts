import * as React from "react";
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    isValid?: "error" | "neutral";
    counterText?: string;
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export default Input;
