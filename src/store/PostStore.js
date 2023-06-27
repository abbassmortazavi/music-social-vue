import {
    defineStore
} from 'pinia'
import axios from "axios";

export const usePostStore = defineStore('post', {
    state: () => ({
        posts: null
    }),

    actions: {
        async fetchPostsByUserId(userId) {
            let res = await axios.get('api/post/' + userId);
            this.$state.posts = res.data.data.posts;
        },
        postImage(image) {
            return process.env.VUE_APP_URL_API + 'posts/' + image;
        },

        clearSongs() {
            this.$state.posts = null;
        }
    },
    persist: true
});