import {
    defineStore
} from 'pinia'
import axios from "axios";

export const useSongStore = defineStore('song', {
    state: () => ({
        songs: null,
        artistId: null,
        artistName: null,
    }),

    actions: {
        async fetchSongsByUserId(userId) {
            let res = await axios.get('api/user/' + userId + '/songs');
            this.$state.songs = res.data.songs;
            this.$state.artistId = res.data.id;
            this.$state.artistName = res.data.first_name;
        },
        clearSongs() {
            this.$state.songs = null;
        }
    },
    persist: true
});