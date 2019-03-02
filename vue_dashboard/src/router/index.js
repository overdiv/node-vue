import Vue from 'vue'
import VueRouter from 'vue-router'
//import HelloWorld from '@/views/HelloWorld'
import NoticeList from '@/views/notice/NoticeList.vue'
import NoticeDetail from '@/views/notice/NoticeDetail.vue'
import NoticeRegister from '@/views/notice/NoticeRegister.vue'
import Layout from '@/components/Layout.vue'
import NotFound from '@/404.vue'
import { truncate } from 'fs';

Vue.use(VueRouter)

const routes = [
  /*
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/noticeList',
    name: 'NoticeList',
    component : NoticeList,
  },
  {
    path : '/noticeDetail',
    name : 'NoticeDetail',
    component : NoticeDetail
  },
  {
    path : '/noticeRegister',
    name : 'NoticeRegister',
    component : NoticeRegister
  },
  {
    path : '*',
    component : NotFound
  }
  */
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
   hidden: true,
   path: '/login',
   component : () => import('@/views/login/index')
 }
]

export default new VueRouter({
  routes
})
