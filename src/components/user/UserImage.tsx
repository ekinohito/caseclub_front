import { HTMLAttributes } from "react";
import clsx from 'clsx'
import { OpenAPI } from "../../client";

interface Props extends HTMLAttributes<HTMLImageElement> {
    imageId?: number
}

export function UserImage({imageId, className, ...rest}: Props) {
    const src = imageId == null ? '/avatar.png' : `${OpenAPI.BASE}/images/${imageId}`
    // eslint-disable-next-line @next/next/no-img-element
    return <img className={clsx('object-cover rounded-full h-8 w-8', className)} src={src} alt="avatar" {...rest}/>
}