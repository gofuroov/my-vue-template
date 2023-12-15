import {defineStore} from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        token: localStorage.getItem("access_token") || null,
        user: {},
    }),
    getters: {
        isGuest: (state) => state.token === null,
    },
    actions: {
        login(user, token) {
            this.user = user
            this.token = token
            localStorage.setItem("access_token", token)
        },
        logout() {
            this.user = {}
            this.token = null
            localStorage.removeItem("access_token")
        },
    },
})