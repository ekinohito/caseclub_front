import { useBoolean } from "react-use";
import { PostRead, PostService } from "../client";
import { useAuthStore } from "../state";
import { Button } from "./Button";

interface Props {
    post: PostRead
}

export function Post({post}: Props) {
    const [wasClicked, setWasClicked] = useBoolean(false)
    const isLiked = !post.is_liked === wasClicked
    const likesCount = post.likes + (isLiked ? 1 : -1) * (wasClicked ? 1 : 0)
    const {isAuthenticated} = useAuthStore()
    const onClick = isAuthenticated ? () => {
        PostService.likePostPostIdLikePost(post.id, isLiked)
        setWasClicked(!wasClicked)
    } : () => {}
    return <div className="bg-slate-50 p-4 h-32 rounded-lg">
        {post.text} <br/>
        <Button onClick={onClick} className={`transition-all ${isLiked ? 'text-blue-500 font-bold' : ''}`}>{likesCount} ▲</Button>
    </div>
}