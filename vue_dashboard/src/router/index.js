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
   redirect : '/helloWorld',
   name : 'HelloWorld',
   hidden: true,
   children: [
     {
     path: 'helloworld',
     component: () => import('@/views/helloworld')
   }
  ]
 },

 {
   path: '/notice',
   component : Layout,
   children: [
     {
     path: 'list',
     name: 'NoticeList',
     component: () => import('@/views/notice/NoticeList')
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
