import { createRouter, createWebHistory } from 'vue-router'

import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AbountView.vue";

const routerHistory = createWebHistory()
const router = createRouter({
    history: routerHistory,
    strict: true,
    routes: [
        {
            path: '/',
            component: HomeView
        },
        {
            path: '/about',
            component: AboutView
        },
    ]
})
export default router;