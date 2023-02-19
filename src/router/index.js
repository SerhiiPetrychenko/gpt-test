import {checkCurrentUser} from "@/helpers/auth.helper";
import { createRouter, createWebHistory } from 'vue-router';
import Welcome from "@/pages/Welcome.vue";

const routes = [
    {
        path: '/',
        name: 'Welcome',
        meta: {
            requiresAuth: false,
        },
        component: Welcome,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    linkActiveClass: 'active-link',
    routes,
});

export default router;
