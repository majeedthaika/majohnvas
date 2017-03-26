
<template>
  <md-layout md-align="center" md-gutter="16">
    <md-layout md-flex="35" md-align="center"  style="margin-top:120px;">
        <h1 id="login">Student login</h1>

        <md-input-container>
          <label>Username</label>
          <md-textarea v-model="username"></md-textarea>
        </md-input-container>

        <md-input-container md-has-password>
          <label>Password</label>
          <md-input type="password" v-model="password"></md-input>
        </md-input-container>

        <md-button class="md-raised md-primary" @click.native="login">Sign in</md-button>
    </md-layout>
  </md-layout>
</template>

<script>
import StudentUsersApi from '@/api/student/users.js'
import router from '@/router'
import State from '@/store.js'
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      console.log('methods.login')
      StudentUsersApi.login(this.username, this.password, function (_response) {
        // console.log('lol')
        router.push({name: 'StudentDashboard'})
        // NOTE: Posts.index is not yet implemented
        // router.push({ name: 'Dashboard' })
        // console.log('push dashboard')
        console.log(State.state.auth)
      })
    }
  }
}
</script>

<style>
/*#login{
  font-size: 50px;
}*/
/*#login{
  padding: auto;
}*/
#loginbut{
  width: 100%
}

</style>
