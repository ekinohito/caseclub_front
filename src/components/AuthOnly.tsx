import { ReactNode } from "react";
import { useAuth } from "../hooks/useAuth";

interface Props {
    children?: ReactNode
}

export function AuthOnly({children}: Props) {
    const authId = useAuth()
    const isAuth = !!authId
    return <>{isAuth && children}</>
}