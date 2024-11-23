import { createRouter, createWebHistory } from 'vue-router';
import DropdownPage from '../pages/DropdownPage.vue';
import EditorPage from '../pages/EditorPage.vue';

const routes = [
    { path: '/dropdown', name: 'DropdownPage', component: DropdownPage },
    { path: '/editor', name: 'EditorPage', component: EditorPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
