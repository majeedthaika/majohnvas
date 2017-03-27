<!-- <template>
  <div class="post">
    <div v-if="checkLoggedIn()">
      <student-sidenav></student-sidenav>
      <md-layout md-gutter md-align="center" style="margin-top:150px;">
        <md-card md-align="center" style="width:600px;">
          <md-card-area>
            <md-card-header>
              <div class="md-title">Title of post</div>
            </md-card-header>

            <md-card-content>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
            </md-card-content>
          </md-card-area>

          <md-card-actions>
            <md-dialog md-open-from="#fab" md-close-to="#fab" ref="dialog2">
              <md-dialog-title>Edit post</md-dialog-title>

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

            <router-link to="/comment">
              <md-button class="md-accent">View comment</md-button>
            </router-link>
            <md-button class="md-accent md-raised" id="fab">Edit</md-button>
          </md-card-actions>
        </md-card>
      </md-layout>
    </div>
  </div>
</template>

<script>
import State from '@/store'
import StudentCommentsApi from '@/api/student/comments.js'
export default {
  components: {
    StudentSidenav: require('@/components/student/Sidenav')
  },
  data () {
    return {
      comment: null
    }
  },
  mounted: function () {
    this.fetchComment()
  },
  methods: {
    fetchComment () {
      var str = document.URL.toString()
      var meat = str.substr(str.length - 6)
      var coursecode = meat.substring(0, 5)
      var pid = meat.slice(-1)
      StudentCommentsApi.getComment(coursecode, pid, _comment => {
        console.log(_comment)
        this.comment = _comment
      })
    },
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
    }
  }
}
</script>

<style>

</style> -->
