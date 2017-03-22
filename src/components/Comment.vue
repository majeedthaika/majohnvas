<template>
  <div class="comment">
    <md-dialog md-open-from="#fab" md-close-to="#fab" ref="dialog2">
      <md-dialog-title>Create comment</md-dialog-title>

      <md-dialog-content>
        <form>
          <md-input-container>
            <label>Comment</label>
            <md-textarea maxlength="100"></md-textarea>
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
    <md-list class="custom-list md-triple-line" v-for="comment in 4">
            <!-- Course :{{course.name}}  Status :{{course.active}} -->
      <div v-if="comment%2 == 0">
          <md-layout md-align="center" style="margin-top:10px;">
              <md-layout md-flex="30" md-align="end">
                <router-link tag="li" to="/show_comment">
                <md-card md-with-hover class="md-accent" style="width:300px;">
                  <md-card-header>
                    <div class="md-title">Comment owner</div>
                  </md-card-header>
                  <md-card-content>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                  </md-card-content>
                </md-card>
                </router-link>
              </md-layout>
          </md-layout>

      </div>

      <div v-if="comment%2 != 0">
        <md-layout md-align="center" style="margin-top:10px;">
          <md-layout md-flex="30">
            <router-link tag="li" to="/show_comment">
              <md-card md-with-hover class="md-primary" style="width:300px;">
                <md-card-header>
                  <div class="md-title">Comment owner</div>
                </md-card-header>
                <md-card-content>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </md-card-content>
              </md-card>
            </router-link>
          </md-layout>
        </md-layout>
      </div>
    </md-list>
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

<style>
</style>
