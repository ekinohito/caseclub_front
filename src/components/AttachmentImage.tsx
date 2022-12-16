/* eslint-disable @next/next/no-img-element */
import { HTMLAttributes } from "react"
import { OpenAPI } from "../client"
import clsx from "clsx"

interface Props extends HTMLAttributes<HTMLDivElement> {
    attachmentId: number
}
export function AttachmentImage({attachmentId, className, ...rest}: Props) {
    return <div className={clsx("relative overflow-hidden rounded-md h-fit", className)} {...rest}>
        <img className={'w-full object-contain max-h-80 z-10 relative'} src={`${OpenAPI.BASE}/images/${attachmentId}`} alt="attachment"/>
        <img className={'absolute top-0 w-full h-full blur-xl'} src={`${OpenAPI.BASE}/images/${attachmentId}`} alt=""/>
    </div>
}