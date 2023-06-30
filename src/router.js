import { createRouter, createWebHistory } from "vue-router"; 

import AppHome from './pages/AppHome.vue';
import ProjectList from './pages/ProjectList.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/blog',
            name: 'projects',
            component: ProjectList
        },
    ]
})