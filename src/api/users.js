import Vue from 'vue'
import store from '../store'

export default {
  login (username, password, callback) {
    console.log(store)
    var loginParams = {
      username: username,
      password: password
    }
    Vue.$http.post('/login', loginParams)
    console.log('post method')
    .then(function (response) {
      console.log('ggggggggg')
      store.dispatch('/Dashboard')
      callback(response.data)
    })
    .catch(function (response) {
      store.dispatch('logout')
    })
  },
  logout (callback) {
    console.log(store)
    Vue.$http.delete('/login')
    .then(function (response) {
      store.dispatch('logout')
      callback(response.data)
    })
    .catch(function (response) {
      store.dispatch('logout')
    })
  },
  checkLoggedIn () {
    Vue.$http.get('/')
    .then(function (response) {
      store.dispatch('login')
    })
    .catch(function (response) {
      store.dispatch('logout')
    })
  }
}
