import { UserImage } from "./UserImage";
import clsx from "clsx"
import { UserRead } from "../../client";
import { useAuth } from "../../hooks/useAuth";

interface Props {
    onClick?: (user: UserRead) => void
}

export function User({onClick}: Props) {
    const authId = useAuth();
    return (
        <>
            {authId && (
                <div className={clsx("flex flex-row items-center space-x-2", onClick && 'cursor-pointer')} onClick={onClick && (() => onClick(authId))}>
                    <UserImage imageId={authId.image_id ?? 1} />
                    <p>{authId.name}</p>
                </div>
            )}
        </>
    );
}
