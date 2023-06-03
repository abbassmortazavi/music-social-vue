import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Register from "@/views/Register.vue";
import Login from "@/views/Login.vue";
import AccountView from "@/views/AccountView.vue";
import ProfileSection from "@/views/account/ProfileSection.vue";
import EditProfile from "@/views/account/EditProfile.vue";

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
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
