import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import { userRoles } from '@/api/auth-api/common/userRoles';

Vue.use(VueRouter)

const isAuthorized = Object.prototype.hasOwnProperty.call(localStorage, 'token')
const authGuard = function (to, from, next) {
  if (!isAuthorized) {
    next({ name: 'login' })
  } else {
    next()
  }
}
const managerAuthGuard = function (to, from, next) {
  if (!isAuthorized) {
    next({ name: 'login' })
  } else if (localStorage.getItem('userRole') !== userRoles.moderator) {
    next({ name: 'home' })
  } else {
    next();
  }
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: authGuard
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue')
  },
  {
    path: '/registration',
    name: 'registration',
    component: () => import('@/views/RegistrationView.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
