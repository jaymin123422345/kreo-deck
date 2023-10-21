import Vue from 'vue'
import VueRouter from 'vue-router'

// Routes
// import { canNavigate } from '@/libs/acl/routeProtection'
// import { isUserLoggedIn, getUserData, getHomeRouteForLoggedInUser } from '@/auth/utils'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/HelloWorld.vue'),
    },{
      
      path: '/contactus',
      name: 'contactus',
      component: () => import('../components/ContactUs.vue'),
    }
  ],
})

export default router
