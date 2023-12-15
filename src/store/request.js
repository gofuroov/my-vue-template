import { defineStore } from 'pinia'

export const useRequestStore = defineStore('request', {
    state: () => ({
        count: 0
    }),
    getters: {
        onProcess: (state) => state.count > 0,
    },
    actions: {
        increment() {
            this.count++
        },
        decrement() {
            this.count--
        },
    },
})