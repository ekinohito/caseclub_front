import create from "zustand";
import { persist } from "zustand/middleware";
import { PostRead, UserRead } from "./client";
import { EventRead } from "./client/models/EventRead";

interface AuthState {
    authId?: UserRead;
    token?: string;
    setAuthId: (id: UserRead, token: string) => void;
    resetAuthId: () => void;
}
export const useAuthStore = create(
    persist<AuthState>(
        (set) => ({
            authId: undefined,
            token: undefined,
            setAuthId(id, token) {
                set({ authId: id, token });
            },
            resetAuthId() {
                set({ authId: undefined, token: undefined });
            },
        }),
        { name: "auth" }
    )
);

interface PostState {
    posts: PostRead[];
    setPosts: (new_posts: PostRead[]) => void;
    addPost: (new_post: PostRead) => void;
}
export const usePostStore = create<PostState>((set) => ({
    posts: [],
    setPosts(new_posts) {
        set({ posts: new_posts });
    },
    addPost(new_post) {
        set((state) => ({ posts: [new_post, ...state.posts] }));
    },
}));

interface EventState {
    events: EventRead[];
    setEvents: (events: EventRead[]) => void;
    clearEvents: () => void;
}

export const useEventStore = create<EventState>((set) => ({
    events: [],
    setEvents(events) {
        set({ events });
    },
    clearEvents() {
        set({ events: [] })
    },
}));
