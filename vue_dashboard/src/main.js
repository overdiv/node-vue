import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import store from './store/users' 

// 미들웨어 등록 - 전역에서 사용
Vue.use(ElementUI, { locale })

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
