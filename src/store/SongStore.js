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
    //8:13 => 32
    actions: {
        async fetchSongsByUserId(userId, firstName) {
            let res = await axios.get('api/user/' + userId + '/songs');
            this.$state.songs = res.data;
            this.$state.artistId = userId;
            this.$state.artistName = firstName;
        },
        clearSongs() {
            this.$state.songs = null;
        }
    },
    persist: true
});