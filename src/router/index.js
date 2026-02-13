import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.view.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/notes',
      name: 'Notes',
      component: () => import('../views/About.view.vue'),
    },
    {
      path: '/photos',
      name: 'Photos',
      component: () => import('../views/Photos.view.vue'),
    }
  ],
})

export default router
