import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Cookies from 'js-cookie'
import { userLogin } from '@/api/app.js'

Vue.use(Vuex)

const user = {
	state: {
		// 공통 변수
		id: '',
		loading: false
	},

	mutations: {
		// 동기로직 공통 함수
		SET_ID: (state, id) => {
			state.id = id
		},
		SET_LOADING: (state, loading) => {
			state.loading = loading
		}
	},

	actions: {
		// 비동기 로직 즉 통신
		Login({ commit }, userInfo) {
				
			//axios.post('http://localhost:3000/login', {
			//		data: userInfo
			//})
			userLogin({
				userInfo
			})
				.then(res => {
					console.log('==========  res  ==========')
					console.log(res);
					console.log('==========  res  ==========')

					commit('SET_ID', res.data.body.LOGIN_ID)

					Cookies.set('token', res.data.body.LOGIN_ID, {expires:1})
					
				})
				.catch(err => {
						console.log(err);
						alert('로그인 정보가 일치하지 않습니다.')
				})
				.finally(_ => {
					// 로딩을 false로 여기서 바꾸어 준다
					commit('SET_LOADING', false)
				})
		}
	},

}

export default new Vuex.Store({
	modules: {
		user
	}
})