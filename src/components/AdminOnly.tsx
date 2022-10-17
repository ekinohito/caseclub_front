import { ReactNode } from "react";
import { useAuth } from "../hooks/useAuth";

interface Props {
    children?: ReactNode
}

export function AdminOnly({children}: Props) {
    const authId = useAuth()
    const isAdmin = !!authId?.roles?.includes('admin')
    return <>{isAdmin && children}</>
}