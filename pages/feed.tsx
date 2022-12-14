import type { NextPage } from "next";
import Head from "next/head";
import { useAsync } from "react-use";
import { PostService } from "../src/client";
import { AdminOnly } from "../src/components/AdminOnly";
import { Calendar } from "../src/components/calendar/Calendar";
import { CalendarWithControls } from "../src/components/calendar/CalendarWithControls";
import { CreatePostForm } from "../src/components/form/CreatePostForm";
import { CreateUserForm } from "../src/components/form/CreateUserForm";
import { Header } from "../src/components/Header";
import { Post } from "../src/components/Post";
import { useAuth } from "../src/hooks/useAuth";
import { useAuthStore, usePostStore } from "../src/state";

const Feed: NextPage = () => {
    const isAuthorized = useAuth()
    const {posts, setPosts} = usePostStore()
    const status = useAsync(async () => {
        setPosts(await PostService.getPostsPostGet())
    }, [isAuthorized])
    return (
    <>
            <Head>
                <title>Лента новостей</title>
                <meta
                    name="description"
                    content="Новости нашего кейс-клуба"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>
            <div className="flex flex-col items-center px-2">
                <AdminOnly>
                    <div className="max-w-3xl w-full space-y-4 mt-8 flex flex-col items-center">
                        <CreateUserForm/>
                        <CreatePostForm/>
                    </div>
                </AdminOnly>

                <main className="max-w-3xl w-full space-y-4 mt-8">
                    {!status.loading && posts.map(post => <Post post={post} key={post.id}/>)}
                </main>
            </div>
        </>
    );
};

export default Feed;
