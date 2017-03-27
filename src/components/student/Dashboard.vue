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
              <md-textarea maxlength="5"></md-textarea>
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
        <md-list class="custom-list md-triple-line" v-for="course in courses">
          <router-link tag="li" :to="{ name: 'StudentPost', params: {coursecode: course.course_code } }">
            <md-layout md-flex-xsmall="100" md-flex-small="50" md-flex-medium="33">
              <md-card md-with-hover style="width:325px;">
                <md-card-header>
                  <div class="md-headline">{{course.name}}</div>
                </md-card-header>

                <md-card-content>
                  <span class="md-body-2">Code: {{course.course_code}}</span>
                  <div>
                    <span class="md-sub-heading">Created: {{strDate(course.created_at)}}</span>
                  </div>
                  <div>
                    <span class="md-sub-heading">Updated: {{strDate(course.updated_at)}}</span>
                  </div>
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
import StudentCoursesApi from '@/api/student/courses.js'
// import StudentUsersApi from '@/api/student/users.js'

export default {
  components: {
    StudentSidenav: require('@/components/student/Sidenav')
  },
  mounted: function () {
    this.getJoinedCourse()
    this.strDate()
  },
  data () {
    return {
      courseCode: '',
      courses: ''
    }
  },
  methods: {
    getJoinedCourse () {
      StudentCoursesApi.getCourse(_posts => {
        console.log(_posts)
        this.courses = _posts
      })
    },
    getPost () {
      // StudentCoursesApi.
    },
    openDialog (ref) {
      this.$refs[ref].open()
    },
    closeDialog (ref) {
      this.$refs[ref].close()
    },
    join (ref, courseCode) {
      console.log(courseCode)
      StudentCoursesApi.joinCourse(courseCode, newCourse => {
        this.courses.push(newCourse)
      })
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
      // StudentUsersApi.studentLoggedIn(function (_response) {
      //   return (State.state.auth && _response.success)
      // })
    },
    strDate (date) {
      var str = new Date(date).toString()
      return str.substring(0, str.length - 14)
    }
  }
}
</script>
