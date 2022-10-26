import type { NextPage } from "next";
import Head from "next/head";
import { useAsync } from "react-use";
import { PostService } from "../src/client";
import { AdminOnly } from "../src/components/AdminOnly";
import { Calendar } from "../src/components/calendar/Calendar";
import { CalendarWithControls } from "../src/components/calendar/CalendarWithControls";
import { Event } from "../src/components/Event";
import { CreatePostForm } from "../src/components/form/CreatePostForm";
import { CreateUserForm } from "../src/components/form/CreateUserForm";
import { Header } from "../src/components/Header";
import { Post } from "../src/components/Post";
import { useAuth } from "../src/hooks/useAuth";
import { useAuthStore, useEventStore, usePostStore } from "../src/state";

const Feed: NextPage = () => {
    // const isAuthorized = useAuth()
    const events = useEventStore(state => state.events)
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
                <main className="max-w-3xl w-full space-y-4 mt-8">
                    <CalendarWithControls/>
                    {events.map(event => <Event key={event.id} event={event}/>)}
                </main>
            </div>
        </>
    );
};

export default Feed;
