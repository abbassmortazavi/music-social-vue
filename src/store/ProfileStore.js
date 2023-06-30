import {
    defineStore
} from 'pinia'
import axios from "axios";

export const useProfileStore = defineStore('profile', {
    state: () => ({
        id: null,
        first_name: null,
        last_name: null,
        email: null,
        location: null,
        image: null,
        description: null,
    }),

    actions: {
        async fetchProfile(id) {
            let res = await axios.get("api/user/show/" + id);
            this.$state.id = res.data.id;
            this.$state.first_name = res.data.first_name;
            this.$state.last_name = res.data.last_name;
            this.$state.location = res.data.location;
            this.$state.description = res.data.description;
            this.$state.image = res.data.image;
            if (res.data.image) {
                this.$state.image = process.env.VUE_APP_URL_API + 'images/users/' + res.data.image;
            } else {
                this.$state.image = process.env.VUE_APP_URL + 'img/avatar.png';
            }

        },
        profileImage(image) {
            return process.env.VUE_APP_URL_API + 'images/users/' + image;
        },
        clearProfile() {
            this.$state.id = null;
            this.$state.first_name = null;
            this.$state.last_name = null;
            this.$state.email = null;
            this.$state.location = null;
            this.$state.description = null;
        }
    },
    persist: true
});