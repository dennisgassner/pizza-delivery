import { createRouter, createWebHistory } from 'vue-router'
import Manage from '../views/Manage.vue'
import Order from '../views/Order.vue'

const routes = [
  {
    path: '/',
    name: 'Order',
    component: Order
  },
  {
    path: '/manage',
    name: 'Manage',
    component: Manage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
