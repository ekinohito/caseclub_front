import Head from "next/head";
import { useRouter } from "next/router";
import { useAsync, useAsyncFn } from "react-use";
import { UserService } from "../../src/client";
import { Header } from "../../src/components/Header";
import { UserImage } from "../../src/components/user/UserImage";

export default function User() {
    const router = useRouter();
    const { id } = router.query;
    const user = useAsync(async () => id && UserService.getUsersUserIdGet(+id), [id])
    return (
        <>
            <Head>
                <title>Лента новостей</title>
                <meta name="description" content="Новости нашего кейс-клуба" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div className="flex flex-col items-center px-2">
                <main className="max-w-3xl w-full space-y-4 mt-8">
                {user.value && <div className="flex flex-row space-x-4 items-start">
                    <UserImage imageId={user.value.image_id} className="w-32 h-32"/>
                    <div className="text-2xl">{user.value.name}</div>
                    <div className="text-gray-600">{user.value.email}</div>
                    {user.value.roles?.split(',').map(role => <div key={role} className="bg-gray-400 rounded-full px-3">{role}</div>)}
                </div>}
                </main>
            </div>
        </>
    );
}
