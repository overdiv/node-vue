import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const user = {
	state: {
		// 공통 변수

	},

	mutations: {
		// 동기로직 공통 함수

	},

	actions: {
		// 비동기 로직 즉 통신
		Login({ commit }, userInfo) {
				
			axios.post('http://localhost:3000/login', {
					data: userInfo
			})
				.then(res => {
					console.log('==========  res  ==========')
					console.log(res);
					console.log('==========  res  ==========')
					
				})
				.catch(err => {
						console.log(err);
						alert('로그인 정보가 일치하지 않습니다.')
				})
				.finally(_ => {
					// 로딩을 false로 여기서 바꾸어 준다
				})
		}
	},

}

export default new Vuex.Store({
	modules: {
		user
	}
})