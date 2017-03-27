import Vue from 'vue'

export default{
  createCourse (courseName, callback) {
    var loginParams = {
      name: courseName
    }
    console.log(courseName)
    Vue.$http.post('/courses.json', loginParams)
    .then(function (response) {
      console.log(response)
      callback(response.data)
    })
    .catch(function (response) {
      // store.dispatch('logout')
    })
  },
  getCourse (callback) {
    Vue.$http.get('/courses.json')
    .then(function (response) {
      console.log(response)
      callback(response.data)
    })
    .catch(function (response) {
      console.log(response)
    })
  }
}
