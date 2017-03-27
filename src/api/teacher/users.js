import Vue from 'vue'
import store from '@/store'
// import formurlencoded from 'form-urlencoded'

export default {
  login (username, password, callback) {
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
  teacherLoggedIn (callback) {
    Vue.$http.get('/teachers/check_signed_in')
    .then(function (response) {
      callback(response.data)
      // store.dispatch('login')
    })
    .catch(function (response) {
      // store.dispatch('logout')
    })
  },
  create (firstname, lastname, email, password, callback) {
    var loginParams = {
      teacher: {
        email: email,
        password: password,
        first_name: firstname,
        last_name: lastname
      }
    }

    console.log('teacher', loginParams)
    Vue.$http.post('/teachers.json', loginParams)
    .then(function (response) {
      console.log(response)
      // store.dispatch('login')
      callback(response.data)
    })
    .catch(function (response) {
      // store.dispatch('logout')
    })
  }
}
