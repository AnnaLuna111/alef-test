import { createRouter, createWebHistory } from 'vue-router';
import FormPage from '../views/FormPage.vue';
import Preview from '../views/Preview.vue';

const routes = [
  {
    path: '/',
    name: 'FormPage',
    component: FormPage,
  },
  {
    path: '/preview',
    name: 'Preview',
    component: Preview,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
