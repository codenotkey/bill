import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// @ts-ignore
import Money from '@/views/Money.vue'
// @ts-ignore
import Budget from '@/views/Budget.vue'
// @ts-ignore
import Labels from '@/views/Labels'
// @ts-ignore
import Notfound from '@/views/Notfound'
// @ts-ignore
import Test from '@/views/test'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
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
    path: '/budget',
    component: Budget
  },
  {
    path:'/test',
    component: Test
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
