import { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLButtonElement> {
}
export function Button({onClick, children, className, ...rest}: Props) {
    return <button onClick={onClick} className={`px-4 py-2 ${className}`} {...rest}>
        {children}
    </button>
}