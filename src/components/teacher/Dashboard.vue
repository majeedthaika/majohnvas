<template>
  <div class="posts">

    <div v-if="checkLoggedIn()">
      <teacher-sidenav></teacher-sidenav>

      <md-dialog md-open-from="#fab" md-close-to="#fab" ref="dialog2">
        <md-dialog-title>Create course</md-dialog-title>

        <md-dialog-content>
          <form>
            <md-input-container>
              <label>Course name</label>
              <md-textarea maxlength="15" v-model="courseName"></md-textarea>
            </md-input-container>
          </form>
        </md-dialog-content>

        <md-dialog-actions>
          <md-button class="md-primary" @click.native="closeDialog('dialog2')">Cancel</md-button>
          <md-button class="md-primary" @click.native="add('dialog2',courseName)">Confirm</md-button>
        </md-dialog-actions>
      </md-dialog>

      <md-button class="md-fab md-warn" style="margin-top:20px;" @click.native="openDialog('dialog2')">
        <md-icon>add</md-icon>
      </md-button>

      <md-layout md-gutter md-align="center" style="margin-top:20px;">
        <md-list class="custom-list md-triple-line" v-for="course in courses">
          <router-link tag="li" :to="{ name: 'TeacherPost', params: {coursecode: course.course_code } }">
            <md-layout md-flex-xsmall="100" md-flex-small="50" md-flex-medium="33">
              <md-card md-with-hover style="width:325px;">
                <md-card-header>
                  <div class="md-headline">{{course.name}}</div>
                  <!-- <div class="md-subhead">{{course.}}</div> -->
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
import TeacherCoursesApi from '@/api/teacher/courses.js'
// import TeacherUsersApi from '@/api/teacher/users.js'

export default {
  components: {
    TeacherSidenav: require('@/components/teacher/Sidenav')
  },
  mounted: function () {
    this.getCreatedCourse()
  },
  data () {
    return {
      courseName: '',
      courses: ''
    }
  },
  methods: {
    getCreatedCourse () {
      TeacherCoursesApi.getCourse(_posts => {
        console.log(_posts)
        this.courses = _posts
      })
    },
    openDialog (ref) {
      this.$refs[ref].open()
    },
    closeDialog (ref) {
      this.$refs[ref].close()
    },
    add (ref, courseName) {
      console.log(courseName)
      TeacherCoursesApi.createCourse(courseName, newCourse => {
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
      // TeacherUsersApi.teacherLoggedIn(function (_response) {
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
