import type { NextPage } from "next";
import Head from "next/head";
import { useAsync } from "react-use";
import { PostService } from "../src/client";
import { Attachments } from "../src/components/Attachments";
import { FileUpload } from "../src/components/FileUpload";
import { Header } from "../src/components/Header";
import { Post } from "../src/components/Post";
import { useAuthStore } from "../src/state";

const Feed: NextPage = () => {
    const isAuthorized = useAuthStore(state => state.isAuthenticated)
    const posts = useAsync(PostService.getPostsPostGet, [isAuthorized])
    return (
        <>
            <Header/>
            <FileUpload/>
            <Attachments/>
            <div className="flex flex-col items-center">
                <Head>
                    <title>Create Next App</title>
                    <meta
                        name="description"
                        content="Generated by create next app"
                    />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main className="max-w-3xl w-full space-y-4 mt-8">
                    {!posts.loading && posts.value?.map(post => <Post post={post} key={post.id}/>)}
                </main>
            </div>
        </>
    );
};

export default Feed;
