import { HTMLAttributes } from "react";
import clsx from 'clsx'
import { OpenAPI } from "../../client";

interface Props extends HTMLAttributes<HTMLImageElement> {
    imageId: number
}

export function UserImage({imageId, className, ...rest}: Props) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img className={clsx('object-cover rounded-full h-8 w-8', className)} src={`${OpenAPI.BASE}/images/${imageId}`} alt="attachment" {...rest}/>
}