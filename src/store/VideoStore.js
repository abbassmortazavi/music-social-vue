import {
    defineStore
} from 'pinia'
import axios from "axios";

export const useVideoStore = defineStore('video', {
    state: () => ({
        videos: null
    }),

    actions: {
        async fetchVideosByUserId(userId) {
            let res = await axios.get('api/youtup/' + userId );
            this.$state.videos = res.data;
        },
        clearVideos() {
            this.$state.videos = null;
        }
    },
    persist: true
});