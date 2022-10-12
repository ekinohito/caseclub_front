import { useAttachmentStore } from "../state"
import { AttachmentImage } from "./AttachmentImage"

interface Props {
}
export function Attachments({}: Props) {
    const attachments = useAttachmentStore(state => state.attachments)
    return <div>
        {attachments.map(id => <AttachmentImage key={id} attachmentId={id} className="h-28 w-28 object-contain"/>)}
    </div>
}