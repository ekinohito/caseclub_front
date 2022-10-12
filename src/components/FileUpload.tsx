import { useEffect, useMemo, useRef, useState } from "react"
import { ImagesService } from "../client/services/ImagesService"
import { useAttachmentStore } from "../state"
import { Button } from "./Button"

interface Props {
}
export function FileUpload({}: Props) {
    const ref = useRef<HTMLInputElement>(null)
    const [file, setFile] = useState<File | null>(null)
    const {attachments, addAttachment} = useAttachmentStore()
    const chooseHandler = () => {
        ref.current?.click()
    }

    const inputHandler = () => {
        console.log(ref.current?.files?.[0])
        setFile(ref.current?.files?.[0] ?? null)
    }

    const uploadHandler = async () => {
        if (file) {
            const {id} = await ImagesService.uploadImageImagesPost({file})
            addAttachment(id)
        }
    }
    
    return <div>
        <input type="file" ref={ref} className="hidden" onInput={inputHandler}></input>
        <Button onClick={chooseHandler}>Choose file</Button>
        <Button onClick={uploadHandler} className={`${file ? '' : 'hidden'}`}>Upload</Button>
    </div>
}