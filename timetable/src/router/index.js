import Vue from 'vue'
import Router from 'vue-router'
import Campus from '@/components/Campus'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Campus',
      component: Campus
    }
  ]
})
