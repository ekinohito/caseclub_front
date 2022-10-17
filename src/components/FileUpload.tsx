import { ReactNode, useEffect, useMemo, useRef, useState } from "react"
import { ImagesService } from "../client/services/ImagesService"
import { Button } from "./Button"

interface Props {
    onFileUploaded?: (id: number) => void
    children?: ReactNode
}
export function FileUpload({onFileUploaded, children}: Props) {
    const ref = useRef<HTMLInputElement>(null)
    const chooseHandler = () => {
        ref.current?.click()
    }

    const inputHandler = async () => {
        const file = ref.current?.files?.[0] ?? null
        if (file) {
            const {id} = await ImagesService.uploadImageImagesPost({file})
            onFileUploaded?.(id)
        }
    }
    
    return <div>
        <input type="file" ref={ref} className="hidden" onInput={inputHandler}></input>
        <Button type="button" color="blue" onClick={chooseHandler}>{children}</Button>
    </div>
}