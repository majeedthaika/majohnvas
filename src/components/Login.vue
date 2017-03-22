
<template>
  <md-layout md-align="center" md-gutter="16">
    <md-layout md-flex="35" md-align="center"  style="margin-top:120px;">
        <h1 id="login">Login</h1>

        <md-input-container v-model="username">
          <label>Username</label>
          <md-textarea></md-textarea>
        </md-input-container>

        <md-input-container md-has-password v-model="password">
          <label>Password</label>
          <md-input type="password"></md-input>
        </md-input-container>

        <md-button class="md-raised md-primary" @click.native="login">Sign in</md-button>
    </md-layout>

  </md-layout>
</template>

<script>
import UsersApi from '../api/users.js'
// import router from '../router'

export default {
  name: 'login',
  data () {
    return {
      username: 'admin',
      password: 'password'
    }
  },
  methods: {
    login () {
      console.log('methods.login')
      UsersApi.login(this.username, this.password, function (_response) {
        console.log('lol')
        // NOTE: Posts.index is not yet implemented
        // router.push({ name: 'Dashboard' })
        // console.log('push dashboard')
      })
    }
  }
}
</script>

<style>
#login{
  font-size: 50px;
}
/*#login{
  padding: auto;
}*/
#loginbut{
  width: 100%
}

</style>
