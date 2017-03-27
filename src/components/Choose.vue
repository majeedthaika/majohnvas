<template>
  <md-layout md-align="center">
    <md-layout md-flex="25" md-align="center" style="margin-top:150px;">
      <span class="md-display-1">Choose your role</span>
      <!-- <md-layout md-align="center" style="margin-top:20px;"> -->
      <div style="margin-top:20px;">
        <md-button class="md-raised md-primary" @click.native='teacher'>Teacher</md-button>
        <md-button class="md-raised md-primary" @click.native='student'>Student</md-button>
      </div>
      <div class="margin-top:40px;">
        <md-button class="md-primary" style="margin-top:20px;" @click.native="openDialog('dialog2')">Register</md-button>
      </div>
      <div style="margin-top:20px;">
        <md-dialog md-open-from="#fab" md-close-to="#fab" ref="dialog2">
          <md-dialog-title>Register</md-dialog-title>

          <md-dialog-content>
            <form style="margin-bottom:10px;">
              <md-button class="md-primary md-raised md-right" @click.native="closeDialog('dialog2','teacher')">Teacher</md-button>
              <md-button class="md-primary md-raised md-left" @click.native="closeDialog('dialog2','student')">Student</md-button>
            </form>
          </md-dialog-content>

        </md-dialog>

      </div>
    </md-layout>
  </md-layout>
</template>

<script>
import router from '@/router'
export default {
  methods: {
    student () {
      router.push({ name: 'StudentLogin' })
    },
    teacher () {
      router.push({ name: 'TeacherLogin' })
    },
    register () {
      router.push({ name: 'New' })
    },
    openDialog (ref) {
      this.$refs[ref].open()
    },
    closeDialog (ref, type) {
      console.log(type)
      if (type === 'teacher') {
        router.push({ name: 'NewTeacher' })
      } else if (type === 'student') {
        router.push({ name: 'NewStudent' })
      }
      this.$refs[ref].close()
    },
    onOpen () {
      console.log('Opened')
    },
    onClose (type) {
      console.log('Closed', type)
    }
  }
}
</script>

<style lang="css">
</style>
