import Vue from 'vue'
import store from '../store'
// import formurlencoded from 'form-urlencoded'

export default {
  login (username, password, callback) {
    console.log(store)

    var loginParams = {
      student: {
        email: username,
        password: password
      }
    }

    console.log(username)
    Vue.$http.post('/students/api_sign_in.json', loginParams)
    .then(function (response) {
      console.log(response)
      // store.dispatch('/dashboard')
      callback(response.data)
    })
    .catch(function (response) {
      // store.dispatch('logout')
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
    Vue.$http.get('/students/check_signed_in')
    .then(function (response) {
      store.dispatch('login')
    })
    .catch(function (response) {
      store.dispatch('logout')
    })
  }
}
