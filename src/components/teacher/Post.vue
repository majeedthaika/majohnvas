<template>
  <div class="posts">
    <div v-if="checkLoggedIn()">
      <student-sidenav></student-sidenav>

      <md-dialog md-open-from="#fab" md-close-to="#fab" ref="dialog2">
        <md-dialog-title>Create post</md-dialog-title>

        <md-dialog-content>
          <form>
            <md-input-container>
              <label>Post title</label>
              <md-textarea maxlength="30" v-model="title"></md-textarea>
            </md-input-container>
            <md-input-container>
              <label>Post content</label>
              <md-textarea v-model="content"></md-textarea>
            </md-input-container>
          </form>
        </md-dialog-content>

        <md-dialog-actions>
          <md-button class="md-primary" @click.native="closeDialog('dialog2')">Cancel</md-button>
          <md-button class="md-primary" @click.native="addPost('dialog2',title,content)">Confirm</md-button>
        </md-dialog-actions>
      </md-dialog>

      <md-button class="md-fab md-warn" style="margin-top:20px;" @click.native="openDialog('dialog2')">
        <md-icon>add</md-icon>
      </md-button>

      <md-layout md-gutter md-align="center" style="margin-top:20px;">

        <md-list class="custom-list md-triple-line" v-for="post in posts">
          <router-link tag="li" :to="{ name: 'TeacherComment', params: {coursecode: post.course_code, pid: post.id} }">
            <md-layout md-flex-xsmall="100" md-flex-small="50" md-flex-medium="33">
              <md-card md-with-hover style="width:325px;">
                <md-card-header>
                  <div class="md-headline">{{post.title}}</div>
                  <div class="md-subhead">{{post.course_code}}</div>
                </md-card-header>

                <md-card-content>
                  {{post.content}}
                  <div>
                    <span class="md-sub-heading">Created: {{post.created_at}}</span>
                  </div>
                  <div>
                    <span class="md-sub-heading">Updated: {{post.updated_at}}</span>
                  </div>
                </md-card-content>
                <md-card-content>
                  Created by: {{post.author_type}}
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
import TeacherPostsApi from '@/api/teacher/posts.js'

export default {
  data () {
    return {
      curCourseCode: null,
      posts: null,
      title: '',
      content: ''
    }
  },
  mounted: function () {
    this.fetchData()
  },
  components: {
    StudentSidenav: require('@/components/teacher/Sidenav')
  },
  methods: {
    fetchData () {
      var str = document.URL.toString()
      var courseCode = str.substr(str.length - 5)
      TeacherPostsApi.getPost(courseCode, _post => {
        console.log(_post)
        this.posts = _post
      })
    },
    openDialog (ref) {
      this.$refs[ref].open()
    },
    closeDialog (ref) {
      this.$refs[ref].close()
    },
    addPost (ref, title, content) {
      var str = document.URL.toString()
      var courseCode = str.substr(str.length - 5)
      TeacherPostsApi.createPost(courseCode, title, content, newPost => {
        this.posts.push(newPost)
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
