import Vue from 'vue'
import store from '@/store'
// import formurlencoded from 'form-urlencoded'

export default {
  login (username, password, callback) {
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
      store.dispatch('login')
      callback(response.data)
    })
    .catch(function (response) {
      // store.dispatch('logout')
    })
  },
  logout (callback) {
    console.log('studentLogout')
    Vue.$http.delete('/students/api_sign_out.json')
    .then(function (response) {
      store.dispatch('logout')
      callback(response.data)
    })
    .catch(function (response) {
      store.dispatch('logout')
    })
  },
  studentLoggedIn (callback) {
    Vue.$http.get('/students/check_signed_in')
    .then(function (response) {
      callback(response.data)
      // store.dispatch('login')
    })
    .catch(function (response) {
      // store.dispatch('logout')
    })
  }
}
