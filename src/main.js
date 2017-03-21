// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

Vue.use(VueMaterial)
import store from './store.js'

import Axios from 'axios'
Vue.$http = Axios

Vue.config.productionTip = false

// URL
Axios.defaults.baseURL = 'http://localhost:8080/'
// Axios.defaults.headers.common.Accept = 'application/x-www-form-urlencoded'
Axios.defaults.withCredentials = true
import UsersApi from './api/users'
UsersApi.checkLoggedIn()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
