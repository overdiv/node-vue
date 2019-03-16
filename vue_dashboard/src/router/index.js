import Vue from 'vue'
import VueRouter from 'vue-router'
// import PopupRegister from '@/views/popup/PopupRegister.vue'
import Layout from '@/components/Layout.vue'
import NotFound from '@/404.vue'

Vue.use(VueRouter)

const routes = [
 {
   hidden: true,
   path: '/login',
   component: () => import('@/views/login/index')
 },

 {
   path: '/',
   component : Layout,
   children: [
   {
    path: 'registration',
    name: 'Registration',
    component: () => import('@/views/registration/Registration')
   }
  ]
 },

 {
  path: '/',
  component: Layout,
  redirect: '/helloWorld',
  name: 'HelloWorld',
  hidden: true,
  children: [{
  path: 'helloworld',
  component: () => import('@/views/HelloWorld')
  }]
},

 {
   path: '/notice',
   component : Layout,
   children: [
     {
     path: 'list',
     name: 'NoticeList',
     component: () => import('@/views/notice/NoticeList'),

    //  beforeEnter: (to,from,next) => {
    //   console.log('======    to     ======')
    //   console.log(to)
    //   console.log('======    to     ======')

    //   console.log('======    from     ======')
    //   console.log(from)
    //   console.log('======    from     ======')
    //   if (Cookies.get('token')) {

    //     if (to.path === '/login') {
    //       next({ path: `/` })
    //     } else {
    //       next()
    //     }

    //   } else {
    //     if (to.path !== '/login') {
    //       // next({path:'/login'})
    //       next({path:`/login?redirect=${to.path}`})
    //     } else {
    //       next()
    //     }
    //   }
    //  }

   },
   {
     hidden: true,
     path: 'register',
     name: 'NoticeRegister',
     component: () => import('@/views/notice/NoticeRegister')
   },
   {
     hidden: true,
     path: 'detail',
     name: 'NoticeDetail',
     component: () => import('@/views/notice/NoticeDetail')
   }
  ]
 },
 
 {
   path: '*',
   component: NotFound
 }
]

export default new VueRouter({
  routes
})
