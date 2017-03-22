<template>
  <div class="posts">

    <md-dialog md-open-from="#fab" md-close-to="#fab" ref="dialog2">
      <md-dialog-title>Create post</md-dialog-title>

      <md-dialog-content>
        <form>
          <md-input-container>
            <label>Post title</label>
            <md-textarea maxlength="30"></md-textarea>
          </md-input-container>
          <md-input-container>
            <label>Post content</label>
            <md-textarea></md-textarea>
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

      <md-list class="custom-list md-triple-line" v-for="post in 7">
              <!-- Course :{{course.name}}  Status :{{course.active}} -->
        <router-link tag="li" to="/show">
          <md-layout md-flex-xsmall="100" md-flex-small="50" md-flex-medium="33">
            <md-card md-with-hover style="width:325px;">
              <md-card-header>
                <div class="md-title">Post title</div>
                <div class="md-subhead">Post owner</div>
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
    }
  }
}
</script>
