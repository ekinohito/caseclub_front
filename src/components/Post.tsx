import { PostRead } from "../client";

interface Props {
    post: PostRead
}

export function Post({post}: Props) {
    return <div className="bg-slate-50">
        {post.text} <br/>
        {post.likes} 👍
    </div>
}