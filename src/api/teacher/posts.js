import Vue from 'vue'

export default{
  getPost (courseCode, callback) {
    Vue.$http.get(`/courses/${courseCode}/posts.json`)
    .then(function (response) {
      callback(response.data)
    })
    .catch(function (response) {
    })
  },
  createPost (courseCode, title, content, callback) {
    var courseParams = {
      title: title,
      content: content
    }
    Vue.$http.post(`/courses/${courseCode}/posts.json`, courseParams)
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
