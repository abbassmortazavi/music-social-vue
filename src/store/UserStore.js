import {
    defineStore
} from 'pinia'
import axios from "axios";

export const useUserStore = defineStore('user', {
    state: () => ({
        id: null,
        first_name: null,
        last_name: null,
        email: null,
        location: null,
        image: null,
        description: null,
        token: null
    }),

    actions: {
        async setUserDetails(res) {
            this.$state.id = res.data.user.id,
                this.$state.first_name = res.data.user.first_name,
                this.$state.last_name = res.data.user.last_name,
                this.$state.token = res.data.token,
                this.$state.email = res.data.user.email,
                this.$state.location = res.data.user.location,
                this.$state.description = res.data.user.description
        },

        async fetchUser() {
           // console.log('fetchUser', this.$state.id)
            let res = await axios.get("http://localhost:8082/api/user/show/" + this.$state.id);
            this.$state.id = res.data.id,
            this.$state.first_name = res.data.first_name,
            this.$state.last_name = res.data.last_name,
            this.$state.location = res.data.location,
            this.$state.description = res.data.description
        },
        clearUser() {
            this.$state.id = null
            this.$state.first_name = null,
                this.$state.last_name = null,
                this.$state.token = null,
                this.$state.email = null,
                this.$state.location = null,
                this.$state.description = null
        }
    },
    persist: true
});