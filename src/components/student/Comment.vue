<template>
  <div class="comment">
    <div v-if="checkLoggedIn()">
      <student-sidenav></student-sidenav>

      <md-dialog md-open-from="#fab" md-close-to="#fab" ref="dialog2">
        <md-dialog-title>Create comment</md-dialog-title>

        <md-dialog-content>
          <form>
            <md-input-container>
              <label>Comment</label>
              <md-textarea maxlength="100" v-model="content"></md-textarea>
            </md-input-container>
          </form>
        </md-dialog-content>

        <md-dialog-actions>
          <md-button class="md-primary" @click.native="closeDialog('dialog2')">Cancel</md-button>
          <md-button class="md-primary" @click.native="addComment('dialog2',content)">Confirm</md-button>
        </md-dialog-actions>
      </md-dialog>

      <md-button class="md-fab md-warn" style="margin-top:20px;" @click.native="openDialog('dialog2')">
        <md-icon>add</md-icon>
      </md-button>
      <md-list class="custom-list md-triple-line" v-for="comment in comments">
              <!-- Course :{{course.name}}  Status :{{course.active}} -->
        <div v-if="comment.id%2 == 0">
            <md-layout md-align="center" style="margin-top:10px;">
                <md-layout md-flex="30" md-align="end">
                  <router-link tag="li" to="/show_comment">
                  <md-card md-with-hover class="md-accent" style="width:300px;">
                    <md-card-header>
                      <div class="md-title">{{comment.author.first_name}} says:</div>
                      <div class="md-sub-header">{{comment.author.email}}</div>
                    </md-card-header>
                    <md-card-content>
                      {{comment.content}}
                    </md-card-content>
                    <md-card-content>
                      Created: {{comment.created_at}}
                    </md-card-content>
                  </md-card>
                  </router-link>
                </md-layout>
            </md-layout>

        </div>

        <div v-if="comment.id%2 != 0">
          <md-layout md-align="center" style="margin-top:10px;">
            <md-layout md-flex="30">
              <router-link tag="li" to="/show_comment">
                <md-card md-with-hover class="md-primary" style="width:300px;">
                  <md-card-header>
                    <div class="md-title">{{comment.author.first_name}} says:</div>
                    <div class="md-sub-header">{{comment.author.email}}</div>
                  </md-card-header>
                  <md-card-content>
                    {{comment.content}}
                  </md-card-content>
                  <md-card-content>
                    Created: {{comment.created_at}}
                  </md-card-content>
                </md-card>
              </router-link>
            </md-layout>
          </md-layout>
        </div>
      </md-list>
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
      comments: null,
      content: null
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
      StudentCommentsApi.getComments(coursecode, pid, _comment => {
        console.log(_comment)
        this.comments = _comment
      })
    },
    openDialog (ref) {
      this.$refs[ref].open()
    },
    closeDialog (ref) {
      this.$refs[ref].close()
    },
    addComment (ref, content) {
      var str = document.URL.toString()
      var meat = str.substr(str.length - 6)
      var coursecode = meat.substring(0, 5)
      var pid = meat.slice(-1)
      StudentCommentsApi.createComment(coursecode, pid, content, newComment => {
        this.comments.push(newComment)
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
    }
  }
}
</script>

<style>
</style>
