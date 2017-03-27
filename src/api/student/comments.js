import Vue from 'vue'

export default{
  getComment (courseCode, pid, callback) {
    Vue.$http.get(`/courses/${courseCode}/posts/${pid}/comments/1.json`)
    .then(function (response) {
      callback(response.data)
    })
    .catch(function (response) {
    })
  },
  getComments (courseCode, pid, callback) {
    Vue.$http.get(`/courses/${courseCode}/posts/${pid}/comments.json`)
    .then(function (response) {
      callback(response.data)
    })
    .catch(function (response) {
    })
  },
  createComment (courseCode, pid, content, callback) {
    var commentParams = {
      content: content
    }
    Vue.$http.post(`/courses/${courseCode}/posts/${pid}/comments.json`, commentParams)
    .then(function (response) {
      console.log(response)
      // store.state.auth = true
      callback(response.data)
    })
    .catch(function (response) {
      // store.dispatch('logout')
    })
  }
}
