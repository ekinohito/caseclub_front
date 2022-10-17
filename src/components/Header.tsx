import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { useBoolean, useClickAway } from "react-use";
import { OpenAPI } from "../client";
import { useAuth } from "../hooks/useAuth";
import { useAuthStore } from "../state";
import { Button } from "./Button";
import { AuthUserForm } from "./form/AuthUserForm";
import { Icon } from "./Icon";
import { Popup } from "./Popup";
import { User } from "./user/User";

export function Header() {
    const authId = useAuth();
    const resetAuthId = useAuthStore(store => store.resetAuthId);
    const [isOpened, setIsOpened] = useBoolean(false);
    const router = useRouter()
    useEffect(() => {
        setIsOpened(false)
    }, [setIsOpened, authId])
    return (
        <header
            className={`
            bg-blue-400 h-14 w-full flex flex-row items-center justify-center sticky top-0
            backdrop-blur-sm bg-opacity-80 transition-all z-50`}
        >
            <div className="w-full text-white max-w-3xl flex flex-row justify-between items-center">
                <div className="flex flex-row text-xl">
                    <Icon />
                    <h1 className="mx-2 font-bold">Bauman Case Club</h1>
                </div>
                <div className="relative flex flex-row h-full items-center space-x-4">
                    <User onClick={(user) => router.push(`/user/${user.id}`)}/>
                    {authId ? (
                        <Button
                            onClick={async () => {
                                OpenAPI.TOKEN = "";
                                resetAuthId();
                            }}
                        >
                            Выйти
                        </Button>
                    ) : (
                        <Button onClick={() => setIsOpened(true)}>Войти</Button>
                    )}
                    {isOpened && (
                        <Popup onClose={() => setIsOpened(false)}>
                            <AuthUserForm />
                        </Popup>
                    )}
                </div>
            </div>
        </header>
    );
}
