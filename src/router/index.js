import { createRouter, createWebHistory } from 'vue-router'
import TestView from '../views/testView.vue'
import App from '@/App.vue'
import HomeView from '@/views/HomeView.vue'
import DetailedBooka from '../views/DetailedBooka.vue'
import SliderWorks from '../views/SliderWorks.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/test',
      name: 'testView',
      component: TestView
    },
    {
      path: '/detailed-booka', 
      component: DetailedBooka,
    },
    {
      path: '/slider-works',
      component: SliderWorks
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
