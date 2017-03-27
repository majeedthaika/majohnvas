import Vue from 'vue'

export default{
  joinCourse (courseCode, callback) {
    var loginParams = {
      course_code: courseCode
    }
    console.log('joincourse', courseCode)
    Vue.$http.post('/courses/join.json', loginParams)
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
  },
  getPosts (courseCode, callback) {
    Vue.$http.get(`/courses/${courseCode}/posts.json`)
    .then(function (response) {
      callback(response.data)
    })
  }
}
