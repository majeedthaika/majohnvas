<template>
  <div class="posts">

    <md-layout md-gutter md-align="center" style="margin-top:20px;">
      <md-list class="custom-list md-triple-line" v-for="course in 6">
              <!-- Course :{{course.name}}  Status :{{course.active}} -->
        <router-link tag="li" to="/show">
          <md-layout md-flex-xsmall="100" md-flex-small="50" md-flex-medium="33">
            <md-card md-with-hover style="width:325px;">
              <md-card-header>
                <div class="md-title">Title of post</div>
                <!-- <div class="md-subhead">Subtitle here</div> -->
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
</template>

<script>
export default {
  data () {
    return {
      prompt: {
        title: 'Edit post',
        ok: 'Done',
        cancel: 'Cancel',
        id: 'name',
        name: 'name',
        placeholder: 'Your post',
        maxlength: 30,
        value: ''
      }
    }
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
    }
  }
}

</script>
