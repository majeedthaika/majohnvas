import Vue from 'vue'
import store from '@/store'
// import formurlencoded from 'form-urlencoded'

export default {
  login (username, password, callback) {
    // console.log(store)

    var loginParams = {
      teacher: {
        email: username,
        password: password
      }
    }

    console.log(username)
    Vue.$http.post('/teachers/api_sign_in.json', loginParams)
    .then(function (response) {
      console.log(response)
      store.dispatch('login')
      callback(response.data)
    })
    .catch(function (response) {
      // store.dispatch('logout')
    })
  },
  logout (callback) {
    console.log('teacher logout')
    Vue.$http.delete('/teachers/api_sign_out.json')
    .then(function (response) {
      store.dispatch('logout')
      // callback(response.data)
    })
    .catch(function (response) {
      store.dispatch('logout')
    })
  },
  checkLoggedIn () {
    Vue.$http.get('/teachers/check_signed_in')
    .then(function (response) {
      // store.dispatch('login')
    })
    .catch(function (response) {
      // store.dispatch('logout')
    })
  }
}
