<template>
  <div id="register">
    <span class="md-display-1">Register: Teacher</span>
    <form novalidate @submit.stop.prevent="submit">

      <md-input-container>
        <label>Firstname</label>
        <md-input v-model="firstname"></md-input>
      </md-input-container>

      <md-input-container>
        <label>Lastname</label>
        <md-input v-model="lastname"></md-input>
      </md-input-container>

      <md-input-container>
        <label>Email</label>
        <md-textarea v-model="email"></md-textarea>
      </md-input-container>

      <md-input-container md-has-password>
        <label>Password</label>
        <md-input type="password" v-model="password"></md-input>
      </md-input-container>

      <md-button class="md-primary md-raised" @click.native="submit">Submit</md-button>
    </form>
  </div>
</template>

<script>
import router from '@/router'
import TeacherUsersApi from '@/api/teacher/users.js'

export default {
  data () {
    return {
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    }
  },
  methods: {
    submit () {
      console.log('teacher register')
      TeacherUsersApi.create(this.firstname, this.lastname, this.email, this.password, function (_response) {
        router.push({ name: 'Choose' })
      })
    }
  }
}
</script>

<style>
  #register {
    margin-top: 40px;
    padding: 40px;
  }
</style>
