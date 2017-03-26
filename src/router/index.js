import Vue from 'vue'
import Router from 'vue-router'
// import Login from '@/components/Login'
// import Dashboard from '@/components/Dashboard'
import Show from '@/components/Show'
import Post from '@/components/Post'
import Comment from '@/components/Comment'
import ShowComment from '@/components/ShowComment'
import Choose from '@/components/Choose'
import NewStudent from '@/components/student/new'
import NewTeacher from '@/components/teacher/new'
import StudentLogin from '@/components/student/Login'
import StudentSidenav from '@/components/student/Sidenav'
import StudentDashboard from '@/components/student/Dashboard'
import StudentPost from '@/components/student/Post'
import TeacherLogin from '@/components/teacher/Login'
import TeacherDashboard from '@/components/teacher/Dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Choose',
      component: Choose
    },
    {
      path: '/new/student',
      name: 'NewStudent',
      component: NewStudent
    },
    {
      path: '/new/teacher',
      name: 'NewTeacher',
      component: NewTeacher
    },
    {
      path: '/students/login',
      name: 'StudentLogin',
      component: StudentLogin
    },
    {
      path: '/students/Sidenav',
      name: 'StudentSidenav',
      component: StudentSidenav
    },
    {
      path: '/students/dashboard',
      name: 'StudentDashboard',
      component: StudentDashboard
    },
    {
      path: '/students/post',
      name: 'StudentPost',
      component: StudentPost
    },
    {
      path: '/teachers/login',
      name: 'TeacherLogin',
      component: TeacherLogin
    },
    {
      path: '/teachers/dashboard',
      name: 'TeacherDashboard',
      component: TeacherDashboard
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
