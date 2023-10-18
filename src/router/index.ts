import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {auth} from "@/firebase/config";


// @ts-ignore
const requireAuth = (to, from, next) => {
    let user = auth.currentUser
    if (!user) {
        next({name: 'login'})
    } else {
        next()
    }
}

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            beforeEnter: requireAuth
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/LoginView.vue')
        }, {
            path: '/signup',
            name: 'signup',
            component: () => import('../views/SignupView.vue')
        },


    ]
})

export default router
