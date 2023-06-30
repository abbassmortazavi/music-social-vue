import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Register from "@/views/Register.vue";
import Login from "@/views/Login.vue";
import AccountView from "@/views/AccountView.vue";
import ProfileSection from "@/views/account/ProfileSection.vue";
import EditProfile from "@/views/account/EditProfile.vue";
import AddSong from "@/views/account/AddSong.vue";
import DeleteSong from "@/views/account/DeleteSong.vue";
import DeleteVideo from "@/views/account/DeleteVideo.vue";
import AddVideo from "@/views/account/AddVideo.vue";
import AddPost from "@/views/account/AddPost.vue";
import EditPost from "@/views/account/EditPost.vue";
import PostById from "@/views/account/PostById.vue";
import PostsSection from "@/views/account/PostsSection.vue";
import {useUserStore} from "@/store/UserStore";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
        beforeEnter: (to, from, next) => {
            useUserStore().id ? next('account/profile/' + useUserStore().id) : next()
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        beforeEnter: (to, from, next) => {
            useUserStore().id ? next('account/profile/' + useUserStore().id) : next()
        }
    },
    {
        path: '/account',
        component: AccountView,
        beforeEnter: (to, from, next) => {
            useUserStore().id ? next() : next('/login')
        },
        children: [
            {
                path: 'profile/:id',
                component: ProfileSection,
            },
            {
                path: 'edit-profile',
                component: EditProfile,
            },
            {
                path: 'add-song',
                name: 'AddSong',
                component: AddSong,
            },
            {
                path: 'delete-song',
                name: 'DeleteSong',
                component: DeleteSong,
            },
            {
                path: 'add-video',
                name: 'AddVideo',
                component: AddVideo,
            },
            {
                path: 'delete-video',
                name: 'DeleteVideo',
                component: DeleteVideo,
            },
            {
                path: 'add-post',
                name: 'AddPost',
                component: AddPost,
            },
            {
                path: 'edit-post/:id',
                name: 'EditPost',
                component: EditPost,
            },
            {
                path: 'post-by-id/:id',
                name: 'PostById',
                component: PostById,
            },
            {
                path: 'posts',
                name: 'PostsSection',
                component: PostsSection,
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
