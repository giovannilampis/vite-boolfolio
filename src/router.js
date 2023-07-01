import { createRouter, createWebHistory } from "vue-router"; 

import AppHome from './pages/AppHome.vue';
import ProjectList from './pages/ProjectList.vue';
import SingleProject from './pages/SingleProject.vue';
import NotFound from './pages/NotFound.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/portfolio',
            name: 'projects',
            component: ProjectList
        },
        {
            path: '/portfolio/:slug',
            name: 'project',
            component: SingleProject
        },
        {
            path: '/not-found',
            name: 'not-found',
            component: NotFound
        },
    ]
});

export { router };