import { HTMLAttributes } from "react"
import { OpenAPI } from "../client"
import { useAttachmentStore } from "../state"

interface Props extends HTMLAttributes<HTMLImageElement> {
    attachmentId: number
}
export function AttachmentImage({attachmentId, ...rest}: Props) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={`${OpenAPI.BASE}/images/${attachmentId}`} alt="attachment" {...rest}/>
}