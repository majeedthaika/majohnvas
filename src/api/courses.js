import Vue from 'vue'

export default{
  getCourse () {
    Vue.$http.get('/course')
    .then(function (response) {
    })
    .catch(function (response) {
      console.log(response)
    })
  }
}
