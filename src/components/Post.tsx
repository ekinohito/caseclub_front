import { useBoolean } from "react-use";
import { PostRead, PostService } from "../client";
import { useAuth } from "../hooks/useAuth";
import { AttachmentImage } from "./AttachmentImage";
import { Button } from "./Button";
import { Paper } from "./Paper";
import { DateTime } from "luxon"

interface Props {
    post: PostRead
}

export function Post({post}: Props) {
    const [wasClicked, setWasClicked] = useBoolean(false)
    const isLiked = !post.is_liked === wasClicked
    const likesCount = post.likes + (isLiked ? 1 : -1) * (wasClicked ? 1 : 0)
    const authId = useAuth()
    const onClick = authId ? () => {
        PostService.likePostPostIdLikePost(post.id, isLiked)
        setWasClicked(!wasClicked)
    } : () => {}
    return <Paper>
        <p className="text-blue-300 text-sm mb-2">{DateTime.fromISO(post.created_at, {zone: 'utc'}).toRelative({locale: "ru"})}</p>
        <p className="text-lg mb-4">{post.text}</p>
        <div className="flex flex-row w-full max-h-80 space-x-2">
            {post.images.map(image => <div key={image} className="flex-1 h-80">
                <AttachmentImage attachmentId={image} className="w-full h-full"/>
            </div>)}
        </div>
        <Button onClick={onClick} className={`transition-all text-xl ${isLiked ? 'text-blue-500' : ''}`}>
            {isLiked ? '♥' : '♡'} {likesCount}
        </Button>
    </Paper>
}