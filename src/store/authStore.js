import { create } from "zustand";

const useAuthStore = create((set) => ({

    user: null,

    accessToken: null,

    isAuthenticated: false,

    loading: true,

    setAuth: (user, accessToken) => set({
        user,
        accessToken,
        isAuthenticated: true,
        loading: false
    }),

    setAccessToken: (accessToken) => set(state => ({
        ...state,
        accessToken
    })),

    setLoading: (loading) => set({ loading }),

    logout: () => set({
        user: null,
        accessToken: null,
        isAuthenticated: false,
        loading: false
    })

}));

export default useAuthStore;