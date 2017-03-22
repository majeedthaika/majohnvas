import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import Show from '@/components/Show'
import Post from '@/components/Post'
import Comment from '@/components/Comment'
import ShowComment from '@/components/ShowComment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/post',
      name: 'Post',
      component: Post
    },
    {
      path: '/show',
      name: 'Show',
      component: Show
    },
    {
      path: '/comment',
      name: 'Comment',
      component: Comment
    },
    {
      path: '/show_comment',
      name: 'ShowComment',
      component: ShowComment
    }
  ]
})
