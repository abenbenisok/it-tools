import { layouts } from './layouts/index';
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/Home.page.vue';
import NotFound from './pages/404.page.vue';
import { tools } from './tools';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    ...tools.map(({ path, name, component, ...config }) => ({ path, name, component, meta: { isTool: true, layout: layouts.toolLayout, name, ...config } })),
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  ],
});

export default router;