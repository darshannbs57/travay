import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Jobs from '@/components/jobs'
import Job from '@/components/job'
import CreateJob from '@/components/createJob'
import Profile from '@/components/profile'
import UserGuide from '@/components/userGuide'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: Jobs
    },
    {
      path: '/job/:id',
      name: 'job',
      component: Job
    },
    {
      path: '/createJob',
      name: 'create-job',
      component: CreateJob
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/userGuide',
      name: 'user-guide',
      component: UserGuide
    }
  ]
})
