import create from 'zustand'


interface AuthState {
    isAuthenticated: boolean,
    setIsAuthenticated: (is: boolean) => void
}
export const useAuthStore = create<AuthState>((set) => ({
    isAuthenticated: false,
    setIsAuthenticated: (is: boolean) => {set({isAuthenticated: is})}
}))

interface AttachmentState {
    attachments: number[]
    addAttachment: (new_attachment: number) => void
}
export const useAttachmentStore = create<AttachmentState>((set) => ({
    attachments: [],
    addAttachment: (new_attachment) => {set(state => ({attachments: [...state.attachments, new_attachment]}))}
}))