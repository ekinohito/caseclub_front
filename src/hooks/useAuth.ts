import { useEffect, useState } from "react";
import { UserRead } from "../client";
import { useAuthStore } from "../state";

export function useAuth() {
    const authId = useAuthStore(state => state.authId)
    const [user, setUser] = useState<UserRead | undefined>();
    useEffect(() => {
        setUser(authId)
    }, [authId])
    return user
}