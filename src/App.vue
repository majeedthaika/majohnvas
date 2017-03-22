<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <div v-if="$store.getters.loggedIn"> -->
    <div v-if="checkLoggedIn()== true">
      <left-sidenav></left-sidenav>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import State from './store'
export default {
  name: 'app',
  components: {
    LeftSidenav: require('./components/Sidenav')
  },
  methods: {
    checkLoggedIn () {
      console.log('checkLoggedIn' + State.state.auth)
      if (State.state.auth) {
        return true
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
