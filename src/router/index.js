import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// @ts-ignore
import Money from '@/views/Money.vue'
import Statistics from '@/views/Statistics'
import Labels from '@/views/Labels'
import Notfound from '@/views/Notfound'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/money'
  },
  {
    path: '/money',
    component: Money
  },
  {
    path: '/labels',
    component: Labels
  },
  {
    path: '/statistics',
    component: Statistics
  },
  {
    path: '*',
    component: Notfound
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
