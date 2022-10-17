import create from "zustand";
import { persist } from "zustand/middleware";
import { PostRead, UserRead } from "./client";

interface AuthState {
    authId?: UserRead;
    setAuthId: (id: UserRead) => void;
    resetAuthId: () => void;
}
export const useAuthStore = create(
    persist<AuthState>(
        (set) => ({
            authId: undefined,
            setAuthId(id) {
                set({ authId: id });
            },
            resetAuthId() {
                set({ authId: undefined });
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
    setPosts: (new_posts) => {
        set({ posts: new_posts });
    },
    addPost: (new_post) => {
        set((state) => ({ posts: [new_post, ...state.posts] }));
    },
}));
