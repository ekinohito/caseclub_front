import { HTMLAttributes } from "react"
import { OpenAPI } from "../client"
import clsx from "clsx"

interface Props extends HTMLAttributes<HTMLImageElement> {
    attachmentId: number
}
export function AttachmentImage({attachmentId, className, ...rest}: Props) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img className={clsx('object-cover rounded-md', className)} src={`${OpenAPI.BASE}/images/${attachmentId}`} alt="attachment" {...rest}/>
}