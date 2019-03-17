import Vue from 'vue'
import App from './App'
import router from './router'
import Cookies from 'js-cookie'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import store from './store/users' 

// 미들웨어 등록 - 전역에서 사용
Vue.use(ElementUI, { locale })

router.beforeEach((to, from, next) => {
  console.log('from.path = ', from.path);
  if (Cookies.get('token')) {
    if (to.path === '/login') {
      next({path:`${from.path}`})
    } else {
      next()
    }
  } 
})

/*
router.beforeEach((to, from, next) => {
  console.log('======    to     ======')
  console.log(to)
  console.log('======    to     ======')

  console.log('======    from     ======')
  console.log(from)
  console.log('======    from     ======')

  if (Cookies.get('token')) {

    if (to.path === '/login') {
      next({ path: `/` })
    } else {
      next()
    }

  } else {
    if (to.path !== '/login') {
      // next({path:'/login'})
      next({path:`/login?redirect=${to.path}`})
    } else {
      next()
    }
  }
})
*/

new Vue({
  el: '#app',
  router,

  // vuex 등록
  store,
  // 렌더 선언 - 둘 중 하나로 쓰면 됨
  //components : {App},
  //template : '<App/>',
  
  render: h => h(App)
})
