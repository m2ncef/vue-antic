import Home from '@/views/home/Index.vue'
import App from '@/App.vue'
import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:catchAll(.*)',
      name: 'home',
      component: Home
    }
  ]
})

export default router
