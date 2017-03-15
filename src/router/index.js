import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import Histogram from '@/components/Histogram'
import Clicker from '@/components/Clicker'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/histogram',
      name: 'Histogram',
      component: Histogram
    },
    {
      path: '/clicker',
      name: 'Clicker',
      component: Clicker
    }
  ]
})
