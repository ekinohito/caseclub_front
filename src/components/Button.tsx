import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    color?: 'white' | 'black' | 'blue' | 'red'
}
export function Button({ color="white", onClick, children, className, ...rest }: Props) {
    return (
        <button
            onClick={onClick}
            className={clsx(
                "px-4 py-2 rounded-md bg-opacity-5 hover:bg-opacity-10 transition-all",
                {
                    white: "bg-white",
                    black: "bg-black",
                    blue: "bg-blue-600",
                    red: "bg-red-600"
                }[color],
                className
            )}
            {...rest}
        >
            {children}
        </button>
    );
}
