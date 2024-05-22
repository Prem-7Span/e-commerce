import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
    state: () => ({
        token: null,
        userDetail: null,
    }),
    getters: {
        getToken(state) {
            return state.token;
        },
        getUserDetail(state) {
            return state.userDetail;
        },
    },
    actions: {
        setToken(token) {
            this.token = token;
        },
        setUserDetail(data) {
            this.userDetail = data;
        },
        logout() {
            this.token = null;
        },
    },
    persist: true
});
