import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../pages/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/Statistics',
    name: 'Statistics',
    component: () => import('../pages/Statistics.vue')
  },
  {
    path: '/game-page',
    name: 'GamePage',
    component: () => import('../pages/GamePage.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
