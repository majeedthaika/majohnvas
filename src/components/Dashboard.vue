<template>
  <el-row :gutter="20" class="tac">
  <!-- <el-row :gutter="20" class="tac" >
      {{ post.id }} {{ post.name }}
  </el-row> -->

  <el-col :span="7" :offset="0">
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
      <br><h1>Member</h1>
      <el-progress type="circle" :percentage="100" >picture</el-progress>
      <br>Profile<br><br>

       <el-submenu index="1">
        <template slot="title"><i class="el-icon-menu"></i>Account</template>
        <el-menu-item-group >
          <el-menu-item index="1-1">Manage</el-menu-item>
          <el-menu-item index="1-2">Logout</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="3"><i class="el-icon-setting"></i>Setting</el-menu-item>
      <br><br><br><br><br>
    </el-menu>
  </el-col>
</el-row>
</template>
<script>
import PostsApi from '../api/posts.js'

export default {
  methods: {
    handleOpen (key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      // console.log(key, keyPath);
    }
  },
  name: 'posts',
  data () {
    return {
      posts: null,
      error: null
    }
  },
  beforeRouteEnter (to, from, _next) {
    PostsApi.getPosts(_posts => {
      _next(vm => {
        vm.posts = _posts
      })
    })
  },
  watch: {
    $route () {
      PostsApi.getPosts(_posts => {
        this.posts = _posts
      })
    }
  }
}

</script>
