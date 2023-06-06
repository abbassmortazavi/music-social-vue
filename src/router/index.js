import { createRouter, createWebHistory } from 'vue-router'
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

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/account',
    component: AccountView,
    children:[
      {
        path: 'profile',
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
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
