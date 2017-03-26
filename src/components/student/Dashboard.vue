<template>
  <div class="posts">

    <div v-if="checkLoggedIn()">
      <student-sidenav></student-sidenav>

      <md-dialog md-open-from="#fab" md-close-to="#fab" ref="dialog2">
        <md-dialog-title>Join course</md-dialog-title>

        <md-dialog-content>
          <form>
            <md-input-container>
              <label>Course code</label>
              <md-textarea maxlength="15"></md-textarea>
            </md-input-container>
          </form>
        </md-dialog-content>

        <md-dialog-actions>
          <md-button class="md-primary" @click.native="closeDialog('dialog2')">Cancel</md-button>
          <md-button class="md-primary" @click.native="closeDialog('dialog2')">Confirm</md-button>
        </md-dialog-actions>
      </md-dialog>

      <md-button class="md-fab md-warn" style="margin-top:20px;" @click.native="openDialog('dialog2')">
        <md-icon>add</md-icon>
      </md-button>

      <md-layout md-gutter md-align="center" style="margin-top:20px;">
        <md-list class="custom-list md-triple-line" v-for="course in 5">
                <!-- Course :{{post.name}}  Status :{{post.active}} -->
          <router-link tag="li" to="/students/post">
            <md-layout md-flex-xsmall="100" md-flex-small="50" md-flex-medium="33">
              <md-card md-with-hover style="width:325px;">
                <md-card-header>
                  <div class="md-title">Course title</div>
                  <div class="md-subhead">Course owner</div>
                </md-card-header>

                <md-card-content>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </md-card-content>
              </md-card>
            </md-layout>
          </router-link>
        </md-list>
      </md-layout>
    </div>
  </div>
</template>

<script>
import State from '@/store'
// import StudentUsersApi from '@/api/student/users.js'

export default {
  components: {
    StudentSidenav: require('@/components/student/Sidenav')
  },
  methods: {
    openDialog (ref) {
      this.$refs[ref].open()
    },
    closeDialog (ref) {
      this.$refs[ref].close()
    },
    onOpen () {
      console.log('Opened')
    },
    onClose (type) {
      console.log('Closed', type)
    },
    viewComment () {
      console.log('view comment')
    },
    checkLoggedIn () {
      return State.state.auth
      // if (State.state.auth) {
      //   return true
      // }
      // StudentUsersApi.studentLoggedIn(function (_response) {
      //   return (State.state.auth && _response.success)
      // })
    }
    // sth () {
    //   console.log('sth')
    //   StudentUsersApi.studentLoggedIn(function (_response) {
    //     // console.log(_response.success)
    //     // console.log(State.state.auth)
    //     console.log(State.state.auth && _response.success)
    //   })
    // }
  }
}
</script>
