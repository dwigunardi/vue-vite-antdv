import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: () => import('./components/Home.vue') },
  { path: '/test', component: () => import('./components/Test.vue') },
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;