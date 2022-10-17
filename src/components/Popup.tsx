import { ReactNode, useRef } from "react";
import { useClickAway } from "react-use";

interface Props {
    children?: ReactNode;
    onClose?: () => void;
}

export function Popup({ children, onClose }: Props) {
    const ref = useRef<HTMLDivElement>(null);
    useClickAway(ref, () => onClose?.());
    return (
        <div className="absolute top-full right-0 text-black" ref={ref}>
            {children}
        </div>
    );
}
