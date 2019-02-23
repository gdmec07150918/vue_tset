import Router from 'vue-router'
import Culnew from './cul_new'
import Info from './info'

// Vue.use(Router)
export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'cul_new',
      component: Culnew
    },
    {
      path: '/info',
      name: 'info',
      component: Info
    }
  ]
})
