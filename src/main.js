// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import store from './store.js'

Vue.use(ElementUI)
import Axios from 'axios'
Vue.$http = Axios

Vue.config.productionTip = false

// URL
Axios.defaults.baseURL = 'http://localhost:8080/'
Axios.defaults.headers.common.Accept = 'application/json'
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
