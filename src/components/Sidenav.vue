<template lang="html">
  <div class="phone-viewport">
  <md-toolbar>
    <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
      <md-icon>menu</md-icon>
    </md-button>
    <h2 class="md-title">Dashboard</h2>
  </md-toolbar>
  
  <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
    <md-toolbar class="md-large">
      <div class="md-toolbar-container">
        <h3 class="md-title">MJohnvas</h3>
      </div>
    </md-toolbar>
    <div class="phone-viewport">
      <md-list>
        <md-list-item>
          <md-button id='but'>
            <md-icon>dashboard</md-icon> Course
          </md-button>
        </md-list-item>
        <md-list-item>
          <md-button id='but'>
          <md-icon>receipt</md-icon> <span>Post</span>
        </md-button>
        </md-list-item>
        <md-list-item>
          <md-button @click.native="logout">
            <md-icon>face</md-icon> <span>Logout</span>
            <md-divider class="md-inset"></md-divider>
          </md-button>
        </md-list-item>
        </md-list>
      </div>
    </md-sidenav>
  </div>
</template>

<script>
import UsersApi from '@/api/users.js'

export default {
  data () {
    return {
      courses: ''
    }
  },
  methods: {
    logout () {
      console.log('out')
      UsersApi.logout()
    },
    toggleLeftSidenav () {
      this.$refs.leftSidenav.toggle()
    },
    toggleRightSidenav () {
      this.$refs.rightSidenav.toggle()
    },
    closeRightSidenav () {
      this.$refs.rightSidenav.close()
    },
    open (ref) {
      console.log('Opened: ' + ref)
    },
    close (ref) {
      console.log('Closed: ' + ref)
    },
    search () {
      console.log('')
    }
  }
}
</script>

<style lang="css">
#searchbar {
  width: 100%;
}
#but {
  width: 100%;
  padding-right: 100%;
}
.md-inset {
  width: 100%;
}
.md-button {
  padding-right: 300px;
}
.md-divider.md-inset {
  margin-left: 0px;
}

</style>
