import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import LF from '@/components/LF'
import Index from '@/components/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/lf',
      name: 'LF',
      component: LF
    },
    {
      path: '/',
      name: 'index',
      component: Index
    }
  ]
})
