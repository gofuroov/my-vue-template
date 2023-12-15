import {defineStore} from 'pinia'

export const useLayoutStore = defineStore('layout', {
    state: () => ({
        sidebarCollapsed: localStorage.getItem("sidebarCollapsed") === "true" || false,
    }),
    getters: {

    },
    actions: {
        toggleSidebarCollapse() {
            this.sidebarCollapsed = !this.sidebarCollapsed
            localStorage.setItem("sidebarCollapsed", this.sidebarCollapsed)
        },
    },
})
