import { HTMLAttributes, ReactNode } from "react"
import clsx from "clsx"

interface Props extends HTMLAttributes<HTMLDivElement> {}

export function Paper({children, className, ...rest}: Props) {
    return <div className={clsx("rounded-2xl p-4 bg-white shadow-md", className)} {...rest}>
        {children}
    </div>
}